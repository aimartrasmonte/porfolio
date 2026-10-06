// Aspecte del visor 3D (camp `modelStyle` de meta.yaml, validat a content.config.ts)
export type ModelStyle = {
  opacity: number;
  color?: string;
  edges: boolean;
  edgeColor?: string;
  edgeColorDark?: string;
  edgeAngle: number;
  tangentEdges: boolean;
  tangentOpacity: number;
};
