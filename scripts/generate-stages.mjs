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
const layoutRevision = 2;
const endId = Number(process.argv[2] ?? 101);
const campaignSeed = Number(process.argv[3] ?? 2026);
if (!Number.isSafeInteger(endId) || endId < firstId || !Number.isInteger(campaignSeed) || campaignSeed < 0 || campaignSeed > 0xffffffff) {
  throw new Error('Usage: npm run stages:generate -- <last-stage-id> [seed (0–4294967295)]');
}

const profiles = {
  easy: { variety: 6, orders: 9, kinds: 2, batch: 3, peakMin: 0, peakMax: 5 },
  normal: { variety: 12, orders: 12, kinds: 3, batch: 5, peakMin: 3, peakMax: 11, revision: 3 },
  hard: { variety: 28, orders: 15, kinds: 3, batch: 7, peakMin: 8, peakMax: 17, revision: 4 },
};
const cadence = ['normal', 'easy', 'hard', 'normal', 'easy', 'normal', 'hard', 'easy'];
const file = new URL('../src/game/stages/generated.json', import.meta.url);
const revisionFor = difficulty => profiles[difficulty].revision ?? layoutRevision;

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
  const menuPool = difficulty === 'hard' ? DONUT_TYPES : DONUT_TYPES.slice(DONUT_TYPES.indexOf('croissant'));
  const menu = shuffle(menuPool, random).slice(0, profile.variety);
  const orders = Array.from({ length: profile.orders }, (_, index) => {
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
  return { id, difficulty, donutTypes: menu, targetOrders: orders.length, trayCapacity: BASE_TRAY_CAPACITY, queues, orders };
}

function addSurplus(stage, random, interleavedLimit) {
  const orderQuantity = stage.orders.flatMap(order => Object.values(order.items))
    .reduce((total, quantity) => total + quantity, 0);
  // Extra stock equal to half the demand leaves a third of the starting stock.
  const surplus = Math.round(orderQuantity / 2);
  const interleaved = Math.min(interleavedLimit, Math.round(surplus / 5));
  const decoys = shuffle(DONUT_TYPES.filter(type => !stage.donutTypes.includes(type)), random).slice(0, 2);
  const queues = stage.queues.map(queue => queue.map(token => token.type));
  const positions = queues.flatMap((queue, column) =>
    queue.slice(0, -1).map((_, index) => `${column}:${index}`));
  const inserts = new Set(shuffle(positions, random).slice(0, interleaved));
  const mixed = queues.map((queue, column) => queue.flatMap((type, index) =>
    inserts.has(`${column}:${index}`) ? [type, type] : [type]));
  const columns = shuffle(mixed.map((_, column) => column), random);
  for (let i = interleaved; i < surplus; i += 1) {
    mixed[columns[i % columns.length]].push(decoys[random(decoys.length)]);
  }
  return {
    ...stage,
    revision: revisionFor(stage.difficulty),
    donutTypes: [...stage.donutTypes, ...decoys],
    queues: mixed.map((queue, column) => queue.map((type, index) => ({
      id: `s${stage.id}-q${column}-${index}`, type,
    }))),
  };
}

function findSolution(stage, random, knownPath) {
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
    const choice = knownPath ? choices.find(({ column }) => column === knownPath[solution.length]) : choices[0];
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
  const outdated = generated.filter(stage => stage.revision < revisionFor(stage.difficulty));
  const ids = [...outdated.map(stage => stage.id),
    ...Array.from({ length: Math.max(0, endId - lastId) }, (_, index) => lastId + index + 1)];
  const oldStages = new Map(outdated.map(stage => [stage.id, stage]));
  for (const id of ids) {
    const old = oldStages.get(id);
    const difficulty = old?.difficulty ?? cadence[(id - firstId) % cadence.length];
    const random = randomFor(campaignSeed ^ Math.imul(id, 0x9e3779b9));
    const base = old && old.donutTypes.length === profiles[difficulty].variety && {
      ...old,
      queues: old.queues.map(queue => queue.map(index => ({ type: old.donutTypes[index] }))),
    };
    let accepted = false;
    for (let attempt = 0; attempt < 500; attempt += 1) {
      // Reduce interleaving on retries to preserve a three-star route.
      const limit = Math.max(0, 8 - Math.floor(attempt / 8));
      const candidate = addSurplus(base || makeCandidate(id, difficulty, random), random, limit);
      const stockedTypes = new Set(candidate.queues.flat().map(token => token.type));
      if (stockedTypes.size !== candidate.donutTypes.length) continue;
      const solution = findSolution(candidate, random, base && limit === 0 ? solutions[id] : undefined);
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
