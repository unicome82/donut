import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level05: LevelDefinition = {
  "id": 5,
  "revision": 8,
  "donutTypes": [
    "strawberryMilk",
    "chocolate",
    "chocolateIceCream",
    "matchaLatte",
    "blueberryAde",
    "mocha",
    "pudding",
    "croissant"
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
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q0-p2",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q8-p7",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q0-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q8-p8",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q0-p4",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q8-p9",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q0-p5",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q8-p10",
        "type": "strawberryMilk"
      },
      {
        "id": "l5-r4-q0-p6",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q0-p7",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q0-p8",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q0-p9",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q0-p10",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q0-p11",
        "type": "mocha"
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
        "type": "croissant"
      },
      {
        "id": "l5-r4-q1-p1",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q1-p2",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q9-p0",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q9-p1",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q9-p2",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q9-p3",
        "type": "chocolate"
      },
      {
        "id": "l5-r4-q1-p3",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q1-p4",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q1-p5",
        "type": "croissant"
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
        "type": "mocha"
      },
      {
        "id": "l5-r4-q9-p7",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q9-p8",
        "type": "mocha"
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
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p1",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p2",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p3",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p4",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p5",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q2-p6",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p7",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p8",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p9",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p10",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p11",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p12",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p13",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p14",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p15",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q2-p16",
        "type": "chocolateIceCream"
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
        "type": "croissant"
      },
      {
        "id": "l5-r4-q3-p10",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q3-p11",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q3-p12",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q3-p13",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q3-p14",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "l5-r4-q4-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p4",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p5",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p6",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q4-p7",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q4-p8",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q4-p9",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q4-p10",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q4-p11",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q4-p12",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q4-p13",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q4-p14",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q4-p15",
        "type": "mocha"
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
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q5-p8",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q5-p9",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q5-p10",
        "type": "croissant"
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
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p1",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p2",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p3",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p4",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p5",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p6",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p7",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p8",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p9",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q6-p10",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q6-p11",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q6-p12",
        "type": "mocha"
      },
      {
        "id": "l5-r4-q6-p13",
        "type": "mocha"
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
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p20",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p21",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p22",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p23",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q6-p24",
        "type": "blueberryAde"
      }
    ],
    [
      {
        "id": "l5-r4-q7-p0",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q7-p1",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q7-p2",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q7-p3",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q7-p4",
        "type": "matchaLatte"
      },
      {
        "id": "l5-r4-q7-p5",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p6",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p7",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p8",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p9",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p10",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p11",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p12",
        "type": "blueberryAde"
      },
      {
        "id": "l5-r4-q7-p13",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q7-p14",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q7-p15",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q7-p16",
        "type": "croissant"
      },
      {
        "id": "l5-r4-q7-p17",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q7-p18",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q7-p19",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q7-p20",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q7-p21",
        "type": "chocolateIceCream"
      },
      {
        "id": "l5-r4-q7-p22",
        "type": "chocolateIceCream"
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
        "chocolateIceCream": 4
      }
    },
    {
      "id": "l5-o3",
      "sequence": 3,
      "items": {
        "strawberryMilk": 5,
        "chocolateIceCream": 2
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
        "matchaLatte": 3
      }
    },
    {
      "id": "l5-o6",
      "sequence": 6,
      "items": {
        "mocha": 3,
        "pudding": 2
      }
    },
    {
      "id": "l5-o7",
      "sequence": 7,
      "items": {
        "chocolateIceCream": 3,
        "croissant": 3,
        "blueberryAde": 2
      }
    },
    {
      "id": "l5-o8",
      "sequence": 8,
      "items": {
        "mocha": 8,
        "strawberryMilk": 4
      }
    },
    {
      "id": "l5-o9",
      "sequence": 9,
      "items": {
        "blueberryAde": 16
      }
    },
    {
      "id": "l5-o10",
      "sequence": 10,
      "items": {
        "chocolate": 1,
        "matchaLatte": 2
      }
    },
    {
      "id": "l5-o11",
      "sequence": 11,
      "items": {
        "blueberryAde": 2,
        "mocha": 3
      }
    },
    {
      "id": "l5-o12",
      "sequence": 12,
      "items": {
        "pudding": 4,
        "chocolateIceCream": 4
      }
    },
    {
      "id": "l5-o13",
      "sequence": 13,
      "items": {
        "croissant": 10,
        "matchaLatte": 2
      }
    },
    {
      "id": "l5-o14",
      "sequence": 14,
      "items": {
        "strawberryMilk": 14,
        "blueberryAde": 2
      }
    },
    {
      "id": "l5-o15",
      "sequence": 15,
      "items": {
        "chocolateIceCream": 1,
        "chocolate": 2
      }
    },
    {
      "id": "l5-o16",
      "sequence": 16,
      "items": {
        "matchaLatte": 1,
        "blueberryAde": 4
      }
    }
  ]
};
