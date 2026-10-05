// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─── Publicació ────────────────────────────────────────────────────────────
// Quan tinguis usuari de GitHub, canvia SITE (i BASE si el repo NO es diu
// "usuari.github.io"; per exemple, repo "porfolio" → BASE = '/porfolio').
const SITE = 'https://usuari.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Exclou la redirecció de l'arrel i la pàgina 404
      // (les alternatives d'idioma ja es declaren amb <link hreflang> a cada pàgina)
      filter: (page) => !/^\/(404\/?)?$/.test(new URL(page).pathname.replace(BASE.replace(/\/$/, ''), '')),
    }),
  ],
  vite: {
    build: {
      // El visor 3D (model-viewer + three.js, ~1 MB) es carrega a demanda; no cal avisar-ne.
      chunkSizeWarningLimit: 1100,
    },
  },
});
