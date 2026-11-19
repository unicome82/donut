import { registerHooks } from 'node:module';
import { mkdirSync, readFileSync, renameSync, rmdirSync, writeFileSync } from 'node:fs';

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
      return nextResolve(specifier + '.ts', context);
    }
    return nextResolve(specifier, context);
  },
});

const { QUEUE_COUNT } = await import('../src/game/constants.ts');
const { TRAY_CAPACITY_BY_DIFFICULTY } = await import('../src/game/trayCapacity.ts');
const { createGame, matchTray, pickupTray, selectDonut } = await import('../src/game/engine.ts');
const { DONUT_TYPES } = await import('../src/game/types.ts');

const firstId = 6;
const layoutRevisions = { easy: 9, normal: 8, hard: 7 };
const endId = Number(process.argv[2] ?? 101);
const campaignSeed = Number(process.argv[3] ?? 2026);
if (!Number.isSafeInteger(endId) || endId < firstId || !Number.isInteger(campaignSeed) || campaignSeed < 0 || campaignSeed > 0xffffffff) {
  throw new Error('Usage: npm run stages:generate -- <last-stage-id> [seed (0–4294967295)]');
}

const profiles = {
  easy: { variety: 8, orders: 9, kinds: 2, batch: 3, runSize: 5, dessertTotal: 126, peakMin: 0, peakMax: 5 },
  normal: { variety: 14, orders: 12, kinds: 3, batch: 6, runSize: 3, dessertTotal: 160, peakMin: 6, peakMax: 12 },
  hard: { variety: 30, orders: 15, kinds: 3, batch: 7, runSize: 2, dessertTotal: 200, peakMin: 6, peakMax: 8 },
};
const cadence = ['normal', 'easy', 'hard', 'normal', 'easy', 'normal', 'hard', 'easy'];
const file = new URL('../src/game/stages/generated.json', import.meta.url);

function randomFor(seed) {
  let state = seed >>> 0;
  return size => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return Math.floor(state / 0x100000000 * size);
  };
}

function shuffle(values, random) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = random(index + 1);
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function makeCandidate(id, difficulty, random, previous) {
  const profile = profiles[difficulty];
  const menuPool = difficulty === 'hard' ? DONUT_TYPES : DONUT_TYPES.slice(DONUT_TYPES.indexOf('croissant'));
  const menu = previous?.donutTypes ?? shuffle(menuPool, random).slice(0, profile.variety);
  let orders = previous?.orders ?? Array.from({ length: profile.orders }, (_, index) => {
    const featured = menu[index % menu.length];
    const required = [featured, ...menu.slice(profile.orders + index, profile.orders + index + 1)];
    const alternatives = shuffle(menu.filter(type => !required.includes(type)), random);
    const types = [...required, ...alternatives.slice(0, profile.kinds - required.length)];
    return {
      id: `s${id}-o${index + 1}`,
      sequence: index + 1,
      items: Object.fromEntries(types.map(type => [type, 2 + random(4)])),
    };
  });
  if (difficulty === 'easy' && !previous) {
    orders = orders.map(order => ({
      ...order,
      items: Object.fromEntries(Object.entries(order.items).map(([type, quantity]) => [type, quantity + 2])),
    }));
  }
  if (profile.dessertTotal) {
    const dessertCount = orders.reduce((sum, order) =>
      sum + Object.values(order.items).reduce((total, quantity) => total + quantity, 0), 0);
    const additional = Math.max(0, profile.dessertTotal - dessertCount);
    const extraOrders = Math.ceil(additional / 13);
    orders = [...orders];
    for (let extra = 0; extra < extraOrders; extra += 1) {
      const quantity = Math.floor(additional / extraOrders) + Number(extra < additional % extraOrders);
      const types = shuffle(menu, random).slice(0, Math.min(profile.kinds, quantity));
      const items = Object.fromEntries(types.map((type, index) => [
        type, Math.floor(quantity / types.length) + Number(index < quantity % types.length),
      ]));
      const sequence = orders.length + 1;
      orders.push({ id: `s${id}-extra-o${sequence}`, sequence, items });
    }
  }
  const queues = Array.from({ length: QUEUE_COUNT }, () => []);
  const columns = shuffle(queues.map((_, index) => index), random);
  let run = 0;
  for (let start = 0; start < orders.length; start += profile.batch) {
    const runs = orders.slice(start, start + profile.batch).flatMap(order =>
      Object.entries(order.items).flatMap(([type, quantity]) =>
        Array.from({ length: Math.ceil(quantity / profile.runSize) }, (_, index) =>
          [type, Math.min(quantity - index * profile.runSize, profile.runSize)])));
    for (const [type, quantity] of shuffle(runs, random)) {
      const column = columns[run % QUEUE_COUNT];
      const queue = queues[column];
      for (let index = 0; index < quantity; index += 1) {
        queue.push({ id: `s${id}-q${column}-${queue.length}`, type });
      }
      run += 1;
    }
  }
  return {
    id, difficulty, revision: layoutRevisions[difficulty], donutTypes: menu, targetOrders: orders.length,
    trayCapacity: TRAY_CAPACITY_BY_DIFFICULTY[difficulty], queues, orders,
  };
}

