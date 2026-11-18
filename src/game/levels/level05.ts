import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level05: LevelDefinition = {
  "id": 5,
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
    "raspberry",
    "sesame",
    "coconut",
    "coffee"
  ],
  "targetOrders": 16,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l5-r4-q0-p0",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q0-p1",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q0-p2",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q0-p3",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q0-p4",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p5",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p6",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q0-p7",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q0-p8",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q0-p9",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q0-p10",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q0-p11",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "l5-r4-q1-p0",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p1",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p2",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p3",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p4",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p5",
        "type": "mint"
      },
      {
        "id": "l5-r4-q1-p6",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p7",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p8",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p9",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p10",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p11",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p12",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p13",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p14",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q1-p15",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p16",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p17",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p18",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p19",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q1-p20",
        "type": "lemon"
      }
    ],
    [
      {
        "id": "l5-r4-q2-p0",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p1",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p2",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p3",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p4",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p5",
        "type": "caramel"
      },
      {
        "id": "l5-r4-q2-p6",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p7",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p8",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p9",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p10",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p11",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q2-p12",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q2-p13",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q2-p14",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q2-p15",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q2-p16",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "l5-r4-q3-p0",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q3-p1",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q3-p2",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q3-p3",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q3-p4",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q3-p5",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q3-p6",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q3-p7",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q3-p8",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q3-p9",
        "type": "mint"
      },
      {
        "id": "l5-r4-q3-p10",
        "type": "mint"
      },
      {
        "id": "l5-r4-q3-p11",
        "type": "mint"
      },
      {
        "id": "l5-r4-q3-p12",
        "type": "mint"
      },
      {
        "id": "l5-r4-q3-p13",
        "type": "mint"
      },
      {
        "id": "l5-r4-q3-p14",
        "type": "mint"
      }
    ],
    [
      {
        "id": "l5-r4-q4-p0",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p1",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p2",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p3",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p4",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p5",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p6",
        "type": "sprinkle"
      },
      {
        "id": "l5-r4-q4-p7",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q4-p8",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q4-p9",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q4-p10",
        "type": "orange"
      },
      {
        "id": "l5-r4-q4-p11",
        "type": "orange"
      },
      {
        "id": "l5-r4-q4-p12",
        "type": "orange"
      },
      {
        "id": "l5-r4-q4-p13",
        "type": "orange"
      },
      {
        "id": "l5-r4-q4-p14",
        "type": "orange"
      },
      {
        "id": "l5-r4-q4-p15",
        "type": "orange"
      }
    ],
    [
      {
        "id": "l5-r4-q5-p0",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q5-p1",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q5-p2",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q5-p3",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q5-p4",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q5-p5",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q5-p6",
        "type": "lemon"
      },
      {
        "id": "l5-r4-q5-p7",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q5-p8",
        "type": "mint"
      },
      {
        "id": "l5-r4-q5-p9",
        "type": "mint"
      },
      {
        "id": "l5-r4-q5-p10",
        "type": "mint"
      },
      {
        "id": "l5-r4-q5-p11",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q5-p12",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q5-p13",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q5-p14",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q5-p15",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q5-p16",
        "type": "raspberry"
      }
    ],
    [
      {
        "id": "l5-r4-q6-p0",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p1",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p2",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p3",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p4",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p5",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p6",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p7",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p8",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p9",
        "type": "orange"
      },
      {
        "id": "l5-r4-q6-p10",
        "type": "orange"
      },
      {
        "id": "l5-r4-q6-p11",
        "type": "orange"
      },
      {
        "id": "l5-r4-q6-p12",
        "type": "orange"
      },
      {
        "id": "l5-r4-q6-p13",
        "type": "orange"
      },
      {
        "id": "l5-r4-q6-p14",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q6-p15",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q6-p16",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q6-p17",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q6-p18",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q6-p19",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p20",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p21",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p22",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p23",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q6-p24",
        "type": "sesame"
      }
    ],
    [
      {
        "id": "l5-r4-q7-p0",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q7-p1",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q7-p2",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q7-p3",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q7-p4",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q7-p5",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p6",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p7",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p8",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p9",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p10",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p11",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p12",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q7-p13",
        "type": "mint"
      },
      {
        "id": "l5-r4-q7-p14",
        "type": "mint"
      },
      {
        "id": "l5-r4-q7-p15",
        "type": "mint"
      },
      {
        "id": "l5-r4-q7-p16",
        "type": "mint"
      },
      {
        "id": "l5-r4-q7-p17",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q7-p18",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q7-p19",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q7-p20",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q7-p21",
        "type": "coconut"
      },
      {
        "id": "l5-r4-q7-p22",
        "type": "coconut"
      }
    ],
    [
      {
        "id": "l5-r4-q8-p0",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p1",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p2",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p3",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p4",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p5",
        "type": "raspberry"
      },
      {
        "id": "l5-r4-q8-p6",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q8-p7",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q8-p8",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q8-p9",
        "type": "sesame"
      },
      {
        "id": "l5-r4-q8-p10",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q8-p11",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q8-p12",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q8-p13",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q8-p14",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q8-p15",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q8-p16",
        "type": "coffee"
      }
    ],
    [
      {
        "id": "l5-r4-q9-p0",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q9-p1",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q9-p2",
        "type": "matcha"
      },
      {
        "id": "l5-r4-q9-p3",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q9-p4",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q9-p5",
        "type": "coffee"
      },
      {
        "id": "l5-r4-q9-p6",
        "type": "orange"
      },
      {
        "id": "l5-r4-q9-p7",
        "type": "orange"
      },
      {
        "id": "l5-r4-q9-p8",
        "type": "orange"
      },
      {
        "id": "l5-r4-q9-p9",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q9-p10",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q9-p11",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q9-p12",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q9-p13",
        "type": "strawberry"
      },
      {
        "id": "l5-r4-q9-p14",
        "type": "strawberry"
      }
    ]
  ],
  "orders": [
    {
      "id": "l5-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l5-o2",
      "sequence": 2,
      "items": {
        "vanilla": 4
      }
    },
    {
      "id": "l5-o3",
      "sequence": 3,
      "items": {
        "strawberry": 5,
        "vanilla": 2
      }
    },
    {
      "id": "l5-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
      }
    },
    {
      "id": "l5-o5",
      "sequence": 5,
      "items": {
        "matcha": 3
      }
    },
    {
      "id": "l5-o6",
      "sequence": 6,
      "items": {
        "caramel": 3,
        "lemon": 2
      }
    },
    {
      "id": "l5-o7",
      "sequence": 7,
      "items": {
        "sprinkle": 3,
        "mint": 3,
        "sesame": 2
      }
    },
    {
      "id": "l5-o8",
      "sequence": 8,
      "items": {
        "orange": 8,
        "raspberry": 4
      }
    },
    {
      "id": "l5-o9",
      "sequence": 9,
      "items": {
        "sesame": 16
      }
    },
    {
      "id": "l5-o10",
      "sequence": 10,
      "items": {
        "coffee": 1,
        "matcha": 2
      }
    },
    {
      "id": "l5-o11",
      "sequence": 11,
      "items": {
        "blueberry": 2,
        "caramel": 3
      }
    },
    {
      "id": "l5-o12",
      "sequence": 12,
      "items": {
        "lemon": 4,
        "sprinkle": 4
      }
    },
    {
      "id": "l5-o13",
      "sequence": 13,
      "items": {
        "mint": 10,
        "matcha": 2
      }
    },
    {
      "id": "l5-o14",
      "sequence": 14,
      "items": {
        "raspberry": 14,
        "sesame": 2
      }
    },
    {
      "id": "l5-o15",
      "sequence": 15,
      "items": {
        "coconut": 1,
        "coffee": 2
      }
    },
    {
      "id": "l5-o16",
      "sequence": 16,
      "items": {
        "matcha": 1,
        "blueberry": 4
      }
    }
  ]
};
