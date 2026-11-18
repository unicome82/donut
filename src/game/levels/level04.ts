import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level04: LevelDefinition = {
  "id": 4,
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
    "sesame",
    "coconut"
  ],
  "targetOrders": 14,
  "trayCapacity": 20,
  "queues": [
    [
      {
        "id": "l4-r3-q0-p0",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q0-p1",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q0-p2",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p3",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q0-p4",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q0-p5",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q0-p6",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q0-p7",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p8",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p9",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p10",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p11",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q0-p12",
        "type": "blueberry"
      }
    ],
    [
      {
        "id": "l4-r3-q1-p0",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q1-p1",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q1-p2",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q1-p3",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q1-p4",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q1-p5",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q1-p6",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q1-p7",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q1-p8",
        "type": "blueberry"
      },
      {
        "id": "l4-r3-q1-p9",
        "type": "chocolate"
      },
      {
        "id": "l4-r3-q1-p10",
        "type": "chocolate"
      },
      {
        "id": "l4-r3-q1-p11",
        "type": "chocolate"
      },
      {
        "id": "l4-r3-q1-p12",
        "type": "vanilla"
      },
      {
        "id": "l4-r3-q1-p13",
        "type": "vanilla"
      },
      {
        "id": "l4-r3-q1-p14",
        "type": "vanilla"
      },
      {
        "id": "l4-r3-q1-p15",
        "type": "vanilla"
      },
      {
        "id": "l4-r3-q1-p16",
        "type": "vanilla"
      },
      {
        "id": "l4-r3-q1-p17",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q1-p18",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q1-p19",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q1-p20",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q1-p21",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q1-p22",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l4-r3-q2-p0",
        "type": "chocolate"
      },
      {
        "id": "l4-r3-q2-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r3-q2-p2",
        "type": "mint"
      },
      {
        "id": "l4-r3-q2-p3",
        "type": "mint"
      },
      {
        "id": "l4-r3-q2-p4",
        "type": "mint"
      },
      {
        "id": "l4-r3-q2-p5",
        "type": "mint"
      },
      {
        "id": "l4-r3-q2-p6",
        "type": "mint"
      },
      {
        "id": "l4-r3-q2-p7",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q2-p8",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q2-p9",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q2-p10",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p11",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p12",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p13",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p14",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p15",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p16",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p17",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p18",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p19",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q2-p20",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l4-r3-q3-p0",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p1",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p2",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p3",
        "type": "mint"
      },
      {
        "id": "l4-r3-q3-p4",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p5",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p6",
        "type": "matcha"
      },
      {
        "id": "l4-r3-q3-p7",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q3-p8",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q3-p9",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q3-p10",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q3-p11",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q3-p12",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q3-p13",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q3-p14",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q3-p15",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l4-r3-q4-p0",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p1",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p2",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p3",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q4-p4",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q4-p5",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q4-p6",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q4-p7",
        "type": "caramel"
      },
      {
        "id": "l4-r3-q4-p8",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q4-p9",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q4-p10",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q4-p11",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q4-p12",
        "type": "strawberry"
      },
      {
        "id": "l4-r3-q4-p13",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p14",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p15",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p16",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p17",
        "type": "orange"
      },
      {
        "id": "l4-r3-q4-p18",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q4-p19",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q4-p20",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q4-p21",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q4-p22",
        "type": "raspberry"
      },
      {
        "id": "l4-r3-q4-p23",
        "type": "mint"
      },
      {
        "id": "l4-r3-q4-p24",
        "type": "mint"
      },
      {
        "id": "l4-r3-q4-p25",
        "type": "mint"
      },
      {
        "id": "l4-r3-q4-p26",
        "type": "mint"
      },
      {
        "id": "l4-r3-q4-p27",
        "type": "mint"
      },
      {
        "id": "l4-r3-q4-p28",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l4-r3-q5-p0",
        "type": "lemon"
      },
      {
        "id": "l4-r3-q5-p1",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p2",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p3",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p4",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p5",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p6",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p7",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p8",
        "type": "sprinkle"
      },
      {
        "id": "l4-r3-q5-p9",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q5-p10",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q5-p11",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q5-p12",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q5-p13",
        "type": "sesame"
      },
      {
        "id": "l4-r3-q5-p14",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q5-p15",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q5-p16",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q5-p17",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q5-p18",
        "type": "coconut"
      },
      {
        "id": "l4-r3-q5-p19",
        "type": "orange"
      },
      {
        "id": "l4-r3-q5-p20",
        "type": "orange"
      },
      {
        "id": "l4-r3-q5-p21",
        "type": "orange"
      },
      {
        "id": "l4-r3-q5-p22",
        "type": "orange"
      },
      {
        "id": "l4-r3-q5-p23",
        "type": "orange"
      },
      {
        "id": "l4-r3-q5-p24",
        "type": "orange"
      }
    ]
  ],
  "orders": [
    {
      "id": "l4-o1",
      "sequence": 1,
      "items": {
        "strawberry": 3,
        "chocolate": 2
      }
    },
    {
      "id": "l4-o2",
      "sequence": 2,
      "items": {
        "vanilla": 3
      }
    },
    {
      "id": "l4-o3",
      "sequence": 3,
      "items": {
        "strawberry": 2,
        "vanilla": 2
      }
    },
    {
      "id": "l4-o4",
      "sequence": 4,
      "items": {
        "chocolate": 3
      }
    },
    {
      "id": "l4-o5",
      "sequence": 5,
      "items": {
        "matcha": 4,
        "blueberry": 3
      }
    },
    {
      "id": "l4-o6",
      "sequence": 6,
      "items": {
        "caramel": 4,
        "lemon": 3
      }
    },
    {
      "id": "l4-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 4,
        "mint": 3,
        "raspberry": 2
      }
    },
    {
      "id": "l4-o8",
      "sequence": 8,
      "items": {
        "orange": 4,
        "raspberry": 3
      }
    },
    {
      "id": "l4-o9",
      "sequence": 9,
      "items": {
        "sesame": 4,
        "coconut": 3
      }
    },
    {
      "id": "l4-o10",
      "sequence": 10,
      "items": {
        "matcha": 4,
        "blueberry": 3,
        "strawberry": 2
      }
    },
    {
      "id": "l4-o11",
      "sequence": 11,
      "items": {
        "caramel": 4,
        "lemon": 3
      }
    },
    {
      "id": "l4-o12",
      "sequence": 12,
      "items": {
        "sprinkle": 4,
        "mint": 3
      }
    },
    {
      "id": "l4-o13",
      "sequence": 13,
      "items": {
        "orange": 4,
        "raspberry": 3,
        "matcha": 2
      }
    },
    {
      "id": "l4-o14",
      "sequence": 14,
      "items": {
        "sesame": 4,
        "coconut": 3
      }
    }
  ]
};
