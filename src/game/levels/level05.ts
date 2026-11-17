import type { LevelDefinition } from '../types';

// Fixed puzzle: future-order donuts lead all six queues.
export const level05: LevelDefinition = {
  "id": 5,
  "revision": 2,
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
  "targetOrders": 16,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l5-r2-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q0-p1",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l5-r2-q0-p4",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q0-p5",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q0-p6",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q0-p7",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q0-p8",
        "type": "caramel"
      },
      {
        "id": "l5-r2-q0-p9",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l5-r2-q1-p0",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q1-p1",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q1-p2",
        "type": "sprinkle"
      },
      {
        "id": "l5-r2-q1-p3",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q1-p4",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q1-p5",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q1-p6",
        "type": "caramel"
      },
      {
        "id": "l5-r2-q1-p7",
        "type": "orange"
      },
      {
        "id": "l5-r2-q1-p8",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q1-p9",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l5-r2-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l5-r2-q2-p1",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q2-p2",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q2-p3",
        "type": "vanilla"
      },
      {
        "id": "l5-r2-q2-p4",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q2-p5",
        "type": "orange"
      },
      {
        "id": "l5-r2-q2-p6",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q2-p7",
        "type": "mint"
      },
      {
        "id": "l5-r2-q2-p8",
        "type": "sprinkle"
      },
      {
        "id": "l5-r2-q2-p9",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l5-r2-q3-p0",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q3-p1",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q3-p2",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q3-p3",
        "type": "orange"
      },
      {
        "id": "l5-r2-q3-p4",
        "type": "caramel"
      },
      {
        "id": "l5-r2-q3-p5",
        "type": "mint"
      },
      {
        "id": "l5-r2-q3-p6",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q3-p7",
        "type": "mint"
      },
      {
        "id": "l5-r2-q3-p8",
        "type": "mint"
      },
      {
        "id": "l5-r2-q3-p9",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l5-r2-q4-p0",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q4-p2",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q4-p3",
        "type": "mint"
      },
      {
        "id": "l5-r2-q4-p4",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q4-p5",
        "type": "mint"
      },
      {
        "id": "l5-r2-q4-p6",
        "type": "chocolate"
      },
      {
        "id": "l5-r2-q4-p7",
        "type": "sprinkle"
      },
      {
        "id": "l5-r2-q4-p8",
        "type": "orange"
      },
      {
        "id": "l5-r2-q4-p9",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l5-r2-q5-p0",
        "type": "caramel"
      },
      {
        "id": "l5-r2-q5-p1",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q5-p2",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q5-p3",
        "type": "mint"
      },
      {
        "id": "l5-r2-q5-p4",
        "type": "blueberry"
      },
      {
        "id": "l5-r2-q5-p5",
        "type": "sprinkle"
      },
      {
        "id": "l5-r2-q5-p6",
        "type": "matcha"
      },
      {
        "id": "l5-r2-q5-p7",
        "type": "lemon"
      },
      {
        "id": "l5-r2-q5-p8",
        "type": "strawberry"
      },
      {
        "id": "l5-r2-q5-p9",
        "type": "matcha"
      }
    ]
  ],
  "orders": [
    {
      "id": "l5-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2
      }
    },
    {
      "id": "l5-o2",
      "sequence": 2,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l5-o3",
      "sequence": 3,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l5-o4",
      "sequence": 4,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l5-o5",
      "sequence": 5,
      "items": {
        "vanilla": 2,
        "matcha": 1
      }
    },
    {
      "id": "l5-o6",
      "sequence": 6,
      "items": {
        "blueberry": 2,
        "caramel": 1
      }
    },
    {
      "id": "l5-o7",
      "sequence": 7,
      "items": {
        "lemon": 2,
        "sprinkle": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l5-o8",
      "sequence": 8,
      "items": {
        "mint": 2,
        "orange": 1
      }
    },
    {
      "id": "l5-o9",
      "sequence": 9,
      "items": {
        "vanilla": 2,
        "matcha": 1
      }
    },
    {
      "id": "l5-o10",
      "sequence": 10,
      "items": {
        "blueberry": 2,
        "caramel": 1,
        "strawberry": 1
      }
    },
    {
      "id": "l5-o11",
      "sequence": 11,
      "items": {
        "lemon": 2,
        "sprinkle": 1
      }
    },
    {
      "id": "l5-o12",
      "sequence": 12,
      "items": {
        "mint": 2,
        "orange": 1
      }
    },
    {
      "id": "l5-o13",
      "sequence": 13,
      "items": {
        "vanilla": 2,
        "matcha": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l5-o14",
      "sequence": 14,
      "items": {
        "blueberry": 2,
        "caramel": 1
      }
    },
    {
      "id": "l5-o15",
      "sequence": 15,
      "items": {
        "lemon": 2,
        "sprinkle": 1
      }
    },
    {
      "id": "l5-o16",
      "sequence": 16,
      "items": {
        "mint": 2,
        "orange": 1,
        "strawberry": 1
      }
    }
  ]
};
