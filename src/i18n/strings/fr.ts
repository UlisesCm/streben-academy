/**
 * STREBEN ACADEMY — strings en français (fr-FR).
 * Dérivé de es.ts. Ne pas modifier la structure ni les clés.
 * Vouvoiement systématique ("vous").
 */

import type { Dictionary } from './es';

export const fr = {
  // ===========================================================================
  // META & NAV
  // ===========================================================================
  meta: {
    siteName: 'STREBEN ACADEMY',
    tagline: 'Cours d\'anglais britannique en ligne en direct',
    defaultDescription:
      'Académie d\'anglais britannique en ligne en direct pour tout le Mexique. Enfants, adolescents et adultes. Bourses accessibles, accompagnement personnalisé.',
    motto: 'Strive, Dream and Achieve',
    yearFrom: 2025,
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    courses: 'Cours',
    scholarships: 'Bourses',
    testimonials: 'Témoignages',
    gallery: 'Galerie',
    students: 'Élèves',
    contact: 'Contact',
    requestInfo: 'Demander des informations',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    languageMenu: 'Changer de langue',
    themeMenu: 'Changer de thème',
  },
  themes: {
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
  },

  // ===========================================================================
  // SHARED COMPONENTS
  // ===========================================================================
  whatsapp: {
    fabLabel: 'Parlez-nous sur WhatsApp',
    fabText: 'Écrivez-nous',
    prefilled: 'Bonjour STREBEN ACADEMY, j\'aimerais recevoir des informations sur vos cours.',
  },
  cta: {
    primary: 'Demander des informations',
    secondary: 'Voir les cours',
    enroll: 'Pré-inscription',
    placementTest: 'Test de niveau gratuit',
    requestScholarship: 'Demander une bourse',
    bookSession: 'Réserver une séance',
    seeAll: 'Voir tout',
    learnMore: 'En savoir plus',
    downloadSyllabus: 'Télécharger le programme',
  },

  // ===========================================================================
  // HOME
  // ===========================================================================
  home: {
    hero: {
      eyebrow: 'British English · 100 % en ligne en direct · Mexique',
      titleLine1: 'L\'anglais qui',
      titleAccent: 'transforme',
      titleLine2: 'votre vie.',
      subtitle:
        'Cours en direct avec méthodologie britannique, petits groupes et un accompagnement adapté à votre rythme. Début des cours : 10 août 2026.',
      ctaPrimary: 'Demander des informations via WhatsApp',
      ctaSecondary: 'Voir les programmes',
      stat1: { value: '9', label: 'niveaux de A1 à C1' },
      stat2: { value: '7 ans', label: 'd\'expérience en enseignement' },
      stat3: { value: '100 %', label: 'en ligne en direct' },
      stat4: { value: 'MX', label: 'tout le Mexique' },
    },
    marquee: {
      words: ['Strive', 'Dream', 'Achieve', 'British English', 'Online', 'En direct'],
    },
    intro: {
      eyebrow: '01 — Ce qui nous différencie',
      title: 'Une académie avec',
      titleAccent: 'une approche humaine',
      titleEnd: ', une méthodologie britannique et des bourses qui ouvrent des portes.',
      body: 'Chez STREBEN ACADEMY, nous travaillons avec discipline, responsabilité et passion pour qu\'aucune compétence ne soit une barrière, mais une opportunité de croissance. Chaque cours est conçu pour que vous viviez la langue, pas seulement pour que vous l\'étudiiez.',
    },
    benefits: {
      eyebrow: '02 — Avantages',
      title: 'Ce que vous allez',
      titleAccent: 'trouver ici',
      items: [
        {
          title: 'Anglais britannique authentique',
          body: 'Prononciation, expressions et différences avec l\'américain. Pour vous démarquer à un examen, un entretien ou lors d\'un voyage.',
        },
        {
          title: 'Cours dynamiques',
          body: 'Situations réelles, jeux de rôle et supports actuels. Vous apprenez en parlant, pas en mémorisant.',
        },
        {
          title: 'Accompagnement personnalisé',
          body: 'Petits groupes et attention individuelle. Vos progrès sont mesurés et célébrés.',
        },
        {
          title: 'Bourses accessibles',
          body: 'Quatre types de réduction pour que le coût ne soit pas la raison qui vous arrête d\'apprendre.',
        },
      ],
    },
    programs: {
      eyebrow: '03 — Programmes',
      title: 'Un programme pour',
      titleAccent: 'chaque âge',
      subtitle: 'Trois parcours avec trois niveaux chacun. Durée par niveau : 1 an et 3 mois.',
      kiddos: {
        name: 'Kiddos',
        ages: '7 — 11 ans',
        description: 'Ils apprennent en jouant avec Kids Box New Generation. Des bases solides dès le plus jeune âge.',
        levels: 'Basics · Beginner · High Beginner',
      },
      teens: {
        name: 'Teens',
        ages: '12 — 17 ans',
        description: 'De A1 à C1 avec des sujets qui les passionnent : culture, réseaux sociaux, examens officiels.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      adults: {
        name: 'Adults',
        ages: '18 ans et plus',
        description: 'Anglais pour le travail, les voyages et les certifications. Des horaires qui respectent votre agenda.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      tutoring: {
        name: 'Séances de tutorat',
        ages: 'Tous âges',
        description: 'Anglais, mathématiques, physique, chimie, biologie et sujets de génie civil.',
        levels: '120 MXN par heure',
      },
    },
    scholarships: {
      eyebrow: '04 — Bourses',
      title: 'Le prix ne devrait pas',
      titleAccent: 'vous freiner',
      subtitle: 'Quatre bourses non cumulables. Demandez-nous laquelle est la meilleure pour vous.',
      cta: 'Demander ma bourse',
    },
    testimonials: {
      eyebrow: '05 — Ce que disent nos élèves',
      title: 'Des histoires vraies,',
      titleAccent: 'des résultats réels',
      empty: 'Bientôt, nous ajouterons les témoignages de nos premiers élèves.',
    },
    finalCta: {
      eyebrow: '06 — Faites le premier pas',
      title: 'Commencez',
      titleAccent: 'une nouvelle langue',
      titleEnd: ' cette génération.',
      subtitle:
        'Pré-inscriptions ouvertes du 1er juin au 27 juillet 2026. Les cours débutent le 10 août.',
      ctaPrimary: 'Parler via WhatsApp',
      ctaSecondary: 'Test de niveau gratuit',
    },
  },

  // ===========================================================================
  // COURSES
  // ===========================================================================
  courses: {
    list: {
      title: 'Nos cours',
      titleAccent: 'et programmes',
      subtitle:
        'Trois parcours en anglais — Kiddos, Teens et Adults — ainsi que des séances de tutorat en anglais et d\'autres matières.',
      kiddosSectionTitle: 'English for Kiddos',
      kiddosSubtitle: 'Enfants de 7 à 11 ans. Matériel : Kids Box New Generation.',
      teensSectionTitle: 'English for Teens',
      teensSubtitle: 'Adolescents de 12 à 17 ans. De A1 à C1.',
      adultsSectionTitle: 'English for Adults',
      adultsSubtitle: 'Plus de 18 ans. Anglais pour le travail, les voyages et les certifications.',
      tutoringSectionTitle: 'Tutorat à l\'heure',
      tutoringSubtitle: '120 MXN/h. Anglais et autres matières par niveau.',
    },
    detail: {
      programLabel: 'Programme',
      levelLabel: 'Niveau',
      cefrLabel: 'Cadre européen',
      agesLabel: 'Âges',
      durationLabel: 'Durée',
      modalityLabel: 'Modalité',
      modality: '100 % en ligne en direct',
      whatYoullLearn: 'Qu\'allez-vous apprendre ?',
      materials: 'Matériel pédagogique',
      next: 'Niveau suivant',
      prev: 'Niveau précédent',
      ctaTitle: 'Prêt(e) à commencer ?',
      ctaSubtitle:
        'Demandez des informations via WhatsApp ou planifiez votre test de niveau gratuit pour trouver le niveau idéal.',
    },
    placeholder: 'Nous publierons bientôt les détails de ce cours.',
  },

  // ===========================================================================
  // SCHOLARSHIPS
  // ===========================================================================
  scholarshipsPage: {
    eyebrow: 'Bourses',
    title: 'Quatre voies',
    titleAccent: 'pour obtenir une bourse',
    subtitle:
      'Elles ne sont pas cumulables : vous choisissez celle qui vous convient le mieux. Elles s\'appliquent lors de la pré-inscription et durent toute la génération.',
    items: [
      {
        name: 'Bourse Mérite',
        discount: '15 %',
        requirement: 'Moyenne académique cumulée égale ou supérieure à 85/100.',
        howTo:
          'Envoyez-nous via WhatsApp votre relevé de notes ou attestation officielle. S\'applique aux élèves inscrits dans un établissement actif.',
      },
      {
        name: 'Bourse Famille',
        discount: '15 %',
        requirement: '2 membres de la famille ou plus inscrits simultanément.',
        howTo:
          'Inscrivez-vous en groupe : la bourse s\'applique à tous les membres enregistrés dans la même génération.',
      },
      {
        name: 'Bourse Parrainage',
        discount: '10 %',
        requirement: 'Une personne (non membre de la famille) s\'inscrit grâce à votre recommandation.',
        howTo:
          'La personne parrainée doit mentionner votre nom complet lors de la pré-inscription. Votre réduction s\'applique à la prochaine mensualité.',
      },
      {
        name: 'Bourse Full Learning',
        discount: '15 %',
        requirement: 'Inscription simultanée à 2 cours ou plus.',
        howTo:
          'S\'applique si vous suivez, par exemple, anglais + tutorat ou deux niveaux différents en parallèle.',
      },
    ],
    rules: {
      title: 'Règles en bref',
      items: [
        'Les bourses ne sont pas cumulables : vous en choisissez une seule.',
        'Elles s\'appliquent sur la mensualité, pas sur les frais d\'inscription ni le matériel.',
        'Elles sont maintenues tant que l\'élève conserve sa présence et ses résultats.',
        'Pour toute question, écrivez-nous sur WhatsApp avant de vous inscrire.',
      ],
    },
    cta: {
      title: 'Vous êtes intéressé(e) par une bourse ?',
      subtitle: 'Expliquez-nous votre situation et nous vous dirons laquelle vous convient le mieux.',
      primary: 'Demander ma bourse',
      secondary: 'Demander des informations générales',
    },
  },

  // ===========================================================================
  // ABOUT
  // ===========================================================================
  about: {
    eyebrow: 'À propos',
    title: 'Une académie née pour',
    titleAccent: 'inspirer l\'effort',
    subtitle:
      '"Streben" en allemand signifie aspirer, s\'efforcer, lutter pour atteindre ses objectifs. C\'est l\'esprit avec lequel nous avons ouvert cette académie.',
    history: {
      title: 'Notre histoire',
      body: [
        'STREBEN ACADEMY est née de sept années d\'expérience directe en tutorat personnalisé. Ce qui a commencé comme un accompagnement individuel s\'est consolidé en 2025 en une académie avec sa propre vision : un enseignement centré sur la personne, des méthodes britanniques et des bourses accessibles.',
        'Les premières générations débutent en janvier 2026. Nous misons sur les petits groupes, l\'évaluation qualitative des progrès et un suivi attentif qui se ressent dès le premier cours.',
      ],
    },
    founder: {
      eyebrow: 'Fondatrice',
      name: 'Arantza Molina',
      title: 'Fondatrice · Coordinatrice académique',
      bio: [
        'Ingénieure civile de formation. Ceinture noire 2e dan de taekwondo. Elle a participé à l\'IACES et à l\'ANEIC lors de ses années universitaires, où elle a appris à coordonner des équipes et des projets éducatifs.',
        'Depuis 2018, elle dispense des cours particuliers en anglais et dans les matières scientifiques. En 2025, elle rassemble cette expérience dans une académie à l\'identité propre : STREBEN.',
      ],
    },
    values: {
      title: 'Strive, Dream and Achieve',
      items: [
        { word: 'Strive', meaning: 'Persévérez. La constance ouvre des portes que le seul talent entrouvre.' },
        { word: 'Dream', meaning: 'Rêvez. Chaque objectif commence par une idée, alors visez haut.' },
        { word: 'Achieve', meaning: 'Réussissez. Nous accompagnons le processus pour que le résultat soit le vôtre.' },
      ],
    },
    mission: {
      title: 'Mission',
      body: 'Encourager chaque élève à atteindre son plein potentiel grâce à un enseignement personnalisé et axé sur les résultats, où ses objectifs, ses idées et ses aspirations sont au cœur de l\'apprentissage.',
    },
    vision: {
      title: 'Vision',
      body: 'Devenir une académie de référence qui transforme l\'éducation grâce à une approche personnalisée et dynamique, formant des personnes capables de s\'adapter à un monde en constante évolution.',
    },
  },

  // ===========================================================================
  // TESTIMONIALS
  // ===========================================================================
  testimonialsPage: {
    eyebrow: 'Témoignages',
    title: 'Histoires de ceux qui',
    titleAccent: 'sont déjà en chemin',
    subtitle:
      'Les premières générations débutent en janvier 2026. Bientôt, nous ajouterons les voix de nos élèves. En attendant, voici l\'esprit avec lequel nous enseignons.',
    placeholderTitle: 'Votre histoire pourrait être ici',
    placeholderBody:
      'Inscrivez-vous et faites partie de la première génération. Nous partagerons vos progrès avec fierté.',
    cta: 'Demander des informations',
  },

  // ===========================================================================
  // CONTACT
  // ===========================================================================
  contactPage: {
    eyebrow: 'Contact',
    title: 'Parlons-en.',
    titleAccent: 'C\'est gratuit et rapide.',
    subtitle:
      'Dites-nous pour qui est le cours (vous, votre enfant, votre adolescent) et quel est votre niveau actuel. Nous vous répondons dans les heures ouvrables.',
    form: {
      name: 'Votre nom',
      namePlaceholder: 'Comme vous aimez qu\'on vous appelle',
      email: 'Adresse e-mail',
      emailPlaceholder: 'vous@email.com',
      phone: 'WhatsApp',
      phonePlaceholder: '+52 ...',
      program: 'Quel programme vous intéresse ?',
      programOptions: ['Anglais pour enfants', 'Anglais pour adolescents', 'Anglais pour adultes', 'Tutorat à l\'heure', 'Je ne suis pas sûr(e)'],
      message: 'Dites-nous en plus',
      messagePlaceholder: 'Âge, niveau actuel, disponibilités horaires, questions...',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé ! Nous vous contacterons dans les plus brefs délais.',
      error: 'Une erreur s\'est produite. Veuillez réessayer ou écrivez-nous sur WhatsApp.',
      consent:
        'En envoyant ce formulaire, vous acceptez que nous vous contactions pour répondre à votre demande. Nous ne partageons pas vos données.',
    },
    direct: {
      title: 'Ou écrivez-nous directement',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      socialLabel: 'Réseaux sociaux',
    },
    hours: {
      title: 'Horaires d\'assistance',
      body: 'Du lundi au vendredi · 9 h 00 à 19 h 00 (heure du centre du Mexique).',
    },
  },

  // ===========================================================================
  // GALLERY & STUDENTS
  // ===========================================================================
  gallery: {
    eyebrow: 'Galerie',
    title: 'Moments à',
    titleAccent: 'STREBEN',
    subtitle:
      'Bientôt, nous partagerons des photos et vidéos de cours, d\'événements et de remises de prix. Suivez nos réseaux pour ne rien manquer.',
    placeholder: 'Nous préparons cette section. Les premiers cours débutent le 10 août 2026.',
  },
  students: {
    eyebrow: 'Élèves',
    title: 'Avis et',
    titleAccent: 'ressources',
    subtitle:
      'Informations rapides pour ceux qui font déjà partie de l\'académie : calendrier, horaires et liens utiles.',
    calendar: {
      title: 'Calendrier 2026',
      items: [
        { label: 'Pré-inscriptions', value: 'Du 1er juin au 27 juillet' },
        { label: 'Test de niveau', value: 'À coordonner individuellement' },
        { label: 'Début des cours', value: '10 août 2026' },
      ],
    },
    schedules: {
      title: 'Horaires',
      body: 'Les horaires sont publiés une fois la pré-inscription complétée. Demandez-nous les groupes disponibles pour votre niveau.',
    },
    contact: {
      title: 'Vous avez besoin d\'aide ?',
      body: 'Écrivez-nous sur WhatsApp ou à l\'adresse e-mail de l\'académie. Nous vous répondons dans les heures ouvrables.',
    },
  },

  // ===========================================================================
  // LEGAL
  // ===========================================================================
  legal: {
    privacy: {
      title: 'Politique de confidentialité',
      lastUpdate: 'Dernière mise à jour : juin 2026.',
      body: [
        'Chez STREBEN ACADEMY, nous respectons votre vie privée. Cette page explique quelles données nous collectons, comment nous les utilisons et quels sont vos droits.',
        'Nous collectons uniquement les données que vous partagez volontairement en remplissant le formulaire de contact ou en demandant des informations via WhatsApp : nom, e-mail, téléphone et le message que vous rédigez.',
        'Nous utilisons ces données pour vous contacter et répondre à votre demande. Nous ne les partageons pas avec des tiers extérieurs à l\'académie, ni à des fins publicitaires externes.',
        'Vous pouvez demander à tout moment la suppression de vos données en écrivant à streben.academy@gmail.com.',
        'Ce site peut utiliser des cookies techniques pour mémoriser vos préférences (langue, thème sombre). Nous n\'utilisons pas de cookies publicitaires par défaut. Si des outils d\'analyse sont activés à l\'avenir, cet avis sera mis à jour.',
      ],
    },
    terms: {
      title: 'Mentions légales',
      lastUpdate: 'Dernière mise à jour : juin 2026.',
      body: [
        'Le site strebenacademy.com est la propriété de STREBEN ACADEMY. Les images, textes, logos et contenus publiés sont la propriété de l\'académie ou de leurs concédants de licence, et sont protégés par les lois relatives à la propriété intellectuelle.',
        'Les informations publiées ont un caractère informatif. Les conditions d\'inscription, les tarifs et les bourses peuvent être mis à jour ; au moment de l\'inscription, les conditions définitives vous seront remises par écrit.',
        'Pour toute question sur l\'utilisation du site ou sur les contenus publiés, veuillez contacter streben.academy@gmail.com.',
      ],
    },
  },

  // ===========================================================================
  // FOOTER
  // ===========================================================================
  footer: {
    tagline: 'Strive, Dream and Achieve.',
    description:
      'Académie d\'anglais britannique en ligne en direct. Couverture : tout le Mexique.',
    navTitle: 'Navigation',
    coursesTitle: 'Cours',
    legalTitle: 'Mentions légales',
    contactTitle: 'Contact',
    rightsReserved: 'Tous droits réservés.',
    builtWith: 'Site conçu et développé avec passion.',
  },

  // ===========================================================================
  // ERRORS
  // ===========================================================================
  errors: {
    notFoundTitle: 'Page introuvable',
    notFoundBody:
      'Nous n\'avons pas trouvé ce que vous cherchiez. Il a peut-être été déplacé ou le lien est mal écrit. Voici quelques raccourcis.',
    backHome: 'Retour à l\'accueil',
  },
} as const satisfies Dictionary;
