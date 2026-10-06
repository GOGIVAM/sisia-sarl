// Paramètres SEO partagés (appli + scripts de build).
// Domaine de production : définissez VITE_SITE_URL (ex. https://www.sisia-sarl.com) dans Vercel.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://sisia-sarl.com').replace(/\/$/, '');

// Pages de gabarit conservées pour ne rien perdre, mais non destinées au référencement.
export const NOINDEX_PATHS = ['/landing', '/maquette', '/recherche', '/blog/articles'];

/** Titre d'onglet : la marque d'abord (lisible même tronqué), puis le sujet de la page. */
export function brandTitle(t) {
  const m = t.match(/^(.*?)\s*[|\-\u2013]\s*SISIA(?: SARL)?\b[\s\-\u2013|:]*(.*)$/i);
  if (!m) return t;
  const page = m[1].trim();
  const rest = m[2].trim();
  if (!page || /^(accueil|home)$/i.test(page)) return rest ? `SISIA SARL | ${rest}` : 'SISIA SARL';
  return `SISIA | ${page}`;
}
