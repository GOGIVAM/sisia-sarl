import Link from './LocLink.jsx';
import { useLang } from '../i18n/index.jsx';

/** Barre d'action fixe sur téléphone : appeler / contacter (masquée sur grand écran par le CSS). */
export default function MobileBar() {
  const lang = useLang();
  return (
    <div className="mbar" role="navigation" aria-label={lang === 'en' ? 'Quick actions' : 'Actions rapides'}>
      <a className="mbar__call" href="tel:+237676246478">{lang === 'en' ? 'Call' : 'Appeler'}</a>
      <Link className="mbar__cta" to="/contact">{lang === 'en' ? 'Contact us' : 'Nous contacter'}</Link>
    </div>
  );
}
