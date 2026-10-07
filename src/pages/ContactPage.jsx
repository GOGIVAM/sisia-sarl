import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { useLang } from '../i18n/index.jsx';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };
const MAP_Q = 'Douala+3e+Ngodi-Bakoko+Chefferie+Cameroun';

const C = {
  title: { fr: 'SISIA | Contact', en: 'SISIA | Contact' },
  desc: { fr: 'Contactez SISIA SARL à Douala : téléphone, e-mail, adresse et formulaire de contact.', en: 'Contact SISIA SARL in Douala: phone, email, address and contact form.' },
  kicker: { fr: 'Contact', en: 'Contact' },
  h1: { fr: 'Parlons de votre projet', en: 'Let us talk about your project' },
  lead: { fr: 'Une question, un devis, une intervention ? Écrivez-nous ou appelez-nous : nous répondons rapidement.', en: 'A question, a quote, an intervention? Write or call us: we reply quickly.' },
  office: { fr: 'Notre bureau principal', en: 'Our main office' },
  phone: { fr: 'Téléphone', en: 'Phone' },
  fax: { fr: 'Fax', en: 'Fax' },
  hours: { fr: 'Horaires', en: 'Opening hours' },
  hoursV: { fr: ['Lundi – Vendredi : 8h00 – 17h00', 'Samedi : 9h00 – 12h00'], en: ['Monday – Friday: 8:00 am – 5:00 pm', 'Saturday: 9:00 am – 12:00 pm'] },
  email: { fr: 'E-mail', en: 'Email' },
  map: { fr: 'Voir la carte', en: 'View on map' },
  call: { fr: 'Appeler', en: 'Call' },
  write: { fr: 'Écrire', en: 'Write' },
  address: { fr: ['Douala 3e, Ngodi-Bakoko Chefferie', 'BP : 3188 Douala, Cameroun'], en: ['Douala 3e, Ngodi-Bakoko Chefferie', 'PO Box 3188 Douala, Cameroon'] },
  mapTitle: { fr: 'Localisation SISIA SARL, Douala', en: 'SISIA SARL location, Douala' },
};

/** Contact : coordonnées en cartes, formulaire et carte. Données d'origine conservées. */
export default function ContactPage() {
  const lang = useLang();
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{C.title[lang]}</title>
      <meta name="description" content={C.desc[lang]} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero" style={{ '--hero': 'url(/images/53e3dc404b5bad14f6da8c7dda793678153bdee757596c48732e7bdd9244cd5ab0_1280.jpg)' }}>
          <div className="page-hero__inner">
            <span className="kicker">{C.kicker[lang]}</span>
            <h1>{C.h1[lang]}</h1>
            <p>{C.lead[lang]}</p>
          </div>
        </section>

        <section className="ct-main">
          <div className="ct-main__inner">
            <div className="ct-info">
              <article className="ct-card" data-mo>
                <h3>{C.office[lang]}</h3>
                <p>{C.address[lang][0]}<br />{C.address[lang][1]}</p>
                <a className="ct-link" href={`https://www.google.com/maps/search/?api=1&query=${MAP_Q}`} target="_blank" rel="noopener noreferrer">{C.map[lang]} {'↗'}</a>
              </article>
              <article className="ct-card" data-mo>
                <h3>{C.phone[lang]}</h3>
                <p><a href="tel:+237676246478" className="ct-big">(+237) 676 24 64 78</a><br /><span className="ct-muted">{C.fax[lang]} : (+237) 676 24 64 78</span></p>
                <a className="ct-link" href="tel:+237676246478">{C.call[lang]} {'↗'}</a>
              </article>
              <article className="ct-card" data-mo>
                <h3>{C.email[lang]}</h3>
                <p><a href="mailto:sisia-sarl@outlook.fr" className="ct-big">sisia-sarl@outlook.fr</a></p>
                <a className="ct-link" href="mailto:sisia-sarl@outlook.fr">{C.write[lang]} {'↗'}</a>
              </article>
              <article className="ct-card" data-mo>
                <h3>{C.hours[lang]}</h3>
                <p>{C.hoursV[lang][0]}<br />{C.hoursV[lang][1]}</p>
              </article>
            </div>
            <div className="ct-form" data-mo><ContactForm /></div>
          </div>
        </section>

        <section className="ct-map">
          <iframe title={C.mapTitle[lang]} loading="lazy" src={`https://maps.google.com/maps?output=embed&q=${MAP_Q}&t=m`} referrerPolicy="no-referrer-when-downgrade" />
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
