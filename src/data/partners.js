// Partenaires de SISIA SARL. Logos : public/partners/ (null = badge typographique, en attente du fichier officiel).
// Les textes "activité" reprennent la description fournie ; les prestations liées sont des pistes à valider par SISIA.

/** Catégories : clé -> libellés + services SISIA associés (routes sans préfixe de langue). */
export const CATEGORIES = {
  packaging: {
    fr: 'Conditionnement et boissons',
    en: 'Packaging and beverage',
    services: ['/services/automatisme-et-instrumentation', '/services/maintenance', '/services/roulements-transmissions'],
  },
  fluides: {
    fr: 'Pompes et fluides',
    en: 'Pumps and fluid handling',
    services: ['/services/composants-hydrauliques', '/services/maintenance', '/services/electricite-industrielle'],
  },
  automation: {
    fr: 'Automatisation et mesure',
    en: 'Automation and measurement',
    services: ['/services/automatisme-et-instrumentation', '/services/electricite-industrielle', '/services/maintenance'],
  },
  energie: {
    fr: 'Froid, climatisation et variateurs',
    en: 'Cooling, HVAC and drives',
    services: ['/services/electricite-industrielle', '/services/automatisme-et-instrumentation', '/services/maintenance'],
  },
  negoce: {
    fr: 'Équipements et pièces',
    en: 'Equipment and parts',
    services: ['/services/materiel-electrique', '/services/roulements-transmissions', '/services'],
  },
};

