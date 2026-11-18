import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level03: LevelDefinition = {
  "id": 3,
  "revision": 7,
  "donutTypes": [
    "strawberry",
    "americano",
    "croissant",
    "matcha",
    "blueberry",
    "orange",
    "lemon",
    "mint"
  ],
  "targetOrders": 12,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l3-r4-q0-p0",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p1",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p2",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q8-p0",
        "type": "orange"
      },
      {
        "id": "l3-r4-q8-p1",
        "type": "orange"
      },
      {
        "id": "l3-r4-q8-p2",
        "type": "orange"
      },
      {
        "id": "l3-r4-q8-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q8-p4",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q8-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q8-p6",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q0-p4",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q0-p5",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q0-p6",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q0-p7",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q0-p8",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q0-p9",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p10",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p11",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p12",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p13",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q0-p14",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q8-p7",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q8-p8",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q8-p9",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q8-p10",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q8-p11",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q8-p12",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l3-r4-q9-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q1-p0",
        "type": "orange"
      },
      {
        "id": "l3-r4-q9-p2",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q1-p1",
        "type": "orange"
      },
      {
        "id": "l3-r4-q9-p3",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q1-p2",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p3",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p4",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p5",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p6",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p7",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p8",
        "type": "orange"
      },
      {
        "id": "l3-r4-q1-p9",
        "type": "orange"
      },
      {
        "id": "l3-r4-q9-p4",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p5",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p6",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p7",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p8",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p9",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p10",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q9-p11",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q1-p10",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q1-p11",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q1-p12",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q1-p13",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q1-p14",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q1-p15",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q9-p12",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p13",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p14",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p15",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p16",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p17",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l3-r4-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q2-p1",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q2-p2",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q2-p3",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q2-p4",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q2-p5",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p6",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p7",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p8",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p9",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p10",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p11",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p12",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p13",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p14",
        "type": "orange"
      },
      {
        "id": "l3-r4-q2-p15",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l3-r4-q3-p0",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p5",
        "type": "orange"
      },
      {
        "id": "l3-r4-q3-p6",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q3-p7",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q3-p8",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q3-p9",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q3-p10",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q3-p11",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l3-r4-q4-p0",
        "type": "americano"
      },
      {
        "id": "l3-r4-q4-p1",
        "type": "americano"
      },
      {
        "id": "l3-r4-q4-p2",
        "type": "americano"
      },
      {
        "id": "l3-r4-q4-p3",
        "type": "americano"
      },
      {
        "id": "l3-r4-q4-p4",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q4-p5",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q4-p6",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q4-p7",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q4-p8",
        "type": "lemon"
      },
      {
        "id": "l3-r4-q4-p9",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q4-p10",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q4-p11",
        "type": "matcha"
      },
      {
        "id": "l3-r4-q4-p12",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p13",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p14",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p15",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p16",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p17",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "l3-r4-q5-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p3",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p4",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p6",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p7",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p8",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p9",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p10",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p11",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p12",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p13",
        "type": "mint"
      },
      {
        "id": "l3-r4-q5-p14",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l3-r4-q6-p0",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q6-p1",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q6-p2",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q6-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p5",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p6",
        "type": "americano"
      },
      {
        "id": "l3-r4-q6-p7",
        "type": "americano"
      },
      {
        "id": "l3-r4-q6-p8",
        "type": "americano"
      },
      {
        "id": "l3-r4-q6-p9",
        "type": "americano"
      },
      {
        "id": "l3-r4-q6-p10",
        "type": "americano"
      },
      {
        "id": "l3-r4-q6-p11",
        "type": "orange"
      },
      {
        "id": "l3-r4-q6-p12",
        "type": "orange"
      },
      {
        "id": "l3-r4-q6-p13",
        "type": "orange"
      },
      {
        "id": "l3-r4-q6-p14",
        "type": "orange"
      },
      {
        "id": "l3-r4-q6-p15",
        "type": "orange"
      },
      {
        "id": "l3-r4-q6-p16",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l3-r4-q7-p0",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p1",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p2",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p3",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p4",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p6",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p7",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p8",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p9",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p10",
        "type": "blueberry"
      },
      {
        "id": "l3-r4-q7-p11",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p12",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p13",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p14",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p15",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p16",
        "type": "strawberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l3-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "americano": 1
      }
    },
    {
      "id": "l3-o2",
      "sequence": 2,
      "items": {
        "croissant": 4
      }
    },
    {
      "id": "l3-o3",
      "sequence": 3,
      "items": {
        "strawberry": 5,
        "croissant": 2
      }
    },
    {
      "id": "l3-o4",
      "sequence": 4,
      "items": {
        "americano": 8
      }
    },
    {
      "id": "l3-o5",
      "sequence": 5,
      "items": {
        "matcha": 12
      }
    },
    {
      "id": "l3-o6",
      "sequence": 6,
      "items": {
        "orange": 14,
        "lemon": 2
      }
    },
    {
      "id": "l3-o7",
      "sequence": 7,
      "items": {
        "croissant": 1,
        "mint": 2
      }
    },
    {
      "id": "l3-o8",
      "sequence": 8,
      "items": {
        "orange": 1,
        "strawberry": 4
      }
    },
    {
      "id": "l3-o9",
      "sequence": 9,
      "items": {
        "blueberry": 8
      }
    },
    {
      "id": "l3-o10",
      "sequence": 10,
      "items": {
        "blueberry": 8,
        "orange": 2,
        "strawberry": 2
      }
    },
    {
      "id": "l3-o11",
      "sequence": 11,
      "items": {
        "lemon": 13,
        "croissant": 3
      }
    },
    {
      "id": "l3-o12",
      "sequence": 12,
      "items": {
        "mint": 1,
        "orange": 2
      }
    }
  ]
};
