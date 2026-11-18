import { describe, expect, it } from 'vitest';
import { createGame, expandTray, getStars, selectDonut, matchTray, pickupTray } from './engine';
import { reduceGame } from './reducer';
import { createSession, isUnlocked, reduceSession } from './session';
import { authoredStages, stages, practiceStage } from './stages';
import { solutions } from './stages/solutions';
import { BASE_TRAY_CAPACITY, TRAY_EXPANSION, QUEUE_COUNT } from './constants';
import { validateStage } from './validation';
import type { DonutType, GameState, StageDefinition, OrderDefinition } from './types';

function fixture(items: OrderDefinition['items'][]): StageDefinition {
  const types: DonutType[] = ['strawberry', 'chocolate', 'vanilla'];
  return {
    id: 1, revision: 1, donutTypes: types, targetOrders: items.length, trayCapacity: BASE_TRAY_CAPACITY,
    orders: items.map((item, i) => ({ id: 'o' + i, sequence: i + 1, items: item })),
    queues: Array.from({ length: QUEUE_COUNT }, (_, q) => Array.from({ length: 20 }, (_, i) => ({ id: q + '-' + i, type: types[q % 3] ?? 'vanilla' }))),
  };
}
function select(state: GameState, stage: StageDefinition, queue: number) {
  const front = state.queues[queue]?.[0];
  if (!front) throw new Error('빈 대기열');
  return selectDonut(state, stage, queue, front.id);
}
function tray(type: DonutType, count: number) {
  return Array.from({ length: count }, (_, i) => ({ id: 'tray-' + i, type }));
}

