# Auditoría — www.strebenacademy.com

**Fecha:** 2026-06-08
**Auditor:** Claude (asistente)
**Método:** Scraping con Playwright (Chromium) + inspección de headers HTTP con curl
**Alcance:** Home + 6 páginas internas indexables, sitemap.xml, robots.txt, headers HTTP, redirect apex→www

---

## 0. Resumen ejecutivo

STREBEN ACADEMY es una academia de inglés (con asesorías en matemáticas, ciencias e ingeniería civil) fundada por Arantza Molina, con primeras clases en enero 2026 y preinscripciones abiertas hasta el 27 de julio 2026. Sitio servido por **Jimdo + Cloudflare**.

**Estado general:** funcional, copy correcto, identidad clara — pero con **deficiencias técnicas serias en SEO y accesibilidad**, y **datos de contacto críticos ausentes** que limitan conversión y descubribilidad orgánica.

**Top 5 problemas (severidad alta):**
1. **Todas las imágenes (43/43) sin `alt`** → falla WCAG y desperdicia señales SEO.
2. **H1 ausentes o incorrectos en 5 de 7 páginas** (home en inglés, sobre-nosotros = "Logo STREBEN", alumnos/galería/contacto sin H1, cursos con 5 H1).
3. **Sin `<link rel="canonical">` en ninguna página** → riesgo de duplicados.
4. **Página de contacto sin teléfono, email, dirección, mapa ni horarios** → sólo formulario Jimdo. Pésimo para conversión y SEO local.
5. **Meta descriptions débiles, mezcladas en idiomas o duplicadas con el título** en 5 de 7 páginas.

**SERP "stale" identificado:** Google sigue mostrando para `strebenacademy.com` páginas de una academia india que ocupó el dominio antes. Hay que solicitar reindexación en Search Console.

---

## 1. Hallazgos por categoría

### 1.1 SEO técnico

| # | Severidad | Página | Hallazgo |
|---|-----------|--------|----------|
| S1 | 🔴 Alta | Todas | Sin `<link rel="canonical">`. Cualquier variación (UTM, redirect, www/apex) puede generar duplicados ante Google. |
| S2 | 🔴 Alta | /alumnos/, /galería/, /contacto/ | Sin etiqueta `<h1>`. |
| S3 | 🔴 Alta | / (home) | `<h1>Welcome!</h1>` en inglés. El sitio es en español y el H1 debe contener keyword de marca + propuesta (ej. "STREBEN ACADEMY — Academia de inglés con enfoque británico"). |
| S4 | 🔴 Alta | /sobre-nosotros/ | `<h1>Logo STREBEN</h1>` (incorrecto). Debería ser "Historia de STREBEN ACADEMY". |
| S5 | 🔴 Alta | /cursos-y-programas/ | **5 H1** en la misma página ("Cursos y Programas", "English for Adults", "English for Teens", "English for Kiddos", "Asesorías personalizadas"). Sólo el primero debe ser H1; el resto H2. |
| S6 | 🟡 Media | / | `meta description` mezcla idiomas ("Welcome! ¡El periodo de preinscripciones…"). |
| S7 | 🟡 Media | /cursos/ | `meta description = "Cursos y Programas"` (3 palabras, idéntico al título). |
| S8 | 🟡 Media | /alumnos/, /galería/, /contacto/ | `meta description` no funcional (saludo, frase de 3 palabras o pregunta de 2 palabras). |
| S9 | 🟡 Media | /sobre-nosotros/ | `meta description` con ~480 caracteres (límite recomendado: 155-160). Google truncará. |
| S10 | 🟡 Media | Todas | Sin JSON-LD (schema.org). Faltan `EducationalOrganization`, `LocalBusiness`, `Person` (fundadora), `Review` (testimonios), `FAQPage`. |
| S11 | 🟡 Media | Todas | Twitter Card sólo `summary_large_image`; faltan `twitter:title`, `twitter:description`, `twitter:image`. |
| S12 | 🟢 Baja | sitemap.xml | Sin `<lastmod>` ni `<changefreq>`. |
| S13 | 🟢 Baja | robots.txt | Apunta a sitemap en apex (`https://strebenacademy.com/sitemap.xml`) pero el dominio canónico es `www`. Funciona vía 301 pero introduce fricción para bots. |

### 1.2 Indexación y crawling

