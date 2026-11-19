import displayShelf from '../assets/game/display-shelf.webp';
import { useLayoutEffect, useRef } from 'react';
import { CUSTOMER_GOODBYE_MS } from '../effects/customerTiming';
import { Donut } from './Donut/Donut';
import { Customer } from './Customer';
import { itemNames } from './Donut/donutThemes';
import { stages } from '../game/stages';
import { ORDER_SLOTS } from '../game/constants';
import { DONUT_TYPES, type ActiveOrder } from '../game/types';

const ARRIVAL_DURATION = 160;
const FIRST_ARRIVAL_STAGGER = 130;
const BUBBLE_FADE_DURATION = 180;
const ORDER_PREVIEW_DURATION = 250;
const SHIFT_DURATION = 240;
const SHIFT_DELAY = 150;

const patienceColors = ['#85c1ef', '#8cd4ac', '#f6d77e', '#e87e87'];

function patienceColor(fraction: number): string {
  const elapsed = Math.min(1, (1 - fraction) / 0.8) * (patienceColors.length - 1);
  const segment = Math.min(Math.floor(elapsed), patienceColors.length - 2);
  const mix = (elapsed - segment) * 100;
  return `color-mix(in oklab, ${patienceColors[segment]}, ${patienceColors[segment + 1]} ${mix}%)`;
}

