import { useEffect, useEffectEvent, useRef, useState } from 'react';
import type { ActiveOrder } from '../game/types';

export function useOrderPatience(
  playing: boolean,
  orders: Array<ActiveOrder | null>,
  readyOrders: readonly string[],
  onExpire: (ids: readonly string[]) => void,
) {
  const remaining = useRef(new Map<string, number>());
  const [remainingMs, setRemainingMs] = useState<Record<string, number>>({});
  const enabled = orders.some(order => order?.patienceMs);
  const tick = useEffectEvent((elapsed: number) => {
    const active = new Map<string, number>();
    const expired: string[] = [];
    for (const order of orders) {
      if (!order?.patienceMs || !readyOrders.includes(order.definitionId)) continue;
      const id = order.definitionId;
      const previous = remaining.current.get(id);
      const milliseconds = Math.max(0, previous === undefined ? order.patienceMs : previous - elapsed);
      active.set(id, milliseconds);
      if (milliseconds === 0 && previous !== 0) expired.push(id);
    }
    remaining.current = active;
    const display = Object.fromEntries(active);
    setRemainingMs(previous => Object.keys(previous).length === active.size
      && Object.entries(display).every(([id, value]) => previous[id] === value) ? previous : display);
    if (expired.length) onExpire(expired);
  });

  useEffect(() => {
    if (!enabled || !playing) return;
    let previous = performance.now();
    const interval = setInterval(() => {
      const now = performance.now();
      if (!document.hidden) tick(now - previous);
      previous = now;
    }, 200);
    const resetClock = () => { previous = performance.now(); };
    document.addEventListener('visibilitychange', resetClock);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', resetClock);
    };
  }, [enabled, playing]);

  function resetPatience() {
    remaining.current.clear();
    setRemainingMs({});
  }
  return { remainingMs, resetPatience };
}
