type Artwork = 'storefront';

export function ShopArt({ art, className }: { art: Artwork; className?: string }) {
  return <img className={className} src={`${import.meta.env.BASE_URL}art/${art}.webp`} alt="" draggable={false} />;
}