function canAnimate() {
  return typeof Element.prototype.animate === 'function'
    && document.visibilityState === 'visible'
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function CustomerOrder({ order, slot, portraitOffset, onOrderReady, remainingMs }: {
  order: ActiveOrder; slot: number; portraitOffset: number; onOrderReady: (id: string) => void; remainingMs?: number;
}) {
  const root = useRef<HTMLElement>(null);
  const { definitionId: orderId, sequence } = order;
  const duration = order.patienceMs ?? 0;
  const fraction = duration > 0 ? (remainingMs ?? duration) / duration : 0;
  const urgent = duration > 0 && fraction <= 0.4;

  useLayoutEffect(() => {
    const container = root.current;
    const animations: Animation[] = [];
    let readyAfter = ORDER_PREVIEW_DURATION;
    if (container && canAnimate()) {
      const arrivalDelay = sequence <= ORDER_SLOTS ? (sequence - 1) * FIRST_ARRIVAL_STAGGER : SHIFT_DELAY + SHIFT_DURATION;
      const fadeDelay = arrivalDelay + ARRIVAL_DURATION;
      const scene = container.querySelector('.customer-scene');
      const bubble = container.querySelector('.speech-bubble');
      if (scene) animations.push(scene.animate([
        { transform: 'translateX(28px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
      ], { duration: ARRIVAL_DURATION, delay: arrivalDelay, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'both' }));
      if (bubble) animations.push(bubble.animate([
        { opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible' },
      ], { duration: BUBBLE_FADE_DURATION, delay: fadeDelay, easing: 'ease-out', fill: 'both' }));
      readyAfter += fadeDelay + BUBBLE_FADE_DURATION;
    }
    const ready = setTimeout(() => {
      for (const animation of animations) animation.cancel();
      onOrderReady(orderId);
    }, readyAfter);
    return () => {
      clearTimeout(ready);
      for (const animation of animations) animation.cancel();
    };
  }, [onOrderReady, orderId, sequence]);

  return <article ref={root} className={`order-card${urgent ? ' order-card--urgent' : ''}`} data-order-id={orderId} data-order-slot={slot} aria-label={`${sequence}번 손님 주문`}>
    <div className="customer-visit"><div className="customer-scene"><Customer sequence={order.sequence + portraitOffset} impatient={urgent} />
      <span className="order-delivery" aria-hidden="true" /></div><div className="speech-bubble"><ul className="order-items">{DONUT_TYPES.filter(type => (order.remaining[type] ?? 0) > 0).map(type => <li key={type} aria-label={`${itemNames[type]} ${order.remaining[type]}개`}><Donut type={type} /><strong>{order.remaining[type]}</strong></li>)}</ul>
      {duration > 0 && <div className="order-patience" role="progressbar" aria-label="손님 대기 시간"
        aria-valuenow={Math.round(fraction * 100)}>
        <span aria-hidden="true" style={{
          transform: `scaleX(${fraction})`,
          backgroundColor: patienceColor(fraction),
        }} />
      </div>}
    </div></div>
  </article>;
}
interface CardSnapshot { node: HTMLElement; left: number; top: number; width: number; height: number }

function animateDeparture(grid: HTMLElement, snapshot: CardSnapshot, abandoned: boolean) {
  const { node, left, top, width, height } = snapshot;
  node.classList.add('customer-leaving');
  node.removeAttribute('data-order-id');
  node.removeAttribute('data-order-slot');
  node.setAttribute('aria-hidden', 'true');
  Object.assign(node.style, { left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` });

  const scene = node.querySelector('.customer-scene');
  if (scene && !abandoned) {
    const hearts = document.createElement('span');
    hearts.className = 'customer-hearts';
    for (const [direction, glyph] of [['left', '♥'], ['center', '♥'], ['right', '♥'], ['spark-left', '✦'], ['spark-right', '✦']] as const) {
      const particle = document.createElement('span');
      particle.className = `customer-heart--${direction}`;
      particle.textContent = glyph;
      hearts.append(particle);
    }
    scene.append(hearts);
  }
  grid.append(node);
  node.querySelector('.speech-bubble')?.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: BUBBLE_FADE_DURATION, easing: 'ease-out', fill: 'forwards',
  });
  const animation = node.animate([
    { transform: 'translateX(0)', opacity: 1 },
    { transform: 'translateX(0)', opacity: 1, offset: abandoned ? .1 : .28 },
    { transform: 'translateX(-24px)', opacity: 0 },
  ], { duration: CUSTOMER_GOODBYE_MS, easing: 'ease-out', fill: 'forwards' });
  void animation.finished.then(() => node.remove(), () => node.remove());
}

export function OrderBoard({ orders, stageId, onOrderReady, remainingMs = {}, departedOrderIds }: { remainingMs?: Record<string, number>; departedOrderIds?: readonly string[]; orders: Array<ActiveOrder | null>; stageId: number; onOrderReady: (id: string) => void }) {
  const grid = useRef<HTMLDivElement>(null);
  const snapshots = useRef(new Map<string, CardSnapshot>());
  const shifts = useRef(new WeakMap<HTMLElement, Animation>());
  const portraitOffset = stages.filter(stage => stage.id < stageId).reduce((total, stage) => total + stage.targetOrders, 0);
  const arranged = orders.flatMap((order, slot) => order ? [{ order, slot }] : [])
    .sort((left, right) => left.order.sequence - right.order.sequence);

  useLayoutEffect(() => {
    const element = grid.current;
    if (!element) return;
    const previous = snapshots.current;
    const current = new Map<string, CardSnapshot>();
    const animate = canAnimate();
    for (const card of element.querySelectorAll<HTMLElement>('[data-order-id]')) {
      const id = card.dataset.orderId!;
      const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = card;
      const old = previous.get(id);
      if (animate && old && old.left !== left) {
        const shift = shifts.current.get(card);
        const transform = getComputedStyle(card).transform;
        const inFlight = transform === 'none' ? 0 : new DOMMatrixReadOnly(transform).m41;
        shift?.cancel();
        shifts.current.set(card, card.animate([
          { transform: `translateX(${old.left - left + inFlight}px)` },
          { transform: 'translateX(0)' },
        ], { delay: SHIFT_DELAY, duration: SHIFT_DURATION, easing: 'ease-out', fill: 'backwards' }));
      }
      current.set(id, { node: card.cloneNode(true) as HTMLElement, left, top, width, height });
    }
    if (animate) {
      for (const [id, snapshot] of previous) {
        if (!current.has(id)) animateDeparture(element, snapshot, departedOrderIds?.includes(id) ?? false);
      }
    }
    snapshots.current = current;
  }, [departedOrderIds, orders]);

  return <section className="order-section" aria-label="손님 주문">
    <div ref={grid} className="order-grid">
      {arranged.map(({ order, slot }) => <CustomerOrder key={order.definitionId} slot={slot} order={order} portraitOffset={portraitOffset} onOrderReady={onOrderReady} remainingMs={remainingMs[order.definitionId]} />)}
    </div>
    <img className="display-shelf" src={displayShelf} alt="" aria-hidden="true" draggable={false} />
  </section>;
}
