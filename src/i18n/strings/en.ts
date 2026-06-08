/**
 * STREBEN ACADEMY — strings in British English (en-GB).
 * Derived from es.ts. Do not add keys here; add them to es.ts first.
 */

import type { Dictionary } from './es';

export const en = {
  // ===========================================================================
  // META & NAV
  // ===========================================================================
  meta: {
    siteName: 'STREBEN ACADEMY',
    tagline: 'Live online British English classes',
    defaultDescription:
      'Live online British English academy serving all of Mexico. Children, teenagers and adults. Accessible scholarships, personalised approach.',
    motto: 'Strive, Dream and Achieve',
    yearFrom: 2025,
  },
  nav: {
    home: 'Home',
    about: 'About us',
    courses: 'Courses',
    scholarships: 'Scholarships',
    testimonials: 'Testimonials',
    gallery: 'Gallery',
    students: 'Students',
    contact: 'Contact',
    requestInfo: 'Request information',
    menu: 'Menu',
    closeMenu: 'Close menu',
    languageMenu: 'Change language',
    themeMenu: 'Change theme',
  },
  themes: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },

  // ===========================================================================
  // SHARED COMPONENTS
  // ===========================================================================
  whatsapp: {
    fabLabel: 'Chat with us on WhatsApp',
    fabText: 'Message us',
    prefilled: 'Hello STREBEN ACADEMY, I would like to receive information about your courses.',
  },
  cta: {
    primary: 'Request information',
    secondary: 'View courses',
    enroll: 'Pre-enrol',
    placementTest: 'Free placement test',
    requestScholarship: 'Apply for a scholarship',
    bookSession: 'Book a tutorial',
    seeAll: 'See all',
    learnMore: 'Learn more',
    downloadSyllabus: 'Download syllabus',
  },

  // ===========================================================================
  // HOME
  // ===========================================================================
  home: {
    hero: {
      eyebrow: 'British English · 100% live online · Mexico',
      titleLine1: 'English that',
      titleAccent: 'transforms',
      titleLine2: 'your life.',
      subtitle:
        'Live classes with British methodology, small groups and guidance that adapts to your pace. Classes start: 10 August 2026.',
      ctaPrimary: 'Message us on WhatsApp',
      ctaSecondary: 'View programmes',
      stat1: { value: '9', label: 'levels from A1 to C1' },
      stat2: { value: '7 years', label: 'of teaching experience' },
      stat3: { value: '100%', label: 'live online' },
      stat4: { value: 'MX', label: 'all across Mexico' },
    },
    marquee: {
      words: ['Strive', 'Dream', 'Achieve', 'British English', 'Online', 'Live'],
    },
    intro: {
      eyebrow: '01 — What makes us different',
      title: 'An academy built on',
      titleAccent: 'a human approach',
      titleEnd: ', British methodology and scholarships that open doors.',
      body: 'At STREBEN ACADEMY we work with discipline, responsibility and passion so that no skill is a barrier, but an opportunity for growth. Every class is designed for you to live the language, not merely study it.',
    },
    benefits: {
      eyebrow: '02 — Benefits',
      title: "What you'll find",
      titleAccent: 'right here',
      items: [
        {
          title: 'Real British English',
          body: 'Pronunciation, expressions and differences from American English. Stand out in an exam, an interview or on your travels.',
        },
        {
          title: 'Dynamic classes',
          body: 'Real-life situations, role play and up-to-date materials. You learn by speaking, not by memorising.',
        },
        {
          title: 'Close personal support',
          body: 'Small groups and individual attention. Your progress is measured and celebrated.',
        },
        {
          title: 'Accessible scholarships',
          body: 'Four discount options so that cost is never the reason you stop learning.',
        },
      ],
    },
    programs: {
      eyebrow: '03 — Programmes',
      title: 'A programme for',
      titleAccent: 'every age',
      subtitle: 'Three pathways, three levels each. Duration per level: 1 year 3 months.',
      kiddos: {
        name: 'Kiddos',
        ages: '7 — 11 years',
        description: 'They learn through play with Kids Box New Generation. Strong foundations from an early age.',
        levels: 'Basics · Beginner · High Beginner',
      },
      teens: {
        name: 'Teens',
        ages: '12 — 17 years',
        description: 'From A1 to C1 with topics they care about: culture, social media, official exams.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      adults: {
        name: 'Adults',
        ages: '18+ years',
        description: 'English for work, travel and certifications. Timetables that respect your schedule.',
        levels: 'Beginner · Intermediate · Advanced',
      },
      tutoring: {
        name: 'Tutorials',
        ages: 'All ages',
        description: 'English, mathematics, physics, chemistry, biology and civil engineering topics.',
        levels: 'MXN $120 per hour',
      },
    },
    scholarships: {
      eyebrow: '04 — Scholarships',
      title: "Cost shouldn't",
      titleAccent: 'hold you back',
      subtitle: 'Four non-cumulative scholarships. Ask us which one suits you best.',
      cta: 'Apply for my scholarship',
    },
    testimonials: {
      eyebrow: '05 — What students say',
      title: 'Real stories,',
      titleAccent: 'real results',
      empty: 'Testimonials from our first students will be added soon.',
    },
    finalCta: {
      eyebrow: '06 — Take the first step',
      title: 'Begin a',
      titleAccent: 'new language',
      titleEnd: ' this intake.',
      subtitle:
        'Pre-enrolments open from 1 June to 27 July 2026. Classes start on 10 August.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'Free placement test',
    },
  },

  // ===========================================================================
  // COURSES
  // ===========================================================================
  courses: {
    list: {
      title: 'Our courses',
      titleAccent: 'and programmes',
      subtitle:
        'Three English pathways — Kiddos, Teens and Adults — plus English tutorials and other subjects.',
      kiddosSectionTitle: 'English for Kiddos',
      kiddosSubtitle: 'Children aged 7 to 11. Material: Kids Box New Generation.',
      teensSectionTitle: 'English for Teens',
      teensSubtitle: 'Teenagers aged 12 to 17. From A1 to C1.',
      adultsSectionTitle: 'English for Adults',
      adultsSubtitle: 'Ages 18 and above. English for work, travel and certifications.',
      tutoringSectionTitle: 'Hourly tutorials',
      tutoringSubtitle: 'MXN $120/hr. English and other subjects by level.',
    },
    detail: {
      programLabel: 'Programme',
      levelLabel: 'Level',
      cefrLabel: 'CEFR framework',
      agesLabel: 'Ages',
      durationLabel: 'Duration',
      modalityLabel: 'Modality',
      modality: '100% live online',
      whatYoullLearn: 'What will you learn?',
      materials: 'Learning materials',
      next: 'Next level',
      prev: 'Previous level',
      ctaTitle: 'Ready to get started?',
      ctaSubtitle:
        'Contact us on WhatsApp or book your free placement test to find your perfect level.',
    },
    placeholder: 'Details for this course will be published shortly.',
  },

  // ===========================================================================
  // SCHOLARSHIPS
  // ===========================================================================
  scholarshipsPage: {
    eyebrow: 'Scholarships',
    title: 'Four pathways',
    titleAccent: 'to a scholarship',
    subtitle:
      'They are non-cumulative: you choose the one that suits you most. They apply during pre-enrolment and last the entire intake.',
    items: [
      {
        name: 'Academic Achievement Scholarship',
        discount: '15%',
        requirement: 'Cumulative academic average of 85/100 or above.',
        howTo:
          'Send us your official report card or certificate via WhatsApp. Available to students currently enrolled in active education.',
      },
      {
        name: 'Family Scholarship',
        discount: '15%',
        requirement: '2 or more immediate family members enrolled at the same time.',
        howTo:
          'Enrol together: the scholarship applies to all members registered in the same intake.',
      },
      {
        name: 'Referral Scholarship',
        discount: '10%',
        requirement: 'A non-family referee enrols following your recommendation.',
        howTo:
          'Your referee must mention your full name when pre-enrolling. Your discount is applied to the following month\'s fee.',
      },
      {
        name: 'Full Learning Scholarship',
        discount: '15%',
        requirement: 'Simultaneous enrolment in 2 or more courses.',
        howTo:
          'Applies if you take, for example, English plus tutorials, or two different levels in parallel.',
      },
    ],
    rules: {
      title: 'Rules at a glance',
      items: [
        'Scholarships are non-cumulative: you choose only one.',
        'They apply to the monthly fee, not to enrolment or materials.',
        'They remain in place as long as the student maintains attendance and academic progress.',
        'If you have any questions, please ask us on WhatsApp before enrolling.',
      ],
    },
    cta: {
      title: 'Interested in a scholarship?',
      subtitle: 'Tell us your situation and we will advise which one suits you best.',
      primary: 'Apply for my scholarship',
      secondary: 'Request general information',
    },
  },

  // ===========================================================================
  // ABOUT
  // ===========================================================================
  about: {
    eyebrow: 'About us',
    title: 'An academy born to',
    titleAccent: 'inspire you to strive',
    subtitle:
      '"Streben" in German means to aspire, to strive, to pursue goals. That is the spirit with which we opened this academy.',
    history: {
      title: 'Our story',
      body: [
        'STREBEN ACADEMY was born from seven years of direct experience providing personalised tutorials. What started as one-to-one support was consolidated in 2025 into an academy with its own vision: person-centred teaching, British methods and accessible scholarships.',
        'The first intakes begin in January 2026. We are committed to small groups, qualitative assessment of progress and close support that is evident from the very first class.',
      ],
    },
    founder: {
      eyebrow: 'Founder',
      name: 'Arantza Molina',
      title: 'Founder · Academic Coordinator',
      bio: [
        'Civil engineer by training. Black belt 2nd dan in taekwondo. Participated in IACES and ANEIC during her university years, where she learnt to coordinate teams and educational projects.',
        'Since 2018 she has provided personalised tutorials in English and exact sciences. In 2025 she brought that experience together in an academy with its own identity: STREBEN.',
      ],
    },
    values: {
      title: 'Strive, Dream and Achieve',
      items: [
        { word: 'Strive', meaning: 'Work hard. Consistency opens doors that talent alone can only glimpse.' },
        { word: 'Dream', meaning: 'Dream big. Every goal begins as an idea, so aim high.' },
        { word: 'Achieve', meaning: 'Accomplish. We support the journey so the result is truly yours.' },
      ],
    },
    mission: {
      title: 'Mission',
      body: 'To empower every student to reach their full potential through personalised, results-focused teaching, where their goals, ideas and aspirations are at the heart of the learning process.',
    },
    vision: {
      title: 'Vision',
      body: 'To become a leading academy that transforms education through a personalised and dynamic approach, shaping people who are capable of adapting to a constantly changing world.',
    },
  },

  // ===========================================================================
  // TESTIMONIALS
  // ===========================================================================
  testimonialsPage: {
    eyebrow: 'Testimonials',
    title: 'Stories from those who',
    titleAccent: 'are already on the journey',
    subtitle:
      'The first intakes begin in January 2026. Student voices will be added soon. For now, we share the spirit with which we teach.',
    placeholderTitle: 'Your story could be here',
    placeholderBody:
      'Enrol and become part of the first intake. We will share your progress with pride.',
    cta: 'Request information',
  },

  // ===========================================================================
  // CONTACT
  // ===========================================================================
  contactPage: {
    eyebrow: 'Contact',
    title: "Let's talk.",
    titleAccent: "It's free and quick.",
    subtitle:
      'Tell us who the course is for (you, your child, your teenager) and your starting level. We reply within business hours.',
    form: {
      name: 'Your name',
      namePlaceholder: 'What you like to be called',
      email: 'Email address',
      emailPlaceholder: 'you@email.com',
      phone: 'WhatsApp',
      phonePlaceholder: '+52 ...',
      program: 'Which programme interests you?',
      programOptions: ['English for children', 'English for teenagers', 'English for adults', 'Hourly tutorials', "I'm not sure"],
      message: 'Tell us more',
      messagePlaceholder: 'Age, current level, available times, questions…',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent! We will be in touch shortly.',
      error: 'Something went wrong. Please try again or message us on WhatsApp.',
      consent:
        'By submitting, you agree to us contacting you to answer your enquiry. We do not share your data.',
    },
    direct: {
      title: 'Or contact us directly',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      socialLabel: 'Social media',
    },
    hours: {
      title: 'Office hours',
      body: 'Monday to Friday · 9:00 to 19:00 (Mexico City time).',
    },
  },

  // ===========================================================================
  // GALLERY & STUDENTS
  // ===========================================================================
  gallery: {
    eyebrow: 'Gallery',
    title: 'Moments at',
    titleAccent: 'STREBEN',
    subtitle:
      'Photos and videos of classes, events and achievements will be shared soon. Follow our social media so you do not miss a thing.',
    placeholder: 'We are preparing this section. The first classes start on 10 August 2026.',
  },
  students: {
    eyebrow: 'Students',
    title: 'Notices and',
    titleAccent: 'resources',
    subtitle:
      'Quick information for those already part of the academy: calendar, timetables and useful links.',
    calendar: {
      title: '2026 Calendar',
      items: [
        { label: 'Pre-enrolments', value: 'From 1 June to 27 July' },
        { label: 'Placement test', value: 'To be arranged individually' },
        { label: 'Classes start', value: '10 August 2026' },
      ],
    },
    schedules: {
      title: 'Timetables',
      body: 'Timetables are published once pre-enrolment is complete. Ask us about available groups for your level.',
    },
    contact: {
      title: 'Need anything?',
      body: 'Message us on WhatsApp or email the academy. We reply within business hours.',
    },
  },

  // ===========================================================================
  // LEGAL
  // ===========================================================================
  legal: {
    privacy: {
      title: 'Privacy policy',
      lastUpdate: 'Last updated: June 2026.',
      body: [
        'At STREBEN ACADEMY we respect your privacy. This page explains what data we collect, how we use it and your rights.',
        'We collect only the data you share voluntarily when submitting the contact form or requesting information via WhatsApp: name, email, phone number and the message you write.',
        'We use that data to contact you and respond to your enquiry. We do not share it with third parties unrelated to the academy\'s operation, nor do we use it for external advertising purposes.',
        'You may request the deletion of your data at any time by writing to streben.academy@gmail.com.',
        'This site may use technical cookies to remember your preferences (language, dark mode). We do not use advertising cookies by default. If analytical tools are activated in the future, this notice will be updated.',
      ],
    },
    terms: {
      title: 'Legal notice',
      lastUpdate: 'Last updated: June 2026.',
      body: [
        'The site strebenacademy.com is owned by STREBEN ACADEMY. Images, texts, logos and published content are the property of the academy or their respective licensors and are protected by intellectual property law.',
        'The information published is for informational purposes only. Enrolment conditions, prices and scholarships may be updated; the definitive conditions are provided in writing at the time of enrolment.',
        'Any questions regarding the use of the site or its published content may be directed to streben.academy@gmail.com.',
      ],
    },
  },

  // ===========================================================================
  // FOOTER
  // ===========================================================================
  footer: {
    tagline: 'Strive, Dream and Achieve.',
    description:
      'Live online British English academy. Coverage: all across Mexico.',
    navTitle: 'Navigation',
    coursesTitle: 'Courses',
    legalTitle: 'Legal',
    contactTitle: 'Contact',
    rightsReserved: 'All rights reserved.',
    builtWith: 'Site designed and developed with care.',
  },

  // ===========================================================================
  // ERRORS
  // ===========================================================================
  errors: {
    notFoundTitle: 'Page not found',
    notFoundBody:
      "We couldn't find what you were looking for. It may have been moved or the link may be incorrect. Here are some shortcuts.",
    backHome: 'Back to home',
  },
} satisfies Dictionary;
