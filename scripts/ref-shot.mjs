// Capture un site de référence (design) : node scripts/ref-shot.mjs https://site nom [largeur] [hauteur]
import puppeteer from 'puppeteer-core';
import path from 'node:path'; import fs from 'node:fs';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const [url, name, w, h] = process.argv.slice(2);
const pg = await b.newPage(); await pg.setViewport({ width: Number(w) || 1440, height: Number(h) || 900 });
try { await pg.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }); } catch (e) { console.log('goto:', e.message.slice(0, 80)); }
await new Promise((r) => setTimeout(r, 2500));
const out = path.resolve(import.meta.dirname, '..', '.shots'); fs.mkdirSync(out, { recursive: true });
await pg.screenshot({ path: path.join(out, name + '.png') });
const info = await pg.evaluate(() => {
  const nav = document.querySelector('nav, header');
  const cs = (e) => e && getComputedStyle(e);
  const links = [...document.querySelectorAll('header a, nav a')].slice(0, 14).map((a) => { const s = getComputedStyle(a), r = a.getBoundingClientRect(); return `${a.textContent.trim().slice(0, 20)} | ${Math.round(r.width)}x${Math.round(r.height)} | font=${s.fontFamily.slice(0, 22)} ${s.fontSize}/${s.fontWeight} | color=${s.color} bg=${s.backgroundColor} rad=${s.borderRadius} pad=${s.padding} border=${s.border.slice(0, 40)}`; });
  const hdr = document.querySelector('header'); const hs = hdr && getComputedStyle(hdr); const hr = hdr && hdr.getBoundingClientRect();
  return { header: hs && `h=${Math.round(hr.height)} bg=${hs.backgroundColor} border=${hs.borderBottom} shadow=${hs.boxShadow.slice(0, 50)} pos=${hs.position}`, body: `font=${getComputedStyle(document.body).fontFamily.slice(0, 40)} bg=${getComputedStyle(document.body).backgroundColor}`, links };
});
console.log(JSON.stringify(info, null, 1));
await b.close();
