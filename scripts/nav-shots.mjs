// Capture l'en-tête à plusieurs largeurs (haut de page puis après défilement) : node scripts/nav-shots.mjs [/route]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4124);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const route = process.argv[2] || '/';
const widths = (process.argv[3] || '1920,1440,1280,1100,1024,960,900,768,600,390').split(',').map(Number);
const out = path.join(dist, '..', '.shots', 'nav');
fs.mkdirSync(out, { recursive: true });
const report = [];
for (const w of widths) {
  const pg = await b.newPage(); await pg.setViewport({ width: w, height: 700 });
  await pg.goto('http://localhost:4124' + route, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 700));
  const info = await pg.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const r = (e) => { if (!e) return null; const b = e.getBoundingClientRect(); return { l: Math.round(b.left), r: Math.round(b.right), t: Math.round(b.top), b: Math.round(b.bottom) }; };
    const links = [...document.querySelectorAll('header .u-nav-container .u-nav-link')].map((a) => r(a));
    const pill = r(q('.lang-switcher'));
    const logo = r(q('header .u-logo'));
    const burger = r(q('.u-hamburger-link'));
    const navBox = r(q('header .u-nav-container'));
    const overlap = (a, b) => a && b && a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;
    return { links: links.length, lastRight: links.length ? links[links.length - 1].r : null, pill, logo, burger, navBox, vw: innerWidth,
      pillOverNav: links.some((l) => overlap(l, pill)), pillOverBurger: overlap(pill, burger), pillOverLogo: overlap(pill, logo), navOverLogo: links.some((l) => overlap(l, logo)), overflowX: document.documentElement.scrollWidth - innerWidth };
  });
  report.push(`${String(w).padStart(5)}px ${JSON.stringify({ links: info.links, lastRight: info.lastRight, pill: info.pill && info.pill.l + '-' + info.pill.r, logo: info.logo && info.logo.l + '-' + info.logo.r, burger: info.burger && info.burger.l, pillOverNav: info.pillOverNav, pillOverBurger: info.pillOverBurger, pillOverLogo: info.pillOverLogo, navOverLogo: info.navOverLogo, overflowX: info.overflowX })}`);
  await pg.screenshot({ path: path.join(out, `nav-${w}.png`), clip: { x: 0, y: 0, width: w, height: 150 } });
  await pg.close();
}
console.log(report.join('\n'));
await b.close(); srv.close();
