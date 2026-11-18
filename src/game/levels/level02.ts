import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level02: LevelDefinition = {
  "id": 2,
  "revision": 5,
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
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l2-r4-q0-p0",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p1",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p2",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p4",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p5",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p6",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p7",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p8",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q0-p9",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q0-p10",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q0-p11",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q0-p12",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q0-p13",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q0-p14",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l2-r4-q1-p0",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q1-p1",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q1-p2",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q1-p3",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q1-p4",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q1-p5",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q1-p6",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q1-p7",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q1-p8",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q1-p9",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q1-p10",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q1-p11",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q1-p12",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q1-p13",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q1-p14",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l2-r4-q2-p0",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p1",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p2",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p3",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p4",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p5",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q2-p6",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q2-p7",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q2-p8",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p9",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p10",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p11",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p12",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q2-p13",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q2-p14",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q2-p15",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q2-p16",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q2-p17",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l2-r4-q3-p0",
        "type": "vanilla"
      },
      {
        "id": "l2-r4-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p3",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p4",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q3-p5",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q3-p6",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q3-p7",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q3-p8",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q3-p9",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l2-r4-q4-p0",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p2",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p3",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p4",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p5",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p6",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q4-p7",
        "type": "blueberry"
      },
      {
        "id": "l2-r4-q4-p8",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q4-p9",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q4-p10",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q4-p11",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q4-p12",
        "type": "lemon"
      },
      {
        "id": "l2-r4-q4-p13",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l2-r4-q5-p0",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p1",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p2",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p3",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q5-p4",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q5-p5",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q5-p6",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p7",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p8",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p9",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p10",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q5-p11",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l2-r4-q6-p0",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q6-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q6-p2",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p3",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p4",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p5",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p6",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p7",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q6-p8",
        "type": "mint"
      },
      {
        "id": "l2-r4-q6-p9",
        "type": "mint"
      },
      {
        "id": "l2-r4-q6-p10",
        "type": "mint"
      },
      {
        "id": "l2-r4-q6-p11",
        "type": "mint"
      },
      {
        "id": "l2-r4-q6-p12",
        "type": "mint"
      },
      {
        "id": "l2-r4-q6-p13",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l2-r4-q7-p0",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p2",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p3",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q7-p4",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q7-p5",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q7-p6",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q7-p7",
        "type": "caramel"
      },
      {
        "id": "l2-r4-q7-p8",
        "type": "orange"
      },
      {
        "id": "l2-r4-q7-p9",
        "type": "orange"
      },
      {
        "id": "l2-r4-q7-p10",
        "type": "orange"
      },
      {
        "id": "l2-r4-q7-p11",
        "type": "orange"
      },
      {
        "id": "l2-r4-q7-p12",
        "type": "orange"
      },
      {
        "id": "l2-r4-q7-p13",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l2-r4-q8-p0",
        "type": "mint"
      },
      {
        "id": "l2-r4-q8-p1",
        "type": "mint"
      },
      {
        "id": "l2-r4-q8-p2",
        "type": "mint"
      },
      {
        "id": "l2-r4-q8-p3",
        "type": "orange"
      },
      {
        "id": "l2-r4-q8-p4",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q8-p5",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q8-p6",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q8-p7",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q8-p8",
        "type": "raspberry"
      },
      {
        "id": "l2-r4-q8-p9",
        "type": "raspberry"
      }
    ],
    [
      {
        "id": "l2-r4-q9-p0",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q9-p1",
        "type": "matcha"
      },
      {
        "id": "l2-r4-q9-p2",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q9-p3",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q9-p4",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q9-p5",
        "type": "sprinkle"
      },
      {
        "id": "l2-r4-q9-p6",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p7",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p8",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p9",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p10",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p11",
        "type": "strawberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l2-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l2-o2",
      "sequence": 2,
      "items": {
        "vanilla": 4
      }
    },
    {
      "id": "l2-o3",
      "sequence": 3,
      "items": {
        "strawberry": 5,
        "vanilla": 2
      }
    },
    {
      "id": "l2-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
      }
    },
    {
      "id": "l2-o5",
      "sequence": 5,
      "items": {
        "matcha": 6,
        "blueberry": 2
      }
    },
    {
      "id": "l2-o6",
      "sequence": 6,
      "items": {
        "caramel": 10,
        "lemon": 2
      }
    },
    {
      "id": "l2-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 13,
        "mint": 3
      }
    },
    {
      "id": "l2-o8",
      "sequence": 8,
      "items": {
        "orange": 1,
        "raspberry": 2
      }
    },
    {
      "id": "l2-o9",
      "sequence": 9,
      "items": {
        "matcha": 5
      }
    },
    {
      "id": "l2-o10",
      "sequence": 10,
      "items": {
        "caramel": 4,
        "lemon": 2,
        "strawberry": 2
      }
    }
  ]
};