| # | Severidad | Hallazgo |
|---|-----------|----------|
| I1 | 🔴 Alta | **SERP stale:** Google indexa para `strebenacademy.com` páginas de una academia india previa (`/about-us/`, `/courses/`, `/contact/`, `/service/class-9th-10th-all-subjects/`, etc.). El dominio actual es STREBEN ACADEMY MX. Hay que solicitar reindexación masiva en Google Search Console (URL Inspection → Request Indexing) y considerar `Disavow` de backlinks indios si los hay. |
| I2 | 🟡 Media | **Cloudflare Bot Fight Mode bloquea con 403** todos los crawlers no-Google (curl, Ahrefs, SEMrush, Screaming Frog, BingBot por UA, etc.), incluso sobre `robots.txt` y `sitemap.xml`. Esto compromete análisis SEO externo y posiblemente indexación Bing. |
| I3 | 🟢 OK | Redirect apex→www = 301 correcto. |
| I4 | 🟢 OK | `meta robots = "index, follow, archive"` correcto en todas las páginas. |
| I5 | 🟢 OK | `sitemap.xml` válido con las 7 URLs principales. |
| I6 | 🟢 OK | HTTPS forzado; certificado vía Cloudflare. |

### 1.3 Accesibilidad

| # | Severidad | Hallazgo |
|---|-----------|----------|
| A1 | 🔴 Alta | **43 de 43 imágenes (100%) sin atributo `alt`**. Distribución: home 10, cursos 15, becas 6, alumnos 9, sobre 4, galería 3, contacto 1, footer compartido. Bloqueante WCAG 2.1 A. |
| A2 | 🟡 Media | Formulario de contacto sin `<label>` semántico explícito ni `placeholder`; sólo texto adyacente. Asistivos pueden no asociar los campos. |
| A3 | 🟡 Media | Banner de cookies oscurece contenido y se reabre al navegar. Sin opción de recordar por sesión. |
| A4 | 🟢 OK | `<html lang="es">` declarado correctamente. |

### 1.4 UX / contenido

| # | Severidad | Hallazgo |
|---|-----------|----------|
| U1 | 🔴 Alta | `/contacto/` **no muestra**: teléfono, email, WhatsApp, dirección, mapa, ni horarios. Sólo un form genérico Jimdo. El email `streben.academy@gmail.com` aparece sólo en `/becas/`. |
| U2 | 🔴 Alta | El sitio usa email Gmail personal (`streben.academy@gmail.com`) en lugar de uno con dominio propio (ej. `contacto@strebenacademy.com`). |
| U3 | 🟡 Media | **2 forms distintos de "preinscripción"**: `forms.gle/U4UKbrSvFvBg92rx6` (header global) y `forms.gle/usGBowcheFq9n3tBA` (botón "Solicitar preinscripción" en /cursos/). Inconsistencia operativa: ¿cuál es el oficial? |
| U4 | 🟡 Media | `/galeria-y-testimonios/` no tiene galería; sólo 5 testimonios en texto. URL y título engañosos. |
| U5 | 🟡 Media | `/alumnos/` es página placeholder: secciones "Avisos", "Horarios", "Calendario escolar" sin contenido sustantivo (horarios sólo mencionan "L-V" y "L/Mi/J" sin franjas concretas). No hay portal real de alumno. |
| U6 | 🟡 Media | Slider del home duplica contenido: "Nuestra historia" y "Nuestra misión" aparecen dos veces (slide 1 y slide 4 son idénticos). |
| U7 | 🟡 Media | Sin botón flotante de WhatsApp — estándar en MX para academias. |
| U8 | 🟡 Media | Sin Google Business Profile detectable (no hay mapa embebido ni schema LocalBusiness). |
| U9 | 🟢 Baja | Footer mínimo (sólo aviso legal/privacidad/cookies). Falta sitemap visual, contacto, redes. |
| U10 | 🟢 Baja | Redes sociales presentes: Facebook + Instagram. Faltan TikTok / YouTube (gancho fuerte para programas Teens/Kiddos). |
| U11 | 🟢 Baja | Precio asesorías ($120 MXN/hora) sólo en /cursos/. No hay tabla de precios de los programas regulares. |

### 1.5 Seguridad / infraestructura

| # | Severidad | Hallazgo |
|---|-----------|----------|
| X1 | 🟡 Media | Headers de seguridad faltantes: **HSTS**, **CSP**, **X-Content-Type-Options**, **Permissions-Policy**, **Referrer-Policy estricta**. Configurables vía Cloudflare Page Rules / Transform Rules sin tocar Jimdo. |
| X2 | 🟡 Media | Hosting Jimdo limita control (no se puede tocar `<head>` libremente, ni servir headers desde el origen, ni instalar tags server-side). Considerar migración futura. |
| X3 | 🟢 OK | Cookie banner activo, consentimiento explícito antes de tracking (cumple GDPR/LFPDPPP a nivel básico). |
| X4 | 🟢 OK | `x-frame-options: SAMEORIGIN`, `cache-control: no-store` para HTML. |

