// Vérifie l'hydratation (erreurs console) et les balises <head> sur quelques URLs de dist/.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(dist, p);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(4104);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
for (const url of process.argv.slice(2)) {
  const pg = await b.newPage();
  const errs = [];
  pg.on('pageerror', (e) => errs.push('PAGEERR ' + e.message.slice(0, 200)));
  pg.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errs.push(m.type() + ' ' + m.text().slice(0, 200)); });
  await pg.goto('http://localhost:4104' + url, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 800));
  const info = await pg.evaluate(() => ({
    title: document.title,
    titles: document.querySelectorAll('title').length,
    canon: [...document.querySelectorAll('link[rel=canonical]')].map((l) => l.href),
    alt: document.querySelectorAll('link[rel=alternate][hreflang]').length,
    desc: document.querySelector('meta[name=description]')?.content?.slice(0, 60),
    lang: document.documentElement.lang,
    ld: document.querySelectorAll('script[type="application/ld+json"]').length,
  }));
  console.log(url, JSON.stringify(info), errs.length ? '\n   ' + errs.slice(0, 5).join('\n   ') : 'no console issues');
  await pg.close();
}
await b.close(); srv.close();
