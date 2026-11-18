import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level02: LevelDefinition = {
  "id": 2,
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
    "orange",
    "raspberry"
  ],
  "targetOrders": 10,
  "trayCapacity": 20,
  "queues": [
    [
      {
        "id": "l2-r3-q0-p0",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q0-p1",
        "type": "mint"
      },
      {
        "id": "l2-r3-q0-p2",
        "type": "mint"
      },
      {
        "id": "l2-r3-q0-p3",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q0-p4",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q0-p5",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q0-p6",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q0-p7",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q0-p8",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l2-r3-q1-p0",
        "type": "orange"
      },
      {
        "id": "l2-r3-q1-p1",
        "type": "orange"
      },
      {
        "id": "l2-r3-q1-p2",
        "type": "orange"
      },
      {
        "id": "l2-r3-q1-p3",
        "type": "chocolate"
      },
      {
        "id": "l2-r3-q1-p4",
        "type": "chocolate"
      },
      {
        "id": "l2-r3-q1-p5",
        "type": "chocolate"
      },
      {
        "id": "l2-r3-q1-p6",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q1-p7",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q1-p8",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q1-p9",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q1-p10",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q1-p11",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l2-r3-q2-p0",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p1",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p2",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p3",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p4",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p5",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q2-p6",
        "type": "chocolate"
      },
      {
        "id": "l2-r3-q2-p7",
        "type": "chocolate"
      },
      {
        "id": "l2-r3-q2-p8",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q2-p9",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q2-p10",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q2-p11",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q2-p12",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q2-p13",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l2-r3-q3-p0",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q3-p1",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q3-p2",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q3-p3",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q3-p4",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q3-p5",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q3-p6",
        "type": "raspberry"
      },
      {
        "id": "l2-r3-q3-p7",
        "type": "raspberry"
      },
      {
        "id": "l2-r3-q3-p8",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q3-p9",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q3-p10",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q3-p11",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q3-p12",
        "type": "caramel"
      },
      {
        "id": "l2-r3-q3-p13",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l2-r3-q4-p0",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q4-p1",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q4-p2",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q4-p3",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q4-p4",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p5",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p6",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p7",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p8",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p9",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p10",
        "type": "strawberry"
      },
      {
        "id": "l2-r3-q4-p11",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q4-p12",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q4-p13",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q4-p14",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q4-p15",
        "type": "lemon"
      },
      {
        "id": "l2-r3-q4-p16",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l2-r3-q5-p0",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q5-p1",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q5-p2",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q5-p3",
        "type": "blueberry"
      },
      {
        "id": "l2-r3-q5-p4",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q5-p5",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q5-p6",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q5-p7",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q5-p8",
        "type": "vanilla"
      },
      {
        "id": "l2-r3-q5-p9",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q5-p10",
        "type": "matcha"
      },
      {
        "id": "l2-r3-q5-p11",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q5-p12",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q5-p13",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q5-p14",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q5-p15",
        "type": "sprinkle"
      },
      {
        "id": "l2-r3-q5-p16",
        "type": "sprinkle"
      }
    ]
  ],
  "orders": [
    {
      "id": "l2-o1",
      "sequence": 1,
      "items": {
        "strawberry": 3,
        "chocolate": 2
      }
    },
    {
      "id": "l2-o2",
      "sequence": 2,
      "items": {
        "vanilla": 3
      }
    },
    {
      "id": "l2-o3",
      "sequence": 3,
      "items": {
        "strawberry": 2,
        "vanilla": 2
      }
    },
    {
      "id": "l2-o4",
      "sequence": 4,
      "items": {
        "chocolate": 3
      }
    },
    {
      "id": "l2-o5",
      "sequence": 5,
      "items": {
        "matcha": 3,
        "blueberry": 2
      }
    },
    {
      "id": "l2-o6",
      "sequence": 6,
      "items": {
        "caramel": 3,
        "lemon": 2
      }
    },
    {
      "id": "l2-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 3,
        "mint": 2
      }
    },
    {
      "id": "l2-o8",
      "sequence": 8,
      "items": {
        "orange": 3,
        "raspberry": 2
      }
    },
    {
      "id": "l2-o9",
      "sequence": 9,
      "items": {
        "matcha": 3,
        "blueberry": 2
      }
    },
    {
      "id": "l2-o10",
      "sequence": 10,
      "items": {
        "caramel": 3,
        "lemon": 2,
        "strawberry": 2
      }
    }
  ]
};
