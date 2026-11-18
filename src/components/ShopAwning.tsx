export function ShopAwning() {
  return <div className="shop-awning" aria-hidden="true">
    {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
  </div>;
}
