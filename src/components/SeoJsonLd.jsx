import { useLocation } from 'react-router-dom';
import { localize, stripLang, useLang } from '../i18n/index.jsx';
import { SITE_URL, NOINDEX_PATHS } from '../seo.js';

/**
 * SEO transversal : canonical, hreflang (fr / en / x-default), og:locale, robots,
 * fil d'Ariane et organisation (schema.org). Rendu dans <head> via le hissage natif de React 19.
 */
export default function SeoJsonLd() {
  const { pathname } = useLocation();
  const lang = useLang();
  const base = stripLang(pathname).replace(/\/$/, '') || '/';
  const abs = (l) => SITE_URL + localize(base, l);
  const noindex = NOINDEX_PATHS.includes(base);

  const segs = base.split('/').filter(Boolean);
  const crumbs = [{ name: 'SISIA SARL', url: abs(lang) }];
  let acc = '';
  segs.forEach((s) => {
    acc += '/' + s;
    crumbs.push({ name: s.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()), url: SITE_URL + localize(acc, lang) });
  });
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SISIA SARL',
    url: SITE_URL,
    inLanguage: ['fr-CM', 'en'],
  };

  return (
    <>
      <link rel="canonical" href={abs(lang)} />
      <link rel="alternate" hrefLang="fr" href={abs('fr')} />
      <link rel="alternate" hrefLang="en" href={abs('en')} />
      <link rel="alternate" hrefLang="x-default" href={abs('fr')} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'fr_CM'} />
      <meta property="og:locale:alternate" content={lang === 'en' ? 'fr_CM' : 'en_US'} />
      <meta property="og:url" content={abs(lang)} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {segs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />}
      {segs.length === 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />}
    </>
  );
}
