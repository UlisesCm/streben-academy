/**
 * STREBEN ACADEMY — site-wide constants and helpers (URLs, contact, social).
 */

export const SITE = {
  url: 'https://www.strebenacademy.com',
  name: 'STREBEN ACADEMY',
  shortName: 'STREBEN',
  defaultLocale: 'es-MX',
  yearFounded: 2025,
} as const;

export const CONTACT = {
  whatsappRaw: '527531441156',
  whatsappDisplay: '+52 753 144 1156',
  phone: '7531441156',
  email: 'streben.academy@gmail.com',
  city: 'México',
  country: 'MX',
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/streben.academy',
  instagram: 'https://www.instagram.com/streben.academy',
} as const;

export const FORMS = {
  preinscripcion: 'https://forms.gle/usGBowcheFq9n3tBA',
  examenColocacion: 'https://forms.gle/fLewGUgea35L9g1E9',
  solicitarBeca: 'https://forms.gle/u7wChFhaMGxaecQ89',
  reservarAsesoria:
    'https://docs.google.com/forms/d/e/1FAIpQLSfP4NrwNIEj9r9lMpirdZUUsiz_vCzkmNa9ZTHmwXIlugMt9w/viewform',
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject = '', body = ''): string {
  const qs = new URLSearchParams();
  if (subject) qs.set('subject', subject);
  if (body) qs.set('body', body);
  const tail = qs.toString();
  return `mailto:${CONTACT.email}${tail ? `?${tail}` : ''}`;
}
