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
  function burst(target: Element, color = '#ed96a6') {
    if (disposed || reduceMotion()) return;
    const box = target.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('span');
      dot.className = 'effect-particle'; dot.setAttribute('aria-hidden', 'true');
      dot.style.cssText = `left:${box.x + box.width / 2}px;top:${box.y + box.height / 2}px;background:${color}`;
      document.body.append(dot); elements.add(dot);
      const angle = i * Math.PI * 2 / 5;
      void animate(dot, [{ transform: 'translate(-50%,-50%) scale(.7)', opacity: .8 }, { transform: `translate(${Math.cos(angle) * 16}px,${Math.sin(angle) * 14}px) scale(0)`, opacity: 0 }], MOVE_DURATION);
    }
  }
  function tokenElement(root: HTMLElement, id: string) {
    return Array.from(root.querySelectorAll<HTMLElement>('[data-token-id]')).find(el => el.dataset.tokenId === id);
  }
  async function fly(origin: HTMLElement, target: Element, via?: Element, landing?: () => Element | null) {
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

    // The source is captured before React replaces it. Measure the real tray art after it commits.
    if (landing) await Promise.resolve();
    if (disposed) return;
    const landedArt = landing?.();
    const to = (landedArt ?? target).getBoundingClientRect();
    const x = to.x + (to.width - from.width) / 2 - from.x;
    const y = to.y + (to.height - from.height) / 2 - from.y;
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
    frames.push({ transform: end });
    await animate(ghost, frames, via ? MATCH_DURATION : MOVE_DURATION);

    // An earlier pickup can compact the tray while this dessert is still in flight.
    const latest = landing?.()?.getBoundingClientRect();
    if (landedArt && latest && Math.hypot(latest.x - to.x, latest.y - to.y) > 1) {
      await animate(ghost, [
        { transform: end },
        { transform: `translate(${x + latest.x - to.x}px,${y + latest.y - to.y}px) scale(${endScaleX},${endScaleY})` },
      ], 65);
    }
  }
  async function play(root: HTMLElement, before: GameState, events: GameEvent[]) {
    if (reduceMotion()) return;
    const moved = events.find(event => event.type === 'moved');
    const traySlot = root.querySelector<HTMLElement>(`[data-tray-slot="${before.tray.length}"]`);
    const slots = new Map<string, number>();
    before.orders.forEach((order, index) => { if (order) slots.set(order.definitionId, index); });
    for (const event of events) if (event.type === 'orderAdded') slots.set(event.orderId, event.slot);
    const targetOrder = (id: string) => {
      const card = root.querySelector(`[data-order-slot="${slots.get(id)}"]`);
      return card?.querySelector('.order-delivery') ?? card;
    };
    const jobs: Promise<unknown>[] = [];
    if (moved) {
      const origin = tokenElement(root, moved.donutId);
      const match = events.find(event => event.type === 'consumed' && event.donutId === moved.donutId);
      const target = match?.type === 'consumed' ? targetOrder(match.orderId) : null;
      if (origin && traySlot) {
        const landing = target ? undefined : () => {
          const tray = root.querySelector<HTMLElement>('.tray');
          return tray ? tokenElement(tray, moved.donutId)?.querySelector('img, svg') ?? null : null;
        };
        jobs.push(fly(origin, target ?? traySlot, target ? traySlot : undefined, landing));
      }
    }
    // Match existing tray tokens concurrently. Feedback never adds a second input lock.
    for (const event of events) {
      if (event.type === 'consumed') {
        const target = targetOrder(event.orderId);
        if (target) {
          burst(target);
          if (event.donutId !== moved?.donutId) {
            const origin = tokenElement(root, event.donutId);
            if (origin) jobs.push(fly(origin, target));
          }
        }
      }
      if (event.type === 'trayExpanded') {
        const target = root.querySelector('.tray');
        if (target) { burst(target, '#8cb69a'); jobs.push(animate(target, [{ transform: 'scale(1)' }, { transform: 'scale(1.02)', offset: .5 }, { transform: 'scale(1)' }], MOVE_DURATION)); }
      }
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
