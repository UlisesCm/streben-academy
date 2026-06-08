// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://www.strebenacademy.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/aviso-legal') &&
        !page.includes('/politica-de-privacidad') &&
        !page.includes('/configuracion-de-cookies'),
      changefreq: 'monthly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
          fr: 'fr-FR',
          pt: 'pt-BR',
        },
      },
    }),
  ],
  vite: {
    // Cast around minor Vite Plugin version mismatch between Astro's bundled Vite
    // and @tailwindcss/vite's peer. Runtime works; type shape only differs cosmetically.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
