// Línies de tangència d'una malla exportada des de CAD (SolidWorks, etc.).
//
// L'exportador triangula cada cara del sòlid per separat: dins d'una cara els
// triangles comparteixen vèrtexs, però a la vora entre dues cares els vèrtexs estan
// duplicats. Així, una aresta que només fa servir un triangle (pels índexs) però que
// coincideix en posició amb la d'una altra cara és una frontera entre cares. Si
// l'angle entre les dues cares és petit (< maxAngle), és una línia de tangència;
// si és més gran, ja la dibuixa EdgesGeometry com a aresta viva.
//
// Retorna les coordenades dels segments (x1,y1,z1,x2,y2,z2,...) o null si la malla
// no és indexada (llavors no hi ha manera de saber on acaba cada cara).
export function tangentEdges(
  positions: ArrayLike<number>,
  index: ArrayLike<number> | null,
  maxAngle: number,
): Float32Array | null {
  if (!index) return null;
  const pos = positions;
  const nv = pos.length / 3;

  // 1. Vèrtexs a la mateixa posició → mateix identificador (tolerància relativa a la mida)
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < pos.length; i++) {
    if (pos[i] < min) min = pos[i];
    if (pos[i] > max) max = pos[i];
  }
  const scale = 1e5 / (max - min || 1);
  const canon = new Uint32Array(nv);
  const byPosition = new Map<string, number>();
  for (let i = 0; i < nv; i++) {
    const key = `${Math.round(pos[3 * i] * scale)}_${Math.round(pos[3 * i + 1] * scale)}_${Math.round(pos[3 * i + 2] * scale)}`;
    let c = byPosition.get(key);
    if (c === undefined) byPosition.set(key, (c = i));
    canon[i] = c;
  }

  // 2. Arestes per índex: guarda el triangle si només en té un, -1 si en té més
  const edges = new Map<number, number>();
  for (let t = 0; t < index.length; t += 3) {
    for (let k = 0; k < 3; k++) {
      const a = index[t + k];
      const b = index[t + ((k + 1) % 3)];
      const key = a < b ? a * nv + b : b * nv + a;
      edges.set(key, edges.has(key) ? -1 : t);
    }
  }

  const normal = (t: number) => {
    const a = index[t] * 3, b = index[t + 1] * 3, c = index[t + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
    const vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
    const x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
    const l = Math.hypot(x, y, z) || 1;
    return [x / l, y / l, z / l];
  };

  // 3. Aparella les vores de cara per posició i es queda les gairebé planes
  const cosMax = Math.cos((maxAngle * Math.PI) / 180);
  const open = new Map<number, number>();
  const out: number[] = [];
  for (const [key, t] of edges) {
    if (t < 0) continue;
    const a = Math.floor(key / nv);
    const b = key % nv;
    const ca = canon[a];
    const cb = canon[b];
    if (ca === cb) continue;
    const pairKey = ca < cb ? ca * nv + cb : cb * nv + ca;
    const other = open.get(pairKey);
    if (other === undefined) {
      open.set(pairKey, t);
      continue;
    }
    open.delete(pairKey);
    const n1 = normal(other);
    const n2 = normal(t);
    if (n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2] >= cosMax) {
      out.push(pos[3 * a], pos[3 * a + 1], pos[3 * a + 2], pos[3 * b], pos[3 * b + 1], pos[3 * b + 2]);
    }
  }
  return new Float32Array(out);
}
