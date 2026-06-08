# CLAUDE.md — STREBEN ACADEMY (sitio web)

> Documento maestro del proyecto. Único contexto persistente del repo; cualquier decisión que sobreviva más de una sesión vive aquí.

---

## 0. Resumen ejecutivo

**Misión del proyecto:** construir el nuevo sitio web público de **STREBEN ACADEMY** — academia de inglés online en vivo (toda la república mexicana) con enfoque británico y modelo de becas accesibles.

**Por qué se reescribe:** el sitio actual (Jimdo) tiene problemas críticos de SEO, accesibilidad y conversión documentados en [`audit/REPORT.md`](./audit/REPORT.md) (auditoría 2026-06-08). Migrar a stack moderno permite controlar `<head>`, performance, schema.org y costos.

**Entregable:** repo con código listo para `git push` → Cloudflare Pages. El usuario maneja dominio, DNS y deploy.

**Estado:** greenfield. No hay package.json todavía.

---

## 1. Negocio

### 1.1 Identidad

| Campo | Valor |
|-------|-------|
| Nombre legal | **STREBEN ACADEMY** (todo en mayúsculas en la marca) |
| Tagline corto | "Clases de Inglés" |
| Tagline largo (propuesto) | "Inglés británico, accesible y para toda la familia" |
| Lema | **Strive, Dream and Achieve** |
| Etimología | "Streben" (alemán) = aspirar / esforzarse / luchar por alcanzar metas |
| Fundadora | **Arantza Molina** (ingeniera civil; cinta negra 2° dan taekwondo; ex IACES, ANEIC) |
| Año de consolidación | 2025 (primeras clases en enero 2026) |
| Modalidad | **Online en vivo** |
| Cobertura | **Toda la república mexicana** |
| Idioma de enseñanza | Inglés (lengua materna: español) |
| Público | Niños (7-11), adolescentes (12-17), adultos (18+) |

### 1.2 Misión, visión y valores

- **Misión:** "Impulsar a cada alumno a alcanzar su máximo potencial mediante una enseñanza personalizada y enfocada en resultados, donde sus objetivos, ideas y aspiraciones son el centro del aprendizaje. Trabajamos con disciplina, responsabilidad y pasión para que ninguna habilidad sea una barrera, sino una oportunidad de crecimiento."
- **Visión:** "Convertirnos en una academia líder que transforme la educación a través de un enfoque personalizado y dinámico, impactando la vida de miles de estudiantes y formando personas capaces de adaptarse a un mundo en constante cambio, demostrando que con disciplina y acompañamiento adecuado no existen límites para el crecimiento personal y académico."
- **Valores:** Strive, Dream and Achieve.

### 1.3 Diferenciadores

1. Enseñanza con **enfoque británico** (poco común en MX) integrando diferencias vs americano.
2. Clases **dinámicas y divertidas** con situaciones reales.
3. **Becas accesibles** (4 modalidades, ver §2.3).
4. **7 años de experiencia** previa de la fundadora dando asesorías (2018-2025).

---

## 2. Oferta académica

### 2.1 Programas de inglés (1 año 3 meses por nivel)

| Programa | Edades | Niveles |
|----------|--------|---------|
| **English for Adults** | 18+ | Beginner (A1-A2), Intermediate (B1-B1+), Advanced (B2-C1) |
| **English for Teens** | 12-17 | Beginner (A1-A2), Intermediate (B1-B1+), Advanced (B2-C1) |
| **English for Kiddos** | 7-11 | Basics (Inicial), Beginner (A1), High Beginner (A2). Material: Kids Box New Generation. |

### 2.2 Asesorías ($120 MXN / hora — único precio público)

- Inglés (todas las edades)
- Matemáticas (Primaria, Secundaria, Preparatoria)
- Física / Química / Biología (Secundaria, Preparatoria)
- Temas selectos de Ingeniería Civil

### 2.3 Becas (no acumulables)

| Beca | Descuento | Requisito |
|------|-----------|-----------|
| Aprovechamiento | 15% | Promedio acumulado ≥ 85/100 |
| Familiares | 15% | 2 o más familiares inscritos simultáneamente |
| Recomendación | 10% | Referido no familiar se inscribe (aplica al que recomienda) |
| Full Learning | 15% | Inscripción simultánea en 2+ cursos |

### 2.4 Calendario operativo 2026

