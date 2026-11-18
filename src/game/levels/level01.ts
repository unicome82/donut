import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level01: LevelDefinition = {
  "id": 1,
  "revision": 3,
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
        "id": "l1-r3-q0-p0",
        "type": "sprinkle"
      },
      {
        "id": "l1-r3-q0-p1",
        "type": "sprinkle"
      },
      {
        "id": "l1-r3-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q0-p3",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q0-p4",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q0-p5",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q0-p6",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q0-p7",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l1-r3-q1-p0",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q1-p1",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q1-p2",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q1-p3",
        "type": "strawberry"
      },
      {
        "id": "l1-r3-q1-p4",
        "type": "strawberry"
      },
      {
        "id": "l1-r3-q1-p5",
        "type": "strawberry"
      },
      {
        "id": "l1-r3-q1-p6",
        "type": "strawberry"
      },
      {
        "id": "l1-r3-q1-p7",
        "type": "strawberry"
      },
      {
        "id": "l1-r3-q1-p8",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q1-p9",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q1-p10",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q1-p11",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q1-p12",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q1-p13",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l1-r3-q2-p0",
        "type": "orange"
      },
      {
        "id": "l1-r3-q2-p1",
        "type": "orange"
      },
      {
        "id": "l1-r3-q2-p2",
        "type": "orange"
      },
      {
        "id": "l1-r3-q2-p3",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q2-p4",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q2-p5",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q2-p6",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q2-p7",
        "type": "chocolate"
      },
      {
        "id": "l1-r3-q2-p8",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q2-p9",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q2-p10",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q2-p11",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q2-p12",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q2-p13",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l1-r3-q3-p0",
        "type": "mint"
      },
      {
        "id": "l1-r3-q3-p1",
        "type": "mint"
      },
      {
        "id": "l1-r3-q3-p2",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q3-p3",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q3-p4",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q3-p5",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q3-p6",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q3-p7",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q3-p8",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q3-p9",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l1-r3-q4-p0",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q4-p1",
        "type": "blueberry"
      },
      {
        "id": "l1-r3-q4-p2",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q4-p3",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q4-p4",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q4-p5",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q4-p6",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q4-p7",
        "type": "caramel"
      },
      {
        "id": "l1-r3-q4-p8",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l1-r3-q5-p0",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q5-p1",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q5-p2",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q5-p3",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q5-p4",
        "type": "matcha"
      },
      {
        "id": "l1-r3-q5-p5",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q5-p6",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q5-p7",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q5-p8",
        "type": "vanilla"
      },
      {
        "id": "l1-r3-q5-p9",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q5-p10",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q5-p11",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q5-p12",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q5-p13",
        "type": "lemon"
      },
      {
        "id": "l1-r3-q5-p14",
        "type": "lemon"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "strawberry": 3,
        "chocolate": 2
      }
    },
    {
      "id": "l1-o2",
      "sequence": 2,
      "items": {
        "vanilla": 3
      }
    },
    {
      "id": "l1-o3",
      "sequence": 3,
      "items": {
        "strawberry": 2,
        "vanilla": 2
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "chocolate": 3
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
        "caramel": 3,
        "lemon": 2
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 2,
        "mint": 2
      }
    },
    {
      "id": "l1-o8",
      "sequence": 8,
      "items": {
        "orange": 3,
        "matcha": 2
      }
    }
  ]
};
