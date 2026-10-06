import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4106);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const [url, sel] = process.argv.slice(2);
const pg = await b.newPage(); await pg.setViewport({ width: 1440, height: 900 });
await pg.goto('http://localhost:4106' + url, { waitUntil: 'networkidle2' });
const out = await pg.evaluate((s) => [...document.querySelectorAll(s)].slice(0, 12).map((el) => {
  const cs = getComputedStyle(el); const sec = el.closest('section');
  return { t: el.textContent.trim().slice(0, 36), color: cs.color, font: cs.fontFamily.slice(0, 18), sec: sec ? sec.className.slice(0, 70) : '-' };
}), sel);
console.log(JSON.stringify(out, null, 1));
await b.close(); srv.close();
