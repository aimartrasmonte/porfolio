import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_KEYS } from './i18n/ui';

const PROJECTS_DIR = './src/content/projects';

// Dades compartides per tots els idiomes: src/content/projects/<slug>/meta.yaml
const projectMeta = defineCollection({
  loader: glob({
    pattern: '*/meta.yaml',
    base: PROJECTS_DIR,
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      year: z.union([z.number(), z.string()]).optional(), // 2024 o "2024 – 2025"
      categories: z.array(z.enum(CATEGORY_KEYS)).min(1),
      cover: image(),
      // Cada element és una imatge (./images/01.jpg) o un vídeo:
      //   - video: ./images/regata.mp4           (dins la carpeta del projecte, o un camí de /public)
      //     poster: ./images/regata.jpg          (opcional: miniatura; si no, el primer fotograma)
      gallery: z
        .array(z.union([image(), z.object({ video: z.string(), poster: image().optional() })]))
        .default([]),
      software: z.array(z.string()).default([]),
      pdf: z.string().optional(), // camí dins de /public, p. ex. 'projects/velers-rc/memoria.pdf'
      model3d: z.string().optional(), // camí dins de /public, p. ex. 'projects/velers-rc/model.glb'
      draft: z.boolean().default(false),
    }),
});

// Text traduïble: src/content/projects/<slug>/{ca,es,en}.md
const projectText = defineCollection({
  loader: glob({
    pattern: '*/{ca,es,en}.md',
    base: PROJECTS_DIR,
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    manufacturing: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    // Peus de foto, en el mateix ordre que `gallery` a meta.yaml
    captions: z.array(z.string()).default([]),
  }),
});

// Pàgina "Sobre mi": src/content/about/{ca,es,en}.md
const about = defineCollection({
  loader: glob({ pattern: '{ca,es,en}.md', base: './src/content/about' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      photo: image().optional(),
      avatar: image().optional(), // retall de la cara per a la portada (si no hi és, es fa servir photo)
      // Tipus de feina que busques (es mostren a la portada i a "Sobre mi")
      openTo: z.array(z.string()).default([]),
      experience: z
        .array(
          z.object({
            role: z.string(),
            org: z.string(),
            dates: z.string(),
            summary: z.string().optional(),
            bullets: z.array(z.string()).default([]),
          }),
        )
        .default([]),
      education: z
        .array(
          z.object({
            years: z.string(),
            title: z.string(),
            place: z.string(),
            bullets: z.array(z.string()).default([]),
          }),
        )
        .default([]),
      skills: z.array(z.object({ group: z.string(), items: z.array(z.string()) })).default([]),
      languages: z.array(z.object({ name: z.string(), level: z.string() })).default([]),
      other: z
        .array(z.object({ title: z.string(), dates: z.string().optional(), detail: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { projectMeta, projectText, about };
