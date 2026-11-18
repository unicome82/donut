import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level01: LevelDefinition = {
  "id": 1,
  "revision": 4,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "vanilla",
    "matcha",
    "blueberry",
    "caramel",
    "lemon",
    "sprinkle",
    "mint",
    "orange"
  ],
  "targetOrders": 8,
  "trayCapacity": 20,
  "queues": [
    [
      {
        "id": "l1-r4-q0-p0",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q0-p1",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q0-p3",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q0-p4",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q0-p5",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q0-p6",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q0-p7",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l1-r4-q1-p0",
        "type": "matcha"
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
      }
    ],
    [
      {
        "id": "l1-r4-q2-p0",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q2-p1",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q2-p2",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q2-p3",
        "type": "chocolate"
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
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q3-p1",
        "type": "chocolate"
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
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q4-p4",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q4-p5",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q4-p6",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q4-p7",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q4-p8",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q4-p9",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q4-p10",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q4-p11",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q4-p12",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l1-r4-q5-p0",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q5-p1",
        "type": "chocolate"
      },
      {
        "id": "l1-r4-q5-p2",
        "type": "chocolate"
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
        "type": "caramel"
      },
      {
        "id": "l1-r4-q6-p1",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q6-p2",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q6-p3",
        "type": "caramel"
      },
      {
        "id": "l1-r4-q6-p4",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p5",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p6",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p7",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p8",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p9",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p10",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p11",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p12",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p13",
        "type": "sprinkle"
      },
      {
        "id": "l1-r4-q6-p14",
        "type": "sprinkle"
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
    ],
    [
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
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p1",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p2",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p3",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p4",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p5",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p6",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p7",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p8",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p9",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p10",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p11",
        "type": "strawberry"
      },
      {
        "id": "l1-r4-q9-p12",
        "type": "strawberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "chocolate": 1
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
        "strawberry": 5,
        "vanilla": 2
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
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
        "caramel": 6,
        "lemon": 2
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 9,
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
