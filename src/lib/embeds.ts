// Imatges, vídeos i model 3D intercalats amb el text del projecte.
//
// Al .md, en una línia sola (amb una línia en blanc abans i després):
//   [[3]]        → l'element 3 de `gallery` (meta.yaml), gran
//   [[3, 5]]     → els elements 3 i 5, en fila
//   [[3-6]]      → del 3 al 6, en fila
//   [[3d]]       → el visor del model 3D
// Els números comencen per 1 i són els mateixos per als tres idiomes.
import type { Media } from './projects';

export type Segment =
  | { type: 'html'; html: string }
  | { type: 'media'; items: Media[] }
  | { type: 'model' };

// El markdown converteix la línia en un paràgraf: <p>[[3, 5]]</p>
const MARKER = /<p>\s*\[\[([^\]]+)\]\]\s*<\/p>/g;

export function splitContent(html: string, media: Media[], hasModel: boolean, where: string) {
  const segments: Segment[] = [];
  const used = new Set<number>();
  let modelPlaced = false;
  let last = 0;

  for (const match of html.matchAll(MARKER)) {
    const before = html.slice(last, match.index);
    if (before.trim()) segments.push({ type: 'html', html: before });
    last = match.index + match[0].length;

    const spec = match[1].trim().toLowerCase();
    if (spec === '3d') {
      if (!hasModel) throw new Error(`${where}: hi ha [[3d]] però meta.yaml no té model3d`);
      segments.push({ type: 'model' });
      modelPlaced = true;
      continue;
    }

    const items: Media[] = [];
    for (const part of spec.split(',')) {
      const range = part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!range) throw new Error(`${where}: no s'entén el marcador [[${match[1]}]]`);
      const from = Number(range[1]);
      const to = Number(range[2] ?? range[1]);
      for (let n = from; n <= to; n++) {
        const item = media[n - 1];
        if (!item) {
          throw new Error(`${where}: [[${match[1]}]] fa referència a l'element ${n}, però gallery només en té ${media.length}`);
        }
        items.push(item);
        used.add(n);
      }
    }
    segments.push({ type: 'media', items });
  }
  const rest = html.slice(last);
  if (rest.trim()) segments.push({ type: 'html', html: rest });

  return {
    segments,
    /** Elements de la galeria que no s'han col·locat dins del text */
    remaining: media.filter((m) => !used.has(m.n)),
    modelPlaced,
  };
}
