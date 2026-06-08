import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from '~/i18n/config';
import { defaultLocale } from '~/i18n/config';

export type Course = CollectionEntry<'courses'>;

const PROGRAM_ORDER: Course['data']['program'][] = ['kiddos', 'teens', 'adults', 'tutoring'];

export async function getCoursesByLocale(locale: Locale): Promise<Course[]> {
  const all = await getCollection('courses', ({ data }) => !data.draft);
  const byLocale = all.filter((c) => c.data.locale === locale);
  if (byLocale.length > 0) return byLocale;
  return all.filter((c) => c.data.locale === defaultLocale);
}

export function groupByProgram(courses: Course[]) {
  const groups = new Map<Course['data']['program'], Course[]>();
  for (const p of PROGRAM_ORDER) groups.set(p, []);
  for (const c of courses) {
    const list = groups.get(c.data.program) ?? [];
    list.push(c);
    groups.set(c.data.program, list);
  }
  for (const [, list] of groups) {
    list.sort((a, b) => a.data.levelOrder - b.data.levelOrder);
  }
  return groups;
}

export function sortByOrder(courses: Course[]) {
  return [...courses].sort((a, b) => {
    const p = PROGRAM_ORDER.indexOf(a.data.program) - PROGRAM_ORDER.indexOf(b.data.program);
    if (p !== 0) return p;
    return a.data.levelOrder - b.data.levelOrder;
  });
}
