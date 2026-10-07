import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import Link from '../components/LocLink.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { useLang } from '../i18n/index.jsx';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };

const C = {
  title: { fr: 'SISIA | À propos', en: 'SISIA | About' },
  desc: { fr: 'SISIA SARL, intégrateur de solutions industrielles : ingénierie et négoce de matériel industriel depuis 2019.', en: 'SISIA SARL, industrial solutions integrator: engineering and industrial equipment trading since 2019.' },
  kicker: { fr: 'Qui sommes-nous', en: 'Who we are' },
  h1: { fr: 'À propos de SISIA SARL', en: 'About SISIA SARL' },
  lead: { fr: 'L\'intégrateur de Solutions Industrielles', en: 'The industrial solutions integrator' },
  text: { fr: 'SISIA SARL est votre partenaire de confiance pour toutes vos solutions industrielles. Nous offrons des services d\'ingénierie et de négoce de matériel industriel depuis 2019.', en: 'SISIA SARL is your trusted partner for all your industrial solutions. We have provided engineering services and industrial equipment trading since 2019.' },
  contact: { fr: 'Nous contacter', en: 'Contact us' },
  stats: [
    { v: '300+', l: { fr: 'clients satisfaits', en: 'satisfied clients' } },
    { v: '5+', l: { fr: 'années d\'expérience', en: 'years of experience' } },
    { v: '17', l: { fr: 'projets réalisés', en: 'completed projects' } },
  ],
  assetsTitle: { fr: 'Nos atouts', en: 'Our strengths' },
  assets: [
    { t: { fr: 'Réseau international', en: 'International network' }, d: { fr: 'Grand réseau de distribution et de partenaires à l\'international.', en: 'Large distribution and partner network abroad.' } },
    { t: { fr: 'Qualité garantie', en: 'Guaranteed quality' }, d: { fr: 'Engagement sur la qualité des prestations et le respect des normes internationales.', en: 'Commitment to service quality and compliance with international standards.' } },
    { t: { fr: 'Rapport qualité/prix', en: 'Value for money' }, d: { fr: 'Des solutions adaptées à chaque budget, sans compromis sur la qualité.', en: 'Solutions suited to every budget, without compromising on quality.' } },
    { t: { fr: 'Équipe dynamique', en: 'Dynamic team' }, d: { fr: 'Personnel qualifié, réactif et à l\'écoute pour répondre à tous vos besoins.', en: 'Qualified, responsive staff who listen to meet all your needs.' } },
  ],
  missionsTitle: { fr: 'Nos missions', en: 'Our missions' },
  missions: [
    { t: { fr: 'Études', en: 'Studies' }, d: { fr: 'Analyse complète de vos besoins', en: 'Complete analysis of your needs' } },
    { t: { fr: 'Conseils', en: 'Advice' }, d: { fr: 'Expertise et recommandations spécialisées', en: 'Expertise and specialist recommendations' } },
    { t: { fr: 'Conception & réalisation', en: 'Design & delivery' }, d: { fr: 'Création et mise en œuvre de solutions', en: 'Creation and implementation of solutions' } },
  ],
  whyTitle: { fr: 'SISIA en chiffres', en: 'SISIA in figures' },
  figures: [
    { v: '20+', l: { fr: 'Collaborateurs', en: 'Staff members' } },
    { v: '300+', l: { fr: 'Clients accompagnés', en: 'Clients supported' } },
    { v: '50+', l: { fr: 'Projets industriels', en: 'Industrial projects' } },
    { v: '5+', l: { fr: 'Années d\'expérience', en: 'Years of experience' } },
  ],
  servicesTitle: { fr: 'Nos services', en: 'Our services' },
  servicesLead: { fr: 'SISIA propose des solutions d’automatisme, d’électricité industrielle, de vidéosurveillance, d’énergie solaire et d’informatique pour l’industrie, le tertiaire et les collectivités.', en: 'SISIA offers automation, industrial electrical, video surveillance, solar energy and IT solutions for industry, the service sector and local authorities.' },
  services: [
    { t: { fr: 'Automatisme industriel', en: 'Industrial automation' }, d: { fr: 'Automatisation de process, supervision, contrôle-commande, traçabilité.', en: 'Process automation, supervision, control systems, traceability.' }, r: '/services/automatisme-et-instrumentation' },
    { t: { fr: 'Vidéosurveillance & Sécurité', en: 'Video surveillance & security' }, d: { fr: 'Installation de caméras, alarmes, contrôle d’accès, détection d’intrusion.', en: 'Camera installation, alarms, access control, intrusion detection.' }, r: '/services/video-surveillances' },
    { t: { fr: 'Informatique & Réseaux', en: 'IT & networks' }, d: { fr: 'Intégration de solutions informatiques, réseaux industriels, cybersécurité.', en: 'IT solution integration, industrial networks, cybersecurity.' }, r: '/services' },
    { t: { fr: 'Énergie solaire', en: 'Solar energy' }, d: { fr: 'Étude, installation et maintenance de solutions photovoltaïques.', en: 'Design, installation and maintenance of photovoltaic solutions.' }, r: '/services/energie-solaire' },
    { t: { fr: 'Électricité industrielle', en: 'Industrial electrical engineering' }, d: { fr: 'Tableaux électriques, distribution, régulation thermique, maintenance.', en: 'Electrical panels, distribution, thermal regulation, maintenance.' }, r: '/services/electricite-industrielle' },
    { t: { fr: 'Contrôle d\'accès', en: 'Access control' }, d: { fr: 'Gestion des accès, badges, biométrie, interphonie sécurisée.', en: 'Access management, badges, biometrics, secure intercom.' }, r: '/services/controleur-acces' },
  ],
  atTitle: { fr: 'Chez SISIA', en: 'At SISIA' },
  at: [
    { fr: 'Éclairage industriel intelligent', en: 'Smart industrial lighting' },
    { fr: 'Salle de supervision vidéo', en: 'Video supervision room' },
    { fr: 'Salle de réunion connectée', en: 'Connected meeting room' },
    { fr: 'Installation de visiophone sécurisé', en: 'Secure video intercom installation' },
    { fr: 'Installation de régulateur thermique industriel', en: 'Industrial thermal regulator installation' },
    { fr: 'Gestion d’accès et sécurité des bâtiments', en: 'Access management and building security' },
  ],
  discover: { fr: 'Découvrir SISIA', en: 'Discover SISIA' },
};

