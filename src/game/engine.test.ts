import { describe, expect, it } from 'vitest';
import { createGame, expandTray, getStars, selectDonut } from './engine';
import { reduceGame } from './reducer';
import { createSession, isUnlocked, reduceSession } from './session';
import { levels } from './levels';
import { solutions } from './levels/solutions';
import { BASE_TRAY_CAPACITY, TRAY_EXPANSION } from './constants';
import { validateLevel } from './validation';
import type { DonutType, GameState, LevelDefinition, OrderDefinition } from './types';

function fixture(items: OrderDefinition['items'][]): LevelDefinition {
  const types: DonutType[] = ['strawberry', 'chocolate', 'vanilla'];
  return {
    id: 1, revision: 1, donutTypes: types, targetOrders: items.length, trayCapacity: BASE_TRAY_CAPACITY,
    orders: items.map((item, i) => ({ id: 'o' + i, sequence: i + 1, items: item })),
    queues: Array.from({ length: 6 }, (_, q) => Array.from({ length: 20 }, (_, i) => ({ id: q + '-' + i, type: types[q % 3] ?? 'vanilla' }))),
  };
}
function select(state: GameState, level: LevelDefinition, queue: number) {
  const front = state.queues[queue]?.[0];
  if (!front) throw new Error('빈 대기열');
  return selectDonut(state, level, queue, front.id);
}
function tray(type: DonutType, count: number) {
  return Array.from({ length: count }, (_, i) => ({ id: 'tray-' + i, type }));
}

describe('자동 매칭과 상태 전이', () => {
  it('선택한 토큰은 대기열에서 제거되고 한 번만 소비된다', () => {
    const level = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const original = createGame(level);
    const snapshot = structuredClone(original);
    const result = select(original, level, 0);
    expect(original).toEqual(snapshot);
    expect(result.state.queues[0]).toHaveLength(19);
    expect(result.state.orders[0]?.remaining.strawberry).toBe(1);
    expect(result.state.orders[1]?.remaining.strawberry).toBe(2);
    expect(result.state.tray).toHaveLength(0);
    expect(result.events.filter(e => e.type === 'consumed')).toHaveLength(1);
    expect(selectDonut(result.state, level, 0, '0-0').state).toBe(result.state);
  });
  it('화면 슬롯과 무관하게 주문 번호가 낮은 순서로 배정한다', () => {
    const level = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const state = createGame(level);
    [state.orders[0], state.orders[1]] = [state.orders[1] ?? null, state.orders[0] ?? null];
    const next = select(state, level, 0).state;
    expect(next.orders[1]?.remaining.strawberry).toBe(1);
    expect(next.orders[0]?.remaining.strawberry).toBe(2);
  });
  it('필요하지 않은 도넛은 트레이에 남는다', () => {
    const level = fixture([{ strawberry: 1 }]);
    const next = select(createGame(level), level, 2).state;
    expect(next.tray[0]?.type).toBe('vanilla');
    expect(next.completedOrders).toBe(0);
  });
  it('동시 완료 후 새 주문과 남은 트레이를 연쇄 매칭한다', () => {
    const level = fixture([{ strawberry: 1 }, { chocolate: 1 }, { strawberry: 1 }, { chocolate: 1 }, { vanilla: 1 }, { vanilla: 1 }]);
    const state = createGame(level);
    state.tray = [
      { id: 'a', type: 'strawberry' }, { id: 'b', type: 'chocolate' },
      { id: 'c', type: 'strawberry' }, { id: 'd', type: 'chocolate' },
      { id: 'e', type: 'vanilla' },
    ];
    const result = select(state, level, 2);
    expect(result.state.status).toBe('clear');
    expect(result.state.completedOrders).toBe(6);
    expect(result.state.nextOrderIndex).toBe(6);
    expect(result.state.orders).toEqual([null, null, null, null]);
    expect(result.events.filter(e => e.type === 'orderCompleted')).toHaveLength(6);
    expect(result.events.filter(e => e.type === 'orderAdded')).toHaveLength(2);
  });
  it('트레이가 차도 매칭 후 공간이 생기면 실패하지 않는다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const next = select(state, level, 0).state;
    expect(next.status).toBe('playing');
    expect(next.tray).toHaveLength(BASE_TRAY_CAPACITY - 1);
  });
  it('가득 찬 트레이는 확장 기회를 제공하고 선택을 차단한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, level, 2).state;
    expect(blocked.status).toBe('blocked');
    expect(select(blocked, level, 0).state).toBe(blocked);
    const expanded = expandTray(blocked, level).state;
    expect(expanded.status).toBe('playing');
    expect(expanded.trayCapacity).toBe(BASE_TRAY_CAPACITY + TRAY_EXPANSION);
    expect(expanded.expandUsed).toBe(true);
    expect(expandTray(expanded, level).state).toBe(expanded);
    const nine = select(expanded, level, 2).state;
    const ten = select(nine, level, 2).state;
    expect(ten.status).toBe('gameover');
  });
  it('확장 거절과 비정상 액션을 안전하게 처리한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, level, 2).state;
    expect(reduceGame(blocked, { type: 'DECLINE_EXPAND' }, level).status).toBe('gameover');
    for (const index of [-1, 0.5, 6, NaN]) expect(selectDonut(state, level, index, 'bad').state).toBe(state);
    expect(selectDonut(state, level, 0, '0-1').state).toBe(state);
    expect(selectDonut({ ...state, status: 'clear' }, level, 0, '0-0').events).toEqual([]);
  });
  it('클리어를 트레이 용량과 대기열 소진보다 먼저 판정한다', () => {
    const level = fixture([{ strawberry: 1 }]);
    const state = createGame(level);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, level, 0).state.status).toBe('clear');
  });
  it('목표 미달에서 대기열 소진 시 실패한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, level, 0).state.status).toBe('gameover');
  });
  it('일시정지·재개·재시작은 입력을 제어하고 레벨 원본을 보존한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const initial = createGame(level);
    const paused = reduceGame(initial, { type: 'PAUSE' }, level);
    expect(select(paused, level, 0).state).toBe(paused);
    expect(expandTray(paused, level).state).toBe(paused);
    expect(reduceGame(paused, { type: 'RESUME' }, level).status).toBe('playing');
    const played = select(initial, level, 0).state;
    const restarted = reduceGame(played, { type: 'RESTART' }, level);
    expect(restarted).toEqual({ ...initial, transitionId: played.transitionId + 1 });
    expect(level.queues[0]).toHaveLength(20);
  });
  it('동일 입력에는 동일한 상태와 이벤트를 반환한다', () => {
    const level = fixture([{ strawberry: 2 }]);
    const state = createGame(level);
    expect(select(state, level, 0)).toEqual(select(state, level, 0));
  });
  it.each([[0, 3], [1, 2], [2, 2], [3, 1]])('잔여량 %i의 별점은 %i이다', (count, expected) => {
    const state = createGame(fixture([{ strawberry: 1 }]));
    state.status = 'clear';
    state.tray = tray('vanilla', count);
    expect(getStars(state)).toBe(expected);
    expect(getStars({ ...state, status: 'gameover' })).toBe(0);
  });
});

