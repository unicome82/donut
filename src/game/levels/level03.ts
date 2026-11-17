import type { LevelDefinition } from '../types';

// Fixed puzzle: future-order donuts lead all six queues.
export const level03: LevelDefinition = {
  "id": 3,
  "revision": 2,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "vanilla",
    "matcha",
    "blueberry",
    "caramel",
    "lemon",
    "sprinkle"
  ],
  "targetOrders": 12,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l3-r2-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l3-r2-q0-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-r2-q0-p2",
        "type": "vanilla"
      },
      {
        "id": "l3-r2-q0-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q0-p4",
        "type": "matcha"
      },
      {
        "id": "l3-r2-q0-p5",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l3-r2-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l3-r2-q1-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-r2-q1-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-r2-q1-p3",
        "type": "sprinkle"
      },
      {
        "id": "l3-r2-q1-p4",
        "type": "blueberry"
      },
      {
        "id": "l3-r2-q1-p5",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l3-r2-q2-p0",
        "type": "blueberry"
      },
      {
        "id": "l3-r2-q2-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q2-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-r2-q2-p3",
        "type": "lemon"
      },
      {
        "id": "l3-r2-q2-p4",
        "type": "caramel"
      },
      {
        "id": "l3-r2-q2-p5",
        "type": "caramel"
      },
      {
        "id": "l3-r2-q2-p6",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l3-r2-q3-p0",
        "type": "caramel"
      },
      {
        "id": "l3-r2-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q3-p3",
        "type": "caramel"
      },
      {
        "id": "l3-r2-q3-p4",
        "type": "blueberry"
      },
      {
        "id": "l3-r2-q3-p5",
        "type": "lemon"
      },
      {
        "id": "l3-r2-q3-p6",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l3-r2-q4-p0",
        "type": "lemon"
      },
      {
        "id": "l3-r2-q4-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-r2-q4-p2",
        "type": "blueberry"
      },
      {
        "id": "l3-r2-q4-p3",
        "type": "matcha"
      },
      {
        "id": "l3-r2-q4-p4",
        "type": "sprinkle"
      },
      {
        "id": "l3-r2-q4-p5",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l3-r2-q5-p0",
        "type": "sprinkle"
      },
      {
        "id": "l3-r2-q5-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q5-p2",
        "type": "matcha"
      },
      {
        "id": "l3-r2-q5-p3",
        "type": "vanilla"
      },
      {
        "id": "l3-r2-q5-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-r2-q5-p5",
        "type": "matcha"
      }
    ]
  ],
  "orders": [
    {
      "id": "l3-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2
      }
    },
    {
      "id": "l3-o2",
      "sequence": 2,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l3-o3",
      "sequence": 3,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o4",
      "sequence": 4,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o5",
      "sequence": 5,
      "items": {
        "vanilla": 1,
        "matcha": 1
      }
    },
    {
      "id": "l3-o6",
      "sequence": 6,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    },
    {
      "id": "l3-o7",
      "sequence": 7,
      "items": {
        "lemon": 1,
        "sprinkle": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o8",
      "sequence": 8,
      "items": {
        "vanilla": 1,
        "matcha": 1
      }
    },
    {
      "id": "l3-o9",
      "sequence": 9,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    },
    {
      "id": "l3-o10",
      "sequence": 10,
      "items": {
        "lemon": 1,
        "sprinkle": 1,
        "strawberry": 1
      }
    },
    {
      "id": "l3-o11",
      "sequence": 11,
      "items": {
        "vanilla": 1,
        "matcha": 1
      }
    },
    {
      "id": "l3-o12",
      "sequence": 12,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    }
  ]
};
