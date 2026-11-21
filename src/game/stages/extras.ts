import type { RewardKind, StageDefinition } from '../types';

// Features that join the campaign as it goes on. Both are laid over stored layouts at load time,
// so the generator and its saved solutions stay unchanged.
export const VIP_FROM_STAGE = 15;
export const REWARDS_FROM_STAGE = 25;
/** Seconds a finished VIP order adds to the clock. */
export const VIP_BONUS_MS = 5_000;
// A reward never sits within a queue's first few desserts, so it takes some digging to reach.
const REWARD_MIN_DEPTH = 3;

function randomFor(seed: number) {
  let state = seed >>> 0;
  return (size: number) => {
    state = (Math.imul(state ^ (state >>> 15), 0x2c1b3c6d) + 0x6d2b79f5) >>> 0;
    return Math.floor(state / 0x100000000 * size);
  };
}

/** One VIP at stage 15, a second from stage 55 and a third from stage 95. */
export function vipCount(id: number): number {
  return id < VIP_FROM_STAGE ? 0 : Math.min(3, 1 + Math.floor((id - VIP_FROM_STAGE) / 40));
}

export function decorateStage(stage: StageDefinition): StageDefinition {
  const random = randomFor(stage.id * 7919 + 17);
  // VIPs skip the opening four customers so the first one arrives mid-stage.
  const candidates = stage.orders.map((_, index) => index).filter(index => index >= 4);
  const vips = new Set<number>();
  for (let n = vipCount(stage.id); n > 0 && candidates.length; n -= 1) vips.add(candidates.splice(random(candidates.length), 1)[0]!);
  const orders = vips.size ? stage.orders.map((order, index) => vips.has(index) ? { ...order, vip: true } : order) : stage.orders;

  let queues = stage.queues;
  if (stage.id >= REWARDS_FROM_STAGE) {
    const spots = queues.flatMap((queue, column) => queue.flatMap((token, index) =>
      index >= REWARD_MIN_DEPTH && !token.hidden ? [[column, index] as const] : []));
    if (spots.length) {
      const [column, index] = spots[random(spots.length)]!;
      const reward: RewardKind = random(2) === 0 ? 'heart' : 'trayClear';
      queues = queues.map((queue, c) => c !== column ? queue : queue.map((token, i) => i === index ? { ...token, reward } : token));
    }
  }
  return { ...stage, orders, queues };
}
