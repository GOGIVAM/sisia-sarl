// Convertit les pages HTML Nicepage de ./legacy en composants React (src/pages)
// et extrait les textes dans src/i18n/fr/*.json (les traductions EN vivent dans src/i18n/en/*.json).
// Usage : npm run convert
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument, DomUtils } from 'htmlparser2';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LEGACY = path.join(ROOT, 'legacy');
const OUT_PAGES = path.join(ROOT, 'src', 'pages');
const OUT_STYLES = path.join(ROOT, 'src', 'styles');

// ---------------------------------------------------------------- routes ----
// [fichier source (relatif à legacy), route, nom du composant]
export const PAGES = [
  ['index.html', '/', 'Home'],
  ['About.html', '/a-propos', 'About'],
  ['Services.html', '/services', 'Services'],
  ['Contact.html', '/contact', 'Contact'],
  ['Alarme-incendie.html', '/services/alarme-incendie', 'AlarmeIncendie'],
  ['Automatisme-et-instrumentation.html', '/services/automatisme-et-instrumentation', 'AutomatismeInstrumentation'],
  ['Composants-hydrauliques.html', '/services/composants-hydrauliques', 'ComposantsHydrauliques'],
  ['Controleur-acces.html', '/services/controleur-acces', 'ControleurAcces'],
  ['Domotique.html', '/services/domotique', 'Domotique'],
  ['Electricite-industrielle.html', '/services/electricite-industrielle', 'ElectriciteIndustrielle'],
  ['Energie-solaire.html', '/services/energie-solaire', 'EnergieSolaire'],
  ['Maintenance.html', '/services/maintenance', 'Maintenance'],
  ['Materiel-electrique.html', '/services/materiel-electrique', 'MaterielElectrique'],
  ['Personnel-technique.html', '/services/personnel-technique', 'PersonnelTechnique'],
  ['Roulements-transmissions.html', '/services/roulements-transmissions', 'RoulementsTransmissions'],
  ['Video-surveillances.html', '/services/video-surveillances', 'VideoSurveillances'],
  ['Blog.html', '/blog', 'Blog'],
  ['FAQ-Page.html', '/faq', 'Faq'],
  ['Team.html', '/equipe', 'Team'],
  ['Landing.html', '/landing', 'Landing'],
  ['Untitled-2.html', '/maquette', 'Maquette'],
  ['blog/blog.html', '/blog/articles', 'BlogArticles'],
  ['blog/automatisation-industrielle.html', '/blog/automatisation-industrielle', 'BlogAutomatisationIndustrielle'],
  ['blog/energie-solaire-ecole.html', '/blog/energie-solaire-ecole', 'BlogEnergieSolaireEcole'],
  ['blog/formation-technique.html', '/blog/formation-technique', 'BlogFormationTechnique'],
  ['blog/maintenance-preventive.html', '/blog/maintenance-preventive', 'BlogMaintenancePreventive'],
  ['blog/supervision-industrielle.html', '/blog/supervision-industrielle', 'BlogSupervisionIndustrielle'],
  ['blog/videosurveillance-pme.html', '/blog/videosurveillance-pme', 'BlogVideosurveillancePme'],
  ['search/search.html', '/recherche', 'Search'],
];

const SITE = 'https://sissia-sarl.cm';
const routeByFile = new Map();
for (const [file, route] of PAGES) {
  routeByFile.set(file.toLowerCase(), route);
  const b = path.posix.basename(file).toLowerCase();
  if (!routeByFile.has(b)) routeByFile.set(b, route);
}
routeByFile.set('home.html', '/');
routeByFile.set('partenaires.html', '/partenaires');

