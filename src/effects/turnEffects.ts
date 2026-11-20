import type { GameEvent } from '../game/engine';
import type { GameState } from '../game/types';

export const MOVE_DURATION = 135;
export const MATCH_DURATION = 160;

export function createEffects() {
  const animations = new Set<Animation>();
  const elements = new Set<HTMLElement>();
  let disposed = false;
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.visibilityState !== 'visible';
  async function animate(element: Element, frames: Keyframe[], duration: number) {
    if (disposed || reduceMotion() || !element.animate) return;
    // Keep the final position until React has committed the real token at its destination.
    const animation = element.animate(frames, { duration, easing: 'cubic-bezier(.2,.65,.35,1)', fill: 'both' });
    animations.add(animation);
    let timeout: ReturnType<typeof setTimeout> | undefined;
    await Promise.race([animation.finished.catch(() => undefined), new Promise<void>(resolve => { timeout = setTimeout(resolve, duration + 100); })]);
    if (timeout) clearTimeout(timeout);
  }
  async function burst(box: DOMRect, color = '#ed96a6') {
    if (disposed || reduceMotion()) return;
    const particles: Promise<void>[] = [];
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('span');
      dot.className = 'effect-particle'; dot.setAttribute('aria-hidden', 'true');
      dot.style.cssText = `left:${box.x + box.width / 2}px;top:${box.y + box.height / 2}px;background:${color}`;
      document.body.append(dot); elements.add(dot);
      const angle = i * Math.PI * 2 / 5;
      particles.push(animate(dot, [{ transform: 'translate(-50%,-50%) scale(.7)', opacity: .8 }, { transform: `translate(${Math.cos(angle) * 16}px,${Math.sin(angle) * 14}px) scale(0)`, opacity: 0 }], MOVE_DURATION));
    }
    await Promise.all(particles);
  }
  function tokenElement(root: HTMLElement, id: string) {
    return Array.from(root.querySelectorAll<HTMLElement>('[data-token-id]')).find(el => el.dataset.tokenId === id);
  }
  async function fly(origin: HTMLElement, target: Element, via?: Element, landing?: () => Element | null, clip?: Element) {
    const artwork = origin.querySelector('img, svg');
    if (!artwork || disposed || reduceMotion()) return;
    const from = artwork.getBoundingClientRect();
    if (!from.width || !from.height) return;
    const ghost = document.createElement('span');
    ghost.className = 'flying-donut'; ghost.setAttribute('aria-hidden', 'true');
    ghost.append(artwork.cloneNode(true));
    ghost.style.left = `${from.x}px`; ghost.style.top = `${from.y}px`;
    ghost.style.width = `${from.width}px`; ghost.style.height = `${from.height}px`;
    document.body.append(ghost); elements.add(ghost);

    // The source is captured before React replaces it. Measure the landing artwork after it commits.
    if (landing) await Promise.resolve();
    if (disposed) return;
    const landedArt = landing?.();
    const to = (landedArt ?? target).getBoundingClientRect();
    const x = to.x + (to.width - from.width) / 2 - from.x;
    const bottom = clip?.getBoundingClientRect().bottom;
    const centerY = to.y + to.height / 2;
    const clippedY = bottom === undefined ? centerY : Math.min(centerY, bottom - to.height / 2);
    const y = clippedY - from.height / 2 - from.y;
    const endScaleX = landedArt ? to.width / from.width : 1;
    const endScaleY = landedArt ? to.height / from.height : 1;
    const end = `translate(${x}px,${y}px) scale(${endScaleX},${endScaleY})`;
    const frames: Keyframe[] = [{ transform: 'translate(0,0) scale(1)' }];
    if (via) {
      const middle = via.getBoundingClientRect();
      frames.push({ transform: `translate(${middle.x + middle.width / 2 - from.x - from.width / 2}px,${middle.y + middle.height / 2 - from.y - from.height / 2}px)`, offset: .5 });
    } else if (landing) {
      const arc = Math.min(16, Math.abs(x) * .055);
      frames.push({
        transform: `translate(${x * .65}px,${y * .65 - arc}px) scale(${(1 + endScaleX) / 2},${(1 + endScaleY) / 2})`,
        offset: .56,
      });
    }
    frames.push({ transform: end, opacity: clippedY < centerY ? 0 : 1 });
    await animate(ghost, frames, via ? MATCH_DURATION : MOVE_DURATION);

    if (!landing) {
      ghost.remove();
      elements.delete(ghost);
    }

    // An earlier pickup can compact the tray while this dessert is still in flight.
    const latest = landing?.()?.getBoundingClientRect();
    if (!clip && landedArt && latest && Math.hypot(latest.x - to.x, latest.y - to.y) > 1) {
      await animate(ghost, [
        { transform: end },
        { transform: `translate(${x + latest.x - to.x}px,${y + latest.y - to.y}px) scale(${endScaleX},${endScaleY})` },
      ], 65);
    }
  }
  async function play(root: HTMLElement, before: GameState, events: GameEvent[], onArrival?: (orderId: string) => void) {
    if (reduceMotion()) {
      await Promise.resolve();
      if (!disposed) {
        const orders = new Set(events.flatMap(event => event.type === 'consumed' ? [event.orderId] : []));
        for (const orderId of orders) onArrival?.(orderId);
      }
      return;
    }
    const moved = events.find(event => event.type === 'moved');
    const queueSection = events.some(event => event.type === 'returned') ? root.querySelector('.queue-section') : null;
    const traySlot = root.querySelector<HTMLElement>(`[data-tray-slot="${before.tray.length}"]`);
    const slots = new Map<string, number>();
    before.orders.forEach((order, index) => { if (order) slots.set(order.definitionId, index); });
    for (const event of events) if (event.type === 'orderAdded') slots.set(event.orderId, event.slot);
    const targetOrder = (id: string) => {
      const card = root.querySelector(`[data-order-slot="${slots.get(id)}"]`);
      return card?.querySelector('.order-delivery') ?? card;
    };
    const jobs: Promise<unknown>[] = [];
    const deliveries = new Map<string, { box: DOMRect; flights: Promise<void>[] }>();
    function deliver(orderId: string, target: Element, flight?: Promise<void>) {
      const delivery = deliveries.get(orderId) ?? { box: target.getBoundingClientRect(), flights: [] };
      if (flight) delivery.flights.push(flight);
      deliveries.set(orderId, delivery);
    }
    if (moved) {
      const origin = tokenElement(root, moved.donutId);
      const match = events.find(event => event.type === 'consumed' && event.donutId === moved.donutId);
      const target = match?.type === 'consumed' ? targetOrder(match.orderId) : null;
      if (origin && traySlot) {
        const landing = target ? undefined : () => {
          const tray = root.querySelector<HTMLElement>('.tray');
          return tray ? tokenElement(tray, moved.donutId)?.querySelector('img, svg') ?? null : null;
        };
        if (target && match?.type === 'consumed') deliver(match.orderId, target, fly(origin, target, traySlot));
        else jobs.push(fly(origin, traySlot, undefined, landing));
      }
    }
    // Match existing tray tokens concurrently. Feedback never adds a second input lock.
    for (const event of events) {
      if (event.type === 'consumed') {
        const target = targetOrder(event.orderId);
        if (target) {
          const origin = event.donutId === moved?.donutId ? undefined : tokenElement(root, event.donutId);
          deliver(event.orderId, target, origin ? fly(origin, target) : undefined);
        }
      }
      if (event.type === 'returned') {
        const origin = tokenElement(root, event.donutId);
        const queue = root.querySelector<HTMLElement>(`[data-queue-index="${event.queueIndex}"]`);
        if (origin && queue) {
          jobs.push(fly(origin, queue, undefined, () => tokenElement(queue, event.donutId)?.querySelector('img, svg') ?? null, queueSection ?? undefined));
        }
      }
    }
    for (const [orderId, { box, flights }] of deliveries) {
      jobs.push(Promise.all(flights).then(() => {
        if (disposed) return;
        onArrival?.(orderId);
        return burst(box);
      }));
    }
    await Promise.all(jobs);
  }
  const finish = () => { for (const animation of animations) { try { animation.finish(); } catch { animation.cancel(); } } };
  const visibility = () => { if (document.visibilityState !== 'visible') finish(); };
  document.addEventListener('visibilitychange', visibility);
  return {
    play,
    cleanup() {
      disposed = true;
      // Remove ghosts before canceling their transforms to prevent a return-to-origin flash.
      for (const element of elements) element.remove();
      for (const animation of animations) animation.cancel();
      document.removeEventListener('visibilitychange', visibility);
    },
  };
}