function findSolution(stage, random) {
  let state = createGame(stage);
  const readyOrders = stage.orders.map(order => order.id);
  const solution = [];
  let peak = 0;
  while (state.status === 'playing') {
    const needed = type => state.orders.some(order => (order?.remaining[type] ?? 0) > 0);
    const choices = [];
    for (const [column, queue] of state.queues.entries()) {
      if (!queue.length) continue;
      const depth = queue.findIndex(token => needed(token.type));
      choices.push({ column, priority: (depth < 0 ? Infinity : depth + random(100) / 100) });
    }
    choices.sort((left, right) => left.priority - right.priority);
    const choice = choices[0];
    if (!choice || !Number.isFinite(choice.priority)) break;
    const token = state.queues[choice.column][0];
    const selected = selectDonut(state, stage, choice.column, token.id, true).state;
    if (selected === state) break;
    solution.push(choice.column);
    peak = Math.max(peak, selected.tray.length);
    state = matchTray(selected, stage, token.id, true).state;
    while (true) {
      const pickedUp = pickupTray(state, stage, readyOrders).state;
      if (pickedUp === state) break;
      state = pickedUp;
    }
  }
  const { peakMin, peakMax } = profiles[stage.difficulty];
  return state.status === 'clear' && state.tray.length === 0 && peak >= peakMin && peak <= peakMax ? solution : undefined;
}

const lock = new URL('generated.lock/', file);
mkdirSync(lock);
try {
  const { stages: generated, solutions } = JSON.parse(readFileSync(file, 'utf8'));
  const lastId = generated.at(-1)?.id ?? firstId - 1;
  const outdated = generated.filter(stage => stage.revision < layoutRevisions[stage.difficulty]);
  const ids = [...outdated.map(stage => stage.id),
    ...Array.from({ length: Math.max(0, endId - lastId) }, (_, index) => lastId + index + 1)];
  const oldStages = new Map(outdated.map(stage => [stage.id, stage]));
  for (const id of ids) {
    const old = oldStages.get(id);
    const difficulty = old?.difficulty ?? cadence[(id - firstId) % cadence.length];
    const random = randomFor(campaignSeed ^ Math.imul(id, 0x9e3779b9));
    let accepted = false;
    for (let attempt = 0; attempt < 1000; attempt += 1) {
      const candidate = makeCandidate(id, difficulty, random, old);
      const solution = findSolution(candidate, random);
      if (!solution) continue;
      const queues = candidate.queues.map(queue => queue.map(token => candidate.donutTypes.indexOf(token.type)));
      if (old) generated[generated.indexOf(old)] = { ...candidate, queues };
      else generated.push({ ...candidate, queues });
      solutions[id] = solution;
      accepted = true;
      break;
    }
    if (!accepted) throw new Error(`No verified ${difficulty} layout for stage ${id}.`);
  }

  if (ids.length) {
    const format = entries => entries.map(entry => '    ' + JSON.stringify(entry)).join(',\n');
    const data = `{\n  "stages": [\n${format(generated)}\n  ],\n  "solutions": {\n${Object.entries(solutions).map(([id, path]) => `    "${id}": ${JSON.stringify(path)}`).join(',\n')}\n  }\n}\n`;
    const temporary = new URL('generated.json.tmp', file);
    writeFileSync(temporary, data);
    renameSync(temporary, file);
    console.log(`Saved ${ids.length} verified stage layouts.`);
  } else {
    console.log(`Stages through ${endId} already exist.`);
  }
} finally {
  rmdirSync(lock);
}
