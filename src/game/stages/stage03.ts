import { BASE_TRAY_CAPACITY } from '../constants';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage03: StageDefinition = {
  "id": 3,
  "revision": 9,
  "donutTypes": [
    "strawberry",
    "vanillaIceCream",
    "croissant",
    "matchaPudding",
    "blueberryCupcake",
    "chocolateCroissant",
    "raspberryMacaron",
    "chocolateCookie"
  ],
  "targetOrders": 12,
  "trayCapacity": BASE_TRAY_CAPACITY,
  "queues": [
    [
      {
        "id": "l3-r4-q0-p0",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p1",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p2",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p3",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q8-p0",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q8-p1",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q8-p2",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q8-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q8-p4",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q8-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q8-p6",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q0-p4",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q0-p5",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q0-p6",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q0-p7",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q0-p8",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q0-p9",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p10",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p11",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p12",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p13",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q0-p14",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q8-p7",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q8-p8",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q8-p9",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q8-p10",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q8-p11",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q8-p12",
        "type": "blueberryCupcake"
      }
    ],
    [
      {
        "id": "l3-r4-q9-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q1-p0",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q9-p2",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q1-p1",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q9-p3",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q1-p2",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p3",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p4",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p5",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p6",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p7",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p8",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q1-p9",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q9-p4",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p5",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p6",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p7",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p8",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p9",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p10",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q9-p11",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q1-p10",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q1-p11",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q1-p12",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q1-p13",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q1-p14",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q1-p15",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q9-p12",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p13",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p14",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p15",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p16",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q9-p17",
        "type": "strawberry"
      }
    ],
    [
      {
        "id": "l3-r4-q2-p0",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q2-p1",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q2-p2",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q2-p3",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q2-p4",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q2-p5",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p6",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p7",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p8",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p9",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p10",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p11",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p12",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p13",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p14",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q2-p15",
        "type": "chocolateCroissant"
      }
    ],
    [
      {
        "id": "l3-r4-q3-p0",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q3-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q3-p5",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q3-p6",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q3-p7",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q3-p8",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q3-p9",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q3-p10",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q3-p11",
        "type": "raspberryMacaron"
      }
    ],
    [
      {
        "id": "l3-r4-q4-p0",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q4-p1",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q4-p2",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q4-p3",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q4-p4",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q4-p5",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q4-p6",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q4-p7",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q4-p8",
        "type": "raspberryMacaron"
      },
      {
        "id": "l3-r4-q4-p9",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q4-p10",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q4-p11",
        "type": "matchaPudding"
      },
      {
        "id": "l3-r4-q4-p12",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p13",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p14",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p15",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p16",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q4-p17",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "l3-r4-q5-p0",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p1",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p2",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q5-p3",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p4",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q5-p6",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p7",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p8",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p9",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p10",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p11",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p12",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p13",
        "type": "chocolateCookie"
      },
      {
        "id": "l3-r4-q5-p14",
        "type": "chocolateCookie"
      }
    ],
    [
      {
        "id": "l3-r4-q6-p0",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q6-p1",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q6-p2",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q6-p3",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p4",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p5",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q6-p6",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q6-p7",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q6-p8",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q6-p9",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q6-p10",
        "type": "vanillaIceCream"
      },
      {
        "id": "l3-r4-q6-p11",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q6-p12",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q6-p13",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q6-p14",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q6-p15",
        "type": "chocolateCroissant"
      },
      {
        "id": "l3-r4-q6-p16",
        "type": "chocolateCroissant"
      }
    ],
    [
      {
        "id": "l3-r4-q7-p0",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p1",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p2",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p3",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p4",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p5",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p6",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p7",
        "type": "croissant"
      },
      {
        "id": "l3-r4-q7-p8",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p9",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p10",
        "type": "blueberryCupcake"
      },
      {
        "id": "l3-r4-q7-p11",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p12",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p13",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p14",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p15",
        "type": "strawberry"
      },
      {
        "id": "l3-r4-q7-p16",
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
        "vanillaIceCream": 1
      }
    },
    {
      "id": "l3-o2",
      "sequence": 2,
      "items": {
        "croissant": 4
      }
    },
    {
      "id": "l3-o3",
      "sequence": 3,
      "items": {
        "strawberry": 5,
        "croissant": 2
      }
    },
    {
      "id": "l3-o4",
      "sequence": 4,
      "items": {
        "vanillaIceCream": 8
      }
    },
    {
      "id": "l3-o5",
      "sequence": 5,
      "items": {
        "matchaPudding": 12
      }
    },
    {
      "id": "l3-o6",
      "sequence": 6,
      "items": {
        "chocolateCroissant": 14,
        "raspberryMacaron": 2
      }
    },
    {
      "id": "l3-o7",
      "sequence": 7,
      "items": {
        "croissant": 1,
        "chocolateCookie": 2
      }
    },
    {
      "id": "l3-o8",
      "sequence": 8,
      "items": {
        "chocolateCroissant": 1,
        "strawberry": 4
      }
    },
    {
      "id": "l3-o9",
      "sequence": 9,
      "items": {
        "blueberryCupcake": 8
      }
    },
    {
      "id": "l3-o10",
      "sequence": 10,
      "items": {
        "blueberryCupcake": 8,
        "chocolateCroissant": 2,
        "strawberry": 2
      }
    },
    {
      "id": "l3-o11",
      "sequence": 11,
      "items": {
        "raspberryMacaron": 13,
        "croissant": 3
      }
    },
    {
      "id": "l3-o12",
      "sequence": 12,
      "items": {
        "chocolateCookie": 1,
        "chocolateCroissant": 2
      }
    }
  ]
};
