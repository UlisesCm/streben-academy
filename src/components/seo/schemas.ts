import { SITE, CONTACT, SOCIAL } from '~/lib/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/img/logo.png`,
    image: `${SITE.url}/og-default.svg`,
    description:
      'Academia de inglés británico online en vivo para toda la república mexicana. Niños, adolescentes y adultos.',
    foundingDate: '2025',
    founders: [
      {
        '@type': 'Person',
        name: 'Arantza Molina',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+52' + CONTACT.phone,
        email: CONTACT.email,
        availableLanguage: ['Spanish', 'English'],
      },
    ],
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['es-MX', 'en-GB', 'fr-FR', 'pt-BR'],
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

interface CourseSchemaInput {
  title: string;
  description: string;
  url: string;
  program: string;
  level: string;
  cefr?: string;
  ages: string;
  duration: string;
  locale?: string;
}

export function courseSchema(c: CourseSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.title,
    description: c.description,
    url: c.url,
    inLanguage: c.locale ?? 'es-MX',
    provider: { '@id': `${SITE.url}/#organization` },
    educationalLevel: c.cefr ?? c.level,
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: c.program,
      audienceType: c.ages,
    },
    timeRequired: c.duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: c.duration,
    },
  };
}

interface FAQSchemaInput {
  questions: Array<{ q: string; a: string }>;
}

export function faqSchema({ questions }: FAQSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
}

export function personSchema(p: PersonSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.jobTitle,
    description: p.description,
    url: p.url,
    worksFor: { '@id': `${SITE.url}/#organization` },
  };
}
