import { useEffect, useLayoutEffect, useRef } from 'react';
import { Donut } from './Donut/Donut';
import { Customer } from './Customer';
import { donutThemes } from './Donut/donutThemes';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';

function CustomerOrder({ order, slot }: { order: ActiveOrder | null; slot: number }) {
  const root = useRef<HTMLElement>(null);
  const previous = useRef<{ id: string | undefined; node: HTMLElement } | null>(null);
  const cancel = useRef<(() => void) | null>(null);
  useEffect(() => () => cancel.current?.(), []);
  useLayoutEffect(() => {
    const container = root.current;
    const current = container?.querySelector<HTMLElement>('.customer-visit');
    if (!container || !current) return;
    const old = previous.current;
    const changed = old && old.id !== order?.definitionId;
    previous.current = { id: order?.definitionId, node: current.cloneNode(true) as HTMLElement };
    if (!changed && old) return;
    cancel.current?.();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !current.animate || document.visibilityState !== 'visible') return;
    const animations: Animation[] = [];
    let leaving: HTMLElement | undefined;
    if (changed && old.id) {
      leaving = old.node;
      leaving.classList.add('customer-leaving');
      leaving.setAttribute('aria-hidden', 'true');
      container.append(leaving);
      animations.push(leaving.animate([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(-22px)', opacity: 0 },
      ], { duration: 120, easing: 'ease-in', fill: 'both' }));
    }
    animations.push(current.animate([
      { transform: 'translateX(22px)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ], { duration: 160, delay: leaving ? 120 : 0, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'both' }));
    const cleanup = () => { leaving?.remove(); for (const animation of animations) animation.cancel(); };
    const timeout = setTimeout(cleanup, 450);
    cancel.current = () => { clearTimeout(timeout); cleanup(); };
    void Promise.all(animations.map(animation => animation.finished.catch(() => undefined))).then(() => { clearTimeout(timeout); cleanup(); });
  }, [order]);
  return <article ref={root} className="order-card" data-order-id={order?.definitionId} data-order-slot={slot} aria-label={order ? `${order.sequence}번 손님 주문` : '손님 대기 중'}>
    <div className="customer-visit">{order ? <><Customer sequence={order.sequence} /><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${donutThemes[type].name} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul></div></> : <span className="empty-order">✓</span>}</div>
  </article>;
}
export function OrderBoard({ orders }: { orders: Array<ActiveOrder | null> }) {
  return <section className="order-section" aria-label="손님 주문"><div className="order-grid">{orders.map((order, slot) => <CustomerOrder key={slot} slot={slot} order={order} />)}</div></section>;
}
