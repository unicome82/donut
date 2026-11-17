import type { LevelDefinition } from '../types';

// Fixed puzzle: future-order donuts lead all six queues.
export const level04: LevelDefinition = {
  "id": 4,
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
    "mint"
  ],
  "targetOrders": 14,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l4-r2-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l4-r2-q0-p1",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q0-p2",
        "type": "sprinkle"
      },
      {
        "id": "l4-r2-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l4-r2-q0-p4",
        "type": "sprinkle"
      },
      {
        "id": "l4-r2-q0-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q0-p6",
        "type": "sprinkle"
      },
      {
        "id": "l4-r2-q0-p7",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q0-p8",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l4-r2-q1-p0",
        "type": "vanilla"
      },
      {
        "id": "l4-r2-q1-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q1-p2",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q1-p3",
        "type": "matcha"
      },
      {
        "id": "l4-r2-q1-p4",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q1-p5",
        "type": "matcha"
      },
      {
        "id": "l4-r2-q1-p6",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q1-p7",
        "type": "caramel"
      },
      {
        "id": "l4-r2-q1-p8",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l4-r2-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l4-r2-q2-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q2-p2",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q2-p3",
        "type": "vanilla"
      },
      {
        "id": "l4-r2-q2-p4",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q2-p5",
        "type": "vanilla"
      },
      {
        "id": "l4-r2-q2-p6",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q2-p7",
        "type": "lemon"
      },
      {
        "id": "l4-r2-q2-p8",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l4-r2-q3-p0",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q3-p2",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q3-p3",
        "type": "mint"
      },
      {
        "id": "l4-r2-q3-p4",
        "type": "caramel"
      },
      {
        "id": "l4-r2-q3-p5",
        "type": "vanilla"
      },
      {
        "id": "l4-r2-q3-p6",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q3-p7",
        "type": "sprinkle"
      },
      {
        "id": "l4-r2-q3-p8",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l4-r2-q4-p0",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q4-p2",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q4-p3",
        "type": "mint"
      },
      {
        "id": "l4-r2-q4-p4",
        "type": "caramel"
      },
      {
        "id": "l4-r2-q4-p5",
        "type": "mint"
      },
      {
        "id": "l4-r2-q4-p6",
        "type": "caramel"
      },
      {
        "id": "l4-r2-q4-p7",
        "type": "mint"
      },
      {
        "id": "l4-r2-q4-p8",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l4-r2-q5-p0",
        "type": "caramel"
      },
      {
        "id": "l4-r2-q5-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q5-p2",
        "type": "chocolate"
      },
      {
        "id": "l4-r2-q5-p3",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q5-p4",
        "type": "sprinkle"
      },
      {
        "id": "l4-r2-q5-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r2-q5-p6",
        "type": "strawberry"
      },
      {
        "id": "l4-r2-q5-p7",
        "type": "matcha"
      }
    ]
  ],
  "orders": [
    {
      "id": "l4-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2
      }
    },
    {
      "id": "l4-o2",
      "sequence": 2,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l4-o3",
      "sequence": 3,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o4",
      "sequence": 4,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o5",
      "sequence": 5,
      "items": {
        "vanilla": 2,
        "matcha": 1
      }
    },
    {
      "id": "l4-o6",
      "sequence": 6,
      "items": {
        "blueberry": 2,
        "caramel": 1
      }
    },
    {
      "id": "l4-o7",
      "sequence": 7,
      "items": {
        "lemon": 2,
        "sprinkle": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o8",
      "sequence": 8,
      "items": {
        "mint": 2,
        "vanilla": 1
      }
    },
    {
      "id": "l4-o9",
      "sequence": 9,
      "items": {
        "matcha": 2,
        "blueberry": 1
      }
    },
    {
      "id": "l4-o10",
      "sequence": 10,
      "items": {
        "caramel": 2,
        "lemon": 1,
        "strawberry": 1
      }
    },
    {
      "id": "l4-o11",
      "sequence": 11,
      "items": {
        "sprinkle": 2,
        "mint": 1
      }
    },
    {
      "id": "l4-o12",
      "sequence": 12,
      "items": {
        "vanilla": 2,
        "matcha": 1
      }
    },
    {
      "id": "l4-o13",
      "sequence": 13,
      "items": {
        "blueberry": 2,
        "caramel": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o14",
      "sequence": 14,
      "items": {
        "lemon": 2,
        "sprinkle": 1
      }
    }
  ]
};
