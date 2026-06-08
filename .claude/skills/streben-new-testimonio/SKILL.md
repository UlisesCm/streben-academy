---
name: streben-new-testimonio
description: Agrega un nuevo testimonio de alumno como MDX en src/content/testimonios/. Genera el archivo con frontmatter Zod-válido y aparece automáticamente en /testimonios. Úsala cuando el usuario pida "agrega un testimonio".
---

# streben-new-testimonio

Scaffold para sumar testimonios a `/testimonios`.

## Cuándo usar

- "agrega el testimonio de [nombre]"
- "súbeme estas 3 reseñas nuevas"
- "/streben-new-testimonio"

## Inputs requeridos

1. **Nombre completo del alumno.**
2. **Texto del testimonio** (en español, comillas opcionales).
3. **Programa que cursa** (opcional): `English for Adults` / `Teens` / `Kiddos`.
4. **Foto** (opcional): URL o ruta local en `public/img/testimonios/`.
5. **Rating** (opcional): 1-5, default 5.
6. **Fecha de la reseña** (opcional, default hoy en formato ISO).

## Archivo generado

Ruta: `src/content/testimonios/<slug-del-nombre>.mdx`

```yaml
---
nombre: "César De Jesús"
slug: "cesar-de-jesus"               # = nombre del archivo
programa: "English for Adults"       # opcional, null si no aplica
foto: null                           # ruta /img/testimonios/cesar.jpg o null
rating: 5
fecha: "2026-06-08"
destacado: false                     # true si quieres que salga en home
---

"STREBEN ACADEMY es un espacio donde puedes aprender de forma sencilla. Los maestros explican bien y te ayudan cuando no entiendes algo..."
```

## Schema para `src/content/config.ts`

```ts
import { defineCollection, z } from 'astro:content';

const testimonios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    slug: z.string(),
    programa: z.string().nullable(),
    foto: z.string().nullable(),
    rating: z.number().min(1).max(5).default(5),
    fecha: z.coerce.date(),
    destacado: z.boolean().default(false),
  }),
});
```

## Después de crear

1. Si tiene `destacado: true`, recordar al usuario que aparecerá en home (máximo 3 destacados recomendado).
2. Si tiene foto, verificar que el archivo exista en `public/img/testimonios/`.
3. Sugerir agregar `Review` schema.org en el componente de testimonio si es el primero.

## Importación masiva

Si el usuario pega varios testimonios juntos: crear N archivos en una pasada, slugs únicos. NO concatenar varios en un solo MDX.
