import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level03: LevelDefinition = {
  "id": 3,
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
    "raspberry",
    "sesame"
  ],
  "targetOrders": 12,
  "trayCapacity": 20,
  "queues": [
    [
      {
        "id": "l3-r3-q0-p0",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p1",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p2",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p3",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p4",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p5",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q0-p6",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q0-p7",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q0-p8",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q0-p9",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q0-p10",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q0-p11",
        "type": "chocolate"
      },
      {
        "id": "l3-r3-q0-p12",
        "type": "chocolate"
      },
      {
        "id": "l3-r3-q0-p13",
        "type": "chocolate"
      },
      {
        "id": "l3-r3-q0-p14",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q0-p15",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q0-p16",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q0-p17",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q0-p18",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q0-p19",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l3-r3-q1-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q1-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q1-p2",
        "type": "vanilla"
      },
      {
        "id": "l3-r3-q1-p3",
        "type": "vanilla"
      },
      {
        "id": "l3-r3-q1-p4",
        "type": "vanilla"
      },
      {
        "id": "l3-r3-q1-p5",
        "type": "vanilla"
      },
      {
        "id": "l3-r3-q1-p6",
        "type": "vanilla"
      },
      {
        "id": "l3-r3-q1-p7",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q1-p8",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q1-p9",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q1-p10",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q1-p11",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q1-p12",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q1-p13",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q1-p14",
        "type": "blueberry"
      },
      {
        "id": "l3-r3-q1-p15",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l3-r3-q2-p0",
        "type": "mint"
      },
      {
        "id": "l3-r3-q2-p1",
        "type": "mint"
      },
      {
        "id": "l3-r3-q2-p2",
        "type": "mint"
      },
      {
        "id": "l3-r3-q2-p3",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q2-p4",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q2-p5",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q2-p6",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p7",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p8",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p9",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p10",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p11",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p12",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p13",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p14",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p15",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q2-p16",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l3-r3-q3-p0",
        "type": "sesame"
      },
      {
        "id": "l3-r3-q3-p1",
        "type": "sesame"
      },
      {
        "id": "l3-r3-q3-p2",
        "type": "sesame"
      },
      {
        "id": "l3-r3-q3-p3",
        "type": "sesame"
      },
      {
        "id": "l3-r3-q3-p4",
        "type": "caramel"
      },
      {
        "id": "l3-r3-q3-p5",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q3-p6",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q3-p7",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q3-p8",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q3-p9",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q3-p10",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q3-p11",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q3-p12",
        "type": "lemon"
      },
      {
        "id": "l3-r3-q3-p13",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l3-r3-q4-p0",
        "type": "chocolate"
      },
      {
        "id": "l3-r3-q4-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-r3-q4-p2",
        "type": "mint"
      },
      {
        "id": "l3-r3-q4-p3",
        "type": "mint"
      },
      {
        "id": "l3-r3-q4-p4",
        "type": "mint"
      },
      {
        "id": "l3-r3-q4-p5",
        "type": "orange"
      },
      {
        "id": "l3-r3-q4-p6",
        "type": "orange"
      },
      {
        "id": "l3-r3-q4-p7",
        "type": "orange"
      },
      {
        "id": "l3-r3-q4-p8",
        "type": "raspberry"
      },
      {
        "id": "l3-r3-q4-p9",
        "type": "raspberry"
      },
      {
        "id": "l3-r3-q4-p10",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q4-p11",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q4-p12",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q4-p13",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q4-p14",
        "type": "sprinkle"
      },
      {
        "id": "l3-r3-q4-p15",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l3-r3-q5-p0",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q5-p1",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q5-p2",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q5-p3",
        "type": "matcha"
      },
      {
        "id": "l3-r3-q5-p4",
        "type": "orange"
      },
      {
        "id": "l3-r3-q5-p5",
        "type": "orange"
      },
      {
        "id": "l3-r3-q5-p6",
        "type": "orange"
      },
      {
        "id": "l3-r3-q5-p7",
        "type": "orange"
      },
      {
        "id": "l3-r3-q5-p8",
        "type": "orange"
      },
      {
        "id": "l3-r3-q5-p9",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q5-p10",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q5-p11",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q5-p12",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q5-p13",
        "type": "strawberry"
      },
      {
        "id": "l3-r3-q5-p14",
        "type": "mint"
      },
      {
        "id": "l3-r3-q5-p15",
        "type": "mint"
      },
      {
        "id": "l3-r3-q5-p16",
        "type": "mint"
      },
      {
        "id": "l3-r3-q5-p17",
        "type": "mint"
      },
      {
        "id": "l3-r3-q5-p18",
        "type": "mint"
      },
      {
        "id": "l3-r3-q5-p19",
        "type": "mint"
      }
    ]
  ],
  "orders": [
    {
      "id": "l3-o1",
      "sequence": 1,
      "items": {
        "strawberry": 3,
        "chocolate": 2
      }
    },
    {
      "id": "l3-o2",
      "sequence": 2,
      "items": {
        "vanilla": 3
      }
    },
    {
      "id": "l3-o3",
      "sequence": 3,
      "items": {
        "strawberry": 2,
        "vanilla": 2
      }
    },
    {
      "id": "l3-o4",
      "sequence": 4,
      "items": {
        "chocolate": 3
      }
    },
    {
      "id": "l3-o5",
      "sequence": 5,
      "items": {
        "matcha": 4,
        "blueberry": 2
      }
    },
    {
      "id": "l3-o6",
      "sequence": 6,
      "items": {
        "caramel": 4,
        "lemon": 2
      }
    },
    {
      "id": "l3-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 4,
        "mint": 2,
        "orange": 2
      }
    },
    {
      "id": "l3-o8",
      "sequence": 8,
      "items": {
        "orange": 4,
        "raspberry": 2
      }
    },
    {
      "id": "l3-o9",
      "sequence": 9,
      "items": {
        "sesame": 4,
        "matcha": 2
      }
    },
    {
      "id": "l3-o10",
      "sequence": 10,
      "items": {
        "blueberry": 4,
        "caramel": 2,
        "strawberry": 2
      }
    },
    {
      "id": "l3-o11",
      "sequence": 11,
      "items": {
        "lemon": 4,
        "sprinkle": 2
      }
    },
    {
      "id": "l3-o12",
      "sequence": 12,
      "items": {
        "mint": 4,
        "orange": 2
      }
    }
  ]
};
