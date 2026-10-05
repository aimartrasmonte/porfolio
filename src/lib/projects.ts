import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import type { ImageMetadata } from 'astro';
import { DEFAULT_LANG, type Lang } from '../i18n/ui';
import { useTranslations, withBase } from '../i18n/utils';

export type Project = {
  slug: string;
  meta: CollectionEntry<'projectMeta'>['data'];
  text: CollectionEntry<'projectText'>;
  /** true si aquest idioma encara no té traducció i es mostra el text en català */
  isFallback: boolean;
};

/** Projectes publicats (sense `draft`), ordenats segons `order`, amb el text en l'idioma demanat. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const metas = await getCollection('projectMeta', ({ data }) => !data.draft);
  const projects = await Promise.all(
    metas.map(async (m) => {
      const own = await getEntry('projectText', `${m.id}/${lang}`);
      const text = own ?? (await getEntry('projectText', `${m.id}/${DEFAULT_LANG}`));
      if (!text) throw new Error(`El projecte "${m.id}" no té cap fitxer ${DEFAULT_LANG}.md`);
      return { slug: m.id, meta: m.data, text, isFallback: !own };
    }),
  );
  return projects.sort((a, b) => a.meta.order - b.meta.order);
}

export type Media =
  | { type: 'image'; src: ImageMetadata; alt: string; caption?: string }
  | { type: 'video'; src: string; poster?: ImageMetadata; alt: string; caption?: string };

// Vídeos guardats dins la carpeta del projecte (p. ex. ./images/regata.mp4):
// Vite els copia al build i en retorna la URL definitiva.
const localVideos = import.meta.glob<string>('/src/content/projects/*/**/*.{mp4,webm,mov,m4v}', {
  query: '?url',
  import: 'default',
  eager: true,
});

function videoUrl(slug: string, path: string): string {
  if (!path.startsWith('./')) return withBase(path); // camí dins de /public
  const url = localVideos[`/src/content/projects/${slug}/${path.slice(2)}`];
  if (!url) throw new Error(`No es troba el vídeo "${path}" del projecte "${slug}"`);
  return url;
}

/** Galeria del projecte (imatges i vídeos) amb textos alternatius i peus de foto. */
export function projectMedia(project: Project, lang: Lang): Media[] {
  const t = useTranslations(lang);
  const { title, captions } = project.text.data;
  return project.meta.gallery.map((item, i) => {
    const caption = captions[i];
    if ('video' in item) {
      const alt = caption ?? `${title} — ${t('project.video')} ${i + 1}`;
      return { type: 'video', src: videoUrl(project.slug, item.video), poster: item.poster, alt, caption };
    }
    const alt = caption ?? `${title} — ${t('project.image')} ${i + 1}`;
    return { type: 'image', src: item, alt, caption };
  });
}

/** Mida llegible d'un fitxer de /public (p. ex. "2,4 MB"), o null si no existeix. */
export function publicFileSize(path: string, lang: Lang): string | null {
  try {
    const bytes = statSync(join(process.cwd(), 'public', path)).size;
    const fmt = new Intl.NumberFormat(lang, { maximumFractionDigits: 1 });
    if (bytes < 1024 * 1024) return `${fmt.format(Math.max(bytes / 1024, 1))} KB`;
    return `${fmt.format(bytes / 1024 / 1024)} MB`;
  } catch {
    return null;
  }
}
