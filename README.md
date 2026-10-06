# Porfoli de disseny mecànic

Web estàtica feta amb [Astro](https://astro.build), en català, castellà i anglès, i publicada a GitHub Pages.

## Ordres

| Ordre | Què fa |
|---|---|
| `npm install` | Instal·la les dependències (només la primera vegada) |
| `npm run dev` | Servidor local amb recàrrega automàtica a http://localhost:4321 |
| `npm run build` | Genera la web final a `dist/` |
| `npm run preview` | Serveix `dist/` per provar el resultat final |
| `npm run check` | Revisa errors de tipus i de contingut |

## On és cada cosa

| Vull canviar… | Fitxer |
|---|---|
| Nom, email, LinkedIn, GitHub, formulari | `src/config.ts` |
| URL del lloc (usuari de GitHub) | `astro.config.mjs` (`SITE` i `BASE`) |
| Els CV | `public/cv/` (fitxers) i `CV_FILES` a `src/config.ts` (noms) |
| Textos de la interfície (botons, menús…) | `src/i18n/ui.ts` |
| Categories dels projectes | `src/i18n/ui.ts` (`CATEGORIES`) |
| "Sobre mi" (bio, habilitats, formació, foto) | `src/content/about/{ca,es,en}.md` |
| Projectes | `src/content/projects/<slug>/` |
| Colors (blau i taronja del CV), tema clar/fosc i tipografia | `src/styles/tokens.css` |

## Afegir o editar un projecte

Cada projecte és una carpeta a `src/content/projects/<slug>/` (el *slug* és el nom que surt a la URL):

```
src/content/projects/velers-rc/
├─ meta.yaml      ← dades comunes: ordre, any, categories, fotos, software, PDF, model 3D
├─ ca.md          ← text en català (títol, resum, fitxa tècnica, peus de foto i cos del post)
├─ es.md          ← castellà
├─ en.md          ← anglès
└─ images/        ← fotos (cover.jpg + galeria)
```

1. Copia una carpeta existent i canvia-li el nom.
2. Posa les fotos a `images/`. Pots fer servir els JPG originals, perquè Astro genera automàticament versions AVIF/WebP de diverses mides. Es recomana que no passin de 3000 px pel costat llarg.
3. Omple `meta.yaml`:
   - `order`: posició a la portada (1 = primer).
   - `categories`: claus de `src/i18n/ui.ts` (`nautica`, `lutieria`, `cad`, `fabricacio`, `simulacio`, `electronica`).
   - `gallery`: llista de fotos i vídeos, en l'ordre en què vols que surtin. Un vídeo s'escriu així (el `poster` és opcional; sense, es fa servir el primer fotograma):
     ```yaml
     - video: ./images/regata.mp4
       poster: ./images/regata.jpg
     ```
     Fes servir `.mp4` (H.264), que funciona a tots els navegadors, i intenta que pesi menys de 10 MB (amb HandBrake, preset "Web").
   - `galleryLayout` (opcional): `below` (per defecte) posa les miniatures a sota de la imatge gran a la portada; `side` les posa en columna al costat i fa la imatge gran vertical (ideal per a fotos verticals).
   - `hero` (opcional): imatge del requadre gran de dalt de tot de la portada. Es fa servir la del primer projecte (per `order`) que en tingui; si cap en té, la `cover` del primer projecte.
   - `pdf` / `model3d`: opcionals. El fitxer va a `public/projects/<slug>/` i aquí s'hi posa el camí sense `/` inicial.
   - `draft: true` amaga el projecte sense esborrar-lo.
4. Escriu `ca.md`. Els `captions` són els peus de foto, en el mateix ordre que `gallery`. Si un element d'una llista porta comes, posa'l entre cometes: `"Impressió 3D (FDM, SLS)"`.
5. Tradueix-lo a `es.md` i `en.md` (per exemple, demanant-ho a Claude: *"tradueix el ca.md del projecte X a es i en"*). Si una traducció falta, la web mostra el text en català.
6. Comprova-ho amb `npm run dev` i publica-ho amb `git push`.

Per posar una imatge dins del text del post: `![Descripció](./images/03.jpg)`.

## Models 3D: de SolidWorks a `.glb`

El visor 3D fa servir el format **glTF binari (`.glb`)**.

1. **SolidWorks** → *Fitxer › Desa com a* → **STL** (Opcions: resolució *Fina*, unitats en mm) o **STEP**. Comprova si la teva versió de SolidWorks (o SolidWorks Visualize) pot exportar a glTF/GLB directament; si pot, salta al pas 3.
2. **Blender** (gratuït):
   - *File › Import › STL* (si cal, escala 0.001 per passar de mm a m).
   - Assigna-hi materials senzills (color i metàl·lic/rugositat).
   - Si el model pesa molt, aplica el modificador *Decimate*.
   - *File › Export › glTF 2.0* → format **glb**.
3. **Comprimeix-lo**:
   ```
   npx @gltf-transform/cli optimize model.glb model-opt.glb --compress draco --texture-compress webp
   ```
   Objectiu: **menys de 5 MB**.
4. Desa'l a `public/projects/<slug>/model.glb` i afegeix `model3d: projects/<slug>/model.glb` al `meta.yaml`.

## Formulari de contacte

1. Crea un compte gratuït a [formspree.io](https://formspree.io) i un formulari nou.
2. Copia'n l'identificador (la part final de `https://formspree.io/f/xxxxxxx`) a `FORMSPREE_ID`, dins de `src/config.ts`.

Mentre no estigui configurat, el formulari mostra l'adreça d'email.

## Publicar a GitHub Pages

1. Crea un repositori a GitHub. Si el nomenes **`usuari.github.io`**, la web quedarà a `https://usuari.github.io/`.
2. A `astro.config.mjs`, posa `SITE = 'https://usuari.github.io'`. Si el repositori té un altre nom (per exemple, `porfolio`), posa també `BASE = '/porfolio'`.
3. Al repositori: **Settings › Pages › Source: GitHub Actions**.
4. Connecta el repositori i puja els canvis:
   ```
   git remote add origin https://github.com/usuari/usuari.github.io.git
   git push -u origin main
   ```
   El workflow `.github/workflows/deploy.yml` construeix i publica la web automàticament a cada `push`.
