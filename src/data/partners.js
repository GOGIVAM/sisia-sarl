// Partenaires de SISIA SARL. Logos : public/partners/ (null = badge typographique, en attente du fichier officiel).
// Les faits sur les constructeurs sont publics (siège, année de création, gammes) ; la rubrique "sisia" décrit
// les prestations de SISIA autour de ce type d'équipement (à valider par SISIA).

/** Catégories : libellés, introduction et services SISIA associés. */
export const CATEGORIES = {
  packaging: {
    fr: 'Conditionnement et boissons',
    en: 'Packaging and beverage',
    intro: {
      fr: 'Lignes de mise en bouteille, de remplissage et d\'emballage pour les brasseries, laiteries et producteurs de boissons.',
      en: 'Bottling, filling and packaging lines for breweries, dairies and beverage producers.',
    },
    services: ['/services/automatisme-et-instrumentation', '/services/maintenance', '/services/roulements-transmissions'],
  },
  fluides: {
    fr: 'Pompes et fluides',
    en: 'Pumps and fluid handling',
    intro: {
      fr: 'Pompage, robinetterie et régulation de débit pour l\'eau, l\'énergie et les procédés industriels.',
      en: 'Pumping, valves and flow control for water, energy and industrial processes.',
    },
    services: ['/services/composants-hydrauliques', '/services/maintenance', '/services/electricite-industrielle'],
  },
  automation: {
    fr: 'Automatisation et mesure',
    en: 'Automation and measurement',
    intro: {
      fr: 'Pneumatique, automatismes et instrumentation de process : mesurer, piloter et superviser.',
      en: 'Pneumatics, automation and process instrumentation: measure, control and supervise.',
    },
    services: ['/services/automatisme-et-instrumentation', '/services/electricite-industrielle', '/services/maintenance'],
  },
  energie: {
    fr: 'Froid, climatisation et variateurs',
    en: 'Cooling, HVAC and drives',
    intro: {
      fr: 'Composants de réfrigération, de climatisation et variateurs de fréquence pour réduire la consommation d\'énergie.',
      en: 'Refrigeration and air-conditioning components and frequency drives to reduce energy consumption.',
    },
    services: ['/services/electricite-industrielle', '/services/automatisme-et-instrumentation', '/services/maintenance'],
  },
  negoce: {
    fr: 'Équipements et pièces',
    en: 'Equipment and parts',
    intro: {
      fr: 'Équipements de laboratoire et pièces de rechange pour les ateliers, flottes et laboratoires d\'analyse.',
      en: 'Laboratory equipment and spare parts for workshops, fleets and analysis laboratories.',
    },
    services: ['/services/materiel-electrique', '/services/roulements-transmissions', '/services'],
  },
};

