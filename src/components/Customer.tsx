const PORTRAIT_COUNT = 30;
const portraits = import.meta.glob<string>('../assets/customers/*.webp', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

// Sprite dimensions and the center of each face, in percent of the sprite.
const facePositions = [
  [242, 256, 55.8, 20.0],
  [247, 256, 47.2, 22.7],
  [216, 256, 50.5, 22.7],
  [229, 256, 50.0, 21.8],
  [238, 256, 51.0, 19.1],
  [210, 256, 50.0, 30.0],
  [223, 256, 50.0, 17.3],
  [238, 256, 52.0, 21.8],
  [212, 256, 52.7, 20.0],
  [242, 256, 50.0, 26.4],
  [244, 256, 50.5, 16.4],
  [241, 256, 50.0, 19.1],
  [236, 256, 56.4, 20.0],
  [230, 256, 50.5, 24.5],
  [250, 256, 50.5, 20.9],
  [231, 256, 49.5, 21.8],
  [231, 256, 50.5, 20.9],
  [236, 256, 48.5, 34.5],
  [234, 256, 48.5, 15.5],
  [256, 248, 48.2, 20.9],
  [231, 256, 51.5, 23.6],
  [255, 256, 50.0, 20.9],
  [215, 256, 48.9, 22.7],
  [255, 256, 51.8, 21.8],
  [245, 256, 48.6, 20.0],
  [238, 256, 50.0, 28.2],
  [247, 256, 49.1, 23.6],
  [252, 256, 49.1, 25.5],
  [246, 256, 50.0, 18.2],
  [233, 256, 48.0, 23.6],
] as const;

export function Customer({ sequence, className = 'customer', impatient = false }: { sequence: number; className?: string; impatient?: boolean }) {
  const portrait = Math.max(0, sequence - 1) % PORTRAIT_COUNT + 1;
  const face = facePositions[portrait - 1];
  return <>
    <img className={className} src={portraits[`../assets/customers/customer-${portrait}.webp`]} alt="" draggable={false} />
    {impatient && face && <span className="customer-expression" aria-hidden="true"
      style={{ width: `min(100%, ${face[0] / face[1] * 100}cqh)`, aspectRatio: `${face[0]} / ${face[1]}` }}>
      <span className="customer-face-flush" style={{ left: `${face[2]}%`, top: `${face[3]}%` }} />
    </span>}
  </>;
}
