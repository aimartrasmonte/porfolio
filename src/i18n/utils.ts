import { CATEGORIES, DEFAULT_LANG, LANGS, ui, type CategoryKey, type Lang, type UiKey } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<UiKey, string>)[key] ?? ui[DEFAULT_LANG][key];
  };
}

export function categoryName(key: CategoryKey, lang: Lang): string {
  return CATEGORIES[key][lang];
}

// ─── Rutes ────────────────────────────────────────────────────────────────
// Els segments de les URL estan traduïts: /ca/projectes/…, /es/proyectos/…, /en/projects/…
export const SEGMENTS = {
  projects: { ca: 'projectes', es: 'proyectos', en: 'projects' },
  about: { ca: 'sobre-mi', es: 'sobre-mi', en: 'about' },
} as const satisfies Record<string, Record<Lang, string>>;

export type Route =
  | { name: 'home'; hash?: string }
  | { name: 'about'; hash?: string }
  | { name: 'project'; slug: string };

/** Afegeix el `base` configurat a astro.config.mjs a un camí intern. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function pathFor(lang: Lang, route: Route): string {
  switch (route.name) {
    case 'home':
      return withBase(`${lang}/`) + (route.hash ? `#${route.hash}` : '');
    case 'about':
      return withBase(`${lang}/${SEGMENTS.about[lang]}/`) + (route.hash ? `#${route.hash}` : '');
    case 'project':
      return withBase(`${lang}/${SEGMENTS.projects[lang]}/${route.slug}/`);
  }
}
