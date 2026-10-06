// Pré-rendu statique de toutes les pages (FR + EN), sitemap.xml et robots.txt.
// Usage : npm run build  (enchaîne vite build, build SSR puis ce script)
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { PAGES } from './convert.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SSR = path.join(ROOT, 'dist-ssr');
const SITE = (process.env.VITE_SITE_URL || 'https://sisia-sarl.com').replace(/\/$/, '');
const NOINDEX = ['/landing', '/maquette', '/recherche', '/blog/articles'];

const { PARTNERS } = await import(pathToFileURL(path.join(ROOT, 'src', 'data', 'partners.js')).href);
const { render } = await import(pathToFileURL(path.join(SSR, 'entry-server.js')).href);

const paths = [...PAGES.map((p) => p[1]), '/partenaires', ...PARTNERS.map((p) => `/partenaires/${p.slug}`)];
const loc = (p, l) => (l === 'en' ? (p === '/' ? '/en' : '/en' + p) : p);

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

/** Sort du corps les éléments de <head> hissés par React (title, meta, link ; le JSON-LD reste dans le corps, comme rendu par React) et les place dans <head>. */
function assemble(appHtml) {
  const hoisted = [];
  let body = appHtml;
  const take = (re) => { body = body.replace(re, (m) => { hoisted.push(m); return ''; }); };
  take(/<title>[\s\S]*?<\/title>/g);
  take(/<meta\b[^>]*>/g);
  take(/<link\b[^>]*rel="(?:canonical|alternate|apple-touch-icon)"[^>]*>/g);
  let head = template.replace(/<title>[\s\S]*?<\/title>/, '');
  head = head.replace('</head>', hoisted.join('\n') + '\n</head>');
  return head.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

let count = 0;
for (const p of paths) {
  for (const l of ['fr', 'en']) {
    const url = loc(p, l);
    const html = assemble(await render(url));
    const dir = path.join(DIST, url === '/' ? '' : url);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    count++;
  }
}

// Page 404 (servie avec le statut 404 par Vercel pour toute URL inconnue)
fs.writeFileSync(path.join(DIST, '404.html'), assemble(await render('/page-introuvable')));

// sitemap avec alternates hreflang
const indexable = paths.filter((p) => !NOINDEX.includes(p));
const today = new Date().toISOString().slice(0, 10);
const url = (p, l) => SITE + loc(p, l);
const entries = indexable.flatMap((p) => ['fr', 'en'].map((l) => `  <url>
    <loc>${url(p, l)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '/' ? '1.0' : p.split('/').length > 2 ? '0.6' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${url(p, 'fr')}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url(p, 'en')}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(p, 'fr')}"/>
  </url>`));
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /search\nSitemap: ${SITE}/sitemap.xml\n`);
fs.rmSync(SSR, { recursive: true, force: true });
console.log(`prerender: ${count} pages, ${entries.length} URLs dans sitemap.xml (${SITE})`);
