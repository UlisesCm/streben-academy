---
name: streben-deploy-cf
description: Guía paso a paso para conectar el repo a Cloudflare Pages, configurar build, env vars, dominio strebenacademy.com (con redirect apex→www) y validar el despliegue. Úsala cuando el usuario diga "deploy", "subir a Cloudflare", "configurar dominio".
---

# streben-deploy-cf

Guía operacional para llevar el sitio a producción en **Cloudflare Pages**.

> El cliente se encarga del deploy. Esta skill documenta el procedimiento para que pueda hacerlo solo o con asistencia.

## Pre-requisitos

- [ ] Repo en GitHub / GitLab con el código del sitio.
- [ ] Cuenta de Cloudflare (free tier basta).
- [ ] Dominio `strebenacademy.com` ya en Cloudflare (actualmente sí, según audit).
- [ ] Build local funciona: `npm run build` produce `dist/`.
- [ ] `WEB3FORMS_KEY` (si el form de contacto está activo).

## Paso 1 — Migrar DNS desde Jimdo (si aún no está)

Como el dominio ya está apuntando a Cloudflare según el audit, este paso típicamente está hecho. Verificar:

```bash
dig strebenacademy.com NS
# Debe responder con servidores cloudflare.com
```

Si no:
1. Dashboard Cloudflare → Add Site → `strebenacademy.com`.
2. Copiar los 2 nameservers que asigna Cloudflare.
3. Actualizar nameservers en el registrar.
4. Esperar propagación (15 min – 24 h).

## Paso 2 — Crear el proyecto en Pages

1. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Autorizar GitHub y seleccionar el repo `streben-academy`.
3. Configurar build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
   - **Node version:** `20` (variable `NODE_VERSION=20`)
4. Environment variables:
   - `WEB3FORMS_KEY` = `[key del cliente]`
   - `PUBLIC_SITE_URL` = `https://www.strebenacademy.com`
5. Click **Save and Deploy**.

Cloudflare hará el primer build. Si falla, ver logs en la pestaña del deployment.

## Paso 3 — Conectar el dominio

1. En el proyecto Pages → **Custom domains** → **Set up a custom domain**.
2. Agregar `www.strebenacademy.com`.
3. Cloudflare crea automáticamente el CNAME apuntando al `*.pages.dev`.
4. Esperar SSL (1-5 min).

## Paso 4 — Redirect apex → www

El sitio actual ya hace 301 apex→www (confirmado en audit). Verificar que sigue funcionando:

```bash
curl -sI https://strebenacademy.com/ | grep -i location
# Debe responder: location: https://www.strebenacademy.com/
```

Si no, crear una **Page Rule** o **Redirect Rule**:
- Dashboard → SSL/TLS → **Redirect Rules** → Create.
- If `Hostname` equals `strebenacademy.com` → Then `Static URL Redirect` 301 → `https://www.strebenacademy.com/${request.uri}`.

## Paso 5 — Validaciones post-deploy

```bash
# 1) Sitemap accesible
curl -s https://www.strebenacademy.com/sitemap-index.xml | head -20

# 2) robots.txt apunta al sitemap con www
curl -s https://www.strebenacademy.com/robots.txt

# 3) Headers de seguridad
curl -sI https://www.strebenacademy.com/ | grep -iE 'strict-transport|x-frame|x-content'

# 4) Página home responde 200 y trae el H1 correcto
curl -s https://www.strebenacademy.com/ | grep -oE '<h1[^>]*>[^<]+</h1>' | head -1
```

Después: correr `streben-seo-check` contra producción (con env override).

## Paso 6 — Google Search Console

1. Verificar propiedad del dominio (DNS TXT record).
2. Submit `https://www.strebenacademy.com/sitemap-index.xml`.
3. URL Inspection → Request Indexing para las 7 URLs principales — **crítico** para destronar las páginas indias del SERP stale (ver audit §1.2).

## Paso 7 — Headers de seguridad (Cloudflare Transform Rules)

Agregar via Dashboard → Rules → Transform Rules → Modify Response Header:

| Header | Valor |
|--------|-------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` |

(CSP requiere análisis de qué carga la página — diferirlo a iteración 2.)

## Paso 8 — Desactivar Bot Fight Mode agresivo

El audit detectó que Cloudflare bloquea 403 a `robots.txt` y `sitemap.xml` para crawlers no-Google. Para Pages **el problema desaparece** porque Pages no usa Bot Fight Mode por defecto. Validar con:

```bash
curl -A "Mozilla/5.0" -sI https://www.strebenacademy.com/robots.txt | head -3
# Debe ser HTTP/2 200, no 403
```

Si vuelve 403: Dashboard → Security → Bots → desactivar Bot Fight Mode para el subdominio Pages.

## Rollback

Pages mantiene todos los deployments. En **Deployments** → seleccionar uno anterior → **Rollback to this deployment**.

## Costos

- Pages: free hasta 500 builds/mes, ancho de banda ilimitado.
- DNS: free.
- Workers (si se usan funciones): 100k requests/día free.

Para una academia con tráfico modesto: **$0/mes**.
