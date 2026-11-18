import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level05: LevelDefinition = {
  "id": 5,
  "revision": 7,
  "donutTypes": [
    "strawberryMilk",
    "chocolate",
    "vanilla",
    "matcha",
    "blueberry",
    "orange",
    "pudding",
    "mint"
  ],
  "targetOrders": 16,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l5-r4-q8-p0",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p1",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p2",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p3",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p4",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q0-p0",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p5",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q0-p1",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p6",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p2",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p7",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p3",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q8-p8",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p4",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q8-p9",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q0-p5",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q8-p10",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q0-p6",
        "type": "orange"
      },
      {
        "id": "l5-r4-q0-p7",
        "type": "orange"
      },
      {
        "id": "l5-r4-q0-p8",
        "type": "orange"
      },
      {
        "id": "l5-r4-q0-p9",
        "type": "orange"
      },
      {
        "id": "l5-r4-q0-p10",
        "type": "orange"
      },
      {
        "id": "l5-r4-q0-p11",
        "type": "orange"
      },
      {
        "id": "l5-r4-q8-p11",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q8-p12",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q8-p13",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q8-p14",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q8-p15",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q8-p16",
        "type": "chocolate"
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
        "type": "chocolate"
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
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p7",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p8",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p9",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q1-p10",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q1-p11",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p4",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q9-p5",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q1-p12",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q1-p13",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q1-p14",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q1-p15",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p16",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p17",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p18",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p19",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q1-p20",
        "type": "pudding"
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
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p10",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p11",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p12",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p13",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q9-p14",
        "type": "strawberryMilk"
      }
    ],
    [
      {
        "id": "l5-r4-q2-p0",
        "type": "orange"
      },
      {
        "id": "l5-r4-q2-p1",
        "type": "orange"
      },
      {
        "id": "l5-r4-q2-p2",
        "type": "orange"
      },
      {
        "id": "l5-r4-q2-p3",
        "type": "orange"
      },
      {
        "id": "l5-r4-q2-p4",
        "type": "orange"
      },
      {
        "id": "l5-r4-q2-p5",
        "type": "orange"
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
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p12",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p13",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p14",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p15",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q2-p16",
        "type": "vanilla"
      }
    ],
    [
      {
        "id": "l5-r4-q3-p0",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q3-p1",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q3-p2",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q3-p3",
        "type": "strawberryMilk"
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
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p1",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p2",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p3",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p4",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p5",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p6",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q4-p7",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q4-p8",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q4-p9",
        "type": "blueberry"
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
        "type": "pudding"
      },
      {
        "id": "l5-r4-q5-p5",
        "type": "pudding"
      },
      {
        "id": "l5-r4-q5-p6",
        "type": "pudding"
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
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q5-p12",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q5-p13",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q5-p14",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q5-p15",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q5-p16",
        "type": "strawberryMilk"
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
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p5",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p6",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p7",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p8",
        "type": "blueberry"
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
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q6-p15",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q6-p16",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q6-p17",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q6-p18",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q6-p19",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p20",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p21",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p22",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p23",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q6-p24",
        "type": "blueberry"
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
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p6",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p7",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p8",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p9",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p10",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p11",
        "type": "blueberry"
      },
      {
        "id": "l5-r4-q7-p12",
        "type": "blueberry"
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
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q7-p18",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q7-p19",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q7-p20",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q7-p21",
        "type": "vanilla"
      },
      {
        "id": "l5-r4-q7-p22",
        "type": "vanilla"
      }
    ]
  ],
  "orders": [
    {
      "id": "l5-o1",
      "sequence": 1,
      "items": {
        "strawberryMilk": 2,
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
        "strawberryMilk": 5,
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
        "orange": 3,
        "pudding": 2
      }
    },
    {
      "id": "l5-o7",
      "sequence": 7,
      "items": {
        "vanilla": 3,
        "mint": 3,
        "blueberry": 2
      }
    },
    {
      "id": "l5-o8",
      "sequence": 8,
      "items": {
        "orange": 8,
        "strawberryMilk": 4
      }
    },
    {
      "id": "l5-o9",
      "sequence": 9,
      "items": {
        "blueberry": 16
      }
    },
    {
      "id": "l5-o10",
      "sequence": 10,
      "items": {
        "chocolate": 1,
        "matcha": 2
      }
    },
    {
      "id": "l5-o11",
      "sequence": 11,
      "items": {
        "blueberry": 2,
        "orange": 3
      }
    },
    {
      "id": "l5-o12",
      "sequence": 12,
      "items": {
        "pudding": 4,
        "vanilla": 4
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
        "strawberryMilk": 14,
        "blueberry": 2
      }
    },
    {
      "id": "l5-o15",
      "sequence": 15,
      "items": {
        "vanilla": 1,
        "chocolate": 2
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