describe('자동 매칭과 상태 전이', () => {
  it('주문 도넛도 먼저 트레이에 남고 준비 완료 후에만 소비한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const queued = selectDonut(createGame(stage), stage, 0, '0-0', true).state;
    expect(queued.tray.map(token => token.id)).toEqual(['0-0']);
    expect(queued.orders[0]?.remaining.strawberry).toBe(2);
    const matched = matchTray(queued, stage, '0-0').state;
    expect(matched.tray).toHaveLength(0);
    expect(matched.orders[0]?.remaining.strawberry).toBe(1);
  });
  it('두 번 연속 올린 도넛은 각각 준비 완료된 뒤 소비한다', () => {
    const stage = fixture([{ strawberry: 2 }, { vanilla: 3 }]);
    const first = selectDonut(createGame(stage), stage, 0, '0-0', true).state;
    const second = selectDonut(first, stage, 0, '0-1', true).state;
    expect(second.tray).toHaveLength(2);
    const readyFirst = matchTray(second, stage, '0-0').state;
    expect(readyFirst.tray.map(token => token.id)).toEqual(['0-1']);
    expect(readyFirst.orders[0]?.remaining.strawberry).toBe(1);
    const readySecond = matchTray(readyFirst, stage, '0-1').state;
    expect(readySecond.tray).toHaveLength(0);
    expect(readySecond.completedOrders).toBe(1);
  });
  it('가장 먼저 담은 매칭 디저트부터 한 개씩 전달하고 새 손님의 준비를 기다린다', () => {
    const stage = fixture([{ chocolate: 1 }, { strawberry: 1 }, { strawberry: 1 }, { strawberry: 1 }, { chocolate: 1 }]);
    const initial = createGame(stage);
    initial.tray = [
      { id: 'unmatched', type: 'vanilla' },
      { id: 'first', type: 'chocolate' },
      { id: 'second', type: 'strawberry' },
      { id: 'replacement', type: 'chocolate' },
    ];
    initial.pendingMatchIds = ['first'];
    const readyOrders = ['o0', 'o1', 'o2', 'o3'];
    expect(pickupTray(initial, stage, readyOrders).state).toBe(initial);

    const landed = matchTray(initial, stage, 'first', true).state;
    expect(landed.tray).toEqual(initial.tray);
    const first = pickupTray(landed, stage, readyOrders);
    expect(first.events.filter(event => event.type === 'consumed').map(event => event.donutId)).toEqual(['first']);
    const second = pickupTray(first.state, stage, readyOrders);
    expect(second.events.filter(event => event.type === 'consumed').map(event => event.donutId)).toEqual(['second']);
    expect(pickupTray(second.state, stage, readyOrders).state).toBe(second.state);
    expect(pickupTray(second.state, stage, [...readyOrders, 'o4']).state.tray.map(token => token.id)).toEqual(['unmatched']);
  });
  it('트레이가 가득 차도 준비 중인 도넛이 있으면 실패 판정을 기다린다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const initial = createGame(stage);
    initial.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const queued = selectDonut(initial, stage, 0, '0-0', true).state;
    expect(queued.tray).toHaveLength(BASE_TRAY_CAPACITY);
    expect(queued.status).toBe('playing');
    expect(selectDonut(queued, stage, 0, '0-1', true).state).toBe(queued);
    const matched = matchTray(queued, stage, '0-0').state;
    expect(matched.status).toBe('playing');
    expect(matched.tray).toHaveLength(BASE_TRAY_CAPACITY - 1);
  });
  it('마지막 준비 도넛도 주문에 없으면 가득 찬 트레이의 확장 기회를 제공한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const initial = createGame(stage);
    initial.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const queued = selectDonut(initial, stage, 2, '2-0', true).state;
    expect(queued.status).toBe('playing');
    expect(matchTray(queued, stage, '2-0').state.status).toBe('blocked');
  });
  it('재시작 후 이전 도넛의 준비 완료 액션은 무시한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const initial = createGame(stage);
    expect(matchTray(initial, stage, '0-0').state).toBe(initial);
  });

  it('연속 두 입력은 새 맨 앞 ID로 각각 처리하고 이전 ID 중복만 무시한다', () => {
    const stage = fixture([{ strawberry: 16 }]);
    const initial = createGame(stage);
    const first = select(initial, stage, 2).state;
    const second = select(first, stage, 2).state;
    expect(second.tray.map(token => token.id)).toEqual(['2-0', '2-1']);
    expect(second.queues[2]?.[0]?.id).toBe('2-2');
    expect(selectDonut(second, stage, 2, '2-1').state).toBe(second);
  });

  it('선택한 토큰은 대기열에서 제거되고 한 번만 소비된다', () => {
    const stage = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const original = createGame(stage);
    const snapshot = structuredClone(original);
    const result = select(original, stage, 0);
    expect(original).toEqual(snapshot);
    expect(result.state.queues[0]).toHaveLength(19);
    expect(result.state.orders[0]?.remaining.strawberry).toBe(1);
    expect(result.state.orders[1]?.remaining.strawberry).toBe(2);
    expect(result.state.tray).toHaveLength(0);
    expect(result.events.filter(e => e.type === 'consumed')).toHaveLength(1);
    expect(selectDonut(result.state, stage, 0, '0-0').state).toBe(result.state);
  });
  it('화면 슬롯과 무관하게 주문 번호가 낮은 순서로 배정한다', () => {
    const stage = fixture([{ strawberry: 2 }, { strawberry: 2 }]);
    const state = createGame(stage);
    [state.orders[0], state.orders[1]] = [state.orders[1] ?? null, state.orders[0] ?? null];
    const next = select(state, stage, 0).state;
    expect(next.orders[1]?.remaining.strawberry).toBe(1);
    expect(next.orders[0]?.remaining.strawberry).toBe(2);
  });
  it('필요하지 않은 도넛은 트레이에 남는다', () => {
    const stage = fixture([{ strawberry: 1 }]);
    const next = select(createGame(stage), stage, 2).state;
    expect(next.tray[0]?.type).toBe('vanilla');
    expect(next.completedOrders).toBe(0);
  });
  it('동시 완료 후 새 주문과 남은 트레이를 연쇄 매칭한다', () => {
    const stage = fixture([{ strawberry: 1 }, { chocolate: 1 }, { strawberry: 1 }, { chocolate: 1 }, { vanilla: 1 }, { vanilla: 1 }]);
    const state = createGame(stage);
    state.tray = [
      { id: 'a', type: 'strawberry' }, { id: 'b', type: 'chocolate' },
      { id: 'c', type: 'strawberry' }, { id: 'd', type: 'chocolate' },
      { id: 'e', type: 'vanilla' },
    ];
    const result = select(state, stage, 2);
    expect(result.state.status).toBe('clear');
    expect(result.state.completedOrders).toBe(6);
    expect(result.state.nextOrderIndex).toBe(6);
    expect(result.state.orders).toEqual([null, null, null, null]);
    expect(result.events.filter(e => e.type === 'orderCompleted')).toHaveLength(6);
    expect(result.events.filter(e => e.type === 'orderAdded')).toHaveLength(2);
  });
  it('트레이가 차도 매칭 후 공간이 생기면 실패하지 않는다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const state = createGame(stage);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const next = select(state, stage, 0).state;
    expect(next.status).toBe('playing');
    expect(next.tray).toHaveLength(BASE_TRAY_CAPACITY - 1);
  });
  it('가득 찬 트레이는 확장 기회를 제공하고 선택을 차단한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const state = createGame(stage);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, stage, 2).state;
    expect(blocked.status).toBe('blocked');
    expect(select(blocked, stage, 0).state).toBe(blocked);
    const expanded = expandTray(blocked, stage).state;
    expect(expanded.status).toBe('playing');
    expect(expanded.trayCapacity).toBe(BASE_TRAY_CAPACITY + TRAY_EXPANSION);
    expect(expanded.expandUsed).toBe(true);
    expect(expandTray(expanded, stage).state).toBe(expanded);
    const nine = select(expanded, stage, 2).state;
    const ten = select(nine, stage, 2).state;
    expect(ten.status).toBe('gameover');
  });
  it('확장 거절과 비정상 액션을 안전하게 처리한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const state = createGame(stage);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    const blocked = select(state, stage, 2).state;
    expect(reduceGame(blocked, { type: 'DECLINE_EXPAND' }, stage).status).toBe('gameover');
    for (const index of [-1, 0.5, QUEUE_COUNT, NaN]) expect(selectDonut(state, stage, index, 'bad').state).toBe(state);
    expect(selectDonut(state, stage, 0, '0-1').state).toBe(state);
    expect(selectDonut({ ...state, status: 'clear' }, stage, 0, '0-0').events).toEqual([]);
  });
  it('클리어를 트레이 용량과 대기열 소진보다 먼저 판정한다', () => {
    const stage = fixture([{ strawberry: 1 }]);
    const state = createGame(stage);
    state.tray = tray('vanilla', BASE_TRAY_CAPACITY - 1);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, stage, 0).state.status).toBe('clear');
  });
  it('목표 미달에서 대기열 소진 시 실패한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const state = createGame(stage);
    state.queues = [[{ id: 'last', type: 'strawberry' }], [], [], [], [], []];
    expect(select(state, stage, 0).state.status).toBe('gameover');
  });
  it('일시정지·재개·재시작은 입력을 제어하고 스테이지 원본을 보존한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const initial = createGame(stage);
    const paused = reduceGame(initial, { type: 'PAUSE' }, stage);
    expect(select(paused, stage, 0).state).toBe(paused);
    expect(expandTray(paused, stage).state).toBe(paused);
    expect(reduceGame(paused, { type: 'RESUME' }, stage).status).toBe('playing');
    const played = select(initial, stage, 0).state;
    const restarted = reduceGame(played, { type: 'RESTART' }, stage);
    expect(restarted).toEqual({ ...initial, transitionId: played.transitionId + 1 });
    expect(stage.queues[0]).toHaveLength(20);
  });
  it('동일 입력에는 동일한 상태와 이벤트를 반환한다', () => {
    const stage = fixture([{ strawberry: 2 }]);
    const state = createGame(stage);
    expect(select(state, stage, 0)).toEqual(select(state, stage, 0));
  });
  it.each([[0, 3], [1, 2], [2, 2], [3, 1]])('잔여량 %i의 별점은 %i이다', (count, expected) => {
    const state = createGame(fixture([{ strawberry: 1 }]));
    state.status = 'clear';
    state.tray = tray('vanilla', count);
    expect(getStars(state)).toBe(expected);
    expect(getStars({ ...state, status: 'gameover' })).toBe(0);
  });
});