/** Convertit une cible de lien (relative ou absolue du site) en route, sinon null. */
function toRoute(href, fromFile) {
  let hash = '';
  let h = href;
  const hi = h.indexOf('#');
  if (hi >= 0) { hash = h.slice(hi); h = h.slice(0, hi); }
  const qi = h.indexOf('?');
  let query = '';
  if (qi >= 0) { query = h.slice(qi); h = h.slice(0, qi); }
  if (h.startsWith(SITE)) h = h.slice(SITE.length) || '/';
  if (/^[a-z][a-z0-9+.-]*:/i.test(h) || h.startsWith('//')) return null;
  if (h === '') return null;
  if (h === './' || h === '/') return '/' + query + hash;
  const resolved = h.startsWith('/') ? h.slice(1) : path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), h));
  if (!resolved.toLowerCase().endsWith('.html')) return null;
  const r = routeByFile.get(resolved.toLowerCase()) ?? routeByFile.get(path.posix.basename(resolved).toLowerCase());
  if (!r) return null;
  return r + query + hash;
}

/** Réécrit les chemins de ressources (images/, ../images/ ...) en chemins absolus. */
function fixAsset(v) {
  if (!v) return v;
  if (/^(https?:|data:|\/\/|#|mailto:|tel:|\/)/i.test(v)) return v;
  return '/' + v.replace(/^(\.\.\/|\.\/)+/, '');
}
export function fixCssUrls(css) {
  return css.replace(/url\(\s*(['"]?)((?!data:|https?:|\/\/|\/|#)[^'")]+)\1\s*\)/gi, (m, q, u) =>
    `url(${q}/${u.replace(/^(\.\.\/|\.\/)+/, '')}${q})`);
}

function fnv(str) {
  let h = 0x811c9dc5;
  for (const ch of Buffer.from(str, 'utf8')) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}
// Boutons du gabarit Nicepage laissés en href="#" : [libellé, destination]
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Douala+3e+Ngodi-Bakoko+Chefferie+Cameroun';
const HASH_LINKS = [
  [/talk to an expert|parler à un expert/, '/contact'],
  [/show on map|voir la carte|voir sur la carte/, MAPS],
  [/découvrir sisia/, '/services'],
  [/demander un devis|nous contacter|contactez-nous/, '/contact'],
  [/découvrir nos solutions|voir nos services|en savoir plus|voir plus/, '/services'],
  [/appeler/, 'tel:+237676246478'],
];
const TR_ATTRS = new Set(['alt', 'title', 'placeholder', 'aria-label']);

// ------------------------------------------------------------ attributs ----
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', colspan: 'colSpan', rowspan: 'rowSpan',
  maxlength: 'maxLength', minlength: 'minLength', readonly: 'readOnly', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', autoplay: 'autoPlay', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen',
  srcset: 'srcSet', crossorigin: 'crossOrigin', referrerpolicy: 'referrerPolicy', datetime: 'dateTime',
  novalidate: 'noValidate', enctype: 'encType', 'accept-charset': 'acceptCharset', cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing', contenteditable: 'contentEditable', playsinline: 'playsInline',
  'http-equiv': 'httpEquiv', usemap: 'useMap', charset: 'charSet', itemprop: 'itemProp', itemscope: 'itemScope',
  itemtype: 'itemType', inputmode: 'inputMode', spellcheck: 'spellCheck', fetchpriority: 'fetchPriority',
  'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace', 'xlink:title': 'xlinkTitle',
  'clip-path': 'clipPath', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset', 'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity', 'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'font-family': 'fontFamily', 'font-size': 'fontSize', 'text-anchor': 'textAnchor', 'enable-background': 'enableBackground',
  'shape-rendering': 'shapeRendering', 'vector-effect': 'vectorEffect', gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits', preserveaspectratio: 'preserveAspectRatio', viewbox: 'viewBox',
  baseprofile: 'baseProfile', clippathunits: 'clipPathUnits', patternunits: 'patternUnits',
  spreadmethod: 'spreadMethod', 'xmlns:svg': 'xmlnsSvg', 'font-weight': 'fontWeight',
};
const BOOL = new Set(['required', 'disabled', 'checked', 'selected', 'multiple', 'readonly', 'autofocus',
  'autoplay', 'loop', 'muted', 'controls', 'hidden', 'allowfullscreen', 'novalidate', 'playsinline', 'open',
  'defer', 'async', 'itemscope', 'reversed', 'default']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source',
  'track', 'wbr', 'param']);
const BLOCK = new Set(['div', 'section', 'p', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
  'footer', 'nav', 'form', 'table', 'br', 'main', 'article', 'aside', 'hr', 'blockquote', 'figure', 'tr', 'td',
  'th', 'tbody', 'thead', 'iframe', 'video', 'style', 'script', 'label', 'select', 'textarea', 'dl', 'dt', 'dd']);
const NO_WS = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr', 'colgroup', 'select', 'optgroup', 'svg', 'g',
  'defs', 'symbol', 'ul', 'ol', 'dl', 'video', 'audio', 'picture']);
const SVG_CASE = { lineargradient: 'linearGradient', radialgradient: 'radialGradient', clippath: 'clipPath', textpath: 'textPath', foreignobject: 'foreignObject' };

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function parseStyle(str) {
  const decls = [];
  let cur = '', depth = 0, quote = null;
  for (const ch of str) {
    if (quote) { cur += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { decls.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) decls.push(cur);
  const entries = [];
  for (const d of decls) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    let val = d.slice(i + 1).trim();
    if (!prop || !val) continue;
    val = fixCssUrls(val).replace(/\s*!important\s*$/i, '');
    // titres rouges codés en dur dans le gabarit : couleur pilotée par --accent-text (bleu sur fond clair, blanc sur fond sombre)
    if (prop === 'color' && /^#(dc2f3c|d42027|e63946|b8232f)$/i.test(val) && !decls.some((x) => /^\s*background/i.test(x))) val = 'var(--accent-text, ' + val + ')';
    if (prop === 'fill' && /^#(dc2f3c|d42027)$/i.test(val)) val = 'var(--brand)';
    let key;
    if (prop.startsWith('--')) key = JSON.stringify(prop);
    else if (prop.startsWith('-ms-')) key = camel(prop.slice(1));
    else if (prop.startsWith('-')) key = camel(prop.slice(1)).replace(/^./, (c) => c.toUpperCase());
    else key = camel(prop);
    entries.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${entries.join(', ')} }}`;
}

// ---------------------------------------------------------- conversion -----
class Ctx {
  constructor(file) {
    this.file = file; this.usesLink = false; this.usesForm = false; this.warnings = []; this.dict = {};
    this.inSvg = false; this.isLink = false;
  }

  /** Enregistre un texte FR et renvoie l'expression JSX t("clé"), ou null si non traduisible. */
  tr(text) {
    const v = text.replace(/\s+/g, ' ').trim();
    if (!/\p{L}{2,}/u.test(v)) return null;
    const key = 'k' + fnv(v);
    this.dict[key] = v;
    return `t("${key}")`;
  }
}

function attrString(el, ctx, tag) {
  const out = [];
  const a = el.attribs;
  for (const [name, rawVal] of Object.entries(a)) {
    const lname = name.toLowerCase();
    let val = rawVal;
    if (lname === 'src' && !val.trim() && tag !== 'img') continue; // src vide hérité de Nicepage
    if (lname.startsWith('on')) { ctx.warnings.push(`attribut ${name} ignoré sur <${tag}>`); continue; }
    if (lname === 'style') { if (val.trim()) out.push(`style=${parseStyle(val)}`); continue; }

    // liens vides ("#", "") : cible déduite du libellé, le logo ramène à l'accueil
    if (tag === 'a' && lname === 'href' && (val === '#' || val === '')) {
      const label = DomUtils.textContent(el).replace(/\s+/g, ' ').trim().toLowerCase();
      const cls = a.class || '';
      if (/\bu-logo\b/.test(cls)) { out.push('to="/"'); ctx.usesLink = true; ctx.isLink = true; continue; }
      const hit = HASH_LINKS.find(([re]) => re.test(label));
      if (hit) {
        if (hit[1].startsWith('/')) { out.push(`to=${JSON.stringify(hit[1])}`); ctx.usesLink = true; ctx.isLink = true; }
        else out.push(`href=${JSON.stringify(hit[1])} target="_blank" rel="noopener noreferrer"`);
        continue;
      }
    }
    // liens internes -> routes
    if (tag === 'a' && lname === 'href') {
      const r = toRoute(val, ctx.file);
      if (r) { out.push(`to=${JSON.stringify(r)}`); ctx.usesLink = true; ctx.isLink = true; continue; }
    }
    if (['src', 'poster', 'data-src'].includes(lname) || (lname === 'href' && tag !== 'a' && tag !== 'use')) val = fixAsset(val);
    if (lname === 'srcset') {
      val = val.split(',').map((s) => {
        const parts = s.trim().split(/\s+/);
        return [fixAsset(parts[0]), ...parts.slice(1)].join(' ');
      }).join(', ');
    }

    // champs de formulaire : value/checked -> defaultValue/defaultChecked
    let jsxName;
    const inputType = (a.type || 'text').toLowerCase();
    if (['input', 'textarea', 'select'].includes(tag) && lname === 'value' && !['hidden', 'submit', 'button', 'checkbox', 'radio', 'reset'].includes(inputType)) jsxName = 'defaultValue';
    else if (tag === 'input' && lname === 'checked') jsxName = 'defaultChecked';
    else if (name.startsWith('data-') || name.startsWith('aria-')) jsxName = name;
    else if (ATTR[lname]) jsxName = ATTR[lname];
    else if (ctx.inSvg && name.includes('-') && !name.includes(':')) jsxName = camel(name);
    else if (name.includes(':')) jsxName = name.replace(/:([a-z])/g, (_, c) => c.toUpperCase());
    else jsxName = name;
    if (!/^[A-Za-z_][\w:.-]*$/.test(jsxName)) { ctx.warnings.push(`attribut invalide ${name}`); continue; }

    if (TR_ATTRS.has(lname) && val.trim()) {
      const e = ctx.tr(val);
      if (e) { out.push(`${jsxName}={${e}}`); continue; }
    }
    if (BOOL.has(lname) && (val === '' || val.toLowerCase() === lname)) out.push(jsxName);
    else out.push(`${jsxName}=${/["{}\\\n<&]/.test(val) ? `{${JSON.stringify(val)}}` : `"${val}"`}`);
  }
  return out.length ? ' ' + out.join(' ') : '';
}

const SKIP_SCRIPT_SRC = /(jquery|nicepage|carousel)\b.*\.js|capp\.nicepage\.com/i;

const txt = (node) => DomUtils.textContent(node);

function convertNodes(nodes, ctx, indent, parentTag) {
  const lines = [];
  const pad = '  '.repeat(indent);
  const kids = nodes.filter((n) => !(n.type === 'comment' || n.type === 'directive'));
  kids.forEach((n, i) => {
    if (n.type === 'text') {
      const raw = n.data;
      if (parentTag === 'pre') { lines.push(pad + `{${JSON.stringify(raw)}}`); return; }
      const collapsed = raw.replace(/[ \t\r\n\f]+/g, ' ');
      if (!collapsed.trim()) {
        if (NO_WS.has(parentTag) || parentTag === 'svg') return;
        const prev = kids[i - 1], next = kids[i + 1];
        if (!prev || !next) return;
        if ((prev.type === 'tag' && BLOCK.has(prev.name)) || (next.type === 'tag' && BLOCK.has(next.name))) return;
        lines.push(pad + '{" "}');
        return;
      }
      if (NO_WS.has(parentTag) && parentTag !== 'ul' && parentTag !== 'ol') {
        const e0 = ctx.tr(collapsed);
        lines.push(pad + (e0 ? `{${e0}}` : collapsed.trim()));
        return;
      }
      let t = collapsed;
      const prev = kids[i - 1], next = kids[i + 1];
      // espaces de bord inutiles à côté d'un bloc ou en début/fin de parent bloc
      if ((!prev || (prev.type === 'tag' && BLOCK.has(prev.name))) && (parentTag === undefined || BLOCK.has(parentTag))) t = t.replace(/^ /, '');
      if ((!next || (next.type === 'tag' && BLOCK.has(next.name))) && (parentTag === undefined || BLOCK.has(parentTag))) t = t.replace(/ $/, '');
      const e1 = ctx.tr(t);
      if (e1) {
        const lead = /^ /.test(t) ? ' ' : '';
        const trail = / $/.test(t) && t.trim() ? ' ' : '';
        lines.push(pad + (lead || trail ? `{${JSON.stringify(lead)} + ${e1} + ${JSON.stringify(trail)}}` : `{${e1}}`));
      } else if (/[{}<>]/.test(t) || /^ | $/.test(t) || t.includes('\\')) lines.push(pad + `{${JSON.stringify(t)}}`);
      else lines.push(pad + t);
      return;
    }
    if (n.type === 'cdata') return;
    if (n.type === 'script') { lines.push(...convertScript(n, ctx, pad)); return; }
    if (n.type === 'style') {
      const css = fixCssUrls(txt(n));
      lines.push(pad + `<style${attrString(n, ctx, 'style')} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />`);
      return;
    }
    if (n.type !== 'tag') return;
    lines.push(...convertElement(n, ctx, indent));
  });
  return lines;
}

function convertScript(n, ctx, pad) {
  const src = n.attribs.src;
  if (src) {
    if (!SKIP_SCRIPT_SRC.test(src)) ctx.warnings.push(`script externe ignoré : ${src}`);
    return [];
  }
  const body = txt(n).trim();
  if (n.attribs.type === 'application/ld+json') {
    return [pad + `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(JSON.stringify(JSON.parse(body)))} }} />`];
  }
  if (body) ctx.warnings.push(`script inline ignoré (${body.slice(0, 60).replace(/\s+/g, ' ')}...)`);
  return [];
}

function convertElement(el, ctx, indent) {
  const pad = '  '.repeat(indent);
  let tag = el.name;
  if (el.name === 'script' || el.name === 'noscript') return [];
  // feuilles de style déjà chargées par la page
  if (el.name === 'link' && /stylesheet/i.test(el.attribs.rel || '')) return [];

  const wasSvg = ctx.inSvg;
  if (tag === 'svg') ctx.inSvg = true;
  if (ctx.inSvg && SVG_CASE[tag]) tag = SVG_CASE[tag];

  ctx.isLink = false;
  let attrs = attrString(el, ctx, el.name);
  let jsxTag = el.name === 'a' && ctx.isLink ? 'Link' : tag;

  // formulaire de contact : branché sur le composant Web3Form
  if (el.name === 'form' && /web3forms/.test(el.attribs.action || '')) {
    jsxTag = 'Web3Form';
    ctx.usesForm = true;
    attrs = attrs.replace(/ method="POST"/, '').replace(/ action="[^"]*"/, '');
    attrs = ` action=${JSON.stringify(el.attribs.action)}` + attrs;
  }
  if (el.name === 'textarea') {
    const content = el.children.map((c) => c.data ?? '').join('');
    ctx.inSvg = wasSvg;
    return [pad + `<textarea${attrs}${content ? ` defaultValue={${JSON.stringify(content)}}` : ''} />`];
  }
  if (VOID.has(el.name) || (el.children.length === 0 && ctx.inSvg)) {
    ctx.inSvg = wasSvg;
    return [pad + `<${jsxTag}${attrs} />`];
  }
  const inner = convertNodes(el.children, ctx, indent + 1, ctx.inSvg ? 'svg' : el.name);
  ctx.inSvg = wasSvg;
  if (inner.length === 0) return [pad + `<${jsxTag}${attrs}></${jsxTag}>`];
  if (inner.length === 1 && !inner[0].trim().startsWith('<') && inner[0].length < 100) {
    return [pad + `<${jsxTag}${attrs}>${inner[0].trim()}</${jsxTag}>`];
  }
  return [pad + `<${jsxTag}${attrs}>`, ...inner, pad + `</${jsxTag}>`];
}

// ----------------------------------------------------------------- head ----
function convertHead(head, ctx) {
  const out = [];
  const css = [];
  const styles = [];
  let title = '';
  for (const n of head.children) {
    if (n.type === 'style') { styles.push(fixCssUrls(txt(n))); continue; }
    if (n.type === 'script') {
      if (n.attribs.type === 'application/ld+json') out.push(...convertScript(n, ctx, '      '));
      else if (n.attribs.src && !SKIP_SCRIPT_SRC.test(n.attribs.src)) ctx.warnings.push(`script head ignoré : ${n.attribs.src}`);
      continue;
    }
    if (n.type !== 'tag') continue;
    if (n.name === 'title') {
      title = txt(n).trim();
      out.push(`      <title>{brandTitle(${ctx.tr(title) ?? JSON.stringify(title)})}</title>`);
      continue;
    }
    if (n.name === 'meta') {
      const a = n.attribs;
      if (a.charset || a.name === 'viewport' || a.name === 'generator') continue;
      if (a.property === 'og:url' || a.property === 'og:locale') continue; // géré par <SeoJsonLd />
      const nm = a.name || a.property || '';
      const attrs = Object.entries(a).map(([k, v]) => {
        if (k === 'http-equiv') k = 'httpEquiv';
        if (k === 'content' && a.property === 'og:url' && /^https?:\/\/sissia-sarl\.cm/.test(v)) { const r = toRoute(v, ctx.file); if (r) v = SITE + r; }
        if (k === 'content' && /^(description|og:title|og:description|twitter:title|twitter:description)$/.test(nm)) {
          const e = ctx.tr(v);
          if (e) return `content={${e}}`;
        }
        return `${k}=${JSON.stringify(v)}`;
      }).join(' ');
      out.push(`      <meta ${attrs} />`);
      continue;
    }
    if (n.name === 'link') {
      const a = n.attribs;
      const rel = (a.rel || '').toLowerCase();
      if (rel === 'stylesheet') {
        const href = a.href || '';
        if (!/^https?:/.test(href)) css.push(href);
        continue;
      }
      if (['preconnect', 'dns-prefetch'].includes(rel)) continue; // déjà dans index.html racine
      if (['canonical', 'alternate'].includes(rel)) continue; // géré par <SeoJsonLd />
      const href = a.href;
      const attrs = Object.entries({ ...a, href }).map(([k, v]) => `${ATTR[k] ?? k}=${JSON.stringify(v)}`).join(' ');
      out.push(`      <link ${attrs} />`);
    }
  }
  return { out, css, styles, title };
}

// ------------------------------------------------------------------ main ----
const NAV_RE = /(<li class="u-nav-item"( role="none")?>)<a class="([^"]*)" href="Services\.html">([^<]*)<\/a><\/li>/g;
/** Ajoute l'entrée « Partenaires » après « Nos services » dans les deux menus de chaque page. */
function preprocess(html) {
  return html.replace(NAV_RE, (m, li, role, cls) => m + li + '<a class="' + cls.replace(' active', '') + '" href="Partenaires.html">Partenaires</a></li>');
}

/** Injections propres à certaines pages (bandeau de logos partenaires sur l'accueil). */
function inject(name, bodyLines, ctx) {
  if (name !== 'Home') return bodyLines;
  const start = bodyLines.findIndex((l) => /^\s*<section\b/.test(l) && !/<header/.test(l));
  if (start < 0) { ctx.warnings.push('premiere section introuvable pour PartnersStrip'); return bodyLines; }
  const pad = bodyLines[start].match(/^\s*/)[0];
  const end = bodyLines.findIndex((l, i) => i > start && l === pad + '</section>');
  if (end < 0) { ctx.warnings.push('fin de la premiere section introuvable'); return bodyLines; }
  return [...bodyLines.slice(0, end + 1), pad + '<PartnersStrip />', ...bodyLines.slice(end + 1)];
}

/** En-tête et pied de page partagés, générés depuis la page Contact (pour les pages créées à la main). */
function buildShared() {
  const html = preprocess(fs.readFileSync(path.join(LEGACY, 'Contact.html'), 'utf8').replace(/^﻿/, ''));
  const doc = parseDocument(html, { lowerCaseAttributeNames: false, lowerCaseTags: true, recognizeSelfClosing: true });
  for (const [tag, comp] of [['header', 'SiteHeader'], ['footer', 'SiteFooter']]) {
    const el = DomUtils.findOne((e) => e.name === tag, doc.children, true);
    const ctx = new Ctx('Contact.html');
    let lines = convertElement(el, ctx, 3).join('\n');
    lines = lines.replace(/ active"/g, '"');
    const imports = [
      `import { useT } from '../i18n/index.jsx';`,
      `import fr from '../i18n/fr/${comp}.json';`,
      `import en from '../i18n/en/${comp}.json';`,
      `import Link from './LocLink.jsx';`,
    ];
    if (tag === 'header') imports.push(`import { useActiveNav } from '../hooks/useActiveNav.js';`);
    const code = `// Généré par scripts/convert.mjs depuis legacy/Contact.html (<${tag}>)
${imports.join('\n')}

export default function ${comp}() {
  const t = useT(fr, en);
${tag === 'header' ? '  useActiveNav();\n' : ''}  return (
${lines}
  );
}
`;
    fs.writeFileSync(path.join(ROOT, 'src', 'components', comp + '.jsx'), code);
    fs.writeFileSync(path.join(ROOT, 'src', 'i18n', 'fr', comp + '.json'), JSON.stringify(ctx.dict, null, 1));
    const enPath = path.join(ROOT, 'src', 'i18n', 'en', comp + '.json');
    const enOld = fs.existsSync(enPath) ? JSON.parse(fs.readFileSync(enPath, 'utf8')) : {};
    const enNew = {};
    for (const k of Object.keys(ctx.dict)) enNew[k] = enOld[k] ?? '';
    fs.writeFileSync(enPath, JSON.stringify(enNew, null, 1));
  }
}


function main() {
  fs.mkdirSync(OUT_PAGES, { recursive: true });
  fs.mkdirSync(OUT_STYLES, { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'src', 'i18n', 'fr'), { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'src', 'i18n', 'en'), { recursive: true });
  const report = [];
  const cssCopied = new Set();
  const routesMeta = [];

  for (const [file, route, name] of PAGES) {
    const srcPath = path.join(LEGACY, file);
    if (!fs.existsSync(srcPath)) { report.push(`!! introuvable : ${file}`); continue; }
    const html = preprocess(fs.readFileSync(srcPath, 'utf8').replace(/^﻿/, ''));
    const doc = parseDocument(html, { lowerCaseAttributeNames: false, lowerCaseTags: true, recognizeSelfClosing: true });
    const htmlEl = DomUtils.findOne((e) => e.name === 'html', doc.children, true);
    const head = DomUtils.findOne((e) => e.name === 'head', doc.children, true);
    const body = DomUtils.findOne((e) => e.name === 'body', doc.children, true);
    const ctx = new Ctx(file);

    const h = convertHead(head, ctx);

    // Feuilles CSS locales (nicepage.css est global, chargé dans main.jsx)
    const cssFiles = [];
    for (const href of h.css) {
      let base = path.posix.basename(href);
      if (base === 'nicepage.css') continue;
      const dir = path.posix.dirname(file);
      const p = path.join(LEGACY, dir, href);
      if (dir !== '.') base = dir + '-' + base;
      if (!fs.existsSync(p)) { ctx.warnings.push(`CSS introuvable : ${href}`); continue; }
      if (!cssCopied.has(base)) {
        fs.writeFileSync(path.join(OUT_STYLES, base), fixCssUrls(fs.readFileSync(p, 'utf8')));
        cssCopied.add(base);
      }
      cssFiles.push(base);
    }
    const cssImports = cssFiles.map((b, i) => `import css${i} from '../styles/${b}?inline';`);

    const bodyKids = inject(name, convertNodes(body.children, ctx, 3, undefined), ctx);
    const headStyles = h.styles.map((s) => `      <style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(s)} }} />`);
    const cssTags = cssFiles.map((b, i) => `      <style data-source=${JSON.stringify(b)} dangerouslySetInnerHTML={{ __html: css${i} }} />`);

    const imports = [
      `import PageShell from '../components/PageShell.jsx';`,
      `import { useT } from '../i18n/index.jsx';`,
      `import { brandTitle } from '../seo.js';`,
      `import fr from '../i18n/fr/${name}.json';`,
      `import en from '../i18n/en/${name}.json';`,
    ];
    if (ctx.usesLink) imports.push(`import Link from '../components/LocLink.jsx';`);
    if (ctx.usesForm) imports.push(`import Web3Form from '../components/Web3Form.jsx';`);
    if (name === 'Home') imports.push(`import PartnersStrip from '../components/PartnersStrip.jsx';`);
    imports.push(...cssImports);

    const jsx = `// Généré par scripts/convert.mjs depuis legacy/${file} : contenu d'origine conservé.
${imports.join('\n')}

export default function ${name}() {
  const t = useT(fr, en);
  return (
    <PageShell htmlAttrs={${JSON.stringify(htmlEl.attribs || {})}} bodyAttrs={${JSON.stringify(body.attribs || {})}}>
${h.out.join('\n')}
${cssTags.join('\n')}
${headStyles.join('\n')}
${bodyKids.join('\n')}
    </PageShell>
  );
}
`;
    fs.writeFileSync(path.join(OUT_PAGES, name + '.jsx'), jsx);

    // dictionnaires : FR toujours régénéré ; EN conserve les traductions existantes
    fs.writeFileSync(path.join(ROOT, 'src', 'i18n', 'fr', name + '.json'), JSON.stringify(ctx.dict, null, 1));
    const enPath = path.join(ROOT, 'src', 'i18n', 'en', name + '.json');
    const enOld = fs.existsSync(enPath) ? JSON.parse(fs.readFileSync(enPath, 'utf8')) : {};
    const enNew = {};
    for (const k of Object.keys(ctx.dict)) enNew[k] = enOld[k] ?? '';
    fs.writeFileSync(enPath, JSON.stringify(enNew, null, 1));

    routesMeta.push({ name, route, file });
    report.push(`${file} -> src/pages/${name}.jsx  (${Object.keys(ctx.dict).length} textes, ${ctx.warnings.length} avertissement(s))`);
    for (const w of [...new Set(ctx.warnings)]) report.push('     - ' + w);
  }

  buildShared();
  const routes = `// Généré par scripts/convert.mjs
import { lazy } from 'react';

export const routes = [
${routesMeta.map((r) => `  { path: ${JSON.stringify(r.route)}, legacy: ${JSON.stringify(r.file)}, Component: lazy(() => import('./pages/${r.name}.jsx')) },`).join('\n')}
];
`;
  fs.writeFileSync(path.join(ROOT, 'src', 'routes.js'), routes);
  console.log(report.join('\n'));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
