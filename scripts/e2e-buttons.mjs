// Test de bout en bout des boutons : navigation, accordéon, carrousels, galerie, menu mobile, formulaire (envoi simulé).
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const dist = path.resolve(import.meta.dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const srv = http.createServer((req, res) => { const p = decodeURIComponent(req.url.split('?')[0]); let f = path.join(dist, p); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { const i = path.join(f, 'index.html'); f = fs.existsSync(i) ? i : path.join(dist, '404.html'); } res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(4112);
const B = 'http://localhost:4112';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const results = [];
const ok = (name, cond, extra = '') => results.push(`${cond ? 'OK  ' : 'FAIL'} ${name}${extra ? ' (' + extra + ')' : ''}`);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function open(url, w = 1440) {
  const pg = await b.newPage(); await pg.setViewport({ width: w, height: 900 });
  const errs = []; pg.on('pageerror', (e) => errs.push(e.message)); pg._errs = errs;
  await pg.goto(B + url, { waitUntil: 'networkidle2' }); await wait(500); return pg;
}
const click = async (pg, sel) => { try { const found = await pg.evaluate((s) => { const e = document.querySelector(s); if (!e) return false; e.scrollIntoView({ block: 'center', behavior: 'instant' }); return true; }, sel); if (!found) { results.push('FAIL introuvable: ' + sel); return; } await wait(250); await pg.click(sel); } catch (e) { results.push('FAIL clic ' + sel + ' : ' + e.message.slice(0, 80)); } };

// 1) pied de page : Parler à un expert -> /contact ; show on map -> Google Maps ; logo -> accueil
let pg = await open('/a-propos');
const maps = await pg.$eval('footer a[href*="google.com/maps"]', (a) => a.href).catch(() => null);
ok('footer "show on map" -> Google Maps', !!maps, maps || '');
await pg.evaluate(() => { const a = [...document.querySelectorAll('footer a')].find((x) => /parler à un expert/i.test(x.textContent)); a.scrollIntoView({ block: 'center', behavior: 'instant' }); a.setAttribute('data-t', '1'); }); await wait(250); await pg.click('footer a[data-t]');
await wait(700);
ok('footer "Parler à un expert" -> /contact', new URL(pg.url()).pathname === '/contact', pg.url());
await click(pg, 'header a.u-logo');
await wait(500);
ok('logo -> accueil', new URL(pg.url()).pathname === '/');
ok('aucune erreur JS (navigation)', pg._errs.length === 0, pg._errs.join('|'));
await pg.close();

// 2) langue
pg = await open('/services');
await click(pg, '.lang-switcher a[lang="en"]'); await wait(700);
ok('sélecteur FR -> EN', new URL(pg.url()).pathname === '/en/services', pg.url());
await click(pg, '.lang-switcher a[lang="fr"]'); await wait(700);
ok('sélecteur EN -> FR', new URL(pg.url()).pathname === '/services');
await pg.close();

// 3) accordéon FAQ
pg = await open('/faq');
await click(pg, '.u-accordion-link'); await wait(400);
const paneOpen = await pg.$eval('.u-accordion-pane', (e) => e.classList.contains('u-accordion-active') && e.getBoundingClientRect().height > 20);
ok('FAQ : accordéon s ouvre', paneOpen);
await click(pg, '.u-accordion-link'); await wait(300);
ok('FAQ : accordéon se referme', await pg.$eval('.u-accordion-pane', (e) => !e.classList.contains('u-accordion-active')));
await pg.close();

// 4) galerie À propos (flèches)
pg = await open('/a-propos');
const sc = () => pg.evaluate(() => document.querySelector('.u-gallery-nav-next').closest('.u-list').querySelector('.u-repeater').scrollLeft);
const l0 = await sc();
await click(pg, '.u-gallery-nav-next'); await wait(900);
const l1 = await sc();
ok('À propos : flèche suivante fait défiler', l1 > l0, `${l0} -> ${l1}`);
await pg.close();

// 5) accueil : carrousels, galerie, partenaires, boutons de carte
pg = await open('/');
const s0 = await pg.$eval('.services-carousel .carousel-slide.active', (e) => [...e.parentElement.children].indexOf(e));
await click(pg, '.services-carousel .next-btn'); await wait(500);
const s1 = await pg.$eval('.services-carousel .carousel-slide.active', (e) => [...e.parentElement.children].indexOf(e));
ok('Accueil : carrousel métiers suivant', s1 !== s0, `${s0} -> ${s1}`);
await click(pg, '.testimonial-next'); await wait(500);
ok('Accueil : témoignages suivant', (await pg.$eval('.testimonials-track', (e) => e.style.transform)) !== '');
await click(pg, '.u-gallery-item:nth-child(3)'); await wait(600);
ok('Accueil : galerie ouvre la visionneuse', !!(await pg.$('.lightbox.is-open')));
await pg.keyboard.press('Escape'); await wait(500);
ok('Accueil : visionneuse se ferme', !(await pg.$('.lightbox')));
await pg.evaluate(() => { const t = [...document.querySelectorAll('.lm-tile')].find((x) => { const r = x.getBoundingClientRect(); return r.left > 200 && r.right < window.innerWidth - 200; }); t.scrollIntoView({ block: 'center', behavior: 'instant' }); t.setAttribute('data-t', '1'); }); await wait(300); await pg.hover('.lm-tile[data-t]'); await pg.click('.lm-tile[data-t]'); await wait(700);
ok('Accueil : logo partenaire -> page partenaire', new URL(pg.url()).pathname.startsWith('/partenaires/'), pg.url());
await pg.close();

pg = await open('/');
// "En savoir plus" de la première carte
const href1 = await pg.$eval('.u-layout-cell .u-btn', (a) => a.getAttribute('href'));
ok('Accueil : "En savoir plus" a une destination', !!href1 && href1 !== '#', href1);
// bouton d'avis
await click(pg, '.add-review-btn'); await wait(400);
ok('Accueil : modale d avis s ouvre', await pg.$eval('.review-modal', (e) => e.classList.contains('active')));
await pg.keyboard.press('Escape'); await wait(300);
await pg.close();

// 6) menu mobile
pg = await open('/', 390);
await click(pg, '.u-hamburger-link'); await wait(600);
ok('Mobile : menu hamburger s ouvre', await pg.$eval('.u-menu', (e) => e.classList.contains('open')));
await click(pg, '.u-sidenav .u-nav-link[href="/contact"]'); await wait(800);
ok('Mobile : lien du menu navigue + ferme', new URL(pg.url()).pathname === '/contact' && !(await pg.$('.u-menu.open')), pg.url());
await pg.close();

// 7) formulaire de contact (envoi simulé)
pg = await open('/contact');
await pg.setRequestInterception(true);
let posted = null;
pg.on('request', (req) => {
  if (req.url().includes('api.web3forms.com')) { posted = req.postData() || ''; req.respond({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ success: true }) }); }
  else req.continue();
});
await pg.type('input[name="name"]', 'Test Auto'); await pg.type('input[name="email"]', 'test@example.com'); await pg.type('textarea[name="message"]', 'Message de test');
await click(pg, '.u-btn-submit'); await wait(900);
ok('Contact : envoi appelle Web3Forms', !!posted && posted.includes('access_key'));
ok('Contact : message de succès affiché', await pg.$eval('.u-form-send-success', (e) => getComputedStyle(e).display !== 'none'));
await pg.close();

// 8) pages partenaires : filtres + fiches
pg = await open('/partenaires');
ok('Partenaires : 12 lignes en groupes par domaine', (await pg.$$('.partner-row')).length === 12 && (await pg.$$('.partner-group')).length === 5);
await pg.click('.partner-row'); await wait(700);
ok('Partenaires : ligne -> fiche', new URL(pg.url()).pathname.startsWith('/partenaires/'));
await pg.close();
pg = await open('/partenaires/festo');
const ext = await pg.$eval('a[href^="https://www.festo.com"]', (a) => a.target).catch(() => null);
ok('Fiche partenaire : site officiel en nouvel onglet', ext === '_blank');
await click(pg, '.cta-card a'); await wait(600);
ok('Fiche partenaire : CTA -> /contact', new URL(pg.url()).pathname === '/contact');
await pg.close();

console.log(results.join('\n'));
await b.close(); srv.close();
