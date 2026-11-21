// Hearts gate stage attempts: each attempt costs one, a clear gives it back, and a heart
// refills every 30 minutes up to five. Bonus stages add hearts that may go past five.
export const MAX_HEARTS = 5;
export const HEART_REFILL_MS = 30 * 60_000;

/** refillFrom is when the running refill started; it only matters below MAX_HEARTS. */
export interface Hearts { count: number; refillFrom: number }

export const fullHearts = (): Hearts => ({ count: MAX_HEARTS, refillFrom: 0 });

export function refillHearts(hearts: Hearts, now: number): Hearts {
  if (hearts.count >= MAX_HEARTS) return hearts;
  // A clock set backwards restarts the wait instead of granting hearts.
  if (now < hearts.refillFrom) return { ...hearts, refillFrom: now };
  const gained = Math.floor((now - hearts.refillFrom) / HEART_REFILL_MS);
  if (gained <= 0) return hearts;
  const count = Math.min(MAX_HEARTS, hearts.count + gained);
  return { count, refillFrom: hearts.refillFrom + gained * HEART_REFILL_MS };
}

/** Takes one heart for an attempt, or returns null when none is left. */
export function spendHeart(hearts: Hearts, now: number): Hearts | null {
  const current = refillHearts(hearts, now);
  if (current.count < 1) return null;
  return { count: current.count - 1, refillFrom: current.count >= MAX_HEARTS ? now : current.refillFrom };
}

/** Adds hearts; `cap` limits a refund so it never ends above where the attempt started. */
export function addHearts(hearts: Hearts, now: number, amount = 1, cap = Infinity): Hearts {
  const current = refillHearts(hearts, now);
  return { ...current, count: Math.max(current.count, Math.min(cap, current.count + amount)) };
}

/** What the counter shows: up to five hearts, any bonus extra as "+N", and the next refill wait. */
export function describeHearts(hearts: Hearts, now: number) {
  const current = refillHearts(hearts, now);
  return {
    count: Math.min(current.count, MAX_HEARTS),
    extra: Math.max(0, current.count - MAX_HEARTS),
    nextInMs: current.count < MAX_HEARTS ? Math.max(0, HEART_REFILL_MS - (now - current.refillFrom)) : null,
    available: current.count,
  };
}

export function formatWait(ms: number): string {
  const seconds = Math.ceil(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
