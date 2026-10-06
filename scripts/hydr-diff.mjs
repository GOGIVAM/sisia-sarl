// Compare le HTML pré-rendu (JS coupé) au DOM après hydratation : montre la première divergence.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4126);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const route = process.argv[2];
const grab = async (js) => { const pg = await b.newPage(); await pg.setJavaScriptEnabled(js); await pg.goto('http://localhost:4126' + route, { waitUntil: js ? 'networkidle2' : 'load' }); await new Promise((r) => setTimeout(r, 800)); const t = await pg.evaluate(() => [...document.querySelectorAll('#root *')].map((e) => e.tagName + '.' + (e.className.toString().split(' ')[0] || '') + '=>' + [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('|')).filter((x) => !x.endsWith('=>') && !/=>(FR|EN)$/.test(x))); await pg.close(); return t; };
const a = await grab(false), c = await grab(true);
let i = 0; while (i < a.length && i < c.length && a[i] === c[i]) i++;
console.log(`serveur=${a.length} client=${c.length} 1re divergence #${i}\nSRV: ${JSON.stringify(a.slice(i, i + 3))}\nCLI: ${JSON.stringify(c.slice(i, i + 3))}`);
await b.close(); srv.close();
