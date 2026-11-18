const portraitOrder = [1, 9, 5, 10, 2, 13, 6, 15, 3, 11, 7, 12, 4, 14, 8, 16];
const portraits = import.meta.glob<string>('../assets/customers/*.webp', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

export function Customer({ sequence, className = 'customer' }: { sequence: number; className?: string }) {
  const portrait = portraitOrder[Math.max(0, sequence - 1) % portraitOrder.length];
  return <img className={className} src={portraits[`../assets/customers/customer-${portrait}.webp`]} alt="" draggable={false} />;
}
