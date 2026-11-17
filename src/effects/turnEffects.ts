import type { GameEvent } from '../game/engine';
import type { GameState } from '../game/types';

type Scope = { animations: Set<Animation>; elements: Set<HTMLElement>; hidden: Set<HTMLElement> };
export function createEffects() {
  const scope: Scope = { animations: new Set(), elements: new Set(), hidden: new Set() };
  let disposed = false;
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.visibilityState !== 'visible';
  async function animate(element: Element, frames: Keyframe[], duration: number, delay = 0) {
    if (disposed || reduceMotion() || !element.animate) return;
    const animation = element.animate(frames, { duration, delay, easing: 'cubic-bezier(.22,.8,.3,1)', fill: 'none' });
    scope.animations.add(animation);
    // Fallback prevents a suspended or missing finish event from trapping input.
    let timeout: ReturnType<typeof setTimeout> | undefined;
    await Promise.race([animation.finished.catch(() => undefined), new Promise<void>(resolve => { timeout = setTimeout(resolve, duration + delay + 180); })]);
    if (timeout) clearTimeout(timeout);
    animation.cancel();
    scope.animations.delete(animation);
  }
  function burst(target: Element, color = '#ed96a6', count = 9) {
    if (disposed || reduceMotion()) return;
    const box = target.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = 'effect-particle';
      dot.setAttribute('aria-hidden', 'true');
      dot.style.cssText = `left:${box.x + box.width / 2}px;top:${box.y + box.height / 2}px;background:${i % 3 ? color : '#f5c66b'}`;
      document.body.append(dot); scope.elements.add(dot);
      const angle = i * Math.PI * 2 / count;
      void animate(dot, [{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(angle) * 36}px,${Math.sin(angle) * 32}px) scale(0)`, opacity: 0 }], 420).finally(() => { dot.remove(); scope.elements.delete(dot); });
    }
  }
  async function fly(svg: Element | null, from: DOMRect, to: DOMRect, delay = 0, hold = false) {
    if (!svg || disposed || reduceMotion()) return;
    const ghost = document.createElement('span');
    ghost.className = 'flying-donut'; ghost.setAttribute('aria-hidden', 'true');
    ghost.append(svg.cloneNode(true));
    ghost.style.left = `${from.x + from.width / 2 - 10}px`;
    ghost.style.top = `${from.y + from.height / 2 - 10}px`;
    document.body.append(ghost); scope.elements.add(ghost);
    const x = to.x + to.width / 2 - (from.x + from.width / 2);
    const y = to.y + to.height / 2 - (from.y + from.height / 2);
    await animate(ghost, [
      { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
      { transform: `translate(${x * .5}px,${y * .5 - 28}px) scale(1.35) rotate(130deg)`, opacity: 1, offset: .48 },
      { transform: `translate(${x}px,${y}px) scale(.85) rotate(270deg)`, opacity: 1 },
    ], 280, delay);
    if (!hold) { ghost.remove(); scope.elements.delete(ghost); }
    return hold ? ghost : undefined;
  }
  const tokenElement = (root: HTMLElement, id: string) => Array.from(root.querySelectorAll<HTMLElement>('[data-token-id]')).find(el => el.dataset.tokenId === id);
  async function play(root: HTMLElement, before: GameState, events: GameEvent[]) {
    const moved = events.find(e => e.type === 'moved');
    const tray = root.querySelector<HTMLElement>(`[data-tray-slot="${before.tray.length}"]`);
    const source = moved ? tokenElement(root, moved.donutId) : undefined;
    const sourceSvg = source?.querySelector('svg') ?? null;
    let landed: HTMLElement | undefined;
    if (source && tray) {
      source.style.visibility = 'hidden'; scope.hidden.add(source);
      landed = await fly(sourceSvg, source.getBoundingClientRect(), tray.getBoundingClientRect(), 0, true);
      burst(tray, '#b79a71', 6);
      await animate(tray, [{ transform: 'scale(1)' }, { transform: 'scale(1.14)', offset: .4 }, { transform: 'scale(1)' }], 170);
    }
    const slots = new Map<string, number>();
    before.orders.forEach((order, index) => { if (order) slots.set(order.definitionId, index); });
    for (const event of events) if (event.type === 'orderAdded') slots.set(event.orderId, event.slot);
    const jobs: Promise<unknown>[] = [];
    let stagger = 0;
    for (const event of events) {
      if (event.type === 'consumed') {
        if (moved?.donutId === event.donutId) { landed?.remove(); if (landed) scope.elements.delete(landed); }
        const target = root.querySelector<HTMLElement>(`[data-order-slot="${slots.get(event.orderId)}"]`);
        const origin = moved?.donutId === event.donutId ? tray : tokenElement(root, event.donutId);
        const svg = moved?.donutId === event.donutId ? sourceSvg : origin?.querySelector('svg') ?? null;
        if (target && origin) {
          if (origin !== tray) { origin.style.visibility = 'hidden'; scope.hidden.add(origin); }
          jobs.push(fly(svg, origin.getBoundingClientRect(), target.getBoundingClientRect(), stagger).then(() => {
            burst(target);
            return animate(target, [{ transform: 'scale(1)' }, { transform: 'scale(1.05)', background: '#ffe8ee', offset: .4 }, { transform: 'scale(1)' }], 190);
          }));
          stagger += 45;
        }
      }
      if (event.type === 'orderCompleted') {
        const target = root.querySelector(`[data-order-slot="${slots.get(event.orderId)}"]`);
        if (target) jobs.push(animate(target, [{ filter: 'brightness(1)', transform: 'scale(1)' }, { filter: 'brightness(1.2)', transform: 'scale(1.06)', offset: .5 }, { filter: 'brightness(1)', transform: 'scale(1)' }], 380, 180));
      }
      if (event.type === 'trayExpanded') {
        const target = root.querySelector('.tray');
        if (target) { burst(target, '#8cb69a', 16); jobs.push(animate(target, [{ transform: 'scale(1)' }, { transform: 'scale(1.04)', offset: .5 }, { transform: 'scale(1)' }], 280)); }
      }
    }
    await Promise.all(jobs);
  }
  const finish = () => { for (const animation of scope.animations) { try { animation.finish(); } catch { animation.cancel(); } } };
  const visibility = () => { if (document.visibilityState !== 'visible') finish(); };
  document.addEventListener('visibilitychange', visibility);
  return {
    play,
    cleanup() {
      disposed = true; finish();
      for (const element of scope.elements) element.remove();
      for (const element of scope.hidden) element.style.visibility = '';
      document.removeEventListener('visibilitychange', visibility);
    },
  };
}
