// Audit visuel automatique : débordements, contenus restés invisibles, images cassées, contrastes faibles, erreurs JS.
// Usage : node scripts/qa.mjs [route ...]   (dist/ doit exister)
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
import { PAGES } from './convert.mjs';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4120);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const only = process.argv.slice(2);
const routes = [...PAGES.map((p) => p[1]), '/partenaires', '/partenaires/festo'].filter((r) => !only.length || only.includes(r));
const lines = [];
fs.mkdirSync(path.join(dist, '..', '.shots', 'qa'), { recursive: true });
for (const r of routes) {
  for (const [w, tag] of [[1440, 'd'], [390, 'm']]) {
    const pg = await b.newPage(); await pg.setViewport({ width: w, height: 900 });
    const errs = []; pg.on('pageerror', (e) => errs.push(e.message.slice(0, 80)));
    try { await pg.goto('http://localhost:4120' + r, { waitUntil: 'networkidle2', timeout: 45000 }); } catch (e) { lines.push(`${r} ${tag}: GOTO ${e.message.slice(0, 60)}`); await pg.close(); continue; }
    await pg.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)); } window.scrollTo(0, 0); });
    await new Promise((r) => setTimeout(r, 900));
    const rep = await pg.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const out = { overflow: document.documentElement.scrollWidth - vw, hidden: 0, broken: [], wide: [], low: [], h: document.documentElement.scrollHeight };
      out.hidden = [...document.querySelectorAll('.mo:not(.mo-in)')].length + [...document.querySelectorAll('[data-animation-name]')].filter((e) => e.style.visibility === 'hidden' && e.getAttribute('data-animation-name') !== 'counter').length;
      out.broken = [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth === 0 && i.src && !i.src.startsWith('data:')).map((i) => i.getAttribute('src')).slice(0, 4);
      out.wide = [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > vw + 6 && getComputedStyle(e).position !== 'fixed' && !e.closest('.logo-row, .u-repeater, .testimonials-track, .partners-strip, [class*="marquee"], .lightbox, .u-sidenav, svg'); }).map((e) => e.tagName + '.' + (e.className.toString().split(' ')[0] || '')).slice(0, 4);
      // contraste texte / fond (fond uni uniquement)
      const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
      const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const seen = new Set();
      for (const e of document.querySelectorAll('h1,h2,h3,h4,p,li,a,button,span,label')) {
        if (![...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 2)) continue;
        const rc = e.getBoundingClientRect(); if (rc.width < 4 || rc.height < 4) continue;
        const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || +cs.opacity < 0.5) continue;
        const fg = parse(cs.color); if (!fg) continue;
        let n = e, bg = null, img = false;
        while (n && n !== document.documentElement) { const s = getComputedStyle(n); if (s.backgroundImage !== 'none') { img = true; break; } const c = parse(s.backgroundColor); if (c && c.a > 0.9) { bg = c; break; } n = n.parentElement; }
        if (img || !bg) continue;
        const L1 = lum(fg), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        if (ratio < 3) { const key = e.textContent.trim().slice(0, 22); if (!seen.has(key)) { seen.add(key); out.low.push(`${key}(${ratio.toFixed(1)})`); } }
      }
      out.low = out.low.slice(0, 5);
      return out;
    });
    const flags = [];
    if (rep.overflow > 2) flags.push(`SCROLL-X +${rep.overflow}px`);
    if (rep.hidden > 0) flags.push(`${rep.hidden} cachés`);
    if (rep.broken.length) flags.push('IMG ' + rep.broken.join(','));
    if (rep.wide.length) flags.push('LARGE ' + rep.wide.join(','));
    if (rep.low.length) flags.push('CONTRASTE ' + rep.low.join(' | '));
    if (errs.length) flags.push('JS ' + errs.join('|'));
    lines.push(`${r.padEnd(46)} ${tag} h=${String(rep.h).padStart(5)} ${flags.length ? flags.join(' ; ') : 'ok'}`);
    await pg.screenshot({ path: path.join(dist, '..', '.shots', 'qa', `${r.replace(/\//g, '_') || '_home'}-${tag}.png`), fullPage: true }).catch(() => {});
    await pg.close();
  }
}
console.log(lines.join('\n'));
await b.close(); srv.close();
