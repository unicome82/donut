import displayShelf from '../assets/game/display-shelf.webp';
import { useLayoutEffect, useRef } from 'react';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { Donut } from './Donut/Donut';
import { Customer } from './Customer';
import { itemNames } from './Donut/donutThemes';
import { stages } from '../game/stages';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';

const ARRIVAL_DURATION = 160;
const FIRST_ARRIVAL_STAGGER = 130;
const BUBBLE_FADE_DURATION = 180;
const ORDER_PREVIEW_DURATION = 250;

function CustomerOrder({ order, slot, portraitOffset, onOrderReady, remainingMs, departedOrderIds }: { remainingMs?: number; departedOrderIds?: readonly string[]; order: ActiveOrder | null; slot: number; portraitOffset: number; onOrderReady: (id: string) => void }) {
  const root = useRef<HTMLElement>(null);
  const previous = useRef<{ id: string | undefined; node: HTMLElement } | null>(null);
  const cancel = useRef<(() => void) | null>(null);
  const orderId = order?.definitionId;
  const duration = order?.patienceMs ?? 0;
  const fraction = duration > 0 ? (remainingMs ?? duration) / duration : 0;
  const urgent = remainingMs !== undefined && remainingMs <= 10_000;

  useLayoutEffect(() => () => {
    cancel.current?.();
    previous.current = null;
  }, []);
  useLayoutEffect(() => {
    const container = root.current;
    const current = container?.querySelector<HTMLElement>('.customer-visit');
    if (!container || !current) return;
    const old = previous.current;
    previous.current = { id: orderId, node: current.cloneNode(true) as HTMLElement };
    if (old?.id === orderId) return;
    cancel.current?.();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !current.animate || document.visibilityState !== 'visible') {
      if (orderId) {
        const ready = setTimeout(() => onOrderReady(orderId), ORDER_PREVIEW_DURATION);
        cancel.current = () => clearTimeout(ready);
      }
      return;
    }
    const animations: Animation[] = [];
    let leaving: HTMLElement | undefined;
    if (old?.id) {
      leaving = old.node;
      leaving.classList.add('customer-leaving');
      leaving.setAttribute('aria-hidden', 'true');
      const bubble = leaving.querySelector<HTMLElement>('.speech-bubble');
      const scene = leaving.querySelector('.customer-scene');
      if (scene && !departedOrderIds?.includes(old.id)) {
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
      if (bubble) {
        animations.push(bubble.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: BUBBLE_FADE_DURATION, easing: 'ease-out', fill: 'both',
        }));
      }
      animations.push(leaving.animate([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(0)', opacity: 1, offset: .76 },
        { transform: 'translateX(-22px)', opacity: 0 },
      ], { duration: CUSTOMER_GOODBYE_MS, easing: 'ease-in', fill: 'both' }));
    }
    const arrivalDelay = leaving ? CUSTOMER_GOODBYE_MS : old ? 0 : slot * FIRST_ARRIVAL_STAGGER;
    let animationDuration = leaving ? CUSTOMER_GOODBYE_MS : 0;
    let ready: ReturnType<typeof setTimeout> | undefined;
    if (orderId) {
      const scene = current.querySelector('.customer-scene');
      const bubble = current.querySelector('.speech-bubble');
      const fadeDelay = arrivalDelay + ARRIVAL_DURATION;
      if (scene) animations.push(scene.animate([
        { transform: 'translateX(22px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
      ], { duration: ARRIVAL_DURATION, delay: arrivalDelay, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'both' }));
      if (bubble) animations.push(bubble.animate([
        { opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible' },
      ], { duration: BUBBLE_FADE_DURATION, delay: fadeDelay, easing: 'ease-out', fill: 'both' }));
      animationDuration = fadeDelay + BUBBLE_FADE_DURATION;
      ready = setTimeout(() => onOrderReady(orderId), animationDuration + ORDER_PREVIEW_DURATION);
    }
    const cleanup = () => { leaving?.remove(); for (const animation of animations) animation.cancel(); };
    const timeout = setTimeout(cleanup, animationDuration + 100);
    cancel.current = () => { clearTimeout(ready); clearTimeout(timeout); cleanup(); };
    void Promise.all(animations.map(animation => animation.finished.catch(() => undefined))).then(() => { clearTimeout(timeout); cleanup(); });
  }, [departedOrderIds, onOrderReady, order, orderId, slot]);
  return <article ref={root} className={`order-card${urgent ? ' order-card--urgent' : ''}`} data-order-id={order?.definitionId} data-order-slot={slot} aria-label={order ? `${order.sequence}번 손님 주문` : undefined}>
    <div className="customer-visit">{order ? <><div className="customer-scene"><Customer sequence={order.sequence + portraitOffset} /><span className="order-delivery" aria-hidden="true" /></div><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${itemNames[type]} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul>
      {duration > 0 && <div className="order-patience" role="progressbar" aria-label="손님 대기 시간"
        aria-valuenow={Math.round(fraction * 100)}>
        <span aria-hidden="true" style={{
          transform: `scaleX(${fraction})`,
          backgroundColor: `color-mix(in oklab, #85c1ef ${fraction * 100}%, #e87e87)`,
        }} />
      </div>}
    </div></> : null}</div>
  </article>;
}
export function OrderBoard({ orders, stageId, onOrderReady, remainingMs = {}, departedOrderIds }: { remainingMs?: Record<string, number>; departedOrderIds?: readonly string[]; orders: Array<ActiveOrder | null>; stageId: number; onOrderReady: (id: string) => void }) {
  const portraitOffset = stages.filter(stage => stage.id < stageId).reduce((total, stage) => total + stage.targetOrders, 0);
  return <section className="order-section" aria-label="손님 주문">
    <div className="order-grid">
      {orders.map((order, slot) => <CustomerOrder key={slot} slot={slot} order={order} portraitOffset={portraitOffset} onOrderReady={onOrderReady} remainingMs={order ? remainingMs[order.definitionId] : undefined} departedOrderIds={departedOrderIds} />)}
    </div>
    <img className="display-shelf" src={displayShelf} alt="" aria-hidden="true" draggable={false} />
  </section>;
}
