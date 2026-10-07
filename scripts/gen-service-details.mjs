// Génère src/data/serviceDetails.js depuis les 12 pages de service (contenu intact) + traductions EN.
import fs from 'node:fs';
import { parseDocument, DomUtils } from 'htmlparser2';
import { SERVICES_MAP } from './service-map.mjs';

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const cls = (e, c) => e.type === 'tag' && (e.attribs.class || '').split(/\s+/).includes(c);
const find = (root, c) => DomUtils.findOne((e) => cls(e, c), root.children ?? root, true);
const all = (root, c) => DomUtils.findAll((e) => cls(e, c), root.children ?? root);
const txt = (e) => (e ? norm(DomUtils.textContent(e)) : '');
const svgOf = (e) => { const s = e && DomUtils.findOne((x) => x.name === 'svg', e.children, true); return s ? { vb: s.attribs.viewBox || '0 0 24 24', html: DomUtils.getInnerHTML(s) } : null; };

const out = {};
for (const [file, route, comp] of SERVICES_MAP) {
  const doc = parseDocument(fs.readFileSync('legacy/' + file, 'utf8'));
  const fr = JSON.parse(fs.readFileSync(`src/i18n/fr/${comp}.json`, 'utf8'));
  const en = JSON.parse(fs.readFileSync(`src/i18n/en/${comp}.json`, 'utf8'));
  const T = (t) => { const k = Object.keys(fr).find((x) => fr[x] === t); return { fr: t, en: (k && en[k]) || t }; };
  const hero = find(doc, 'service-hero');
  const bg = (hero.attribs.style || '').match(/url\(['"]?([^'")]+)/)?.[1] || '';
  const intro = find(doc, 'service-intro');
  const cards = all(doc, 'service-card').map((c) => ({ icon: svgOf(find(c, 'service-card-icon')), title: T(txt(DomUtils.findOne((e) => e.name === 'h3', c.children, true))), text: T(txt(DomUtils.findOne((e) => e.name === 'p', c.children, true))) }));
  const hl = find(doc, 'service-highlight');
  const det = find(doc, 'service-details');
  const cta = find(doc, 'service-cta-section');
  out[route] = {
    bg,
    badge: T(txt(find(doc, 'service-hero-badge'))),
    h1: T(txt(DomUtils.findOne((e) => e.name === 'h1', hero.children, true))),
    sub: T(txt(DomUtils.findOne((e) => e.name === 'p', hero.children, true))),
    introTitle: T(txt(DomUtils.findOne((e) => e.name === 'h2', intro.children, true))),
    introText: T(txt(DomUtils.findOne((e) => e.name === 'p', intro.children, true))),
    cards,
    highlight: hl ? { title: T(txt(DomUtils.findOne((e) => e.name === 'h3', hl.children, true))), text: T(txt(DomUtils.findOne((e) => e.name === 'p', hl.children, true))), icon: svgOf(find(hl, 'service-highlight-icon')) } : null,
    details: det ? {
      img: DomUtils.findOne((e) => e.name === 'img', det.children, true)?.attribs.src,
      alt: T(DomUtils.findOne((e) => e.name === 'img', det.children, true)?.attribs.alt || ''),
      title: T(txt(DomUtils.findOne((e) => e.name === 'h3', det.children, true))),
      list: DomUtils.findAll((e) => e.name === 'li', det.children).map((li) => T(txt(li))),
      cta: T(txt(find(det, 'service-cta-btn'))),
    } : null,
    ctaTitle: T(txt(DomUtils.findOne((e) => e.name === 'h2', cta.children, true))),
    ctaText: T(txt(DomUtils.findOne((e) => e.name === 'p', cta.children, true))),
    ctaBtn: T(txt(find(cta, 'service-cta-btn'))),
  };
}
fs.writeFileSync('src/data/serviceDetails.js', `// Généré par scripts/gen-service-details.mjs depuis les pages de service d'origine.\nexport const SERVICE_DETAILS = ${JSON.stringify(out, null, 1)};\n`);
for (const [r, d] of Object.entries(out)) console.log(r, d.cards.length, d.highlight ? 'HL' : '-', d.details ? d.details.list.length : '-', d.bg.slice(0, 30));
