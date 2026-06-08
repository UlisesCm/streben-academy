import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from '~/i18n/config';
import { defaultLocale } from '~/i18n/config';

export type Testimonio = CollectionEntry<'testimonios'>;

export async function getTestimoniosByLocale(locale: Locale): Promise<Testimonio[]> {
  const all = await getCollection('testimonios');
  const byLocale = all.filter((t) => t.data.locale === locale);
  const list = byLocale.length > 0 ? byLocale : all.filter((t) => t.data.locale === defaultLocale);
  return list.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getFeaturedTestimonios(locale: Locale, limit = 3): Promise<Testimonio[]> {
  const all = await getTestimoniosByLocale(locale);
  const featured = all.filter((t) => t.data.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}
