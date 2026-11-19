import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage01: StageDefinition = {
  "id": 1,
  "difficulty": "easy",
  "revision": 13,
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
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.easy,
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
        "id": "l1-r4-q0-p1-extra",
        "type": "cinnamonCroffle"
      },
      {
        "id": "l1-r4-q0-p1-extra-extra",
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
        "id": "l1-r4-q8-p10-extra",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q8-p10-extra-extra",
        "type": "vanillaIceCream"
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
        "id": "l1-r4-q9-p1-extra",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p1-extra-extra",
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
        "id": "l1-r4-q9-p6-extra",
        "type": "croissant"
      },
      {
        "id": "l1-r4-q9-p6-extra-extra",
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
        "id": "l1-r4-q1-p5-extra",
        "type": "lemonMacaron"
      },
      {
        "id": "l1-r4-q1-p5-extra-extra",
        "type": "lemonMacaron"
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
        "id": "l1-r4-q3-p1-extra",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q3-p1-extra-extra",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q3-p2",
        "type": "vanillaIceCream"
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
        "id": "l1-r4-q4-p1-extra",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q4-p1-extra-extra",
        "type": "matchaCroffle"
      },
      {
        "id": "l1-r4-q4-p2",
        "type": "matchaCroffle"
      }
    ],
    [
      {
        "id": "l1-r4-q5-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q5-p0-extra",
        "type": "chocolateIceCream"
      },
      {
        "id": "l1-r4-q5-p0-extra-extra",
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
        "id": "l1-r4-q6-p7-extra",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p7-extra-extra",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p8",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p8-extra",
        "type": "vanillaIceCream"
      },
      {
        "id": "l1-r4-q6-p8-extra-extra",
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
        "id": "l1-r4-q7-p1-extra",
        "type": "blueberryCupcake"
      },
      {
        "id": "l1-r4-q7-p1-extra-extra",
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
        "id": "l1-r4-q7-p4-extra",
        "type": "strawberryTart"
      },
      {
        "id": "l1-r4-q7-p4-extra-extra",
        "type": "strawberryTart"
      }
    ]
  ],
  "orders": [
    {
      "id": "l1-o1",
      "sequence": 1,
      "items": {
        "croissant": 4,
        "chocolateIceCream": 3
      }
    },
    {
      "id": "l1-o2",
      "sequence": 2,
      "items": {
        "vanillaIceCream": 6
      }
    },
    {
      "id": "l1-o3",
      "sequence": 3,
      "items": {
        "croissant": 7,
        "vanillaIceCream": 4
      }
    },
    {
      "id": "l1-o4",
      "sequence": 4,
      "items": {
        "chocolateIceCream": 10
      }
    },
    {
      "id": "l1-o5",
      "sequence": 5,
      "items": {
        "matchaCroffle": 5,
        "blueberryCupcake": 4
      }
    },
    {
      "id": "l1-o6",
      "sequence": 6,
      "items": {
        "cinnamonCroffle": 8,
        "lemonMacaron": 4
      }
    },
    {
      "id": "l1-o7",
      "sequence": 7,
      "items": {
        "vanillaIceCream": 11,
        "strawberryTart": 5
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
