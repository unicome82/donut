import { Donut } from './Donut/Donut';
import { Customer } from './Customer';
import { donutThemes } from './Donut/donutThemes';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';
export function OrderBoard({ orders }: { orders: Array<ActiveOrder | null> }) {
  return <section className="order-section" aria-label="손님 주문">
    <div className="order-grid">{orders.map((order, slot) => <article className="order-card" key={order?.definitionId ?? `empty-${slot}`} data-order-id={order?.definitionId} data-order-slot={slot} aria-label={order ? `${order.sequence}번 손님 주문` : '손님 대기 중'}>
      {order ? <><Customer sequence={order.sequence} /><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${donutThemes[type].name} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul></div></> : <span className="empty-order">✓</span>}
    </article>)}</div>
  </section>;
}
