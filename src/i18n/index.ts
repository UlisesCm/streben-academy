import { es, type Dictionary } from './strings/es';
import { en } from './strings/en';
import { fr } from './strings/fr';
import { pt } from './strings/pt';
import type { Locale } from './config';

const dictionaries: Record<Locale, Dictionary> = { es, en, fr, pt };

export type { Dictionary } from './strings/es';
export { locales, defaultLocale, localeLabels, resolveLocale, localizedPath, localePaths } from './config';
export type { Locale } from './config';

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
