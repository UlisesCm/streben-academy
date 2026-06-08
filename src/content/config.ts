import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeEnum = z.enum(['es', 'en', 'fr', 'pt']).default('es');

const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    program: z.enum(['kiddos', 'teens', 'adults', 'tutoring']),
    level: z.string(),
    levelOrder: z.number().int().min(1).max(10),
    cefr: z.string().optional(),
    ages: z.string(),
    duration: z.string(),
    summary: z.string().min(40).max(220),
    syllabusUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    color: z.enum(['brand', 'peach', 'sage', 'butter']).default('brand'),
    locale: localeEnum,
    materials: z.string().optional(),
    learnings: z.array(z.string()).default([]),
    priceNote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonios' }),
  schema: z.object({
    name: z.string(),
    program: z.enum(['kiddos', 'teens', 'adults', 'tutoring']),
    level: z.string().optional(),
    age: z.number().int().optional(),
    rating: z.number().int().min(1).max(5).default(5),
    date: z.coerce.date(),
    quote: z.string().min(20).max(420),
    photo: z.string().optional(),
    videoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    locale: localeEnum,
  }),
});

export const collections = { courses, testimonios };
