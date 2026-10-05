# Pla d'acció: porfoli web de dissenyador mecànic

## Estat (2026-10-04): implementat ✅

Els punts 1–10 estan fets i verificats: `astro check` passa sense errors, el build genera 26 pàgines sense avisos i s'ha revisat amb captures a escriptori i a mòbil (390 px). També s'ha provat el build amb `BASE = '/porfolio'`. Guia d'ús: `README.md`.

**Canvis respecte al pla original:**
- S'ha instal·lat **Astro 7.3** (no la 5). Les APIs són les mateixes, però `z` s'importa d'`astro/zod`.
- No s'ha fet servir `npm create astro`; el projecte s'ha configurat a mà. Tampoc s'usa el sistema `i18n` d'Astro: les rutes es fan manualment amb `[lang]`.
- **URL traduïdes**: `/ca/projectes/…`, `/es/proyectos/…`, `/en/projects/…` i `/ca|es/sobre-mi/`, `/en/about/` (vegeu `SEGMENTS` a `src/i18n/utils.ts`). Les pàgines són `src/pages/[lang]/[section].astro` i `[lang]/[section]/[slug].astro`.
- Els camps traduïbles de la fitxa tècnica (`context`, `role`, `duration`, `manufacturing`, `materials`) i els peus de foto (`captions`, en forma de llista) són a `<lang>.md`. A `meta.yaml` hi ha `year`, `software`, `pdf` i `model3d`.
- "Sobre mi" també és editable com a contingut: `src/content/about/{ca,es,en}.md` (bio, foto, habilitats, idiomes i formació).
- El workflow de desplegament fa servir `actions/upload-pages-artifact` + `deploy-pages` en lloc de `withastro/action`.
- Requisits de Windows que s'han instal·lat: Node.js 24 LTS i **Microsoft Visual C++ Redistributable** (sense aquest, el parser natiu d'Astro 7 falla amb `ERR_DLOPEN_FAILED`).
- Al sitemap no hi ha alternatives d'idioma, perquè les URL traduïdes no coincideixen. Ja es declaren amb `<link hreflang>` a cada pàgina.

## Context