- **Preinscripciones:** 1 jun – 27 jul 2026
- **Inicio de clases:** 10 ago 2026

### 2.5 Política de precios en el sitio

- **NO publicar precios de programas regulares.** CTA = "Pedir informes".
- **SÍ publicar precio asesorías** ($120 MXN/hr) — ya es público.

---

## 3. Contacto

| Canal | Valor | Notas |
|-------|-------|-------|
| WhatsApp | **+52 753 144 1156** | wa.me/527531441156 |
| Teléfono | 753 144 1156 | Mismo número |
| Email | streben.academy@gmail.com | Migrar a dominio propio a futuro |
| Facebook | facebook.com/streben.academy | |
| Instagram | instagram.com/streben.academy | |
| Dirección física | N/A | Solo online |

**Formularios externos vigentes (a unificar / migrar):**
- Preinscripción oficial: `https://forms.gle/usGBowcheFq9n3tBA`
- Preinscripción legacy: `https://forms.gle/U4UKbrSvFvBg92rx6` ⚠️ eliminar
- Examen de colocación: `https://forms.gle/fLewGUgea35L9g1E9`
- Solicitar beca: `https://forms.gle/u7wChFhaMGxaecQ89`
- Reservar asesoría: `https://docs.google.com/forms/d/e/1FAIpQLSfP4NrwNIEj9r9lMpirdZUUsiz_vCzkmNa9ZTHmwXIlugMt9w/viewform`

---

## 4. Stack técnico (decidido 2026-06-08)

| Capa | Tecnología | Por qué |
|------|------------|---------|
| Framework | **Astro 5** | SSG por defecto, Lighthouse 95+, islands para interactividad puntual. MDX para definir cursos como contenido. |
| Estilos | **Tailwind CSS v4** | Utility-first, integración nativa con Astro. |
| Componentes UI | Componentes Astro propios | Sin libs pesadas. Si hace falta interactividad: islas con vanilla JS o React puntual. |
| Tipografía | **Paytone One** (titulares) + **Poppins** (texto) | Definidas por la marca. Cargar vía `@fontsource`. |
| Contenido cursos/testimonios | MDX en `src/content/` | Editable sin tocar componentes; Content Collections de Astro con schema Zod. |
| Iconos | **Lucide** (`lucide-astro` o SVG inline) | Liviano, consistente. |
| Formulario | **Web3Forms** (free, 250/mes) → `streben.academy@gmail.com` + **WhatsApp directo** (wa.me con mensaje prellenado) | Sin backend. Dos vías de contacto. |
| Imágenes | `astro:assets` (`<Image>`) | Optimización automática AVIF/WebP, lazy load. |
| SEO | Meta tags + JSON-LD desde día 1: `EducationalOrganization`, `Course`, `Person`, `Review`, `FAQPage` | Aprende del audit: cada página con `<title>`, `meta description` 140-160 chars, `canonical`, OG, Twitter Card. |
| Sitemap | `@astrojs/sitemap` | Auto, con `lastmod`. |
| Robots | `public/robots.txt` apuntando a `https://www.strebenacademy.com/sitemap-index.xml` (con `www`, NO al apex). |
| Deploy | **Cloudflare Pages** (adapter `@astrojs/cloudflare`) | Free tier amplio, CDN global, mover DNS desde Jimdo. |
| Analítica | Slots preparados para GA4 + Meta Pixel (no instalados al lanzamiento — pendiente del cliente). | |

### 4.1 Versiones objetivo

- Node ≥ 20
- Astro ^5
- Tailwind ^4
- Package manager: **bun** (no npm, no pnpm, no yarn — más rápido, lockfile `bun.lockb`)

---

## 5. Identidad visual

### 5.1 Paleta

Morado pastel + colores pastel complementarios. Tono: **formal pero divertido**.

Propuesta inicial (a refinar contra logo en alta):

```css
--brand-primary:   #B39DDB;  /* morado pastel principal */
--brand-primary-2: #9575CD;  /* morado más saturado para CTAs */
--brand-accent:    #FFCDD2;  /* rosa pastel */
--brand-accent-2:  #C8E6C9;  /* verde pastel */
--brand-accent-3:  #FFF9C4;  /* amarillo pastel */
--brand-ink:       #2D1B4E;  /* morado oscuro para texto */
--brand-paper:     #FAF7FF;  /* fondo claro lila */
```

Validar con logo cuando llegue en SVG/PNG.

