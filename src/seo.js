// Paramètres SEO partagés (appli + scripts de build).
// Domaine de production : définissez VITE_SITE_URL (ex. https://www.sisia-sarl.com) dans Vercel.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://sissia-sarl.cm').replace(/\/$/, '');

// Pages de gabarit conservées pour ne rien perdre, mais non destinées au référencement.
export const NOINDEX_PATHS = ['/landing', '/maquette', '/recherche', '/blog/articles'];