Estudiant de màster en Enginyeria Industrial (mecànica) que busca feina de dissenyador mecànic. Vol un porfoli web molt visual amb ~6 projectes (velers RC, instruments musicals, etc.), cada un amb un post tipus blog, memòria PDF descarregable (quan n'hi hagi) i CV descarregable. La carpeta del projecte és buida; no hi ha Node.js instal·lat (Git sí, 2.56).

### Decisions preses

| Tema | Decisió |
|---|---|
| Stack | **Astro 5** (web estàtica), CSS propi (sense Tailwind), JS vanilla mínim |
| Hosting | **GitHub Pages** amb GitHub Actions (`withastro/action`) |
| Idiomes | **Català (per defecte), castellà, anglès** — rutes `/ca/`, `/es/`, `/en/` |
| Estructura | Home amb **scroll vertical**: cada projecte és un bloc amb resum + mini galeria + botó "Llegir més" → post complet. **"Sobre mi"** en pàgina a part |
| Extres | Fitxa tècnica per projecte, visor 3D (`.glb`), filtre per categories, formulari de contacte (Formspree) |
| Contingut | 6 projectes **placeholder** (2 velers RC, 2 instruments, 2 altres); l'usuari els substituirà |
| Traducció | L'usuari escriu en català; Claude genera es/en per revisar |
| CV | **3 botons** (CA/ES/EN) sempre visibles, independentment de l'idioma de la web |
| Identitat | Nom i usuari GitHub pendents → variables a `src/config.ts` |
| CAD | SolidWorks → cal flux de conversió a `.glb` (vegeu secció 7) |
| Estil | A criteri de Claude → **"minimalista tècnic / pla d'enginyeria"** (secció 3) |

---

## 1. Preparació de l'entorn

1. Instal·lar Node.js LTS: `winget install OpenJS.NodeJS.LTS` (reiniciar terminal; comprovar `node -v` ≥ 20).
2. A `C:\Users\Coco\VSC\porfolio`: `npm create astro@latest . -- --template minimal --typescript strict --install --git`.
3. Dependències:
   - `@astrojs/sitemap` (SEO)
   - `photoswipe` (lightbox de galeria)
   - `@google/model-viewer` (visor 3D)
   - Fonts via `@fontsource-variable/inter` i `@fontsource/jetbrains-mono` (autoallotjades, sense dependre de Google).
4. `.gitignore` estàndard d'Astro + `.claude/settings.local.json`.

## 2. Estructura de fitxers

```
porfolio/
├─ .claude/PLA_ACCIO_PORFOLI.md
├─ .github/workflows/deploy.yml
├─ astro.config.mjs            # site, base, i18n, sitemap
├─ public/
│  ├─ cv/  CV_CA.pdf  CV_ES.pdf  CV_EN.pdf      (placeholders)
│  ├─ projects/<slug>/memoria.pdf | model.glb   (fitxers per descarregar/visor)
│  └─ favicon.svg, og-default.jpg
├─ src/
│  ├─ config.ts                # NOM, EMAIL, LINKEDIN, GITHUB_USER, FORMSPREE_ID, rutes CV
│  ├─ content.config.ts        # definició de col·leccions (Zod)
│  ├─ content/projects/<slug>/
│  │   ├─ meta.yaml            # dades compartides (no traduïbles)
│  │   ├─ ca.md  es.md  en.md  # text traduïble + cos del post
│  │   └─ images/*.jpg         # fotos (optimitzades per Astro)
│  ├─ i18n/ui.ts               # textos d'interfície + noms de categories en 3 idiomes
│  ├─ i18n/utils.ts            # getLangFromUrl, useTranslations, localizedPath, altres idiomes
│  ├─ layouts/BaseLayout.astro # <head>, hreflang, header, footer
│  ├─ components/
│  │   Header.astro  LangSwitcher.astro  Footer.astro
│  │   Hero.astro  CategoryFilter.astro  ProjectBlock.astro
│  │   Gallery.astro (PhotoSwipe)  SpecSheet.astro  ModelViewer.astro
│  │   CvButtons.astro  ContactForm.astro  DownloadButton.astro
│  ├─ pages/
│  │   index.astro                       # redirecció a /ca/ (o segons navigator.language)
│  │   [lang]/index.astro                # home amb scroll de projectes
│  │   [lang]/projectes/[slug].astro     # post complet (slug únic per a tots els idiomes)
│  │   [lang]/sobre-mi.astro             # bio, habilitats, CV, contacte
│  │   404.astro
│  └─ styles/ global.css  tokens.css
```

Notes:
- **Separació `meta.yaml` / `<lang>.md`**: evita duplicar llistes d'imatges, PDFs i dades tècniques als tres idiomes. Només el text es tradueix.
- Les rutes es generen amb `getStaticPaths()` creuant idiomes × projectes.
- Tots els enllaços interns passen per un helper que afegeix `import.meta.env.BASE_URL` (necessari si el repo no és `usuari.github.io`).

## 3. Disseny visual ("pla d'enginyeria")

- **Paleta** (CSS custom properties a `tokens.css`): fons paper `#f6f5f1`, tinta `#1b1f24`, gris línia `#c9ccd1`, accent **blau plànol** `#1f4fd1` + accent secundari taronja de seguretat `#ff5a1f` per a botons de descàrrega. Mode fosc automàtic (`prefers-color-scheme`) amb fons `#111418`.
- **Tipografia**: Inter Variable (text), JetBrains Mono (dades tècniques, etiquetes, numeració "01 / 06").
- **Detalls**: graella de fons molt subtil al hero; numeració de projectes estil caixetí de plànol; separadors amb "línies de cota"; fitxa tècnica amb aspecte de caixetí (taula amb vores fines).
- **Home — bloc de projecte** (alternant imatge esquerra/dreta en escriptori, apilat en mòbil):
  - número + categories (mono), títol, resum de 2–3 línies, 3–4 miniatures (clic → lightbox), botons "Llegir més →" i "Memòria PDF" si n'hi ha.
- **Post**: imatge de portada a amplada completa → títol + fitxa tècnica lateral (sticky en escriptori) → cos Markdown amb imatges → galeria completa → visor 3D (si n'hi ha) → descàrrega PDF → navegació projecte anterior/següent.
- Responsive des de 360 px; animacions suaus d'aparició amb `IntersectionObserver`, respectant `prefers-reduced-motion`.

## 4. Model de contingut (`src/content.config.ts`)

Col·lecció `projectMeta` (glob `**/meta.yaml`):
```yaml
order: 1                 # ordre a la home
date: 2025-06-01
categories: [nautica, cad, fabricacio]   # claus; noms traduïts a i18n/ui.ts
cover: ./images/cover.jpg
gallery: [./images/01.jpg, ./images/02.jpg, ...]
pdf: /projects/veler-iom/memoria.pdf     # opcional
model3d: /projects/veler-iom/model.glb   # opcional
specs:
  year: 2025
  duration: "4 mesos"     # (traduïble → millor a md; vegeu sota)
  software: [SolidWorks, Ansys, Cura]
  manufacturing: [Impressió 3D FDM, Fibra de vidre]
draft: false
```
Col·lecció `projectText` (glob `**/{ca,es,en}.md`), frontmatter:
```yaml
title: Veler RC classe IOM
summary: Disseny i construcció d'un veler de ràdio control...
role: Disseny, càlcul i fabricació
duration: 4 mesos
captions: { "01.jpg": "Motlle del buc", ... }   # opcional
```
- Imatges amb `image()` de Zod → Astro genera AVIF/WebP i `srcset` amb `<Picture>`.
- Categories inicials: `nautica`, `lutieria`, `cad`, `fabricacio`, `simulacio`, `electronica`.

**Placeholders (6):** `veler-iom`, `veler-classic`, `guitarra-electrica`, `ukulele`, `banc-assaig`, `projecte-master`. Imatges placeholder generades com a SVG/JPG neutres amb text "Foto pendent"; PDFs i CV placeholder d'una pàgina; un `.glb` de mostra petit (p. ex. un cub/peça simple) per provar el visor.

## 5. Funcionalitats

| Funció | Implementació |
|---|---|
| i18n | `i18n` d'Astro (`defaultLocale: 'ca'`, `locales: ['ca','es','en']`, `prefixDefaultLocale: true`). `LangSwitcher` manté la pàgina actual en canviar d'idioma. `<link rel="alternate" hreflang>` a cada pàgina. Arrel `/` redirigeix segons `navigator.language` amb fallback a `/ca/` |
| Filtre categories | Botons-xip a la home; JS vanilla que amaga/mostra `ProjectBlock` per `data-categories`; estat a `?cat=` de la URL. Sense JS, es veu tot |
| Galeria | Component `Gallery.astro` amb `<Picture>` + PhotoSwipe carregat només on cal |
| Fitxa tècnica | `SpecSheet.astro` (any, durada, rol, software, fabricació, categories) |
| Visor 3D | `ModelViewer.astro` amb `<model-viewer>` importat dinàmicament (`camera-controls`, `auto-rotate`, `poster` = portada, `loading="lazy"`). Només als posts amb `model3d` |
| Memòria PDF | `DownloadButton.astro` amb atribut `download` i mida del fitxer |
| CV | `CvButtons.astro`: tres botons CA / ES / EN; a la capçalera (botó "CV" amb desplegable), al hero i a "Sobre mi" |
| Contacte | `ContactForm.astro` → POST a `https://formspree.io/f/<FORMSPREE_ID>` (gratuït, 50 msg/mes); camp honeypot anti-spam; missatges d'èxit/error traduïts. A més: email + LinkedIn |
| SEO | `<title>`/description per pàgina i idioma, Open Graph amb portada del projecte, `@astrojs/sitemap` amb i18n, `robots.txt` |
| Accessibilitat | `alt` obligatori, contrast AA, navegació per teclat al lightbox i filtre, `lang` correcte a `<html>` |

## 6. Desplegament (GitHub Pages)

1. Quan l'usuari decideixi nom d'usuari: crear repo (recomanat `usuari.github.io` → URL neta i `base: '/'`; si no, `base: '/nom-repo'`).
2. `astro.config.mjs`: `site: 'https://usuari.github.io'`, `base` segons repo (valors llegits de `src/config.ts`/constants).
3. `.github/workflows/deploy.yml` amb `withastro/action@v3` + `actions/deploy-pages@v4`, trigger en push a `main`.
4. Al repo: Settings → Pages → Source: *GitHub Actions*.
5. (Opcional futur) domini propi amb `public/CNAME`.

## 7. Flux SolidWorks → `.glb` (documentar a `README.md`)

1. SolidWorks: *Desa com a* **.STL** (resolució "fina") o **.STEP**. Les versions recents de SolidWorks/Visualize poden exportar glTF directament — comprovar si la teva versió ho permet.
2. Blender (gratuït): importar STL → assignar materials simples → modificador *Decimate* si és pesat → *Export glTF 2.0 (.glb)*.
3. Comprimir: `npx @gltf-transform/cli optimize model.glb model-opt.glb --compress draco --texture-compress webp`. Objectiu: **< 5 MB** per model.
4. Copiar a `public/projects/<slug>/model.glb` i afegir `model3d:` al `meta.yaml`.

## 8. Flux per afegir/editar un projecte (documentar a `README.md`)

1. Copiar una carpeta placeholder a `src/content/projects/<nou-slug>/`.
2. Posar fotos a `images/` (JPG originals; Astro les optimitza). Recomanat ≤ 3000 px de costat.
3. Omplir `meta.yaml` i `ca.md`.
4. Demanar a Claude: "tradueix `ca.md` del projecte X a es i en" → genera `es.md`/`en.md` per revisar.
5. PDF/model a `public/projects/<slug>/`.
6. `npm run dev` per previsualitzar; `git push` per publicar.

## 9. Ordre d'implementació

1. Instal·lar Node; crear projecte Astro; `git init`.
2. `config.ts`, `tokens.css`/`global.css`, fonts, `BaseLayout`, `Header`, `Footer`, `LangSwitcher`, i18n utils.
3. Col·leccions de contingut + 6 projectes placeholder (amb textos ca/es/en, imatges, 2 PDFs, 1 `.glb` de mostra) + 3 CV placeholder.
4. Home: `Hero`, `CategoryFilter`, `ProjectBlock` amb mini galeria.
5. Pàgina de projecte: portada, `SpecSheet`, cos, `Gallery` + PhotoSwipe, `ModelViewer`, `DownloadButton`, navegació anterior/següent.
6. "Sobre mi": bio placeholder, habilitats (software, fabricació, idiomes), `CvButtons`, `ContactForm`.
7. SEO (meta, OG, sitemap, hreflang), 404, redirecció arrel, animacions.
8. `README.md` (fluxos de les seccions 7 i 8) i workflow de GitHub Actions.
9. Verificació (secció 10).

## 10. Verificació

- `npm run dev` → revisar a `http://localhost:4321/ca/`, `/es/`, `/en/`: home, cada post, sobre mi, 404.
- Comprovar: canvi d'idioma manté la pàgina; filtre de categories (i `?cat=` a la URL); lightbox amb teclat; visor 3D rota i fa zoom; descàrrega de PDFs i dels 3 CV; formulari (amb ID Formspree de prova) mostra èxit/error.
- `npx astro check` sense errors de tipus; `npm run build` sense avisos d'imatges/esquema; `npm run preview` per provar el build (incloent `base` si n'hi ha).
- Responsive a 360 px, 768 px, 1440 px; mode fosc.
- Lighthouse (Chrome DevTools) a home i un post: objectiu ≥ 90 a Performance, Accessibility, SEO.
- Després del primer deploy: verificar la URL de GitHub Pages i que no hi ha enllaços trencats amb `base`.

## Pendents de l'usuari

- Nom per a la web, email, LinkedIn, usuari GitHub, ID de Formspree → `src/config.ts`.
- Llista real de projectes, fotos, textos en català, PDFs de memòries, models `.glb`, i els 3 CV.
