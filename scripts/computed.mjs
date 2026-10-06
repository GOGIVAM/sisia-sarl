// Affiche quelques styles calculés pour un sélecteur : node scripts/computed.mjs /page "selecteur" [largeur]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4117);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const [url, sel, w] = process.argv.slice(2);
const pg = await b.newPage(); await pg.setViewport({ width: Number(w) || 1440, height: 900 });
await pg.goto('http://localhost:4117' + url, { waitUntil: 'networkidle2' });
const out = await pg.evaluate((s) => [...document.querySelectorAll(s)].slice(0, 8).map((e) => {
  const cs = getComputedStyle(e);
  const rc = e.getBoundingClientRect(); return `[${Math.round(rc.width)}x${Math.round(rc.height)} @${Math.round(rc.top)}] ${e.tagName}.${e.className.toString().replace(/\s+/g, ' ').slice(0, 90)} | "${e.textContent.trim().slice(0, 24)}" | color=${cs.color} bg=${cs.backgroundColor} bi=${cs.backgroundImage.slice(0, 30)} bd=${cs.borderTopWidth} ${cs.borderTopColor} r=${cs.borderRadius} font=${cs.fontFamily.slice(0, 14)} pad=${cs.padding} mar=${cs.margin} style=${(e.getAttribute('style') || '').slice(0, 60)}`;
}), sel);
console.log(out.join('\n'));
await b.close(); srv.close();