describe('레벨 1~5 해법과 게임 불변식', () => {
  for (const level of levels) {
    it('레벨 ' + level.id + '는 확장 없이 클리어할 수 있다', () => {
      expect(validateLevel(level)).toEqual([]);
      const original = structuredClone(level);
      let state = createGame(level);
      const solution = solutions[level.id];
      if (!solution) throw new Error('해법 누락');
      for (const queue of solution) {
        expect(state.status).toBe('playing');
        state = select(state, level, queue).state;
        expect(state.tray.length).toBeLessThan(BASE_TRAY_CAPACITY);
        expect(state.expandUsed).toBe(false);
      }
      expect(state.status).toBe('clear');
      expect(state.completedOrders).toBe(level.targetOrders);
      expect(level).toEqual(original);
    });
    it('레벨 ' + level.id + '는 다양한 종류가 연속 묶음으로 쌓이고 20칸을 사용한다', () => {
      expect(level.donutTypes).toHaveLength(level.id + 9);
      expect(level.trayCapacity).toBe(20);
      expect(new Set(level.queues.flat().map(token => token.type)).size).toBe(level.donutTypes.length);
      expect(new Set(level.orders.flatMap(order => Object.keys(order.items))).size).toBe(level.donutTypes.length);
      expect(level.queues.every(queue => queue.some((token, index) => index >= 2 && token.type === queue[index - 1]?.type && token.type === queue[index - 2]?.type))).toBe(true);
    });
    it('레벨 ' + level.id + '의 여러 선택 경로에서 토큰과 주문 수량을 보존한다', () => {
      for (let seed = 1; seed <= 20; seed += 1) {
        let n = seed;
        let state = createGame(level);
        const total = level.queues.flat().length;
        let consumed = 0;
        for (let turn = 0; turn <= total; turn += 1) {
          if (state.status === 'blocked') state = expandTray(state, level).state;
          if (state.status !== 'playing') break;
          const choices = state.queues.map((q, i) => q.length ? i : -1).filter(i => i >= 0);
          n = (n * 1664525 + 1013904223) >>> 0;
          const q = choices[n % choices.length];
          if (q === undefined) break;
          const result = select(state, level, q);
          consumed += result.events.filter(e => e.type === 'consumed').length;
          state = result.state;
          const tokens = [...state.queues.flat(), ...state.tray];
          expect(tokens.length + consumed).toBe(total);
          expect(new Set(tokens.map(t => t.id)).size).toBe(tokens.length);
          expect(state.tray.length).toBeLessThanOrEqual(state.trayCapacity);
          expect(state.completedOrders + state.orders.filter(Boolean).length).toBe(state.nextOrderIndex);
          expect(state.nextOrderIndex).toBeLessThanOrEqual(level.targetOrders);
          for (const order of state.orders) for (const count of Object.values(order?.remaining ?? {})) expect(count).toBeGreaterThanOrEqual(0);
        }
        expect(['clear', 'gameover']).toContain(state.status);
      }
    });
  }
});

describe('세션 진행', () => {
  it('잠긴 레벨과 범위 밖 레벨 진입을 막는다', () => {
    const session = createSession();
    expect(reduceSession(session, { type: 'START', levelId: 5 })).toBe(session);
    expect(isUnlocked(6, { 5: 3 })).toBe(false);
  });
  it('클리어 시 별점을 기록하고 다음 레벨을 연다', () => {
    let session = reduceSession(createSession(), { type: 'START', levelId: 1 });
    for (const q of solutions[1] ?? []) {
      const front = session.game.queues[q]?.[0];
      if (!front) throw new Error('해법 불일치');
      session = reduceSession(session, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex: q, expectedDonutId: front.id } });
    }
    expect(session.stars[1]).toBeGreaterThan(0);
    expect(isUnlocked(2, session.stars)).toBe(true);
    expect(reduceSession(session, { type: 'START', levelId: 2 }).game.levelId).toBe(2);
  });
});
