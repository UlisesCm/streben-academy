---
name: streben-new-course
description: Crea un nuevo curso/nivel como archivo MDX en src/content/courses/ con todos los campos requeridos por el schema (programa, nivel, CEFR, edades, duración, descripción, PDF plan de estudios). Úsala cuando el usuario pida agregar un curso o nivel nuevo.
---

# streben-new-course

Scaffold rápido para agregar un nuevo curso al sitio.

## Cuándo usar

- "agrega el nivel X al programa Y"
- "vamos a meter un curso de [tema] para asesorías"
- "/streben-new-course"

## Inputs que necesitas del usuario (preguntar si faltan)

1. **Programa:** `english-for-adults` | `english-for-teens` | `english-for-kiddos` | `asesorias`.
2. **Nivel / nombre:** ej. "Beginner", "Intermediate", "Inglés Básico+", "Matemáticas Prepa".
3. **CEFR (sólo programas de inglés):** A1, A2, B1, B1+, B2, C1 — o combinación "A1-A2".
4. **Edades:** ej. "18+", "12-17", "7-11", "Todas las edades".
5. **Duración:** default "1 año 3 meses" (programas de inglés) o "1 hora" (asesoría).
6. **Descripción larga (1-2 párrafos).**
7. **URL del plan de estudios PDF** (en `https://storage.e.jimdo.com/...` por ahora).
8. **Precio (opcional, sólo asesorías):** ej. "$120 MXN".

## Cómo crea el archivo

Ruta: `src/content/courses/<programa>-<slug-del-nivel>.mdx`

Slug del nivel = kebab-case del nombre, ej. `english-for-adults-beginner.mdx`.

Frontmatter (debe matchear `src/content/config.ts` schema):

```yaml
---
programa: "english-for-adults"          # uno de los 4
programaLabel: "English for Adults"
nivel: "Beginner"
cefr: "A1-A2"
edades: "18+"
duracion: "1 año 3 meses"
precio: null                            # null si "Pedir informes"
planEstudiosPdf: "https://storage.e.jimdo.com/file/.../PLAN-EFA-BEGGINER-001.pdf"
orden: 1                                # para ordenar dentro del programa
seoTitle: "Inglés Básico para Adultos (A1-A2) — STREBEN ACADEMY"
seoDescription: "Curso de inglés A1-A2 para adultos (18+). 1 año 3 meses, online en vivo. Solicita informes."
ogImage: null                           # opcional, default genérico del programa
---

## Sobre este curso

[Descripción larga del nivel — qué aprende el alumno, qué habilidades desarrolla, etc.]

## Para quién es

[Perfil del alumno ideal.]

## Lo que vas a lograr

- Punto 1
- Punto 2
- Punto 3
```

## Después de crear el archivo

1. Si el componente de listado `/cursos` usa `getCollection('courses')`, **no requiere cambios** — Astro re-descubre.
2. Verifica que el slug no exista: `ls src/content/courses/<archivo>.mdx`.
3. Corre `npm run build` para validar el schema Zod.
4. Si pasa: sugiere correr `streben-seo-check` para validar la página `/cursos/<slug>`.
5. Recuerda al usuario: si quiere subir el PDF a hosting propio en vez de jimdo, ponerlo en `public/planes-estudio/<archivo>.pdf`.

## Errores comunes a evitar

- ❌ No uses `BEGGINER` en el nombre del archivo (typo del cliente en sus PDFs). Usa `beginner`.
- ❌ No dupliques nivel + programa: el slug debe ser único.
- ❌ No olvides `orden` — sin él el listado puede salir desordenado.
- ❌ No metas precios de programas regulares (política: "Pedir informes").
