import type { LevelDefinition } from '../types';

// Authored fixed puzzle. Its solution is replayed against the engine in tests.
export const level03: LevelDefinition = {
  "id": 3,
  "revision": 1,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "vanilla",
    "matcha"
  ],
  "targetOrders": 12,
  "trayCapacity": 8,
  "queues": [
    [
      {
        "id": "l3-q0-p0",
        "type": "matcha"
      },
      {
        "id": "l3-q0-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-q0-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-q0-p3",
        "type": "chocolate"
      },
      {
        "id": "l3-q0-p4",
        "type": "vanilla"
      },
      {
        "id": "l3-q0-p5",
        "type": "matcha"
      },
      {
        "id": "l3-q0-p6",
        "type": "chocolate"
      },
      {
        "id": "l3-q0-p7",
        "type": "strawberry"
      },
      {
        "id": "l3-q0-p8",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l3-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l3-q1-p1",
        "type": "chocolate"
      },
      {
        "id": "l3-q1-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-q1-p3",
        "type": "matcha"
      },
      {
        "id": "l3-q1-p4",
        "type": "matcha"
      },
      {
        "id": "l3-q1-p5",
        "type": "chocolate"
      },
      {
        "id": "l3-q1-p6",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l3-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l3-q2-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-q2-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-q2-p3",
        "type": "matcha"
      },
      {
        "id": "l3-q2-p4",
        "type": "vanilla"
      },
      {
        "id": "l3-q2-p5",
        "type": "strawberry"
      },
      {
        "id": "l3-q2-p6",
        "type": "vanilla"
      },
      {
        "id": "l3-q2-p7",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "l3-q3-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-q3-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-q3-p4",
        "type": "chocolate"
      },
      {
        "id": "l3-q3-p5",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l3-q4-p0",
        "type": "chocolate"
      },
      {
        "id": "l3-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-q4-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-q4-p3",
        "type": "vanilla"
      },
      {
        "id": "l3-q4-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-q4-p5",
        "type": "matcha"
      },
      {
        "id": "l3-q4-p6",
        "type": "matcha"
      }
    ],
    [
      {
        "id": "l3-q5-p0",
        "type": "chocolate"
      },
      {
        "id": "l3-q5-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-q5-p2",
        "type": "chocolate"
      },
      {
        "id": "l3-q5-p3",
        "type": "chocolate"
      },
      {
        "id": "l3-q5-p4",
        "type": "vanilla"
      },
      {
        "id": "l3-q5-p5",
        "type": "strawberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l3-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "chocolate": 2
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
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o4",
      "sequence": 4,
      "items": {
        "chocolate": 2,
        "strawberry": 1
      }
    },
    {
      "id": "l3-o5",
      "sequence": 5,
      "items": {
        "matcha": 2
      }
    },
    {
      "id": "l3-o6",
      "sequence": 6,
      "items": {
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o7",
      "sequence": 7,
      "items": {
        "chocolate": 2,
        "vanilla": 1
      }
    },
    {
      "id": "l3-o8",
      "sequence": 8,
      "items": {
        "vanilla": 2
      }
    },
    {
      "id": "l3-o9",
      "sequence": 9,
      "items": {
        "matcha": 2,
        "strawberry": 2
      }
    },
    {
      "id": "l3-o10",
      "sequence": 10,
      "items": {
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l3-o11",
      "sequence": 11,
      "items": {
        "chocolate": 2
      }
    },
    {
      "id": "l3-o12",
      "sequence": 12,
      "items": {
        "vanilla": 2,
        "matcha": 1
      }
    }
  ]
};
