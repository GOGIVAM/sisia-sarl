// Comparaison visuelle ancien site (legacy/) vs nouvelle appli (dist/).
// Usage : npm run build && node scripts/compare.mjs [page ...]   (sorties dans .shots/)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import { PAGES } from './convert.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.gif': 'image/gif', '.woff2': 'font/woff2', '.woff': 'font/woff', '.mp4': 'video/mp4' };

function serve(dir, spa, port) {
  return new Promise((res) => {
    const s = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      let f = path.join(dir, p);
      if (!f.startsWith(dir)) { rsp.writeHead(403).end(); return; }
      if (!spa && !fs.existsSync(f)) { const alt = path.join(ROOT, 'public', p); if (fs.existsSync(alt)) f = alt; }
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) {
        if (spa && !path.extname(p)) f = path.join(dir, 'index.html');
        else if (!spa && fs.existsSync(path.join(f, 'index.html'))) f = path.join(f, 'index.html');
        else { rsp.writeHead(404).end('nf'); return; }
      }
      rsp.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(rsp);
    }).listen(port, () => res(s));
  });
}

// Legacy : les images ont été déplacées vers public/ (servies en secours)
const legacyServer = await serve(path.join(ROOT, 'legacy'), false, 4101);
const distServer = await serve(path.join(ROOT, 'dist'), true, 4102);

const only = process.argv.slice(2);
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
const out = path.join(ROOT, '.shots');
fs.mkdirSync(out, { recursive: true });
const sizes = [[1440, 900, 'd'], [390, 844, 'm']];
const report = [];
for (const [file, route, name] of PAGES) {
  if (only.length && !only.includes(name)) continue;
  for (const [w, h, tag] of sizes) {
    for (const [label, url] of [['old', `http://localhost:4101/${file}`], ['new', `http://localhost:4102${route}`]]) {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      await page.setViewport({ width: w, height: h });
      try { await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }); } catch (e) { errors.push('goto: ' + e.message); }
      await new Promise((r) => setTimeout(r, 1500));
      const info = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, text: document.body.innerText.replace(/\s+/g, ' ').length }));
      await page.screenshot({ path: path.join(out, `${name}-${tag}-${label}.png`), fullPage: false });
      report.push(`${name} ${tag} ${label}: height=${info.h} textLen=${info.text}${errors.length ? ' ERR=' + errors.slice(0, 3).join(' | ').slice(0, 200) : ''}`);
      await page.close();
    }
  }
}
await browser.close();
legacyServer.close(); distServer.close();
console.log(report.join('\n'));
