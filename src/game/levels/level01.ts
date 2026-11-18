import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level01: LevelDefinition = {
  "id": 1,
  "revision": 7,
  "donutTypes": [
    "croissant",
    "americano",
    "vanilla",
    "matcha",
    "blueberry",
    "orange",
    "lemon",
    "mint"
  ],
  "targetOrders": 8,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l1-r4-q0-p0",
        "type": "orange"
      },
      {
        "id": "l1-r4-q0-p1",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p0",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p1",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p2",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p3",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p4",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p5",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p6",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q8-p7",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q8-p8",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q8-p9",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q8-p10",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q0-p2",
        "type": "americano"
      },
      {
        "id": "l1-r4-q0-p3",
        "type": "americano"
      },
      {
        "id": "l1-r4-q0-p4",
        "type": "americano"
      },
      {
        "id": "l1-r4-q0-p5",
        "type": "americano"
      },
      {
        "id": "l1-r4-q0-p6",
        "type": "americano"
      },
      {
        "id": "l1-r4-q0-p7",
        "type": "americano"
      },
      {
        "id": "l1-r4-q8-p11",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p12",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p13",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p14",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p15",
        "type": "orange"
      },
      {
        "id": "l1-r4-q8-p16",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l1-r4-q9-p0",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p1",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q9-p2",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p3",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p4",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p5",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p6",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q1-p1",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q1-p2",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q1-p3",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q1-p4",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q1-p5",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q1-p6",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q1-p7",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q1-p8",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q1-p9",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q1-p10",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q1-p11",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q9-p7",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p8",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p9",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p10",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p11",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p12",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "l1-r4-q2-p0",
        "type": "americano"
      },
      {
        "id": "l1-r4-q2-p1",
        "type": "americano"
      },
      {
        "id": "l1-r4-q2-p2",
        "type": "americano"
      },
      {
        "id": "l1-r4-q2-p3",
        "type": "americano"
      },
      {
        "id": "l1-r4-q2-p4",
        "type": "orange"
      },
      {
        "id": "l1-r4-q2-p5",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q2-p6",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q2-p7",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q2-p8",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q2-p9",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q2-p10",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l1-r4-q3-p0",
        "type": "americano"
      },
      {
        "id": "l1-r4-q3-p1",
        "type": "americano"
      },
      {
        "id": "l1-r4-q3-p2",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q3-p3",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q3-p4",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q3-p5",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q3-p6",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q3-p7",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q3-p8",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l1-r4-q4-p0",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q4-p1",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q4-p2",
        "type": "matcha"
      },
      {
        "id": "l1-r4-q4-p3",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q4-p4",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q4-p5",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q4-p6",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q4-p7",
        "type": "orange"
      },
      {
        "id": "l1-r4-q4-p8",
        "type": "orange"
      },
      {
        "id": "l1-r4-q4-p9",
        "type": "orange"
      },
      {
        "id": "l1-r4-q4-p10",
        "type": "orange"
      },
      {
        "id": "l1-r4-q4-p11",
        "type": "orange"
      },
      {
        "id": "l1-r4-q4-p12",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l1-r4-q5-p0",
        "type": "americano"
      },
      {
        "id": "l1-r4-q5-p1",
        "type": "americano"
      },
      {
        "id": "l1-r4-q5-p2",
        "type": "americano"
      },
      {
        "id": "l1-r4-q5-p3",
        "type": "orange"
      },
      {
        "id": "l1-r4-q5-p4",
        "type": "orange"
      },
      {
        "id": "l1-r4-q5-p5",
        "type": "orange"
      },
      {
        "id": "l1-r4-q5-p6",
        "type": "orange"
      },
      {
        "id": "l1-r4-q5-p7",
        "type": "orange"
      },
      {
        "id": "l1-r4-q5-p8",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q5-p9",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q5-p10",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q5-p11",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q5-p12",
        "type": "lemon"
      },
      {
        "id": "l1-r4-q5-p13",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l1-r4-q6-p0",
        "type": "orange"
      },
      {
        "id": "l1-r4-q6-p1",
        "type": "orange"
      },
      {
        "id": "l1-r4-q6-p2",
        "type": "orange"
      },
      {
        "id": "l1-r4-q6-p3",
        "type": "orange"
      },
      {
        "id": "l1-r4-q6-p4",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p5",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p6",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p7",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p8",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p9",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p10",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p11",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p12",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p13",
        "type": "vanilla"
      },
      {
        "id": "l1-r4-q6-p14",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l1-r4-q7-p0",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q7-p1",
        "type": "blueberry"
      },
      {
        "id": "l1-r4-q7-p2",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p3",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p4",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p5",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p6",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p7",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p8",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p9",
        "type": "mint"
      },
      {
        "id": "l1-r4-q7-p10",
        "type": "mint"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "croissant": 2,
        "americano": 1
      }
    },
    {
      "id": "l1-o2",
      "sequence": 2,
      "items": {
        "vanilla": 4
      }
    },
    {
      "id": "l1-o3",
      "sequence": 3,
      "items": {
        "croissant": 5,
        "vanilla": 2
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "americano": 8
      }
    },
    {
      "id": "l1-o5",
      "sequence": 5,
      "items": {
        "matcha": 3,
        "blueberry": 2
      }
    },
    {
      "id": "l1-o6",
      "sequence": 6,
      "items": {
        "orange": 6,
        "lemon": 2
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "vanilla": 9,
        "mint": 3
      }
    },
    {
      "id": "l1-o8",
      "sequence": 8,
      "items": {
        "orange": 12,
        "matcha": 4
      }
    }
  ]
};