describe('스테이지 해법과 게임 불변식', () => {
  for (const stage of stages) {
    it('스테이지 ' + stage.id + '는 확장 없이 클리어할 수 있다', () => {
      expect(validateStage(stage)).toEqual([]);
      const original = structuredClone(stage);
      let state = createGame(stage);
      const solution = solutions[stage.id];
      if (!solution) throw new Error('해법 누락');
      for (const queue of solution) {
        expect(state.status).toBe('playing');
        state = select(state, stage, queue).state;
        expect(state.tray.length).toBeLessThan(BASE_TRAY_CAPACITY);
        expect(state.expandUsed).toBe(false);
      }
      expect(state.status).toBe('clear');
      expect(state.completedOrders).toBe(stage.targetOrders);
      expect(stage).toEqual(original);
    });
    it('스테이지 ' + stage.id + '는 트레이 대기 후 매칭하는 실제 플레이 경로에서도 클리어한다', () => {
      let state = createGame(stage);
      for (const q of solutions[stage.id] ?? []) {
        const front = state.queues[q]?.[0];
        if (!front) throw new Error('해법의 대기열이 비었습니다.');
        state = selectDonut(state, stage, q, front.id, true).state;
        expect(state.tray.some(token => token.id === front.id)).toBe(true);
        state = matchTray(state, stage, front.id, true).state;
        const orderIds = stage.orders.map(order => order.id);
        for (;;) {
          const pickup = pickupTray(state, stage, orderIds);
          if (pickup.state === state) break;
          expect(pickup.events.filter(event => event.type === 'consumed')).toHaveLength(1);
          state = pickup.state;
        }
      }
      expect(state.status).toBe('clear');
    });
  }
  for (const stage of authoredStages) {
    it('스테이지 ' + stage.id + '는 다양한 종류가 연속 묶음으로 쌓이고 기본 트레이를 사용한다', () => {
      expect(stage.donutTypes).toHaveLength(8);
      expect(stage.trayCapacity).toBe(BASE_TRAY_CAPACITY);
      expect(stage.queues).toHaveLength(QUEUE_COUNT);
      const quantities = stage.orders.flatMap(order => Object.values(order.items));
      expect(Math.max(...quantities)).toBeLessThanOrEqual(16);
      expect(Math.max(...stage.orders.map(order => Object.values(order.items).reduce((sum, n) => sum + n, 0)))).toBeLessThanOrEqual(16);
      expect(new Set(quantities).size).toBeGreaterThanOrEqual(4);
      expect(new Set(stage.queues.flat().map(token => token.type)).size).toBe(stage.donutTypes.length);
      expect(new Set(stage.orders.flatMap(order => Object.keys(order.items))).size).toBe(stage.donutTypes.length);
      expect(stage.queues.every(queue => queue.some((token, index) => index >= 2 && token.type === queue[index - 1]?.type && token.type === queue[index - 2]?.type))).toBe(true);
    });
    it('스테이지 ' + stage.id + '의 여러 선택 경로에서 토큰과 주문 수량을 보존한다', () => {
      for (let seed = 1; seed <= 20; seed += 1) {
        let n = seed;
        let state = createGame(stage);
        const total = stage.queues.flat().length;
        let consumed = 0;
        for (let turn = 0; turn <= total; turn += 1) {
          if (state.status === 'blocked') state = expandTray(state, stage).state;
          if (state.status !== 'playing') break;
          const choices = state.queues.map((q, i) => q.length ? i : -1).filter(i => i >= 0);
          n = (n * 1664525 + 1013904223) >>> 0;
          const q = choices[n % choices.length];
          if (q === undefined) break;
          const result = select(state, stage, q);
          consumed += result.events.filter(e => e.type === 'consumed').length;
          state = result.state;
          const tokens = [...state.queues.flat(), ...state.tray];
          expect(tokens.length + consumed).toBe(total);
          expect(new Set(tokens.map(t => t.id)).size).toBe(tokens.length);
          expect(state.tray.length).toBeLessThanOrEqual(state.trayCapacity);
          expect(state.completedOrders + state.orders.filter(Boolean).length).toBe(state.nextOrderIndex);
          expect(state.nextOrderIndex).toBeLessThanOrEqual(stage.targetOrders);
          for (const order of state.orders) for (const count of Object.values(order?.remaining ?? {})) expect(count).toBeGreaterThanOrEqual(0);
        }
        expect(['clear', 'gameover']).toContain(state.status);
      }
    });
  }
});

