// ─── Dades personals ───────────────────────────────────────────────────────
// Omple aquests camps amb les teves dades reals. Tot el lloc web les llegeix
// d'aquí, així que no cal tocar res més per canviar el nom, l'email, etc.

export const PROFILE = {
  name: 'Aimar Trasmonte Domenech',
  shortName: 'Aimar T.D.', // nom curt per al títol de la pestanya
  email: 'aimartd11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aimar-trasmonte/',
  github: '', // p. ex. 'https://github.com/usuari' (deixa-ho buit per amagar-ho)
  location: 'Barcelona',
};

// Formulari de contacte: crea un formulari gratuït a https://formspree.io
// i enganxa aquí l'identificador (la part final de l'URL, p. ex. 'xyzabcd').
// Si queda buit, el formulari mostra un avís i proposa escriure per email.
export const FORMSPREE_ID = '';

// CV en els tres idiomes (fitxers dins de /public/cv/). Quan l'actualitzis,
// canvia aquí el nom del fitxer; es descarrega amb aquest mateix nom.
export const CV_FILES = [
  { lang: 'ca', label: 'CA', file: 'cv/CV_Aimar_Trasmonte_2026_CA.pdf' },
  { lang: 'es', label: 'ES', file: 'cv/CV_Aimar_Trasmonte_2026_ES.pdf' },
  { lang: 'en', label: 'EN', file: 'cv/CV_Aimar_Trasmonte_2026_EN.pdf' },
] as const;
