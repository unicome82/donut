import type { LevelDefinition } from '../types';

// Fixed puzzle: future-order donuts lead all six queues.
export const level01: LevelDefinition = {
  "id": 1,
  "revision": 2,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "vanilla",
    "matcha",
    "blueberry",
    "caramel"
  ],
  "targetOrders": 8,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l1-r2-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l1-r2-q0-p1",
        "type": "strawberry"
      },
      {
        "id": "l1-r2-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q0-p3",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q0-p4",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l1-r2-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l1-r2-q1-p1",
        "type": "strawberry"
      },
      {
        "id": "l1-r2-q1-p2",
        "type": "strawberry"
      },
      {
        "id": "l1-r2-q1-p3",
        "type": "vanilla"
      },
      {
        "id": "l1-r2-q1-p4",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l1-r2-q2-p0",
        "type": "blueberry"
      },
      {
        "id": "l1-r2-q2-p1",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q2-p2",
        "type": "matcha"
      },
      {
        "id": "l1-r2-q2-p3",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l1-r2-q3-p0",
        "type": "caramel"
      },
      {
        "id": "l1-r2-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l1-r2-q3-p2",
        "type": "caramel"
      },
      {
        "id": "l1-r2-q3-p3",
        "type": "blueberry"
      },
      {
        "id": "l1-r2-q3-p4",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l1-r2-q4-p0",
        "type": "vanilla"
      },
      {
        "id": "l1-r2-q4-p1",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q4-p2",
        "type": "blueberry"
      },
      {
        "id": "l1-r2-q4-p3",
        "type": "caramel"
      },
      {
        "id": "l1-r2-q4-p4",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l1-r2-q5-p0",
        "type": "matcha"
      },
      {
        "id": "l1-r2-q5-p1",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q5-p2",
        "type": "chocolate"
      },
      {
        "id": "l1-r2-q5-p3",
        "type": "strawberry"
      },
      {
        "id": "l1-r2-q5-p4",
        "type": "matcha"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2
      }
    },
    {
      "id": "l1-o2",
      "sequence": 2,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l1-o3",
      "sequence": 3,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "strawberry": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l1-o5",
      "sequence": 5,
      "items": {
        "vanilla": 1,
        "matcha": 1
      }
    },
    {
      "id": "l1-o6",
      "sequence": 6,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "vanilla": 1,
        "matcha": 1,
        "chocolate": 1
      }
    },
    {
      "id": "l1-o8",
      "sequence": 8,
      "items": {
        "blueberry": 1,
        "caramel": 1
      }
    }
  ]
};
