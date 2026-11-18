import type { LevelDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const level01: LevelDefinition = {
  "id": 1,
  "revision": 9,
  "donutTypes": [
    "croissant",
    "chocolateIceCream",
    "vanillaIceCream",
    "matchaCroffle",
    "blueberryCupcake",
    "cinnamonCroffle",
    "lemonMacaron",
    "strawberryTart"
  ],
  "targetOrders": 8,
  "trayCapacity": 40,
  "queues": [
    [
      {
        "id": "l1-r4-q0-p0",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q0-p1",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p0",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p1",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p6",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q8-p7",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q8-p8",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q8-p9",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q8-p10",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q0-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q0-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q0-p4",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q0-p5",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q0-p6",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q0-p7",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q8-p11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p12",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p13",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p14",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p15",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q8-p16",
        "type": "cinnamonCroffle"
      }
    ],
    [
      {
        "id": "l1-r4-q9-p0",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p1",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q1-p0",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q9-p2",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p3",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p4",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p5",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p6",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q1-p1",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q1-p2",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q1-p3",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q1-p4",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q1-p5",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q1-p6",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q1-p7",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q1-p8",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q1-p9",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q1-p10",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q1-p11",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q9-p7",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p8",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p9",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p10",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p11",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p12",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "l1-r4-q2-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q2-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q2-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q2-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q2-p4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q2-p5",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q2-p6",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q2-p7",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q2-p8",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q2-p9",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q2-p10",
        "type": "matchaCroffle"
      }
    ],
    [
      {
        "id": "l1-r4-q3-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q3-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q3-p2",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q3-p3",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q3-p4",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q3-p5",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q3-p6",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q3-p7",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q3-p8",
        "type": "blueberryCupcake"
      }
    ],
    [
      {
        "id": "l1-r4-q4-p0",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q4-p1",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q4-p2",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q4-p3",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q4-p4",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q4-p5",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q4-p6",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q4-p7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q4-p8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q4-p9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q4-p10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q4-p11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q4-p12",
        "type": "cinnamonCroffle"
      }
    ],
    [
      {
        "id": "l1-r4-q5-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q5-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q5-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q5-p3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q5-p4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q5-p5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q5-p6",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q5-p7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q5-p8",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q5-p9",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q5-p10",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q5-p11",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q5-p12",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q5-p13",
        "type": "lemonMacaron"
      }
    ],
    [
      {
        "id": "l1-r4-q6-p0",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q6-p1",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q6-p2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q6-p3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q6-p4",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p5",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p6",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p7",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p8",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p9",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p10",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p11",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p12",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p13",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p14",
        "type": "vanillaIceCream"
      }
    ],
    [
      {
        "id": "l1-r4-q7-p0",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q7-p1",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q7-p2",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p3",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p4",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p5",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p6",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p7",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p8",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p9",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p10",
        "type": "strawberryTart"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "croissant": 2,
        "chocolateIceCream": 1
      }
    },
    {
      "id": "l1-o2",
      "sequence": 2,
      "items": {
        "vanillaIceCream": 4
      }
    },
    {
      "id": "l1-o3",
      "sequence": 3,
      "items": {
        "croissant": 5,
        "vanillaIceCream": 2
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "chocolateIceCream": 8
      }
    },
    {
      "id": "l1-o5",
      "sequence": 5,
      "items": {
        "matchaCroffle": 3,
        "blueberryCupcake": 2
      }
    },
    {
      "id": "l1-o6",
      "sequence": 6,
      "items": {
        "cinnamonCroffle": 6,
        "lemonMacaron": 2
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "vanillaIceCream": 9,
        "strawberryTart": 3
      }
    },
    {
      "id": "l1-o8",
      "sequence": 8,
      "items": {
        "cinnamonCroffle": 12,
        "matchaCroffle": 4
      }
    }
  ]
};
