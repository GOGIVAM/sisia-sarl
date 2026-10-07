import JourneyRail from './JourneyRail.jsx';
import { useLang } from '../i18n/index.jsx';

const STEPS = [
  { id: 'carousel_3dba', fr: 'Accueil', en: 'Home' },
  { id: 'partenaires', fr: 'Partenaires', en: 'Partners' },
  { id: 'carousel_1fd3', fr: 'Métiers', en: 'Services' },
  { id: 'sec-31fd', fr: 'À propos', en: 'About' },
  { id: 'testimonials', fr: 'Avis clients', en: 'Reviews' },
  { id: 'carousel_a04c', fr: 'Réalisations', en: 'Projects' },
  { id: 'supervision', fr: 'Supervision', en: 'Supervision' },
  { id: 'sec-faec', fr: 'Contact', en: 'Contact' },
];

/** Rail de parcours de la page d'accueil. */
export default function HomeRail() {
  const lang = useLang();
  return <JourneyRail steps={STEPS.map((s) => ({ id: s.id, label: s[lang] }))} />;
}