### 5.2 Tipografía

- **Titulares (h1, h2, h3, hero):** `Paytone One`.
- **Texto (body, párrafos, UI):** `Poppins` (400/500/600/700).

Cargar vía `@fontsource/paytone-one` y `@fontsource/poppins` (self-host, no Google Fonts CDN — mejor performance y privacidad).

### 5.3 Tono de comunicación

Formal + cercano + motivacional. Español MX.

---

## 6. Estructura del sitio

```
/                         Home (hero, beneficios, cursos preview, becas, testimonios, CTA)
/sobre-nosotros           Historia + Fundadora + Logo/Marca
/cursos                   Listado de los 3 programas + asesorías
/cursos/[slug]            Detalle de cada nivel (9 niveles + 4 asesorías)
/becas                    Las 4 becas con condiciones
/testimonios              Reseñas (rename desde "galería-y-testimonios")
/galeria                  Fotos (cuando tengamos material — placeholder por ahora)
/alumnos                  Avisos, horarios, calendario (estática, sin login)
/contacto                 NAP completo (email, WhatsApp, formulario) + botón flotante WhatsApp en todo el sitio
/aviso-legal              Texto legal
/politica-de-privacidad   Texto legal
```

**Redirects 301 (vs sitio Jimdo) — definir en `public/_redirects`:**
- `/cursos-y-programas/` → `/cursos`
- `/galeria-y-testimonios/` → `/testimonios`
- `/sobre-nosotros/` mismo path
- resto: mismo path

### 6.1 Páginas excluidas del sitemap

`/aviso-legal`, `/politica-de-privacidad`, `/configuracion-de-cookies` (no aportan SEO, sí indexables pero `priority: 0`).

---

## 7. SEO — checklist por página (NO romper)

Cada página DEBE cumplir antes de mergear:

- [ ] Un único `<h1>` con keyword + propuesta.
- [ ] `<title>` único, < 60 caracteres, formato `[Página] | STREBEN ACADEMY`.
- [ ] `meta description` única, 140-160 caracteres, con CTA.
- [ ] `<link rel="canonical">` apuntando a la URL absoluta `www.strebenacademy.com/...`.
- [ ] OG: `og:title`, `og:description`, `og:image` (específica por página, 1200×630), `og:url`, `og:type`.
- [ ] Twitter Card: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] Todas las `<img>` con `alt` significativo (decorativas: `alt=""` explícito).
- [ ] Headings en orden jerárquico (h1 → h2 → h3, sin saltos).
- [ ] JSON-LD apropiado (ver §7.1).
- [ ] Lighthouse SEO ≥ 95, Accessibility ≥ 95.

### 7.1 JSON-LD por página

| Página | Schemas |
|--------|---------|
| `/` (home) | `EducationalOrganization` + `WebSite` |
| `/cursos` | `ItemList` de `Course` |
| `/cursos/[slug]` | `Course` |
| `/becas` | `FAQPage` (las 4 becas como Q&A) |
| `/testimonios` | `ItemList` de `Review` |
| `/sobre-nosotros` | `Person` (Arantza Molina) |
| `/contacto` | `EducationalOrganization` con `contactPoint` |

### 7.2 Keywords prioritarias

- "clases de inglés online México"
- "academia de inglés británico"
- "cursos de inglés para niños online"
- "inglés con becas México"
- "examen de colocación inglés gratis"

---

## 8. Convenciones del repo

### 8.1 Estructura

```
src/
├── components/        Componentes Astro reutilizables (.astro)
├── content/
│   ├── courses/       MDX por curso/nivel
│   ├── testimonios/   MDX por testimonio
│   └── config.ts      Zod schemas
├── layouts/           BaseLayout.astro (head, header, footer, WhatsApp flotante)
├── pages/             Routing file-based
├── styles/            global.css + tokens.css (variables CSS)
└── lib/               utils (whatsappLink, formatters, seo helpers)
public/
├── robots.txt
├── _redirects         (Cloudflare Pages)
└── img/               assets servidos crudos (favicon, og-default)
```

### 8.2 Naming

- Componentes Astro: `PascalCase.astro`.
- Páginas: `kebab-case.astro`.
- Slugs MDX: `kebab-case`.
- Variables CSS: `--brand-*`, `--space-*`, `--font-*`.

### 8.3 Componentes Astro — patrón

