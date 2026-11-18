const PORTRAIT_COUNT = 8;

export function Customer({ sequence }: { sequence: number }) {
  const index = Math.max(0, sequence - 1);
  const portrait = index % PORTRAIT_COUNT + 1;
  const mirrored = Math.floor(index / PORTRAIT_COUNT) % 2 !== 0;
  return <img className="customer" src={`${import.meta.env.BASE_URL}art/customer-${portrait}.webp?v=2`}
    data-mirrored={mirrored || undefined} alt="" draggable={false} />;
}
