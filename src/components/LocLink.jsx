import { Link } from 'react-router-dom';
import { localize, useLang } from '../i18n/index.jsx';

/** <Link> qui conserve la langue courante (préfixe /en). */
export default function LocLink({ to, ...rest }) {
  const lang = useLang();
  return <Link to={typeof to === 'string' ? localize(to, lang) : to} {...rest} />;
}
