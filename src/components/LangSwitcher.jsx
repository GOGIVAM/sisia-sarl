import { Link, useLocation } from 'react-router-dom';
import { localize, useLang } from '../i18n/index.jsx';
import './LangSwitcher.css';

export default function LangSwitcher() {
  const lang = useLang();
  const { pathname, search, hash } = useLocation();
  const target = (l) => localize(pathname, l) + search + hash;
  return (
    <div className="lang-switcher" role="group" aria-label={lang === 'en' ? 'Language' : 'Langue'}>
      {['fr', 'en'].map((l) => (
        <Link key={l} to={target(l)} hrefLang={l} lang={l} aria-current={l === lang ? 'true' : undefined} className={l === lang ? 'is-active' : ''}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
