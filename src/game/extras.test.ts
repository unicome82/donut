import { describe, expect, it } from 'vitest';
import { createSession, reduceSession } from './session';
import { loadStage } from './stages';
import { REWARDS_FROM_STAGE, VIP_FROM_STAGE, vipCount } from './stages/extras';
import type { GameState } from './types';

function rewardSpot(state: GameState) {
  for (const [column, queue] of state.queues.entries()) {
    const index = queue.findIndex(token => token.reward);
    if (index >= 0) return { column, index, reward: queue[index]!.reward! };
  }
  return undefined;
}

describe('VIP 손님', () => {
  it(`${VIP_FROM_STAGE}번부터 나오고, 처음 네 손님은 VIP가 아니며 수가 점점 는다`, async () => {
    expect((await loadStage(VIP_FROM_STAGE - 1)).orders.some(order => order.vip)).toBe(false);
    for (const id of [VIP_FROM_STAGE, 55, 95, 400]) {
      const stage = await loadStage(id);
      const vips = stage.orders.flatMap((order, index) => order.vip ? [index] : []);
      expect(vips).toHaveLength(vipCount(id));
      expect(vips.every(index => index >= 4)).toBe(true);
    }
    expect([vipCount(15), vipCount(55), vipCount(95), vipCount(9000)]).toEqual([1, 2, 3, 3]);
  });
});

describe('대기열 보상', () => {
  it(`${REWARDS_FROM_STAGE}번부터 스테이지마다 하나씩, 맨 앞 세 칸 밖의 보이는 디저트에 붙는다`, async () => {
    expect((await loadStage(REWARDS_FROM_STAGE - 1)).queues.flat().some(token => token.reward)).toBe(false);
    for (const id of [REWARDS_FROM_STAGE, 51, 99, 777]) {
      const stage = await loadStage(id);
      const rewarded = stage.queues.flatMap(queue => queue.flatMap((token, index) => token.reward ? [{ token, index }] : []));
      expect(rewarded).toHaveLength(1);
      expect(rewarded[0]!.index).toBeGreaterThanOrEqual(3);
      expect(rewarded[0]!.token.hidden).toBeUndefined();
    }
  });

  it('보상 디저트를 1열에서 집으면 충전되고, 다시 하면 그 스테이지에는 보상이 없다', async () => {
    const ids: Partial<Record<string, number>> = {};
    for (let id = REWARDS_FROM_STAGE; !(ids.heart && ids.trayClear); id += 1) {
      const spot = rewardSpot({ queues: (await loadStage(id)).queues } as GameState);
      if (spot && !ids[spot.reward]) ids[spot.reward] = id;
    }
    for (const [kind, id] of Object.entries(ids) as Array<[string, number]>) {
      let session = reduceSession({ ...createSession(true), hearts: { count: 3, bonus: 0, refillFrom: 0 } }, { type: 'START', stageId: id, now: 0 });
      expect(session.hearts.count).toBe(2);
      const clears = session.game.trayClearsLeft;
      const { column, index } = rewardSpot(session.game)!;
      // Dig straight down the reward's column with room to spare in the tray.
      session = { ...session, game: { ...session.game, trayCapacity: 99 } };
      for (let n = 0; n <= index; n += 1) {
        const front = session.game.queues[column]![0]!;
        session = reduceSession(session, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex: column, expectedDonutId: front.id }, now: 0 });
      }
      expect(session.game.collectedRewards).toEqual([kind]);
      expect(session.rewardedStages).toEqual([id]);
      expect(session.hearts.count).toBe(kind === 'heart' ? 3 : 2);
      expect(session.game.trayClearsLeft).toBe(kind === 'trayClear' ? clears + 1 : clears);
      expect(session.trayClears).toBe(session.game.trayClearsLeft);

      const retried = reduceSession(session, { type: 'GAME', action: { type: 'RESTART' }, now: 0 });
      expect(rewardSpot(retried.game)).toBeUndefined();
      const restarted = reduceSession({ ...retried, screen: 'stages' }, { type: 'START', stageId: id, now: 0 });
      expect(rewardSpot(restarted.game)).toBeUndefined();
    }
  });

  it('하트가 가득하면 하트 보상은 보너스 하트로 간다', async () => {
    let id = REWARDS_FROM_STAGE;
    while (rewardSpot({ queues: (await loadStage(id)).queues } as GameState)?.reward !== 'heart') id += 1;
    let session = reduceSession(createSession(true), { type: 'START', stageId: id, now: 0 });
    session = { ...session, hearts: { count: 5, bonus: 0, refillFrom: 0 }, game: { ...session.game, trayCapacity: 99 } };
    const { column, index } = rewardSpot(session.game)!;
    for (let n = 0; n <= index; n += 1) {
      const front = session.game.queues[column]![0]!;
      session = reduceSession(session, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex: column, expectedDonutId: front.id }, now: 0 });
    }
    expect(session.hearts).toMatchObject({ count: 5, bonus: 1 });
  });
});
