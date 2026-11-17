import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';
export function OrderBoard({ orders }: { orders: Array<ActiveOrder | null> }) {
  return <section className="order-section" aria-label="주문">
    <div className="order-grid">{orders.map((order, slot) => <article className="order-card" key={slot} aria-label={order ? `주문 ${order.sequence}` : '완료된 주문'}>
      <span className="order-number">{order ? String(order.sequence).padStart(2, '0') : '✓'}</span>
      {order ? <ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${donutThemes[type].name} ${order.remaining[type]}개`}><Donut type={type} /><span>×<strong>{order.remaining[type]}</strong></span></li>)}</ul> : <span className="empty-order">완료</span>}
    </article>)}</div>
  </section>;
}
