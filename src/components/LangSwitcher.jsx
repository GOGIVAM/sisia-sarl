import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { localize, useLang } from '../i18n/index.jsx';
import './LangSwitcher.css';

/**
 * Sélecteur FR / EN intégré à la barre de navigation (à droite du menu).
 * Rendu dans la rangée de navigation de l'en-tête ; sans en-tête, repli en pastille flottante.
 */
export default function LangSwitcher() {
  const lang = useLang();
  const { pathname, search, hash } = useLocation();
  const [host, setHost] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHost(document.querySelector('header .nav-actions') || document.querySelector('header .u-section-row-2 .u-sheet'));
    setReady(true);
  }, [pathname]);

  if (!ready) return null; // pas de rendu serveur : évite tout écart d'hydratation

  const target = (l) => localize(pathname, l) + search + hash;
  const node = (
    <div className={`lang-switcher${host ? ' lang-switcher--nav' : ''}`} role="group" aria-label={lang === 'en' ? 'Language' : 'Langue'}>
      {['fr', 'en'].map((l) => (
        <Link key={l} to={target(l)} hrefLang={l} lang={l} aria-current={l === lang ? 'true' : undefined} className={l === lang ? 'is-active' : ''}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
  return host ? createPortal(node, host) : node;
}
