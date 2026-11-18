import { useEffect, useLayoutEffect, useRef } from 'react';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { Donut } from './Donut/Donut';
import { DonutBox } from './DonutBox';
import { Customer } from './Customer';
import { donutThemes } from './Donut/donutThemes';
import { DONUT_TYPES, type ActiveOrder, type OrderDefinition } from '../game/types';

function CustomerOrder({ order, slot, definition }: { order: ActiveOrder | null; slot: number; definition: OrderDefinition | undefined }) {
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
      const bubble = leaving.querySelector<HTMLElement>('.speech-bubble');
      if (bubble) bubble.style.visibility = 'hidden';
      const scene = leaving.querySelector('.customer-scene');
      if (scene) {
        const hearts = document.createElement('span');
        hearts.className = 'customer-hearts'; hearts.textContent = '♥ ♥';
        scene.append(hearts);
      }
      leaving.querySelectorAll<HTMLElement>('.box-donut').forEach(donut => { donut.style.opacity = '1'; });
      leaving.classList.add('customer-satisfied');
      container.append(leaving);
      animations.push(leaving.animate([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(0)', opacity: 1, offset: .76 },
        { transform: 'translateX(-22px)', opacity: 0 },
      ], { duration: CUSTOMER_GOODBYE_MS, easing: 'ease-in', fill: 'both' }));
    }
    const arrivalDuration = 160;
    const departureDuration = leaving ? CUSTOMER_GOODBYE_MS : 0;
    const arriving = current.querySelector('.customer-scene') ?? current;
    animations.push(arriving.animate([
      { transform: 'translateX(22px)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ], { duration: arrivalDuration, delay: departureDuration, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'both' }));
    const nextBubble = current.querySelector('.speech-bubble');
    if (leaving && nextBubble) {
      animations.push(nextBubble.animate(
        [{ visibility: 'hidden' }, { visibility: 'hidden' }],
        { duration: departureDuration + arrivalDuration, fill: 'backwards' },
      ));
    }
    const cleanup = () => { leaving?.remove(); for (const animation of animations) animation.cancel(); };
    const timeout = setTimeout(cleanup, departureDuration + arrivalDuration + 100);
    cancel.current = () => { clearTimeout(timeout); cleanup(); };
    void Promise.all(animations.map(animation => animation.finished.catch(() => undefined))).then(() => { clearTimeout(timeout); cleanup(); });
  }, [order]);
  const total = Object.values(definition?.items ?? order?.remaining ?? {}).reduce((sum, count) => sum + count, 0);
  const remaining = Object.values(order?.remaining ?? {}).reduce((sum, count) => sum + count, 0);
  const types = DONUT_TYPES.filter(type => (definition?.items[type] ?? order?.remaining[type] ?? 0) > 0);
  return <article ref={root} className="order-card" data-order-id={order?.definitionId} data-order-slot={slot} aria-label={order ? `${order.sequence}번 손님 주문` : '판매완료'}>
    <div className="customer-visit">{order ? <><div className="customer-scene"><Customer sequence={order.sequence} /><DonutBox types={types} received={Math.max(0, total - remaining)} total={total} /></div><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${donutThemes[type].name} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul></div></> : <span className="sold-sign">판매완료</span>}</div>
  </article>;
}
export function OrderBoard({ orders, definitions }: { orders: Array<ActiveOrder | null>; definitions: OrderDefinition[] }) {
  return <section className="order-section" aria-label="손님 주문"><div className="order-grid">{orders.map((order, slot) => <CustomerOrder key={slot} slot={slot} order={order} definition={definitions.find(definition => definition.id === order?.definitionId)} />)}</div></section>;
}
