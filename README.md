# STREBEN ACADEMY — sitio web v2

Sitio oficial de **STREBEN ACADEMY**: academia de inglés británico online en vivo para toda la república mexicana.

> "Strive, Dream and Achieve."

Reescritura limpia del sitio Jimdo previo (ver `audit/REPORT.md`). Stack moderno, SEO completo, multi-idioma, dark mode.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 (SSG estático) |
| Estilos | Tailwind CSS v4 (CSS-first con `@theme`) |
| Contenido | MDX en Content Collections (Zod schemas) |
| Tipografía | Paytone One (display) + Poppins (texto), self-hosted vía `@fontsource` |
| Iconos | `lucide-astro` |
| i18n | es (default), en, fr, pt — rutas catch-all `[...lang]/` |
| Dark mode | Tailwind v4 `@custom-variant dark`, toggle persistente sin FOUC |
| Forms | Web3Forms (sin backend) → `streben.academy@gmail.com` |
| Deploy | Cloudflare Pages (build estático) |

Detalles y razones en [`CLAUDE.md`](./CLAUDE.md) §4.

---

## Quickstart

Requisitos: Node ≥ 20, [Bun](https://bun.sh) ≥ 1.x.

```bash
bun install
bun run dev          # → http://localhost:4321
```

Build estático:

```bash
bun run build        # → dist/
bun run preview      # → http://localhost:4322 sirviendo dist/
```

Type-check + diagnósticos Astro:

```bash
bun run check
```

---

## Estructura

```
src/
├── components/
│   ├── ui/                # Button, Container, Section, Chip, Eyebrow, Card, SectionHeading
│   ├── sections/          # Hero, Marquee, Benefits, Programs, Scholarships, Testimonials, FinalCta
│   ├── pages/             # HomePage, CursosPage, BecasPage, ContactoPage, ...
│   ├── seo/               # SeoMeta, JsonLd, schemas
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Logo.astro
│   ├── WhatsAppFab.astro
│   ├── ThemeToggle.astro
│   └── LanguageSwitcher.astro
├── content/
│   ├── config.ts          # Zod schemas (courses, testimonios)
│   ├── courses/           # 9 niveles + 4 asesorías (MDX)
│   └── testimonios/       # MDX
├── i18n/
│   ├── config.ts          # locales, defaultLocale, helpers
│   ├── index.ts           # useTranslations()
│   └── strings/{es,en,fr,pt}.ts
├── layouts/
│   └── BaseLayout.astro   # head, SEO, header, footer, FAB
├── lib/                   # courses, testimonios, site, url helpers
├── pages/
│   ├── [...lang]/         # rutas para todos los locales
│   │   ├── index.astro
│   │   ├── cursos/
│   │   ├── becas.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── testimonios.astro
│   │   ├── contacto.astro
│   │   ├── galeria.astro
│   │   ├── alumnos.astro
│   │   ├── aviso-legal.astro
│   │   └── politica-de-privacidad.astro
│   └── 404.astro
└── styles/
    └── global.css         # tokens, @theme, utilities
public/
├── _redirects             # redirects 301 desde Jimdo (Cloudflare)
├── robots.txt
├── site.webmanifest
├── og-default.svg
└── favicon.svg
```

---

## Convenciones de routing

Cada ruta vive en `src/pages/[...lang]/<ruta>.astro`. El catch-all genera:

| Locale | Ruta |
|--------|------|
| `es` (default) | `/`, `/cursos`, `/becas`, ... |
| `en` | `/en`, `/en/cursos`, ... |
| `fr` | `/fr`, `/fr/cursos`, ... |
| `pt` | `/pt`, `/pt/cursos`, ... |

`getStaticPaths` se resuelve con `localePaths()` (de `src/i18n/config.ts`), que devuelve `{ lang: undefined }` para el default.

---

## Variables de entorno

Copia `.env.example` a `.env` y rellena.

| Variable | Para qué | Estado |
|----------|----------|--------|
| `PUBLIC_WEB3FORMS_KEY` | Form de contacto | **pendiente del cliente** — alta gratuita en [web3forms.com](https://web3forms.com), apuntar a `streben.academy@gmail.com` |
| `PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 | pendiente del cliente |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel | pendiente del cliente |

Cloudflare Pages: configurar las mismas en el panel del proyecto.

---

## Contenido editable

### Agregar / editar un curso

Archivos en `src/content/courses/*.mdx`. Schema en `src/content/config.ts`. Frontmatter obligatorio: `title`, `program` (kiddos|teens|adults|tutoring), `level`, `levelOrder`, `ages`, `duration`, `summary`, `color`, `locale`.

Skill disponible: **`/streben-new-course`** (asistido en Claude Code).

### Agregar un testimonio

Archivos en `src/content/testimonios/*.mdx`. Schema en `src/content/config.ts`. Frontmatter: `name`, `program`, `level?`, `age?`, `rating`, `date`, `quote`, `featured?`, `locale`.

Skill: **`/streben-new-testimonio`**.

### Validar SEO de una página

Skill: **`/streben-seo-check`** — recorre el build local y verifica title, description, canonical, OG, JSON-LD por página.

---

## Deploy a Cloudflare Pages

El proyecto vive en Cloudflare Pages: **`streben-academy`** → https://streben-academy.pages.dev

### Automático (lo normal)

Todo push a `main` dispara `.github/workflows/deploy.yml`, que instala, corre `bun run check`,
buildea y publica. No hay que hacer nada a mano.

Requiere dos secrets en el repo (Settings → Secrets → Actions):

| Secret | Valor |
|--------|-------|
| `CLOUDFLARE_ACCOUNT_ID` | ID de la cuenta de Cloudflare |
| `CLOUDFLARE_API_TOKEN` | Token con permiso `Cloudflare Pages: Edit` |

### Manual (respaldo)

```bash
bun run deploy   # build + wrangler pages deploy dist --project-name streben-academy
```

Requiere `bunx wrangler login` previo.

### Dominio

`strebenacademy.com` todavía **no está conectado** — la transferencia sigue pendiente.
Cuando llegue: agregarlo como zona en Cloudflare, apuntar `www` al proyecto de Pages y
dejar el apex redirigiendo a `www`. Detalle en la skill **`/streben-deploy-cf`**.

---

## SEO checklist (§7 de CLAUDE.md)

Por página, todos los puntos deben cumplirse antes de mergear. El skill `/streben-seo-check` los valida automáticamente, pero los recordatorios:

- [ ] `<title>` único, < 60 chars, `[Página] | STREBEN ACADEMY`
- [ ] `meta description` 140-160 chars
- [ ] `link rel=canonical` URL absoluta `www.strebenacademy.com/...`
- [ ] `hreflang` para los 4 locales + `x-default`
- [ ] OG: title, description, image, url, type, locale
- [ ] Twitter Card `summary_large_image`
- [ ] `<h1>` único con keyword
- [ ] JSON-LD apropiado (Organization, Course, FAQ, Review, Person según página)
- [ ] Lighthouse SEO ≥ 95, A11y ≥ 95

---

## Pendientes del cliente (bloquean piezas concretas)

- [ ] **Logo** SVG / PNG transparente HD → reemplazar `src/components/Logo.astro`.
- [ ] **Foto de Arantza Molina** → reemplazar placeholder en `/sobre-nosotros`.
- [ ] **Fotos / video propios** → `/galeria`.
- [ ] **Decisión de email corporativo** (`contacto@strebenacademy.com` vs Gmail).
- [ ] **API key Web3Forms** → `.env`.
- [ ] **Cuenta Cloudflare Pages** lista para conectar repo.
- [ ] **Texto definitivo** de aviso legal y política de privacidad (los actuales son base; revisar).
- [ ] **Cuentas GA4 + Meta Pixel** cuando decidan instalarlos.

---

## Performance budgets

| Métrica | Objetivo |
|---------|----------|
| LCP | < 2.5s en 4G |
| CLS | < 0.1 |
| HTML inicial | < 50 KB gzip |
| JS total | < 80 KB gzip |
| Lighthouse SEO | ≥ 95 |
| Lighthouse A11y | ≥ 95 |

---

## Licencia

Propiedad de STREBEN ACADEMY. Todos los derechos reservados.