export const PARTNERS = [
  {
    slug: 'krones', name: 'KRONES', country: { fr: 'Allemagne', en: 'Germany' }, category: 'packaging',
    logo: '/partners/krones.svg', website: 'https://www.krones.com',
    summary: {
      fr: 'Machines de mise en bouteille, d\'emballage et ingénierie des procédés pour les industries de la boisson et de l\'agroalimentaire.',
      en: 'Bottling and packaging machines and process engineering for the beverage and food industries.',
    },
    focus: {
      fr: ['Lignes de mise en bouteille', 'Emballage et palettisation', 'Ingénierie des procédés'],
      en: ['Bottling lines', 'Packaging and palletizing', 'Process engineering'],
    },
  },
  {
    slug: 'tetra-pak', name: 'Tetra Pak', country: { fr: 'Suède', en: 'Sweden' }, category: 'packaging',
    logo: '/partners/tetrapak.svg', website: 'https://www.tetrapak.com',
    summary: {
      fr: 'Traitement et emballage en carton pour produits alimentaires : lait, jus et autres liquides.',
      en: 'Food processing and carton packaging for milk, juices and other liquid foods.',
    },
    focus: {
      fr: ['Traitement des produits alimentaires', 'Emballage carton', 'Lait et jus'],
      en: ['Food processing', 'Carton packaging', 'Milk and juices'],
    },
  },
  {
    slug: 'khs', name: 'KHS', country: { fr: 'Allemagne', en: 'Germany' }, category: 'packaging',
    logo: null, website: 'https://www.khs.com',
    summary: {
      fr: 'Équipements de remplissage, de conditionnement et systèmes d\'emballage pour les boissons et les produits liquides.',
      en: 'Filling and packaging equipment and packaging systems for beverages and liquid products.',
    },
    focus: {
      fr: ['Remplissage', 'Conditionnement', 'Systèmes d\'emballage'],
      en: ['Filling', 'Packaging', 'Packaging systems'],
    },
  },
  {
    slug: 'hawach-scientific', name: 'Hawach Scientific', country: { fr: 'Chine', en: 'China' }, category: 'negoce',
    logo: null, website: null,
    summary: {
      fr: 'Équipements et consommables de laboratoire, d\'analyse et de filtration chimique.',
      en: 'Laboratory, analysis and chemical filtration equipment and consumables.',
    },
    focus: {
      fr: ['Équipements de laboratoire', 'Analyse', 'Filtration chimique'],
      en: ['Laboratory equipment', 'Analysis', 'Chemical filtration'],
    },
  },
  {
    slug: 'masuma', name: 'MASUMA', country: { fr: 'Japon', en: 'Japan' }, category: 'negoce',
    logo: null, website: null,
    summary: {
      fr: 'Équipements et pièces de rechange automobiles : suspension, freinage, filtration et autres organes.',
      en: 'Automotive equipment and spare parts: suspension, braking, filtration and more.',
    },
    focus: {
      fr: ['Suspension', 'Freinage', 'Filtration'],
      en: ['Suspension', 'Braking', 'Filtration'],
    },
  },
  {
    slug: 'ksb', name: 'KSB', country: { fr: 'Allemagne', en: 'Germany' }, category: 'fluides',
    logo: '/partners/ksb.png', website: 'https://www.ksb.com',
    summary: {
      fr: 'Pompes, robinetterie industrielle et systèmes de transport de fluides.',
      en: 'Pumps, industrial valves and fluid transport systems.',
    },
    focus: {
      fr: ['Pompes', 'Robinetterie industrielle', 'Transport de fluides'],
      en: ['Pumps', 'Industrial valves', 'Fluid transport'],
    },
  },
  {
    slug: 'festo', name: 'FESTO', country: { fr: 'Allemagne', en: 'Germany' }, category: 'automation',
    logo: '/partners/festo.svg', website: 'https://www.festo.com',
    summary: {
      fr: 'Leader mondial de l\'automatisation industrielle, de la pneumatique et des systèmes de contrôle d\'entraînement.',
      en: 'Global leader in industrial automation, pneumatics and drive control systems.',
    },
    focus: {
      fr: ['Automatisation industrielle', 'Pneumatique', 'Contrôle d\'entraînement'],
      en: ['Industrial automation', 'Pneumatics', 'Drive control'],
    },
  },
  {
    slug: 'ebara', name: 'EBARA', country: { fr: 'Japon', en: 'Japan' }, category: 'fluides',
    logo: '/partners/ebara.svg', website: 'https://www.ebara.com',
    summary: {
      fr: 'Pompes industrielles, compresseurs et turbines.',
      en: 'Industrial pumps, compressors and turbines.',
    },
    focus: {
      fr: ['Pompes industrielles', 'Compresseurs', 'Turbines'],
      en: ['Industrial pumps', 'Compressors', 'Turbines'],
    },
  },
  {
    slug: 'endress-hauser', name: 'Endress+Hauser', country: { fr: 'Suisse', en: 'Switzerland' }, category: 'automation',
    logo: '/partners/endress-hauser.jpg', website: 'https://www.endress.com',
    summary: {
      fr: 'Instrumentation de mesure, services et solutions pour l\'ingénierie des procédés : débit, niveau, pression, température.',
      en: 'Measurement instrumentation, services and solutions for process engineering: flow, level, pressure, temperature.',
    },
    focus: {
      fr: ['Débit', 'Niveau', 'Pression et température'],
      en: ['Flow', 'Level', 'Pressure and temperature'],
    },
  },
  {
    slug: 'samson', name: 'SAMSON', country: { fr: 'Allemagne', en: 'Germany' }, category: 'fluides',
    logo: '/partners/samson.svg', website: 'https://www.samsongroup.com',
    summary: {
      fr: 'Vannes de régulation, actionneurs et équipements de régulation de débit et de pression.',
      en: 'Control valves, actuators and equipment for flow and pressure control.',
    },
    focus: {
      fr: ['Vannes de régulation', 'Actionneurs', 'Régulation de débit et de pression'],
      en: ['Control valves', 'Actuators', 'Flow and pressure control'],
    },
  },
  {
    slug: 'danfoss', name: 'Danfoss', country: { fr: 'Danemark', en: 'Denmark' }, category: 'energie',
    logo: '/partners/danfoss.svg', website: 'https://www.danfoss.com',
    summary: {
      fr: 'Composants de réfrigération, de climatisation et de chauffage, et variateurs de fréquence.',
      en: 'Refrigeration, air-conditioning and heating components, and variable frequency drives.',
    },
    focus: {
      fr: ['Réfrigération', 'Climatisation et chauffage', 'Variateurs de fréquence'],
      en: ['Refrigeration', 'Air conditioning and heating', 'Frequency drives'],
    },
  },
  {
    slug: 'grundfos', name: 'GRUNDFOS', country: { fr: 'Danemark', en: 'Denmark' }, category: 'fluides',
    logo: null, website: 'https://www.grundfos.com',
    summary: {
      fr: 'Pompes à eau et systèmes de pompage avancés, parmi les leaders mondiaux du secteur.',
      en: 'Water pumps and advanced pumping systems, one of the world leaders in the field.',
    },
    focus: {
      fr: ['Pompes à eau', 'Systèmes de pompage avancés'],
      en: ['Water pumps', 'Advanced pumping systems'],
    },
  },
];

export const partnerBySlug = Object.fromEntries(PARTNERS.map((p) => [p.slug, p]));
