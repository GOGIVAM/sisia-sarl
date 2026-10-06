import { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const LANGS = ['fr', 'en'];
export const DEFAULT_LANG = 'fr';

/** La langue se déduit de l'URL : /en/... = anglais, sinon français. */
export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

/** Retire le préfixe de langue d'un chemin. */
export function stripLang(pathname) {
  if (pathname === '/en') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

/** Chemin interne -> chemin dans la langue demandée (conserve ancre et paramètres). */
export function localize(to, lang) {
  if (!to || !to.startsWith('/') || to.startsWith('//')) return to;
  const m = to.match(/^([^?#]*)(.*)$/);
  const base = stripLang(m[1] || '/');
  if (lang !== 'en') return base + m[2];
  return (base === '/' ? '/en' : '/en' + base) + m[2];
}

const LangContext = createContext(DEFAULT_LANG);

export function LangProvider({ children }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Fonction de traduction d'une page : clé -> texte (EN si disponible, sinon FR d'origine). */
export function useT(fr, en) {
  const lang = useLang();
  return useMemo(() => (key) => (lang === 'en' && en[key]) || fr[key] || key, [lang, fr, en]);
}

/** Dictionnaire d'interface partagé (partenaires, 404...) : { fr: {...}, en: {...} }. */
export function useUi(dict) {
  const lang = useLang();
  return useMemo(() => (key) => dict[lang]?.[key] ?? dict.fr[key] ?? key, [lang, dict]);
}
