// Planche-contact d'une page : capture pleine page (défilement lent) découpée en colonnes. Usage : node scripts/montage.mjs /route nom [largeur]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core'; import { execFileSync } from 'node:child_process';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4130);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const [route, name, w] = process.argv.slice(2);
const pg = await b.newPage(); await pg.setViewport({ width: Number(w) || 1440, height: 900 });
await pg.goto('http://localhost:4130' + route, { waitUntil: 'networkidle2', timeout: 60000 });
await pg.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y <= h; y += 250) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 140)); } window.scrollTo(0, 0); });
await new Promise((r) => setTimeout(r, 1200));
// force l'état final des révélations pour la capture
await pg.addStyleTag({ content: '.mo{opacity:1!important;transform:none!important}[style*="visibility: hidden"]{visibility:visible!important}' });
const out = path.join(dist, '..', '.shots', 'mont'); fs.mkdirSync(out, { recursive: true });
const full = path.join(out, name + '-full.png');
await pg.screenshot({ path: full, fullPage: true });
await b.close(); srv.close();
const py = `
from PIL import Image
im = Image.open(r'${full.replace(/\\/g, '/')}')
W, H = im.size
chunk = 2000
cols = []
y = 0
while y < H:
    cols.append(im.crop((0, y, W, min(H, y + chunk))))
    y += chunk
s = 0.36
tw, th = int(W * s), int(chunk * s)
n = len(cols)
per = 3
import math
rows = math.ceil(n / per)
sheet = Image.new('RGB', (per * tw + (per + 1) * 8, rows * th + (rows + 1) * 8), (200, 200, 200))
for i, c in enumerate(cols):
    c = c.resize((tw, int(c.size[1] * s)))
    sheet.paste(c, (8 + (i % per) * (tw + 8), 8 + (i // per) * (th + 8)))
sheet.save(r'${path.join(out, name + '.png').replace(/\\/g, '/')}')
print(W, H, n)
`;
console.log(execFileSync('python', ['-c', py]).toString().trim());
