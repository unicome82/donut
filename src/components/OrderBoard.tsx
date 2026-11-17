import { Donut } from './Donut/Donut';
import { donutThemes } from './Donut/donutThemes';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';
export function OrderBoard({ orders }: { orders: Array<ActiveOrder | null> }) {
  return <section className="order-section" aria-labelledby="orders-title">
    <div className="section-heading"><h2 id="orders-title">오늘의 주문</h2><span>차근차근, 하나씩</span></div>
    <div className="order-grid">{orders.map((order, slot) => <article className="order-card" key={slot}>
      <div className="receipt-top"><span>{order ? `ORDER ${String(order.sequence).padStart(2, '0')}` : 'ALL DONE'}</span><span className="receipt-dot" /></div>
      {order ? <ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${donutThemes[type].name} ${order.remaining[type]}개`}><Donut type={type} /><span>×<strong>{order.remaining[type]}</strong></span></li>)}</ul> : <p className="empty-order">모든 주문을 담았어요</p>}
      <div className="receipt-bottom"><span />{order && <small>갓 구운 행복 한 상자</small>}<span /></div>
    </article>)}</div>
  </section>;
}
