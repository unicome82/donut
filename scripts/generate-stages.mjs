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

const { BASE_TRAY_CAPACITY, QUEUE_COUNT } = await import('../src/game/constants.ts');
const { createGame, matchTray, pickupTray, selectDonut } = await import('../src/game/engine.ts');
const { DONUT_TYPES } = await import('../src/game/types.ts');

const firstId = 6;
const endId = Number(process.argv[2] ?? 101);
const campaignSeed = Number(process.argv[3] ?? 2026);
if (!Number.isSafeInteger(endId) || endId < firstId || !Number.isInteger(campaignSeed) || campaignSeed < 0 || campaignSeed > 0xffffffff) {
  throw new Error('Usage: npm run stages:generate -- <last-stage-id> [seed (0–4294967295)]');
}

const profiles = {
  easy: { variety: 6, orders: 9, kinds: 2, batch: 3, peakMin: 0, peakMax: 5 },
  normal: { variety: 8, orders: 12, kinds: 3, batch: 5, peakMin: 3, peakMax: 11 },
  hard: { variety: 10, orders: 15, kinds: 3, batch: 7, peakMin: 8, peakMax: 17 },
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

function makeCandidate(id, difficulty, random) {
  const profile = profiles[difficulty];
  const menu = shuffle(DONUT_TYPES.slice(DONUT_TYPES.indexOf('croissant')), random).slice(0, profile.variety);
  const orders = Array.from({ length: profile.orders }, (_, index) => {
    const featured = menu[index % menu.length];
    const types = [featured, ...shuffle(menu.filter(type => type !== featured), random).slice(0, profile.kinds - 1)];
    return {
      id: `s${id}-o${index + 1}`,
      sequence: index + 1,
      items: Object.fromEntries(types.map(type => [type, 2 + random(4)])),
    };
  });
  const queues = Array.from({ length: QUEUE_COUNT }, () => []);
  const columns = shuffle(queues.map((_, index) => index), random);
  let run = 0;
  for (let start = 0; start < orders.length; start += profile.batch) {
    const runs = orders.slice(start, start + profile.batch).flatMap(order => Object.entries(order.items));
    for (const [type, quantity] of shuffle(runs, random)) {
      const column = columns[run % QUEUE_COUNT];
      const queue = queues[column];
      for (let index = 0; index < quantity; index += 1) {
        queue.push({ id: `s${id}-q${column}-${queue.length}`, type });
      }
      run += 1;
    }
  }
  return { id, difficulty, revision: 1, donutTypes: menu, targetOrders: orders.length, trayCapacity: BASE_TRAY_CAPACITY, queues, orders };
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
  return state.status === 'clear' && !state.expandUsed && peak >= peakMin && peak <= peakMax ? solution : undefined;
}

const lock = new URL('generated.lock/', file);
mkdirSync(lock);
try {
  const { stages: generated, solutions } = JSON.parse(readFileSync(file, 'utf8'));
  const startId = (generated.at(-1)?.id ?? firstId - 1) + 1;
  for (let id = startId; id <= endId; id += 1) {
    const difficulty = cadence[(id - firstId) % cadence.length];
    const random = randomFor(campaignSeed ^ Math.imul(id, 0x9e3779b9));
    let accepted = false;
    for (let attempt = 0; attempt < 500; attempt += 1) {
      const candidate = makeCandidate(id, difficulty, random);
      const solution = findSolution(candidate, random);
      if (!solution) continue;
      const queues = candidate.queues.map(queue => queue.map(token => candidate.donutTypes.indexOf(token.type)));
      generated.push({ ...candidate, queues });
      solutions[id] = solution;
      accepted = true;
      break;
    }
    if (!accepted) throw new Error(`No verified ${difficulty} layout for stage ${id}.`);
  }

  if (endId >= startId) {
    const format = entries => entries.map(entry => '    ' + JSON.stringify(entry)).join(',\n');
    const data = `{\n  "stages": [\n${format(generated)}\n  ],\n  "solutions": {\n${Object.entries(solutions).map(([id, path]) => `    "${id}": ${JSON.stringify(path)}`).join(',\n')}\n  }\n}\n`;
    const temporary = new URL('generated.json.tmp', file);
    writeFileSync(temporary, data);
    renameSync(temporary, file);
    console.log(`Saved verified stages ${startId}–${endId}.`);
  } else {
    console.log(`Stages through ${endId} already exist.`);
  }
} finally {
  rmdirSync(lock);
}
