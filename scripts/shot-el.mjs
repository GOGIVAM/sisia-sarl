// Capture un élément après scroll doux : node scripts/shot-el.mjs /page "selecteur" nom [largeur] [clic-selecteur]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4122);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const [url, sel, name, w, clickSel] = process.argv.slice(2);
const pg = await b.newPage(); await pg.setViewport({ width: Number(w) || 1440, height: 900 });
await pg.goto('http://localhost:4122' + url, { waitUntil: 'networkidle2' });
await pg.evaluate(async (s) => { const e = document.querySelector(s); const y = e.getBoundingClientRect().top + window.scrollY - 140; for (let c = 0; c < y; c += 400) { window.scrollTo(0, c); await new Promise((r) => setTimeout(r, 100)); } window.scrollTo(0, y); }, sel);
await new Promise((r) => setTimeout(r, 1800));
if (clickSel) { for (const c of clickSel.split(',')) { await pg.click(c); await new Promise((r) => setTimeout(r, 1300)); } }
await pg.screenshot({ path: path.join(dist, '..', '.shots', name + '.png') });
console.log('ok');
await b.close(); srv.close();
