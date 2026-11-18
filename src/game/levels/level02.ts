import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level02: LevelDefinition = {
  "id": 2,
  "revision": 8,
  "donutTypes": [
    "strawberry",
    "chocolate",
    "whiteCookie",
    "matchaScone",
    "blueberryTart",
    "chocolateCupcake",
    "lemonMacaron",
    "berryScone"
  ],
  "targetOrders": 10,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l2-r4-q0-p0",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p1",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p2",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p3",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p4",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q8-p0",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q8-p1",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q8-p2",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q0-p5",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p6",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p7",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q0-p8",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q8-p3",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q0-p9",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q0-p10",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q0-p11",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q0-p12",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q0-p13",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q0-p14",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q8-p4",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q8-p5",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q8-p6",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q8-p7",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q8-p8",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q8-p9",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l2-r4-q9-p0",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p0",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q1-p1",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q9-p1",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q9-p2",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q9-p3",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q9-p4",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q9-p5",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p2",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q1-p3",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q1-p4",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p5",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p6",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p7",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p8",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q1-p9",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p10",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p11",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p12",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p13",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q1-p14",
        "type": "matchaScone"
      },
      {
        "id": "l2-r4-q9-p6",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p7",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p8",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p9",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p10",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q9-p11",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l2-r4-q2-p0",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p1",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p2",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p3",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p4",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p5",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q2-p6",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q2-p7",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q2-p8",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p9",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p10",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p11",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q2-p12",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q2-p13",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q2-p14",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q2-p15",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q2-p16",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q2-p17",
        "type": "blueberryTart"
      }
    ],
    [
      {
        "id": "l2-r4-q3-p0",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p3",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q3-p4",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q3-p5",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q3-p6",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q3-p7",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q3-p8",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q3-p9",
        "type": "chocolateCupcake"
      }
    ],
    [
      {
        "id": "l2-r4-q4-p0",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p1",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p2",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p3",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p4",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p5",
        "type": "strawberry"
      },
      {
        "id": "l2-r4-q4-p6",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q4-p7",
        "type": "blueberryTart"
      },
      {
        "id": "l2-r4-q4-p8",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q4-p9",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q4-p10",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q4-p11",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q4-p12",
        "type": "lemonMacaron"
      },
      {
        "id": "l2-r4-q4-p13",
        "type": "lemonMacaron"
      }
    ],
    [
      {
        "id": "l2-r4-q5-p0",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p1",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p2",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p3",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q5-p4",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q5-p5",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q5-p6",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p7",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p8",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p9",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p10",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q5-p11",
        "type": "whiteCookie"
      }
    ],
    [
      {
        "id": "l2-r4-q6-p0",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q6-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q6-p2",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p3",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p4",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p5",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p6",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p7",
        "type": "whiteCookie"
      },
      {
        "id": "l2-r4-q6-p8",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q6-p9",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q6-p10",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q6-p11",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q6-p12",
        "type": "berryScone"
      },
      {
        "id": "l2-r4-q6-p13",
        "type": "berryScone"
      }
    ],
    [
      {
        "id": "l2-r4-q7-p0",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p1",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p2",
        "type": "chocolate"
      },
      {
        "id": "l2-r4-q7-p3",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p4",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p5",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p6",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p7",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p8",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p9",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p10",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p11",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p12",
        "type": "chocolateCupcake"
      },
      {
        "id": "l2-r4-q7-p13",
        "type": "chocolateCupcake"
      }
    ]
  ],
  "orders": [
    {
      "id": "l2-o1",
      "sequence": 1,
      "items": {
        "strawberry": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l2-o2",
      "sequence": 2,
      "items": {
        "whiteCookie": 4
      }
    },
    {
      "id": "l2-o3",
      "sequence": 3,
      "items": {
        "strawberry": 5,
        "whiteCookie": 2
      }
    },
    {
      "id": "l2-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
      }
    },
    {
      "id": "l2-o5",
      "sequence": 5,
      "items": {
        "matchaScone": 6,
        "blueberryTart": 2
      }
    },
    {
      "id": "l2-o6",
      "sequence": 6,
      "items": {
        "chocolateCupcake": 10,
        "lemonMacaron": 2
      }
    },
    {
      "id": "l2-o7",
      "sequence": 7,
      "items": {
        "whiteCookie": 13,
        "berryScone": 3
      }
    },
    {
      "id": "l2-o8",
      "sequence": 8,
      "items": {
        "chocolateCupcake": 1,
        "strawberry": 2
      }
    },
    {
      "id": "l2-o9",
      "sequence": 9,
      "items": {
        "matchaScone": 5
      }
    },
    {
      "id": "l2-o10",
      "sequence": 10,
      "items": {
        "chocolateCupcake": 4,
        "lemonMacaron": 2,
        "strawberry": 2
      }
    }
  ]
};
