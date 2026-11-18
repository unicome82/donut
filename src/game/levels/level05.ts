import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level05: LevelDefinition = {
  "id": 5,
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
    "coconut",
    "coffee"
  ],
  "targetOrders": 16,
  "trayCapacity": 20,
  "queues": [
    [
      {
        "id": "l5-r3-q0-p0",
        "type": "vanilla"
      },
      {
        "id": "l5-r3-q0-p1",
        "type": "vanilla"
      },
      {
        "id": "l5-r3-q0-p2",
        "type": "vanilla"
      },
      {
        "id": "l5-r3-q0-p3",
        "type": "vanilla"
      },
      {
        "id": "l5-r3-q0-p4",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q0-p5",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q0-p6",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q0-p7",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p8",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p9",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p10",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p11",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p12",
        "type": "mint"
      },
      {
        "id": "l5-r3-q0-p13",
        "type": "vanilla"
      },
      {
        "id": "l5-r3-q0-p14",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q0-p15",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q0-p16",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q0-p17",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q0-p18",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q0-p19",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q0-p20",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q0-p21",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q0-p22",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l5-r3-q1-p0",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p1",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p2",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p3",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p4",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p5",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q1-p6",
        "type": "orange"
      },
      {
        "id": "l5-r3-q1-p7",
        "type": "orange"
      },
      {
        "id": "l5-r3-q1-p8",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p9",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p10",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p11",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p12",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p13",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p14",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q1-p15",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q1-p16",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q1-p17",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q1-p18",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q1-p19",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q1-p20",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q1-p21",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p22",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p23",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p24",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p25",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q1-p26",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l5-r3-q2-p0",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q2-p1",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q2-p2",
        "type": "mint"
      },
      {
        "id": "l5-r3-q2-p3",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q2-p4",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q2-p5",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q2-p6",
        "type": "chocolate"
      },
      {
        "id": "l5-r3-q2-p7",
        "type": "chocolate"
      },
      {
        "id": "l5-r3-q2-p8",
        "type": "chocolate"
      },
      {
        "id": "l5-r3-q2-p9",
        "type": "chocolate"
      },
      {
        "id": "l5-r3-q2-p10",
        "type": "chocolate"
      },
      {
        "id": "l5-r3-q2-p11",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q2-p12",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q2-p13",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q2-p14",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q2-p15",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q2-p16",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q2-p17",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q2-p18",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q2-p19",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l5-r3-q3-p0",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p1",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p2",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p3",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p4",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p5",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q3-p6",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q3-p7",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q3-p8",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q3-p9",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q3-p10",
        "type": "lemon"
      },
      {
        "id": "l5-r3-q3-p11",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q3-p12",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q3-p13",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q3-p14",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q3-p15",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q3-p16",
        "type": "coffee"
      },
      {
        "id": "l5-r3-q3-p17",
        "type": "mint"
      },
      {
        "id": "l5-r3-q3-p18",
        "type": "mint"
      },
      {
        "id": "l5-r3-q3-p19",
        "type": "mint"
      },
      {
        "id": "l5-r3-q3-p20",
        "type": "mint"
      },
      {
        "id": "l5-r3-q3-p21",
        "type": "mint"
      },
      {
        "id": "l5-r3-q3-p22",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l5-r3-q4-p0",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p1",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p2",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p3",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p4",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p5",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q4-p6",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q4-p7",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q4-p8",
        "type": "sprinkle"
      },
      {
        "id": "l5-r3-q4-p9",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q4-p10",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q4-p11",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q4-p12",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q4-p13",
        "type": "coconut"
      },
      {
        "id": "l5-r3-q4-p14",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q4-p15",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q4-p16",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q4-p17",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q4-p18",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q4-p19",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q4-p20",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q4-p21",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p22",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p23",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p24",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p25",
        "type": "orange"
      },
      {
        "id": "l5-r3-q4-p26",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l5-r3-q5-p0",
        "type": "blueberry"
      },
      {
        "id": "l5-r3-q5-p1",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q5-p2",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q5-p3",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q5-p4",
        "type": "sesame"
      },
      {
        "id": "l5-r3-q5-p5",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q5-p6",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q5-p7",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q5-p8",
        "type": "strawberry"
      },
      {
        "id": "l5-r3-q5-p9",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q5-p10",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q5-p11",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q5-p12",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q5-p13",
        "type": "matcha"
      },
      {
        "id": "l5-r3-q5-p14",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q5-p15",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q5-p16",
        "type": "caramel"
      },
      {
        "id": "l5-r3-q5-p17",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q5-p18",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q5-p19",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q5-p20",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q5-p21",
        "type": "raspberry"
      },
      {
        "id": "l5-r3-q5-p22",
        "type": "raspberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l5-o1",
      "sequence": 1,
      "items": {
        "strawberry": 3,
        "chocolate": 2
      }
    },
    {
      "id": "l5-o2",
      "sequence": 2,
      "items": {
        "vanilla": 3
      }
    },
    {
      "id": "l5-o3",
      "sequence": 3,
      "items": {
        "strawberry": 2,
        "vanilla": 2
      }
    },
    {
      "id": "l5-o4",
      "sequence": 4,
      "items": {
        "chocolate": 3
      }
    },
    {
      "id": "l5-o5",
      "sequence": 5,
      "items": {
        "matcha": 4,
        "blueberry": 3
      }
    },
    {
      "id": "l5-o6",
      "sequence": 6,
      "items": {
        "caramel": 4,
        "lemon": 3
      }
    },
    {
      "id": "l5-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 4,
        "mint": 3,
        "sesame": 2
      }
    },
    {
      "id": "l5-o8",
      "sequence": 8,
      "items": {
        "orange": 4,
        "raspberry": 3
      }
    },
    {
      "id": "l5-o9",
      "sequence": 9,
      "items": {
        "sesame": 4,
        "coconut": 3
      }
    },
    {
      "id": "l5-o10",
      "sequence": 10,
      "items": {
        "coffee": 4,
        "matcha": 3,
        "strawberry": 2
      }
    },
    {
      "id": "l5-o11",
      "sequence": 11,
      "items": {
        "blueberry": 4,
        "caramel": 3
      }
    },
    {
      "id": "l5-o12",
      "sequence": 12,
      "items": {
        "lemon": 4,
        "sprinkle": 3
      }
    },
    {
      "id": "l5-o13",
      "sequence": 13,
      "items": {
        "mint": 4,
        "orange": 3,
        "matcha": 2
      }
    },
    {
      "id": "l5-o14",
      "sequence": 14,
      "items": {
        "raspberry": 4,
        "sesame": 3
      }
    },
    {
      "id": "l5-o15",
      "sequence": 15,
      "items": {
        "coconut": 4,
        "coffee": 3
      }
    },
    {
      "id": "l5-o16",
      "sequence": 16,
      "items": {
        "matcha": 4,
        "blueberry": 3,
        "lemon": 2
      }
    }
  ]
};