describe('세션 진행', () => {
  it('테스트 스테이지은 손님 한 명의 디저트 하나로 완료되며 일반 진행에 영향을 주지 않는다', () => {
    const initial = createSession();
    const practice = reduceSession(initial, { type: 'START', stageId: practiceStage.id });
    const queueIndex = practice.game.queues.findIndex(queue => queue[0]?.type === 'strawberry');
    const front = practice.game.queues[queueIndex]?.[0];
    if (!front) throw new Error('테스트 디저트가 없습니다.');
    expect(practice.game.orders.filter(Boolean)).toHaveLength(1);
    const cleared = reduceSession(practice, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex, expectedDonutId: front.id } });
    expect(cleared.game.status).toBe('clear');
    expect(getStars(cleared.game)).toBe(3);
    expect(cleared.score).toBe(initial.score);
    expect(cleared.stars).toEqual(initial.stars);
  });

  it('테스트 스테이지에서 기본 트레이와 확장된 트레이를 모두 채울 수 있다', () => {
    let state = createGame(practiceStage);
    function fillTray() {
      while (state.status === 'playing') {
        const column = state.queues.findIndex(queue => queue[0]?.type === 'chocolate');
        expect(column).toBeGreaterThanOrEqual(0);
        state = select(state, practiceStage, column).state;
      }
    }
    fillTray();
    expect(state.status).toBe('blocked');
    expect(state.tray).toHaveLength(BASE_TRAY_CAPACITY);
    state = expandTray(state, practiceStage).state;
    fillTray();
    expect(state.status).toBe('gameover');
    expect(state.tray).toHaveLength(BASE_TRAY_CAPACITY + TRAY_EXPANSION);
  });

  it('게임 시작 직후 첫 주문과 대기열 선두에 크루아상과 초코 아이스크림가 있다', () => {
    const { game } = reduceSession(createSession(), { type: 'START', stageId: 1 });
    expect(game.orders[0]?.remaining).toMatchObject({ croissant: 2, chocolateIceCream: 1 });
    expect(game.queues.map(queue => queue[0]?.type)).toEqual(expect.arrayContaining(['croissant', 'chocolateIceCream']));
  });

  it('잠긴 스테이지과 범위 밖 스테이지 진입을 막는다', () => {
    const session = createSession();
    expect(reduceSession(session, { type: 'START', stageId: 5 })).toBe(session);
    expect(isUnlocked((stages.at(-1)?.id ?? 0) + 1, { 5: 3 })).toBe(false);
  });
  it('클리어 시 별점을 기록하고 다음 스테이지을 연다', () => {
    let session = reduceSession(createSession(), { type: 'START', stageId: 1 });
    for (const q of solutions[1] ?? []) {
      const front = session.game.queues[q]?.[0];
      if (!front) throw new Error('해법 불일치');
      session = reduceSession(session, { type: 'GAME', action: { type: 'SELECT_DONUT', queueIndex: q, expectedDonutId: front.id } });
    }
    expect(session.stars[1]).toBeGreaterThan(0);
    expect(session.score).toBe(session.game.completedOrders * 100);
    const restarted = reduceSession(session, { type: 'GAME', action: { type: 'RESTART' } });
    expect(restarted.score).toBe(session.score);
    expect(reduceSession(session, { type: 'START', stageId: 2 }).score).toBe(session.score);
    expect(isUnlocked(2, session.stars)).toBe(true);
    expect(reduceSession(session, { type: 'START', stageId: 2 }).game.stageId).toBe(2);
  });
});
