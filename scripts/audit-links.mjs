// Audit des liens et boutons : liste ceux qui ne mènent nulle part (href "#", vide, absent) sur toutes les routes.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
import { PAGES } from './convert.mjs';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4109);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const only = process.argv.slice(2);
const routes = PAGES.map((p) => p[1]).filter((r) => !only.length || only.includes(r));
const bad = [];
for (const r of routes) {
  const pg = await b.newPage(); await pg.setViewport({ width: 1440, height: 900 });
  await pg.goto('http://localhost:4109' + r, { waitUntil: 'networkidle2' });
  const out = await pg.evaluate(() => [...document.querySelectorAll('a, button, [role=button]')].filter((e) => !e.closest('.u-sidenav')).map((e) => {
    const href = e.tagName === 'A' ? e.getAttribute('href') : null;
    const txt = (e.textContent || e.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 40);
    return { tag: e.tagName, href, txt, cls: (e.className || '').toString().slice(0, 50) };
  }).filter((o) => o.tag === 'A' && (o.href === null || o.href === '' || o.href === '#' || /^javascript:/i.test(o.href))));
  for (const o of out) bad.push(`${r} :: ${o.txt || '(icône)'} :: href=${o.href} :: ${o.cls}`);
  await pg.close();
}
console.log(bad.length + ' liens à réparer\n' + bad.join('\n'));
await b.close(); srv.close();