- Props tipados (TypeScript en frontmatter).
- Sin estado cliente salvo necesidad real → entonces island `client:visible` o `client:idle`.
- Estilos: utility classes Tailwind. Estilos custom sólo en `<style>` scoped si hay animación o caso muy puntual.

### 8.4 Accesibilidad — reglas no negociables

- Todas las `<img>` con `alt` (revisado por skill `streben-seo-check`).
- Botones e inputs con `aria-label` cuando no haya texto visible.
- Contraste ≥ 4.5:1 (validar paleta cuando se aplique).
- Foco visible (no quitar `outline` global).
- Form labels asociados a inputs por `for` / `id`.

### 8.5 Performance budgets

- LCP < 2.5s en 4G.
- CLS < 0.1.
- HTML inicial < 50 KB gzip.
- JS total < 80 KB gzip (sólo islas necesarias).
- Imágenes con `astro:assets` siempre.

### 8.6 Git

- Conventional commits en español MX (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`).
- Mensajes atómicos.
- No commitear `.env`, `.claude/settings.local.json`, ni `node_modules`.

---

## 9. Scripts (bun)

```bash
bun run dev        # arranca Astro en localhost:4321
bun run build      # build estático en dist/
bun run preview    # sirve dist/ local
bun run check      # astro check + tsc
bun run seo        # skill streben-seo-check post-build
```

---

## 10. Lo que NO entra en v1

Para no diluir alcance:

- ❌ Área privada de alumnos con login real (queda como página informativa estática).
- ❌ Blog / noticias (el cliente lo descartó explícitamente).
- ❌ Procesamiento de pagos / inscripción en línea (sigue por WhatsApp + Google Forms).
- ❌ Internacionalización (sólo español).
- ❌ CMS visual (cliente actualiza editando MDX y haciendo PR / commit).
- ❌ Galería con material propio (pendiente fotos del cliente → placeholders por ahora).
- ❌ Tracking GA4 / Meta Pixel instalado (slots listos, cuentas las pone el cliente).

---

## 11. Referencias de diseño (briefing del cliente)

**Le gustan:**
- [harmonhall.talisis.com](https://www.harmonhall.talisis.com/) — "diseño atractivo pero formal y educativo".
- [english4kidsonline.com](https://english4kidsonline.com/) — "seccionamiento de contenido".

**NO le gustan:**
- [openenglish.com](https://www.openenglish.com/) — "falta de colores, muy aburrido".

Implicación de diseño: mucho color (paleta pastel), secciones bien diferenciadas, fotografía/ilustración cálida, tono educativo no corporativo.

---

## 12. Estado del proyecto y próximos pasos

| # | Tarea | Estado |
|---|-------|--------|
| 1 | Auditoría sitio actual Jimdo | ✅ Completo (`audit/REPORT.md`) |
| 2 | Briefing + stack decidido | ✅ Este documento |
| 3 | Scaffold Astro + Tailwind + estructura | ⏳ Siguiente |
| 4 | Tokens de diseño (colores, tipografía, espacios) | ⏳ |
| 5 | Layout base + header + footer + WhatsApp flotante | ⏳ |
| 6 | Home | ⏳ |
| 7 | Cursos (listado + detalle dinámico desde MDX) | ⏳ |
| 8 | Becas | ⏳ |
| 9 | Sobre nosotros | ⏳ |
| 10 | Testimonios | ⏳ |
| 11 | Contacto (form Web3Forms + WhatsApp) | ⏳ |
| 12 | Galería / Alumnos / Legales | ⏳ |
| 13 | SEO completo (JSON-LD, sitemap, robots, redirects, OG images) | ⏳ |
| 14 | Pase `streben-seo-check` en verde | ⏳ |
| 15 | README con instrucciones de deploy a Cloudflare Pages | ⏳ |

---

## 13. Pendientes del cliente (bloquean piezas concretas)

- [ ] **Logo** en SVG o PNG transparente alta resolución.
- [ ] **Foto de la fundadora** profesional.
- [ ] **Fotos / video propios** (si los tienen) para galería y home.
- [ ] **Decisión de email corporativo** (`contacto@strebenacademy.com`) o seguir con Gmail.
- [ ] **API key de Web3Forms** (gratis, alta en web3forms.com).
- [ ] **Cuenta de Cloudflare Pages** lista para conectar repo.
- [ ] **Aviso legal y Política de privacidad** — texto definitivo (¿reusar el actual de Jimdo?).
