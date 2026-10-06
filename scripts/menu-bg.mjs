import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4116);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 390, height: 844 });
await pg.goto('http://localhost:4116/', { waitUntil: 'networkidle2' });
await pg.click('.u-hamburger-link'); await new Promise((r) => setTimeout(r, 900));
const out = await pg.evaluate(() => {
  const s = document.querySelector('.u-sidenav');
  const row = (e, pseudo) => { const cs = getComputedStyle(e, pseudo); return (e.className.toString().slice(0, 40) + (pseudo || '')) + ' bg=' + cs.backgroundColor + ' img=' + cs.backgroundImage.slice(0, 40) + ' op=' + cs.opacity; };
  return [row(s), row(s, '::before'), row(s.firstElementChild), row(s.firstElementChild, '::before'), row(s.parentElement)];
});
console.log(out.join('\n'));
await b.close(); srv.close();