export const PARTNERS = [
  {
    slug: 'krones', name: 'KRONES', country: { fr: 'Allemagne', en: 'Germany' }, hq: 'Neutraubling', founded: 1951, category: 'packaging',
    logo: '/partners/krones.svg', website: 'https://www.krones.com',
    tagline: {
      fr: 'Machines de mise en bouteille, d\'emballage et ingénierie des procédés.',
      en: 'Bottling and packaging machines and process engineering.',
    },
    about: {
      fr: 'Krones conçoit des lignes complètes, de la préparation du produit jusqu\'à la palettisation. Le groupe réunit machines, technologies de procédé, logistique d\'usine et solutions numériques sous un même fournisseur.',
      en: 'Krones designs complete lines, from product preparation to palletizing. The group brings machines, process technology, plant logistics and digital solutions under a single supplier.',
    },
    lines: {
      fr: ['Soufflage et remplissage', 'Étiquetage et emballage', 'Palettisation et logistique', 'Brassage et préparation des boissons'],
      en: ['Blow molding and filling', 'Labeling and packaging', 'Palletizing and logistics', 'Brewing and beverage preparation'],
    },
    industries: {
      fr: ['Brasseries', 'Boissons sans alcool', 'Vins et spiritueux', 'Produits laitiers'],
      en: ['Breweries', 'Soft drinks', 'Wine and spirits', 'Dairy'],
    },
    sisia: [
      { route: '/services/automatisme-et-instrumentation', fr: 'Automatisation et supervision des lignes : automates, capteurs, intégration au système de production.', en: 'Line automation and supervision: PLCs, sensors, integration with the production system.' },
      { route: '/services/roulements-transmissions', fr: 'Roulements, courroies et transmissions des convoyeurs et des machines tournantes.', en: 'Bearings, belts and transmissions for conveyors and rotating machines.' },
    ],
  },
  {
    slug: 'tetra-pak', name: 'Tetra Pak', country: { fr: 'Suède', en: 'Sweden' }, hq: 'Lund (origine)', founded: 1951, category: 'packaging',
    logo: '/partners/tetrapak.svg', website: 'https://www.tetrapak.com',
    tagline: {
      fr: 'Traitement et emballage en carton pour le lait, les jus et les aliments liquides.',
      en: 'Processing and carton packaging for milk, juices and liquid food.',
    },
    about: {
      fr: 'Tetra Pak fournit les équipements de traitement, de remplissage et d\'emballage aseptique en carton qui permettent de conserver les produits liquides sans réfrigération.',
      en: 'Tetra Pak supplies the processing, filling and aseptic carton packaging equipment that keeps liquid products safe without refrigeration.',
    },
    lines: {
      fr: ['Traitement thermique (pasteurisation, UHT)', 'Remplissage aseptique', 'Emballage carton', 'Fromage, glaces et boissons végétales'],
      en: ['Heat treatment (pasteurization, UHT)', 'Aseptic filling', 'Carton packaging', 'Cheese, ice cream and plant-based drinks'],
    },
    industries: {
      fr: ['Laiteries', 'Jus et nectars', 'Boissons végétales', 'Aliments liquides'],
      en: ['Dairies', 'Juices and nectars', 'Plant-based drinks', 'Liquid food'],
    },
    sisia: [
      { route: '/services/maintenance', fr: 'Maintenance électrique des installations de traitement : armoires, moteurs, variateurs.', en: 'Electrical maintenance of processing plants: cabinets, motors, drives.' },
      { route: '/services/automatisme-et-instrumentation', fr: 'Instrumentation de température et de pression pour le suivi des procédés thermiques.', en: 'Temperature and pressure instrumentation to monitor thermal processes.' },
    ],
  },
  {
    slug: 'khs', name: 'KHS', country: { fr: 'Allemagne', en: 'Germany' }, hq: 'Dortmund', founded: null, category: 'packaging',
    logo: '/partners/khs.png', website: 'https://www.khs.com',
    tagline: {
      fr: 'Remplissage, conditionnement et systèmes d\'emballage pour boissons.',
      en: 'Filling, packaging and packing systems for beverages.',
    },
    about: {
      fr: 'KHS développe des machines de remplissage et d\'emballage pour la bière, les boissons sans alcool, les jus et les produits liquides, avec un accent sur l\'efficacité énergétique et la réduction des pertes.',
      en: 'KHS builds filling and packaging machines for beer, soft drinks, juices and liquid products, with a focus on energy efficiency and loss reduction.',
    },
    lines: {
      fr: ['Remplisseuses verre, PET et canettes', 'Étiqueteuses et inspection', 'Emballage et palettisation', 'Traitement du produit'],
      en: ['Glass, PET and can fillers', 'Labelers and inspection', 'Packing and palletizing', 'Product processing'],
    },
    industries: {
      fr: ['Brasseries', 'Boissons rafraîchissantes', 'Jus', 'Eaux minérales'],
      en: ['Breweries', 'Refreshing drinks', 'Juices', 'Mineral water'],
    },
    sisia: [
      { route: '/services/automatisme-et-instrumentation', fr: 'Mise à niveau des automatismes et supervision des lignes de remplissage.', en: 'Automation upgrades and supervision of filling lines.' },
      { route: '/services/maintenance', fr: 'Maintenance préventive des équipements électriques et pneumatiques associés.', en: 'Preventive maintenance of the related electrical and pneumatic equipment.' },
    ],
  },
  {
    slug: 'hawach-scientific', name: 'Hawach Scientific', country: { fr: 'Chine', en: 'China' }, hq: 'Xi\'an', founded: null, category: 'negoce',
    logo: '/partners/hawach-scientific.png', website: null,
    tagline: {
      fr: 'Consommables de laboratoire, d\'analyse et de filtration chimique.',
      en: 'Laboratory, analysis and chemical filtration consumables.',
    },
    about: {
      fr: 'Hawach Scientific fabrique les consommables utilisés en chromatographie et en préparation d\'échantillons, pour les laboratoires de contrôle qualité et d\'analyse.',
      en: 'Hawach Scientific manufactures the consumables used in chromatography and sample preparation for quality-control and analysis laboratories.',
    },
    lines: {
      fr: ['Colonnes de chromatographie (HPLC)', 'Filtres seringues', 'Cartouches d\'extraction en phase solide', 'Flacons et accessoires'],
      en: ['Chromatography columns (HPLC)', 'Syringe filters', 'Solid-phase extraction cartridges', 'Vials and accessories'],
    },
    industries: {
      fr: ['Laboratoires d\'analyse', 'Pharmacie', 'Environnement', 'Agroalimentaire'],
      en: ['Analysis laboratories', 'Pharmaceuticals', 'Environment', 'Food industry'],
    },
    sisia: [
      { route: '/services', fr: 'Approvisionnement en consommables de laboratoire pour les industriels et les laboratoires de contrôle.', en: 'Supply of laboratory consumables for industrial companies and quality-control laboratories.' },
    ],
  },
  {
    slug: 'masuma', name: 'MASUMA', country: { fr: 'Japon', en: 'Japan' }, hq: null, founded: null, category: 'negoce',
    logo: '/partners/masuma.png', website: null,
    tagline: {
      fr: 'Pièces de rechange automobiles : suspension, freinage, filtration.',
      en: 'Automotive spare parts: suspension, braking, filtration.',
    },
    about: {
      fr: 'MASUMA est une marque d\'origine japonaise de pièces de rechange pour véhicules, utilisées par les ateliers et les gestionnaires de flottes pour l\'entretien courant.',
      en: 'MASUMA is a Japanese-origin brand of vehicle spare parts used by workshops and fleet managers for routine maintenance.',
    },
    lines: {
      fr: ['Filtres (huile, air, habitacle)', 'Plaquettes et disques de frein', 'Amortisseurs et suspension', 'Pièces de transmission'],
      en: ['Filters (oil, air, cabin)', 'Brake pads and discs', 'Shock absorbers and suspension', 'Transmission parts'],
    },
    industries: {
      fr: ['Flottes de transport', 'Ateliers mécaniques', 'Distribution de pièces', 'Chantiers et logistique'],
      en: ['Transport fleets', 'Mechanical workshops', 'Parts distribution', 'Construction and logistics'],
    },
    sisia: [
      { route: '/services', fr: 'Fourniture de pièces d\'entretien pour les véhicules et engins des sites que nous équipons.', en: 'Supply of maintenance parts for the vehicles and machinery of the sites we equip.' },
    ],
  },
  {
    slug: 'ksb', name: 'KSB', country: { fr: 'Allemagne', en: 'Germany' }, hq: 'Frankenthal', founded: 1871, category: 'fluides',
    logo: '/partners/ksb.png', website: 'https://www.ksb.com',
    tagline: {
      fr: 'Pompes, robinetterie industrielle et systèmes de transport de fluides.',
      en: 'Pumps, industrial valves and fluid transport systems.',
    },
    about: {
      fr: 'KSB équipe les réseaux d\'eau, les centrales d\'énergie, les mines et les usines de process avec des pompes, des vannes et des solutions d\'automatisation du pompage.',
      en: 'KSB equips water networks, power plants, mines and process plants with pumps, valves and pumping automation solutions.',
    },
    lines: {
      fr: ['Pompes centrifuges', 'Pompes immergées et d\'assainissement', 'Robinetterie industrielle', 'Entraînements et automatisation'],
      en: ['Centrifugal pumps', 'Submersible and wastewater pumps', 'Industrial valves', 'Drives and automation'],
    },
    industries: {
      fr: ['Eau et assainissement', 'Énergie', 'Mines', 'Bâtiment'],
      en: ['Water and wastewater', 'Energy', 'Mining', 'Building services'],
    },
    sisia: [
      { route: '/services/composants-hydrauliques', fr: 'Raccordement hydraulique et choix des composants autour des stations de pompage.', en: 'Hydraulic connection and component selection around pumping stations.' },
      { route: '/services/electricite-industrielle', fr: 'Armoires de commande, protections moteur et démarreurs pour les groupes de pompage.', en: 'Control cabinets, motor protection and starters for pump sets.' },
    ],
  },
  {
    slug: 'festo', name: 'FESTO', country: { fr: 'Allemagne', en: 'Germany' }, hq: 'Esslingen', founded: 1925, category: 'automation',
    logo: '/partners/festo.svg', website: 'https://www.festo.com',
    tagline: {
      fr: 'Leader de l\'automatisation industrielle, de la pneumatique et du contrôle d\'entraînement.',
      en: 'Leader in industrial automation, pneumatics and drive control.',
    },
    about: {
      fr: 'Festo propose des composants et des systèmes pneumatiques et électriques pour automatiser les machines, ainsi que des solutions de formation technique.',
      en: 'Festo offers pneumatic and electric components and systems to automate machines, as well as technical training solutions.',
    },
    lines: {
      fr: ['Vérins et actionneurs pneumatiques', 'Distributeurs et îlots de vannes', 'Préhenseurs et axes électriques', 'Formation technique'],
      en: ['Pneumatic cylinders and actuators', 'Valves and valve terminals', 'Grippers and electric axes', 'Technical training'],
    },
    industries: {
      fr: ['Emballage', 'Agroalimentaire', 'Automobile', 'Électronique'],
      en: ['Packaging', 'Food industry', 'Automotive', 'Electronics'],
    },
    sisia: [
      { route: '/services/automatisme-et-instrumentation', fr: 'Conception et mise en service d\'automatismes pneumatiques et de séquences de commande.', en: 'Design and commissioning of pneumatic automation and control sequences.' },
      { route: '/services/composants-hydrauliques', fr: 'Fourniture et remplacement de composants pneumatiques (vérins, distributeurs, raccords).', en: 'Supply and replacement of pneumatic components (cylinders, valves, fittings).' },
    ],
  },
  {
    slug: 'ebara', name: 'EBARA', country: { fr: 'Japon', en: 'Japan' }, hq: 'Tokyo', founded: 1912, category: 'fluides',
    logo: '/partners/ebara.svg', website: 'https://www.ebara.com',
    tagline: {
      fr: 'Pompes industrielles, compresseurs et turbines.',
      en: 'Industrial pumps, compressors and turbines.',
    },
    about: {
      fr: 'Le groupe Ebara fabrique des pompes, des compresseurs et des turbines pour le bâtiment, l\'industrie et l\'énergie, et développe des équipements pour l\'environnement.',
      en: 'The Ebara group manufactures pumps, compressors and turbines for buildings, industry and energy, and develops environmental equipment.',
    },
    lines: {
      fr: ['Pompes de bâtiment et de surpression', 'Pompes de process', 'Compresseurs', 'Turbines'],
      en: ['Building and booster pumps', 'Process pumps', 'Compressors', 'Turbines'],
    },
    industries: {
      fr: ['Bâtiment', 'Industrie', 'Énergie', 'Eau'],
      en: ['Building', 'Industry', 'Energy', 'Water'],
    },
    sisia: [
      { route: '/services/composants-hydrauliques', fr: 'Choix des pompes et des composants hydrauliques selon le débit et la hauteur requis.', en: 'Selection of pumps and hydraulic components according to required flow and head.' },
      { route: '/services/maintenance', fr: 'Entretien électrique et mécanique des groupes moto-pompes.', en: 'Electrical and mechanical maintenance of motor-pump sets.' },
    ],
  },
  {
    slug: 'endress-hauser', name: 'Endress+Hauser', country: { fr: 'Suisse', en: 'Switzerland' }, hq: 'Reinach', founded: 1953, category: 'automation',
    logo: '/partners/endress-hauser.jpg', website: 'https://www.endress.com',
    tagline: {
      fr: 'Instrumentation de mesure : débit, niveau, pression, température et analyse.',
      en: 'Measurement instrumentation: flow, level, pressure, temperature and analysis.',
    },
    about: {
      fr: 'Endress+Hauser fournit les instruments, les services et les solutions d\'automatisation qui permettent de mesurer et de contrôler les procédés industriels avec précision.',
      en: 'Endress+Hauser provides the instruments, services and automation solutions used to measure and control industrial processes accurately.',
    },
    lines: {
      fr: ['Mesure de débit', 'Mesure de niveau', 'Pression et température', 'Analyse liquide'],
      en: ['Flow measurement', 'Level measurement', 'Pressure and temperature', 'Liquid analysis'],
    },
    industries: {
      fr: ['Eau et eaux usées', 'Agroalimentaire', 'Chimie', 'Pétrole et gaz'],
      en: ['Water and wastewater', 'Food and beverage', 'Chemicals', 'Oil and gas'],
    },
    sisia: [
      { route: '/services/automatisme-et-instrumentation', fr: 'Installation, raccordement et étalonnage des capteurs et transmetteurs sur site.', en: 'On-site installation, wiring and calibration of sensors and transmitters.' },
      { route: '/services/materiel-electrique', fr: 'Fourniture d\'instrumentation et de matériel de câblage associé.', en: 'Supply of instrumentation and related wiring equipment.' },
    ],
  },
  {
    slug: 'samson', name: 'SAMSON', country: { fr: 'Allemagne', en: 'Germany' }, hq: 'Francfort-sur-le-Main', founded: 1907, category: 'fluides',
    logo: '/partners/samson.svg', website: 'https://www.samsongroup.com',
    tagline: {
      fr: 'Vannes de régulation, actionneurs et régulateurs de débit et de pression.',
      en: 'Control valves, actuators and flow and pressure regulators.',
    },
    about: {
      fr: 'Samson conçoit les vannes de régulation et les actionneurs qui maintiennent le débit, la pression ou la température d\'un procédé à la valeur voulue.',
      en: 'Samson designs the control valves and actuators that keep a process\'s flow, pressure or temperature at the required value.',
    },
    lines: {
      fr: ['Vannes de régulation', 'Actionneurs pneumatiques et électriques', 'Positionneurs', 'Régulateurs sans énergie auxiliaire'],
      en: ['Control valves', 'Pneumatic and electric actuators', 'Positioners', 'Self-operated regulators'],
    },
    industries: {
      fr: ['Chimie et pétrochimie', 'Énergie et chauffage urbain', 'Agroalimentaire', 'Traitement de l\'eau'],
      en: ['Chemicals and petrochemicals', 'Energy and district heating', 'Food and beverage', 'Water treatment'],
    },
    sisia: [
      { route: '/services/automatisme-et-instrumentation', fr: 'Boucles de régulation : raccordement des positionneurs, réglage et mise en service.', en: 'Control loops: positioner wiring, tuning and commissioning.' },
      { route: '/services/composants-hydrauliques', fr: 'Intégration des vannes dans les circuits hydrauliques et pneumatiques.', en: 'Integration of valves into hydraulic and pneumatic circuits.' },
    ],
  },
  {
    slug: 'danfoss', name: 'Danfoss', country: { fr: 'Danemark', en: 'Denmark' }, hq: 'Nordborg', founded: 1933, category: 'energie',
    logo: '/partners/danfoss.svg', website: 'https://www.danfoss.com',
    tagline: {
      fr: 'Composants de froid, de climatisation et de chauffage, et variateurs de fréquence.',
      en: 'Refrigeration, air-conditioning and heating components, and frequency drives.',
    },
    about: {
      fr: 'Danfoss produit des compresseurs, des détendeurs et des régulateurs pour le froid et le chauffage, ainsi que des variateurs de fréquence qui adaptent la vitesse des moteurs au besoin réel.',
      en: 'Danfoss makes compressors, expansion valves and controllers for cooling and heating, plus frequency drives that match motor speed to actual demand.',
    },
    lines: {
      fr: ['Compresseurs et détendeurs', 'Régulation de réfrigération', 'Variateurs de fréquence', 'Échangeurs et chauffage'],
      en: ['Compressors and expansion valves', 'Refrigeration controls', 'Frequency drives', 'Heat exchangers and heating'],
    },
    industries: {
      fr: ['Chaîne du froid', 'Climatisation', 'Eau et ventilation', 'Industrie'],
      en: ['Cold chain', 'Air conditioning', 'Water and ventilation', 'Industry'],
    },
    sisia: [
      { route: '/services/electricite-industrielle', fr: 'Installation et paramétrage de variateurs de fréquence dans les armoires de commande.', en: 'Installation and configuration of frequency drives in control cabinets.' },
      { route: '/services/maintenance', fr: 'Diagnostic et maintenance des moteurs et des installations de ventilation et de froid.', en: 'Diagnostics and maintenance of motors and ventilation and cooling installations.' },
    ],
  },
  {
    slug: 'grundfos', name: 'GRUNDFOS', country: { fr: 'Danemark', en: 'Denmark' }, hq: 'Bjerringbro', founded: 1945, category: 'fluides',
    logo: '/partners/grundfos-logo.png', website: 'https://www.grundfos.com',
    tagline: {
      fr: 'Pompes à eau et systèmes de pompage avancés.',
      en: 'Water pumps and advanced pumping systems.',
    },
    about: {
      fr: 'Grundfos est l\'un des plus grands fabricants mondiaux de pompes : circulateurs, pompes de surpression, pompes immergées et systèmes de dosage pour le bâtiment, l\'industrie et l\'eau.',
      en: 'Grundfos is one of the world\'s largest pump manufacturers: circulators, booster pumps, submersible pumps and dosing systems for buildings, industry and water.',
    },
    lines: {
      fr: ['Circulateurs', 'Pompes de surpression', 'Pompes immergées', 'Systèmes de dosage'],
      en: ['Circulators', 'Booster pumps', 'Submersible pumps', 'Dosing systems'],
    },
    industries: {
      fr: ['Bâtiment', 'Eau et eaux usées', 'Industrie', 'Agriculture'],
      en: ['Building services', 'Water and wastewater', 'Industry', 'Agriculture'],
    },
    sisia: [
      { route: '/services/composants-hydrauliques', fr: 'Installation de stations de surpression et de pompes immergées pour sites industriels.', en: 'Installation of booster stations and submersible pumps for industrial sites.' },
      { route: '/services/electricite-industrielle', fr: 'Alimentation électrique et commande des pompes (armoires, protections).', en: 'Electrical supply and control of pumps (cabinets, protections).' },
    ],
  },
];

export const partnerBySlug = Object.fromEntries(PARTNERS.map((p) => [p.slug, p]));
