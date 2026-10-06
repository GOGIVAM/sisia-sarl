import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { stripLang } from '../i18n/index.jsx';

/** Marque le lien de menu courant avec .active (équivalent du gabarit Nicepage). */
export function useActiveNav() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const here = stripLang(pathname);
    document.querySelectorAll('header .u-nav-link[href]').forEach((a) => {
      const href = stripLang(a.getAttribute('href').split('#')[0] || '/');
      const on = href === here || (href !== '/' && here.startsWith(href + '/'));
      a.classList.toggle('active', on);
    });
  }, [pathname]);
}
