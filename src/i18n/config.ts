/**
 * STREBEN ACADEMY — i18n configuration
 * Default locale: es (no URL prefix). Others: /en, /fr, /pt.
 */

export const locales = ['es', 'en', 'fr', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeLabels: Record<Locale, { native: string; flag: string; htmlLang: string }> = {
  es: { native: 'Español', flag: '🇲🇽', htmlLang: 'es-MX' },
  en: { native: 'English', flag: '🇬🇧', htmlLang: 'en-GB' },
  fr: { native: 'Français', flag: '🇫🇷', htmlLang: 'fr-FR' },
  pt: { native: 'Português', flag: '🇧🇷', htmlLang: 'pt-BR' },
};

/**
 * Normalize locale param from Astro route. Catch-all routes pass `undefined`
 * for the default locale.
 */
export function resolveLocale(param: string | undefined): Locale {
  if (!param) return defaultLocale;
  return (locales as readonly string[]).includes(param) ? (param as Locale) : defaultLocale;
}

/**
 * Build a URL path for a given locale. Default locale gets no prefix.
 * Always returns a string starting with "/".
 */
export function localizedPath(locale: Locale, path = ''): string {
  const cleanPath = path.replace(/^\/+/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (!cleanPath) return prefix || '/';
  return `${prefix}/${cleanPath}`;
}

/**
 * For getStaticPaths — returns one entry per locale.
 * Default locale yields `lang: undefined` → root path.
 */
export function localePaths() {
  return locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}
