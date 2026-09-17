import type { Locale } from '~/i18n/config';
import { defaultLocale, locales } from '~/i18n/config';

/**
 * Append a trailing slash to the path part of a URL, keeping any query or hash.
 * Matches `trailingSlash: 'always'` so internal links skip Cloudflare's 308 hop.
 */
export function withTrailingSlash(url: string): string {
  const [, path = '', suffix = ''] = url.match(/^([^?#]*)(.*)$/) ?? [];
  return (path.endsWith('/') ? path : `${path}/`) + suffix;
}

/**
 * Strip the locale prefix from a URL pathname. Returns the canonical path
 * (without leading locale segment) and the detected locale.
 */
export function splitLocaleFromPath(pathname: string): { locale: Locale; rest: string } {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const parts = clean.split('/').filter(Boolean);
  if (parts.length > 0 && (locales as readonly string[]).includes(parts[0]!)) {
    const locale = parts[0] as Locale;
    const rest = '/' + parts.slice(1).join('/');
    return { locale, rest: rest === '/' ? '/' : rest };
  }
  return { locale: defaultLocale, rest: clean };
}

/**
 * Switch the locale of the current pathname while preserving the rest of the
 * path. Default locale yields no prefix.
 */
export function switchLocale(pathname: string, target: Locale): string {
  const { rest } = splitLocaleFromPath(pathname);
  const cleanRest = rest === '/' ? '' : rest;
  if (target === defaultLocale) return withTrailingSlash(cleanRest || '/');
  return withTrailingSlash(`/${target}${cleanRest}`);
}

/**
 * Build a localized link for a known route. Use this when constructing nav
 * items — guarantees correct prefix per locale.
 */
export function loc(locale: Locale, route = ''): string {
  const clean = route.replace(/^\/+/, '');
  if (locale === defaultLocale) return withTrailingSlash(clean ? `/${clean}` : '/');
  return withTrailingSlash(clean ? `/${locale}/${clean}` : `/${locale}`);
}