### 1.6 Tracking / analítica

| # | Severidad | Hallazgo |
|---|-----------|----------|
| T1 | 🟡 Media | No se detecta script de **Google Analytics 4**, **Google Tag Manager**, **Meta Pixel** ni equivalentes en el HTML. Imposible medir conversiones (preinscripciones, becas, contacto). |
| T2 | 🟡 Media | Forms están en Google Forms (forms.gle / docs.google.com): respuestas van a una Sheet, no a un CRM. Sin embudo unificado. |

---

## 2. Recomendaciones priorizadas

### 🚀 Quick wins (1-3 días, alto impacto / bajo esfuerzo)

1. **Agregar `alt` a las 43 imágenes** desde el editor Jimdo (botón derecho sobre cada imagen → propiedades → texto alternativo). Para fotos decorativas usar `alt=""` explícito.
2. **Corregir H1:**
   - Home: cambiar "Welcome!" → "STREBEN ACADEMY — Academia de inglés en México con enfoque británico".
   - Sobre nosotros: cambiar "Logo STREBEN" → "Historia de STREBEN ACADEMY".
   - Alumnos, Galería, Contacto: agregar H1 visible.
   - Cursos y programas: dejar sólo el primer H1; los otros 4 pasarlos a H2.
3. **Reescribir meta descriptions** (140-160 caracteres, con keyword + CTA):
   - Home: "Academia de inglés en México con enfoque británico para niños, adolescentes y adultos. Preinscripciones abiertas — solicita tu beca."
   - Cursos: "Cursos de inglés A1-C1 para adultos, adolescentes y niños + asesorías de matemáticas, ciencias e ingeniería. Planes de estudio descargables."
   - Alumnos: "Portal informativo para alumnos STREBEN: avisos, horarios y calendario escolar 2026."
   - Galería: "Testimonios reales de alumnos de STREBEN ACADEMY sobre su experiencia aprendiendo inglés con nosotros."
   - Contacto: "Contáctanos: streben.academy@gmail.com. Resuelve dudas sobre cursos de inglés, becas, asesorías y horarios en STREBEN ACADEMY."
4. **Bloque NAP en `/contacto/`:** agregar nombre legal, email, teléfono/WhatsApp, dirección (si presencial), horarios y mapa de Google Maps embebido.
5. **Unificar formularios de preinscripción** a UNO solo. Decidir cuál es el oficial (probablemente `usGBowcheFq9n3tBA` por nombrar "Solicitar preinscripción").
6. **Solicitar reindexación en Google Search Console:** verificar propiedad, enviar `sitemap.xml`, "Request Indexing" para las 7 URLs.
7. **Corregir robots.txt:** cambiar `Sitemap: https://strebenacademy.com/sitemap.xml` → `Sitemap: https://www.strebenacademy.com/sitemap.xml`.
8. **Agregar canonical** en cada página (Jimdo lo permite en sección SEO de cada page).

### 📈 Próxima iteración (1-4 semanas)

9. **JSON-LD schema.org** (Jimdo permite HTML personalizado en `<head>`):
   - `EducationalOrganization` + `LocalBusiness` para home.
   - `Course` por cada programa en /cursos/.
   - `Person` para Arantza Molina en /sobre-nosotros/.
   - `Review` por testimonio en /galería/.
10. **Migrar a email de dominio propio** (`contacto@strebenacademy.com`). Jimdo Pro lo incluye.
11. **WhatsApp Business flotante** + agregar `wa.me/52...` a header y contacto.
12. **Cloudflare:**
    - Ajustar Bot Fight Mode para no bloquear bots SEO legítimos (Ahrefs, SEMrush, Bing).
    - Habilitar HSTS, CSP básico, X-Content-Type-Options vía Transform Rules.
13. **Crear ficha Google Business Profile** (academia de idiomas). Permite aparecer en Maps, mostrar reseñas y horarios.
14. **Convertir `/galeria-y-testimonios/` en galería real** o renombrar a `/testimonios/` (cambiar URL + redirect 301).
15. **Instalar GA4 + Meta Pixel** (vía GTM si Jimdo lo permite). Tagear conversiones: clic "Preinscripción", clic "Solicitar beca", envío de contacto.
16. **Quitar slide duplicado** del slider home (Nuestra historia/misión aparece 2 veces).

