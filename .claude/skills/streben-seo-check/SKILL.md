---
name: streben-seo-check
description: Valida que cada página del sitio cumpla el checklist SEO/A11y de CLAUDE.md §7. Úsala después de cambios en layout, head, contenido o componentes que afecten meta tags. Recorre el build local con Playwright y reporta fallos.
---

# streben-seo-check

Valida automáticamente que **todas las páginas** del sitio STREBEN ACADEMY cumplan el checklist definido en `CLAUDE.md` §7.

## Cuándo usar

- Después de modificar `BaseLayout.astro`, `<head>`, o helpers SEO.
- Antes de un commit que toque copy/meta de una página.
- Después de agregar una página o curso nuevo.
- Como gate previo a deploy (`npm run seo`).

## Qué valida (por cada URL)

1. **Title:** existe, único en el sitio, ≤ 60 caracteres, formato `[Página] | STREBEN ACADEMY`.
2. **Meta description:** existe, 140-160 caracteres, no idéntica al title.
3. **Canonical:** `<link rel="canonical">` presente, URL absoluta con `https://www.strebenacademy.com`.
4. **H1:** exactamente uno, no vacío, no contiene la palabra "Logo" ni "Welcome" (lecciones del audit).
5. **Jerarquía headings:** no salta niveles (h1 → h2 → h3).
6. **Imágenes:** todas las `<img>` tienen atributo `alt` (decorativas con `alt=""`).
7. **OG tags:** `og:title`, `og:description`, `og:image`, `og:url`, `og:type` presentes.
8. **Twitter Card:** `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
9. **JSON-LD:** existe al menos un `<script type="application/ld+json">` con schema válido.
10. **Lang:** `<html lang="es">`.
11. **Robots:** `meta robots` ausente o `index, follow`.

## Cómo ejecutar

```bash
# 1) Build estático
npm run build

# 2) Servir el dist
npm run preview &
PREVIEW_PID=$!

# 3) Correr el script de validación (a crear en scripts/seo-check.mjs)
node scripts/seo-check.mjs http://localhost:4321

# 4) Matar el preview
kill $PREVIEW_PID
```

O si el script ya está en `package.json`:

```bash
npm run seo
```

## Cómo se invoca esta skill desde Claude

Cuando el usuario diga "valida SEO", "corre seo-check", "/streben-seo-check":

1. Verifica que `npm run build` exista en `package.json`.
2. Corre `npm run build`.
3. Arranca preview (`npm run preview`) en background.
4. Espera a que esté listo (`curl http://localhost:4321 | head -1`).
5. Corre `node scripts/seo-check.mjs http://localhost:4321`.
6. Mata el preview.
7. Si hay fallos, repórtalos formateados:

```
✗ /cursos                H1: hay 5 (debe ser 1)
✗ /alumnos               H1: ausente
✗ /sobre-nosotros        H1: contiene "Logo" — texto sospechoso
✗ /contacto              Canonical: ausente
✓ /becas                 OK
```

## Implementación del script (referencia)

`scripts/seo-check.mjs` debe:
- Leer `dist/sitemap-index.xml` para obtener todas las URLs.
- Para cada URL, hacer fetch del HTML.
- Parsear con `node-html-parser` o regex precisos.
- Aplicar las 11 reglas anteriores.
- Exit code 0 si todo pasa, 1 si hay errores.

Dependencias permitidas: `node-html-parser` (liviano, sin browser).

## Reglas que NO valida (out of scope, requieren navegador real)

- Lighthouse score
- CLS / LCP
- Contraste real renderizado

Para eso → usar Lighthouse CI o `playwright` aparte.
