import type { LevelDefinition } from '../types';

// Fixed puzzle: future-order donuts lead all six queues.
export const level02: LevelDefinition = {
  "id": 2,
  "revision": 2,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "vanilla",
    "matcha",
    "blueberry",
    "caramel",
    "lemon"
  ],
  "targetOrders": 10,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l2-r2-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l2-r2-q0-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r2-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l2-r2-q0-p3",
        "type": "matcha"
      },
      {
        "id": "l2-r2-q0-p4",
        "type": "vanilla"
      },
      {
        "id": "l2-r2-q0-p5",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l2-r2-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l2-r2-q1-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q1-p2",
        "type": "chocolate"
      },
      {
        "id": "l2-r2-q1-p3",
        "type": "vanilla"
      },
      {
        "id": "l2-r2-q1-p4",
        "type": "matcha"
      },
      {
        "id": "l2-r2-q1-p5",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l2-r2-q2-p0",
        "type": "blueberry"
      },
      {
        "id": "l2-r2-q2-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q2-p2",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q2-p3",
        "type": "lemon"
      },
      {
        "id": "l2-r2-q2-p4",
        "type": "blueberry"
      },
      {
        "id": "l2-r2-q2-p5",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l2-r2-q3-p0",
        "type": "caramel"
      },
      {
        "id": "l2-r2-q3-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r2-q3-p2",
        "type": "caramel"
      },
      {
        "id": "l2-r2-q3-p3",
        "type": "caramel"
      },
      {
        "id": "l2-r2-q3-p4",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l2-r2-q4-p0",
        "type": "lemon"
      },
      {
        "id": "l2-r2-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q4-p2",
        "type": "blueberry"
      },
      {
        "id": "l2-r2-q4-p3",
        "type": "lemon"
      },
      {
        "id": "l2-r2-q4-p4",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l2-r2-q5-p0",
        "type": "vanilla"
      },
      {
        "id": "l2-r2-q5-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r2-q5-p2",
        "type": "matcha"
      },
      {
        "id": "l2-r2-q5-p3",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q5-p4",
        "type": "strawberry"
      },
      {
        "id": "l2-r2-q5-p5",
        "type": "matcha"
      }
    ]
  ],
  "orders": [
    {
      "id": "l2-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2
      }
    },
    {
      "id": "l2-o2",
      "sequence": 2,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l2-o3",
      "sequence": 3,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l2-o4",
      "sequence": 4,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l2-o5",
      "sequence": 5,
      "items": {
        "vanilla": 1,
        "matcha": 1
      }
    },
    {
      "id": "l2-o6",
      "sequence": 6,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    },
    {
      "id": "l2-o7",
      "sequence": 7,
      "items": {
        "lemon": 1,
        "vanilla": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l2-o8",
      "sequence": 8,
      "items": {
        "matcha": 1,
        "blueberry": 1
      }
    },
    {
      "id": "l2-o9",
      "sequence": 9,
      "items": {
        "caramel": 1,
        "lemon": 1
      }
    },
    {
      "id": "l2-o10",
      "sequence": 10,
      "items": {
        "vanilla": 1,
        "matcha": 1,
        "strawberry": 1
      }
    }
  ]
};