### 🏗️ Mediano plazo (1-3 meses)

17. **Evaluar migración fuera de Jimdo.** Limitaciones actuales: control parcial de `<head>`, headers HTTP no editables, performance por defecto (carga muchos assets Jimdo). Alternativas:
    - **Webflow** (visual, similar a Jimdo pero más control SEO/perf).
    - **WordPress + tema educativo** (más mantenimiento, pero ecosistema más profundo).
    - **Stack JAMstack** (Astro/Next + CMS headless tipo Sanity) si hay budget técnico.
18. **Crear blog/recursos** para keywords objetivo: "academia de inglés CDMX", "diferencia inglés británico americano", "cómo elegir nivel CEFR", etc.
19. **Página de precios pública** o al menos rangos. Hoy sólo precio de asesoría visible.
20. **Sistema CRM ligero** (Pipedrive, HubSpot Free, Notion CRM) para gestionar los Google Forms; conectar vía Zapier/Make.
21. **Funnel de captación con anuncios** Meta/Google una vez tracking esté instalado.

---

## 3. Inventario operativo (extraído del sitio)

**Identidad:**
- Marca: STREBEN ACADEMY (alemán "streben" = aspirar / esforzarse).
- Lema: "Strive, Dream and Achieve".
- Fundadora: Arantza Molina (ingeniera civil; ex-IACES, ANEIC).
- Cronología: asesorías informales 2018-2025 → formalización ago/nov 2025 → primeras clases enero 2026.
- Email: `streben.academy@gmail.com`.
- Redes: facebook.com/streben.academy, instagram.com/streben.academy.

**Oferta:**
- **English for Adults** (18+): Básico (A1-A2), Intermedio (B1-B1+), Avanzado (B2-C1).
- **English for Teens** (12-17): Básico, Intermedio, Avanzado (mismo CEFR).
- **English for Kiddos** (7-11): Inicial, Básico (A1), Básico+ (A2). Material: Kids Box New Generation.
- **Asesorías** ($120 MXN/hora):
  - Inglés (todas las edades).
  - Matemáticas (Primaria/Secundaria/Prepa).
  - Física/Química/Biología (Secundaria/Prepa).
  - Temas selectos de Ingeniería Civil.

**Becas (no acumulables):**
- Aprovechamiento: 15% (promedio ≥ 85/100).
- Familiares: 15% (2+ familiares inscritos).
- Recomendación: 10% (referido no familiar).
- Full Learning: 15% (2+ cursos simultáneos).

**Calendario 2026:**
- Preinscripciones: 1 jun – 27 jul 2026.
- Inicio de clases: 10 ago 2026.

**Horarios:**
- Adolescentes/adultos: L-V.
- Niños: L/Mi/J.

**Formularios externos (Google Forms):**
- Preinscripción (header): forms.gle/U4UKbrSvFvBg92rx6
- Preinscripción ("Solicitar preinscripción" en cursos): forms.gle/usGBowcheFq9n3tBA ⚠️ duplicado
- Examen de colocación: forms.gle/fLewGUgea35L9g1E9
- Becas: forms.gle/u7wChFhaMGxaecQ89
- Reservar asesoría: docs.google.com/forms/d/e/1FAIpQLSfP4NrwNIEj9r9lMpirdZUUsiz_vCzkmNa9ZTHmwXIlugMt9w/viewform

**Recursos publicados (9 PDFs en jimdo storage):**
- Planes de estudio EFA Beginner/Intermediate/Advanced
- Planes de estudio EFT Beginner/Intermediate/Advanced
- Planes de estudio EFK Basics/Beginner/High Beginner

---

## 4. Artefactos generados

```
audit/
├── REPORT.md                 (este documento)
├── raw/
│   ├── seo-home.json
│   ├── seo-cursos.json
│   ├── seo-becas.json
│   ├── seo-alumnos.json
│   ├── seo-sobre-nosotros.json
│   ├── seo-galeria.json
│   ├── seo-contacto.json
│   ├── robots.txt           (contenido real, capturado vía browser)
│   ├── sitemap.xml          (contenido real, capturado vía browser)
│   └── redirect-headers.txt (apex→www + observaciones Cloudflare)
└── screenshots/
    ├── 01-home.png
    ├── 02-cursos.png
    ├── 03-becas.png
    ├── 04-alumnos.png
    ├── 05-sobre-nosotros.png
    ├── 06-galeria.png
    └── 07-contacto.png
```