/** À propos : présentation, atouts, missions, chiffres, services résumés, formulaire. Contenu d'origine conservé. */
export default function AboutPage() {
  const lang = useLang();
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{C.title[lang]}</title>
      <meta name="description" content={C.desc[lang]} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero ab-hero">
          <div className="page-hero__inner">
            <span className="kicker">{C.kicker[lang]}</span>
            <h1>{C.h1[lang]}</h1>
            <p>{C.lead[lang]}</p>
          </div>
        </section>

        <section className="ab-intro">
          <div className="ab-intro__inner">
            <div className="ab-intro__text" data-mo>
              <h2>{C.lead[lang]}</h2>
              <p>{C.text[lang]}</p>
              <Link to="/contact" className="btn-pill">{C.contact[lang]}</Link>
            </div>
            <ul className="ab-stats">
              {C.stats.map((s) => (<li key={s.v} data-mo><b>{s.v}</b><span>{s.l[lang]}</span></li>))}
            </ul>
          </div>
        </section>

        <section className="ab-block">
          <div className="ab-block__inner">
            <h2 data-mo>{C.assetsTitle[lang]}</h2>
            <ul className="ab-grid ab-grid--4">
              {C.assets.map((a) => (<li key={a.t.fr} data-mo><h3>{a.t[lang]}</h3><p>{a.d[lang]}</p></li>))}
            </ul>
          </div>
        </section>

        <section className="ab-block ab-block--gray">
          <div className="ab-block__inner ab-split">
            <div data-mo>
              <h2>{C.missionsTitle[lang]}</h2>
              <ol className="ab-steps">
                {C.missions.map((m, i) => (<li key={m.t.fr}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{m.t[lang]}</h3><p>{m.d[lang]}</p></div></li>))}
              </ol>
            </div>
            <div data-mo>
              <h2>{C.whyTitle[lang]}</h2>
              <ul className="ab-figures">
                {C.figures.map((f) => (<li key={f.l.fr}><b>{f.v}</b><span>{f.l[lang]}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        <section className="ab-block">
          <div className="ab-block__inner">
            <h2 data-mo>{C.servicesTitle[lang]}</h2>
            <p className="ab-lead" data-mo>{C.servicesLead[lang]}</p>
            <ul className="ab-grid ab-grid--3">
              {C.services.map((s) => (
                <li key={s.t.fr} data-mo>
                  <Link to={s.r} className="ab-link"><h3>{s.t[lang]}</h3><p>{s.d[lang]}</p><i aria-hidden="true">{'→'}</i></Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ab-block ab-block--gray">
          <div className="ab-block__inner ab-split">
            <div data-mo>
              <h2>{C.atTitle[lang]}</h2>
              <ul className="plain-list">{C.at.map((x) => <li key={x.fr}>{x[lang]}</li>)}</ul>
              <Link to="/services" className="btn-pill" style={{ marginTop: 24 }}>{C.discover[lang]}</Link>
            </div>
            <div data-mo><ContactForm /></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
