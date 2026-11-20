const PORTRAIT_COUNT = 30;
const portraits = import.meta.glob<string>('../assets/customers/*.webp', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

export function Customer({ sequence, className = 'customer' }: { sequence: number; className?: string }) {
  const portrait = Math.max(0, sequence - 1) % PORTRAIT_COUNT + 1;
  return <img className={className} src={portraits[`../assets/customers/customer-${portrait}.webp`]} alt="" draggable={false} />;
}
