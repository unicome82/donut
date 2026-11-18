import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level04: LevelDefinition = {
  "id": 4,
  "revision": 7,
  "donutTypes": [
    "cake",
    "chocolate",
    "latte",
    "matcha",
    "blueberry",
    "orange",
    "lemon",
    "mint"
  ],
  "targetOrders": 14,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l4-r4-q8-p0",
        "type": "latte"
      },
      {
        "id": "l4-r4-q0-p0",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p1",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p2",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p4",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p5",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q8-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q0-p6",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q8-p2",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p3",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p4",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p5",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q8-p6",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p7",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q8-p7",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q8-p8",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q0-p8",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p9",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p10",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p11",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p12",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p13",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p14",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p15",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p16",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p17",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q0-p18",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q8-p9",
        "type": "latte"
      },
      {
        "id": "l4-r4-q8-p10",
        "type": "latte"
      },
      {
        "id": "l4-r4-q8-p11",
        "type": "latte"
      },
      {
        "id": "l4-r4-q8-p12",
        "type": "latte"
      },
      {
        "id": "l4-r4-q8-p13",
        "type": "latte"
      },
      {
        "id": "l4-r4-q8-p14",
        "type": "latte"
      }
    ],
    [
      {
        "id": "l4-r4-q9-p0",
        "type": "latte"
      },
      {
        "id": "l4-r4-q9-p1",
        "type": "latte"
      },
      {
        "id": "l4-r4-q9-p2",
        "type": "latte"
      },
      {
        "id": "l4-r4-q9-p3",
        "type": "latte"
      },
      {
        "id": "l4-r4-q9-p4",
        "type": "latte"
      },
      {
        "id": "l4-r4-q1-p0",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p1",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p2",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p3",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p4",
        "type": "latte"
      },
      {
        "id": "l4-r4-q1-p5",
        "type": "latte"
      },
      {
        "id": "l4-r4-q9-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p6",
        "type": "latte"
      },
      {
        "id": "l4-r4-q1-p7",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q1-p8",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q1-p9",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q9-p6",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q9-p7",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q1-p10",
        "type": "orange"
      },
      {
        "id": "l4-r4-q1-p11",
        "type": "orange"
      },
      {
        "id": "l4-r4-q1-p12",
        "type": "orange"
      },
      {
        "id": "l4-r4-q1-p13",
        "type": "orange"
      },
      {
        "id": "l4-r4-q1-p14",
        "type": "orange"
      },
      {
        "id": "l4-r4-q1-p15",
        "type": "orange"
      },
      {
        "id": "l4-r4-q9-p8",
        "type": "mint"
      },
      {
        "id": "l4-r4-q9-p9",
        "type": "mint"
      },
      {
        "id": "l4-r4-q9-p10",
        "type": "mint"
      },
      {
        "id": "l4-r4-q9-p11",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p12",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p13",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p14",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p15",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p16",
        "type": "cake"
      }
    ],
    [
      {
        "id": "l4-r4-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p1",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p2",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p3",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p4",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p8",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p9",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p10",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p11",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p12",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p13",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p14",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q2-p15",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q2-p16",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q2-p17",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q2-p18",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q2-p19",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q2-p20",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l4-r4-q3-p0",
        "type": "orange"
      },
      {
        "id": "l4-r4-q3-p1",
        "type": "orange"
      },
      {
        "id": "l4-r4-q3-p2",
        "type": "orange"
      },
      {
        "id": "l4-r4-q3-p3",
        "type": "orange"
      },
      {
        "id": "l4-r4-q3-p4",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q3-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q3-p6",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q3-p7",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q3-p8",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q3-p9",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q3-p10",
        "type": "latte"
      },
      {
        "id": "l4-r4-q3-p11",
        "type": "latte"
      },
      {
        "id": "l4-r4-q3-p12",
        "type": "latte"
      },
      {
        "id": "l4-r4-q3-p13",
        "type": "latte"
      },
      {
        "id": "l4-r4-q3-p14",
        "type": "latte"
      },
      {
        "id": "l4-r4-q3-p15",
        "type": "latte"
      }
    ],
    [
      {
        "id": "l4-r4-q4-p0",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p1",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p2",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p3",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p4",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p8",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p9",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p10",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p11",
        "type": "orange"
      },
      {
        "id": "l4-r4-q4-p12",
        "type": "orange"
      },
      {
        "id": "l4-r4-q4-p13",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p14",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p15",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p16",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p17",
        "type": "mint"
      },
      {
        "id": "l4-r4-q4-p18",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l4-r4-q5-p0",
        "type": "latte"
      },
      {
        "id": "l4-r4-q5-p1",
        "type": "latte"
      },
      {
        "id": "l4-r4-q5-p2",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q5-p3",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q5-p4",
        "type": "lemon"
      },
      {
        "id": "l4-r4-q5-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p8",
        "type": "orange"
      },
      {
        "id": "l4-r4-q5-p9",
        "type": "orange"
      },
      {
        "id": "l4-r4-q5-p10",
        "type": "orange"
      },
      {
        "id": "l4-r4-q5-p11",
        "type": "orange"
      },
      {
        "id": "l4-r4-q5-p12",
        "type": "orange"
      },
      {
        "id": "l4-r4-q5-p13",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l4-r4-q6-p0",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q6-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q6-p2",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p3",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p4",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p5",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p6",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p7",
        "type": "orange"
      },
      {
        "id": "l4-r4-q6-p8",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q6-p9",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q6-p10",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p11",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p12",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p13",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p14",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p15",
        "type": "cake"
      }
    ],
    [
      {
        "id": "l4-r4-q7-p0",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p1",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p2",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p3",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p4",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p6",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q7-p7",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q7-p8",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q7-p9",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q7-p10",
        "type": "matcha"
      },
      {
        "id": "l4-r4-q7-p11",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p12",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p13",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p14",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p15",
        "type": "blueberry"
      },
      {
        "id": "l4-r4-q7-p16",
        "type": "blueberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l4-o1",
      "sequence": 1,
      "items": {
        "cake": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o2",
      "sequence": 2,
      "items": {
        "latte": 4
      }
    },
    {
      "id": "l4-o3",
      "sequence": 3,
      "items": {
        "cake": 5,
        "latte": 2
      }
    },
    {
      "id": "l4-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
      }
    },
    {
      "id": "l4-o5",
      "sequence": 5,
      "items": {
        "matcha": 16
      }
    },
    {
      "id": "l4-o6",
      "sequence": 6,
      "items": {
        "orange": 1,
        "lemon": 2
      }
    },
    {
      "id": "l4-o7",
      "sequence": 7,
      "items": {
        "latte": 2,
        "mint": 3
      }
    },
    {
      "id": "l4-o8",
      "sequence": 8,
      "items": {
        "orange": 4,
        "cake": 4
      }
    },
    {
      "id": "l4-o9",
      "sequence": 9,
      "items": {
        "blueberry": 12
      }
    },
    {
      "id": "l4-o10",
      "sequence": 10,
      "items": {
        "matcha": 12,
        "blueberry": 2,
        "cake": 2
      }
    },
    {
      "id": "l4-o11",
      "sequence": 11,
      "items": {
        "orange": 1,
        "lemon": 2
      }
    },
    {
      "id": "l4-o12",
      "sequence": 12,
      "items": {
        "latte": 1,
        "mint": 4
      }
    },
    {
      "id": "l4-o13",
      "sequence": 13,
      "items": {
        "orange": 6,
        "matcha": 2
      }
    },
    {
      "id": "l4-o14",
      "sequence": 14,
      "items": {
        "blueberry": 10,
        "latte": 2
      }
    }
  ]
};
