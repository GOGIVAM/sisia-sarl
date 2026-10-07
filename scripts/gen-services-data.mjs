// Génère src/data/services.js à partir du contenu existant (pages de services) + traductions EN déjà produites.
import fs from 'node:fs';
import { parseDocument, DomUtils } from 'htmlparser2';

const SERVICES = [
  // [fichier, route, image carte, groupe, nom Services.html]
  ['Electricite-industrielle.html', '/services/electricite-industrielle', '/images/electriciteindustrielle.avif', 'electric', 'Électricité Industrielle'],
  ['Automatisme-et-instrumentation.html', '/services/automatisme-et-instrumentation', '/images/automatisme.avif', 'electric', 'Automatisme & Instrumentation'],
  ['Energie-solaire.html', '/services/energie-solaire', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=560&fit=crop', 'electric', 'Énergie Solaire'],
  ['Maintenance.html', '/services/maintenance', '/images/maintenace.avif', 'electric', 'Maintenance Électrique'],
  ['Personnel-technique.html', '/services/personnel-technique', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=560&fit=crop', 'electric', 'Personnel Technique OHQ'],
  ['Controleur-acces.html', '/services/controleur-acces', '/images/acces.avif', 'security', "Contrôleur d'Accès"],
  ['Video-surveillances.html', '/services/video-surveillances', '/images/videosurveillance.avif', 'security', 'Vidéo Surveillance'],
  ['Domotique.html', '/services/domotique', 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=560&fit=crop&q=80', 'security', 'Domotique & Anti-intrusion'],
  ['Alarme-incendie.html', '/services/alarme-incendie', '/images/incendie.avif', 'security', 'Alarme Incendie'],
  ['Materiel-electrique.html', '/services/materiel-electrique', '/images/materielelectrique.avif', 'trade', 'Matériel Électrique'],
  ['Composants-hydrauliques.html', '/services/composants-hydrauliques', '/images/hydraulique.avif', 'trade', 'Hydraulique & Pneumatique'],
  ['Roulements-transmissions.html', '/services/roulements-transmissions', '/images/roulement.webp', 'trade', 'Roulements & Transmissions'],
];

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const txt = (e) => (e ? norm(DomUtils.textContent(e)) : '');
const out = [];
for (const [file, route, img, group, name] of SERVICES) {
  const html = fs.readFileSync('legacy/' + file, 'utf8');
  const doc = parseDocument(html);
  const sub = txt(DomUtils.findOne((e) => e.name === 'p' && /service-hero/.test(e.parent?.attribs?.class || ''), doc.children, true));
  const badge = txt(DomUtils.findOne((e) => /service-hero-badge/.test(e.attribs?.class || ''), doc.children, true));
  const intro = txt(DomUtils.findOne((e) => e.name === 'p' && /service-intro/.test(e.parent?.attribs?.class || ''), doc.children, true));
  // traduction EN : on retrouve la clé via le texte FR de la page
  const pageName = file.replace('.html', '');
  const map = { 'Electricite-industrielle': 'ElectriciteIndustrielle', 'Automatisme-et-instrumentation': 'AutomatismeInstrumentation', 'Energie-solaire': 'EnergieSolaire', Maintenance: 'Maintenance', 'Personnel-technique': 'PersonnelTechnique', 'Controleur-acces': 'ControleurAcces', 'Video-surveillances': 'VideoSurveillances', Domotique: 'Domotique', 'Alarme-incendie': 'AlarmeIncendie', 'Materiel-electrique': 'MaterielElectrique', 'Composants-hydrauliques': 'ComposantsHydrauliques', 'Roulements-transmissions': 'RoulementsTransmissions' };
  const comp = map[pageName];
  const fr = JSON.parse(fs.readFileSync(`src/i18n/fr/${comp}.json`, 'utf8'));
  const en = JSON.parse(fs.readFileSync(`src/i18n/en/${comp}.json`, 'utf8'));
  const tr = (t) => { const k = Object.keys(fr).find((x) => fr[x] === t); return (k && en[k]) || t; };
  // le nom de la carte vient de Services.html : traduction via ce fichier
  const frS = JSON.parse(fs.readFileSync('src/i18n/fr/Services.json', 'utf8'));
  const enS = JSON.parse(fs.readFileSync('src/i18n/en/Services.json', 'utf8'));
  const trS = (t) => { const k = Object.keys(frS).find((x) => frS[x] === t); return (k && enS[k]) || t; };
  out.push({ route, img, group, name: { fr: name, en: trS(name) }, sub: { fr: sub, en: tr(sub) }, badge: { fr: badge, en: tr(badge) }, intro: { fr: intro, en: tr(intro) } });
}

// groupes : intitulés et puces (extraits de Services.html), avec traductions
const frS = JSON.parse(fs.readFileSync('src/i18n/fr/Services.json', 'utf8'));
const enS = JSON.parse(fs.readFileSync('src/i18n/en/Services.json', 'utf8'));
const T = (t) => { const k = Object.keys(frS).find((x) => frS[x] === t); return { fr: t, en: (k && enS[k]) || t }; };
const groups = {
  electric: { title: T('Électricité Industrielle et Tertiaire'), bullets: ["Travaux d'électricité en industrie et tertiaire", 'Maintenance électrique', "Câblage et normalisation des armoires électriques", 'Automatisme, Instrumentation, Régulation, Supervision', 'Énergie Solaire', 'Mise à disposition du personnel technique OHQ'].map(T) },
  security: { title: T('Alarme et Sécurité'), bullets: ["Installation et maintenance des contrôleurs d'accès", 'Installation et maintenance des vidéos surveillances', 'Domotique et alarme anti-intrusion', 'Installation et maintenance des alarmes à incendie'].map(T) },
  trade: { title: T('Négoce en Matériels Industriels'), bullets: ['Matériel électrique industriel (capteurs, automates, variateurs)', 'Composants hydrauliques et pneumatiques', 'Vente des roulements et transmissions'].map(T) },
};
const why = [['Expertise reconnue'], ['Équipe qualifiée'], ['Solutions sur mesure'], ['Partenariats solides'], ['Réactivité & proximité'], ['Engagement qualité']].map(([t]) => T(t));
const body = `// Généré par scripts/gen-services-data.mjs depuis le contenu existant (ne pas éditer à la main).
export const SERVICES = ${JSON.stringify(out, null, 2)};

export const SERVICE_GROUPS = ${JSON.stringify(groups, null, 2)};

export const WHY_TITLES = ${JSON.stringify(why, null, 2)};
`;
fs.writeFileSync('src/data/services.js', body);
console.log(out.map((o) => `${o.route} | ${o.sub.fr.slice(0, 50)} | ${o.sub.en.slice(0, 40)}`).join('\n'));
