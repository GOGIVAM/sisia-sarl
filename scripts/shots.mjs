// Captures rapides de la build : node scripts/shots.mjs /chemin[:nom] ...  (dist/ doit exister)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(import.meta.dirname, '..');
const dist = path.join(ROOT, 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.xml': 'text/xml', '.txt': 'text/plain' };
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(dist, p);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, 'index.html'); }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(4103);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
fs.mkdirSync(path.join(ROOT, '.shots'), { recursive: true });
for (const arg of process.argv.slice(2)) {
  const [url, name, full, w] = arg.split(':');
  const pg = await b.newPage();
  const errs = [];
  pg.on('pageerror', (e) => errs.push(e.message));
  pg.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errs.push(m.text().slice(0, 160)); });
  await pg.setViewport({ width: Number(w) || 1440, height: 900 });
  await pg.goto('http://localhost:4103' + url, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 1200));
  if (full) { // fait défiler pour déclencher les révélations
    await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await new Promise((r) => setTimeout(r, 800));
  }
  await pg.screenshot({ path: path.join(ROOT, '.shots', name + '.png'), fullPage: !!full });
  console.log(name, errs.length ? errs.slice(0, 4).join(' | ') : 'ok');
  await pg.close();
}
await b.close(); srv.close();
