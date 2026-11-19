import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage03: StageDefinition = {
  "id": 3,
  "difficulty": "normal",
  "revision": 12,
  "donutTypes": [
    "chocolateIceCream",
    "croissant",
    "lemonMacaron",
    "cinnamonCroffle",
    "chocolateCookie",
    "blueberryTart",
    "matchaPudding",
    "chocolateCupcake",
    "raspberryMacaron",
    "strawberryTart",
    "chocolateCake",
    "vanillaIceCream",
    "matchaCroffle",
    "blueberryCupcake"
  ],
  "targetOrders": 12,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.normal,
  "queues": [
    [
      {
        "id": "s3-q0-0",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-1",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-2",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q0-3",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-4",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-5",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q0-6",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q0-7",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q0-8",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q0-9",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q0-10",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-11",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-12",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q0-13",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q0-14",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-15",
        "type": "lemonMacaron"
      }
    ],
    [
      {
        "id": "s3-q1-0",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q1-1",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q1-2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q1-3",
        "type": "croissant"
      },
      {
        "id": "s3-q1-4",
        "type": "croissant"
      },
      {
        "id": "s3-q1-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q1-6",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q1-7",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q1-8",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-9",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-10",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q1-11",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q1-12",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q1-13",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s3-q2-0",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q2-1",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q2-2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q2-3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q2-4",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q2-5",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q2-6",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q2-7",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q2-8",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q2-9",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q2-10",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-11",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-12",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q2-13",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q2-14",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-15",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-16",
        "type": "vanillaIceCream"
      }
    ],
    [
      {
        "id": "s3-q3-0",
        "type": "croissant"
      },
      {
        "id": "s3-q3-1",
        "type": "croissant"
      },
      {
        "id": "s3-q3-2",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-3",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-4",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q3-5",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q3-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-8",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q3-9",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q3-10",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q3-11",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q3-12",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q3-13",
        "type": "lemonMacaron"
      }
    ],
    [
      {
        "id": "s3-q4-0",
        "type": "croissant"
      },
      {
        "id": "s3-q4-1",
        "type": "croissant"
      },
      {
        "id": "s3-q4-2",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q4-3",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q4-4",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q4-5",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q4-6",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-7",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q4-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q4-10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q4-11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q4-12",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q4-13",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q4-14",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s3-q5-0",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q5-1",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q5-2",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q5-3",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q5-4",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q5-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q5-6",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q5-7",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q5-8",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q5-9",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q5-10",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q5-11",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q5-12",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q5-13",
        "type": "vanillaIceCream"
      }
    ],
    [
      {
        "id": "s3-q6-0",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-1",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-2",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-3",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q6-4",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q6-5",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q6-6",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q6-7",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q6-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q6-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q6-10",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-11",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-12",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-13",
        "type": "blueberryTart"
      }
    ],
    [
      {
        "id": "s3-q7-0",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q7-1",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q7-2",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q7-3",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q7-4",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q7-5",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q7-6",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q7-7",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q7-8",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q7-9",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q7-10",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-11",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q7-12",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q7-13",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q7-14",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q7-15",
        "type": "blueberryTart"
      }
    ]
  ],
  "orders": [
    {
      "id": "s3-o1",
      "sequence": 1,
      "items": {
        "chocolateIceCream": 5,
        "matchaCroffle": 2,
        "blueberryCupcake": 4
      }
    },
    {
      "id": "s3-o2",
      "sequence": 2,
      "items": {
        "croissant": 4,
        "blueberryCupcake": 2,
        "blueberryTart": 4
      }
    },
    {
      "id": "s3-o3",
      "sequence": 3,
      "items": {
        "lemonMacaron": 2,
        "matchaPudding": 5,
        "chocolateCookie": 3
      }
    },
    {
      "id": "s3-o4",
      "sequence": 4,
      "items": {
        "cinnamonCroffle": 3,
        "strawberryTart": 5,
        "lemonMacaron": 2
      }
    },
    {
      "id": "s3-o5",
      "sequence": 5,
      "items": {
        "chocolateCookie": 4,
        "croissant": 2,
        "blueberryTart": 2
      }
    },
    {
      "id": "s3-o6",
      "sequence": 6,
      "items": {
        "blueberryTart": 5,
        "chocolateIceCream": 3,
        "chocolateCupcake": 2
      }
    },
    {
      "id": "s3-o7",
      "sequence": 7,
      "items": {
        "matchaPudding": 5,
        "blueberryTart": 3,
        "matchaCroffle": 3
      }
    },
    {
      "id": "s3-o8",
      "sequence": 8,
      "items": {
        "chocolateCupcake": 2,
        "chocolateCookie": 5,
        "cinnamonCroffle": 4
      }
    },
    {
      "id": "s3-o9",
      "sequence": 9,
      "items": {
        "raspberryMacaron": 3,
        "blueberryTart": 2,
        "chocolateCake": 5
      }
    },
    {
      "id": "s3-o10",
      "sequence": 10,
      "items": {
        "strawberryTart": 2,
        "lemonMacaron": 4,
        "blueberryCupcake": 5
      }
    },
    {
      "id": "s3-o11",
      "sequence": 11,
      "items": {
        "chocolateCake": 2,
        "vanillaIceCream": 2,
        "lemonMacaron": 4
      }
    },
    {
      "id": "s3-o12",
      "sequence": 12,
      "items": {
        "vanillaIceCream": 3,
        "blueberryTart": 3,
        "chocolateCake": 4
      }
    }
  ]
};
