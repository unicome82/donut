import { useEffect, useLayoutEffect, useRef } from 'react';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { Donut } from './Donut/Donut';
import { Customer } from './Customer';
import { itemNames } from './Donut/donutThemes';
import { levels } from '../game/levels';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';

function CustomerOrder({ order, slot, portraitOffset }: { order: ActiveOrder | null; slot: number; portraitOffset: number }) {
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
        hearts.className = 'customer-hearts';
        hearts.setAttribute('aria-hidden', 'true');
        for (const [direction, glyph] of [['left', '♥'], ['center', '♥'], ['right', '♥'], ['spark-left', '✦'], ['spark-right', '✦']] as const) {
          const particle = document.createElement('span');
          particle.className = `customer-heart--${direction}`;
          particle.textContent = glyph;
          hearts.append(particle);
        }
        scene.append(hearts);
      }
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
  return <article ref={root} className="order-card" data-order-id={order?.definitionId} data-order-slot={slot} aria-label={order ? `${order.sequence}번 손님 주문` : '판매완료'}>
    <div className="customer-visit">{order ? <><div className="customer-scene"><Customer sequence={order.sequence + portraitOffset} /><span className="order-delivery" aria-hidden="true" /></div><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${itemNames[type]} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul></div></> : <span className="sold-sign">판매완료</span>}</div>
  </article>;
}
export function OrderBoard({ orders, levelId }: { orders: Array<ActiveOrder | null>; levelId: number }) {
  const portraitOffset = levels.filter(level => level.id < levelId).reduce((total, level) => total + level.targetOrders, 0);
  return <section className="order-section" aria-label="손님 주문"><div className="order-grid">{orders.map((order, slot) => <CustomerOrder key={slot} slot={slot} order={order} portraitOffset={portraitOffset} />)}</div></section>;
}
