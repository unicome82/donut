import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage03: StageDefinition = {
  "id": 3,
  "difficulty": "normal",
  "revision": 14,
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
    "blueberryCupcake",
    "matchaScone"
  ],
  "targetOrders": 16,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.normal,
  "queues": [
    [
      {
        "id": "s3-q0-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-1",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q0-2",
        "type": "lemonMacaron"
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
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-6",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q0-7",
        "type": "blueberryTart"
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
        "type": "chocolateCake"
      },
      {
        "id": "s3-q0-11",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q0-12",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q0-13",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-14",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q0-15",
        "type": "chocolateIceCream"
      }
    ],
    [
      {
        "id": "s3-q1-0",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-1",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-2",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-3",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-4",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-5",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-6",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-7",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-8",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q1-9",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-10",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-11",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-12",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q1-13",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-14",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q1-15",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q1-16",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q1-17",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q1-18",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-19",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q1-20",
        "type": "chocolateCookie"
      }
    ],
    [
      {
        "id": "s3-q2-0",
        "type": "croissant"
      },
      {
        "id": "s3-q2-1",
        "type": "croissant"
      },
      {
        "id": "s3-q2-2",
        "type": "croissant"
      },
      {
        "id": "s3-q2-3",
        "type": "croissant"
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
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q2-7",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q2-8",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q2-9",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q2-10",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q2-11",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q2-12",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q2-13",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q2-14",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q2-15",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q2-16",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q2-17",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q2-18",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q2-19",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q2-20",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-21",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q2-22",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s3-q3-0",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q3-1",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q3-2",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q3-3",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q3-4",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q3-5",
        "type": "chocolateIceCream"
      },
      {
        "id": "s3-q3-6",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q3-7",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q3-8",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q3-9",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q3-10",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-11",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-12",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-13",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q3-14",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q3-15",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q3-16",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q3-17",
        "type": "blueberryCupcake"
      }
    ],
    [
      {
        "id": "s3-q4-0",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q4-1",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-2",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-3",
        "type": "croissant"
      },
      {
        "id": "s3-q4-4",
        "type": "croissant"
      },
      {
        "id": "s3-q4-5",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q4-6",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q4-7",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q4-8",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q4-9",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q4-10",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q4-11",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q4-12",
        "type": "lemonMacaron"
      },
      {
        "id": "s3-q4-13",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q4-14",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q4-15",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q4-16",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-17",
        "type": "blueberryCupcake"
      },
      {
        "id": "s3-q4-18",
        "type": "blueberryCupcake"
      }
    ],
    [
      {
        "id": "s3-q5-0",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q5-1",
        "type": "chocolateCupcake"
      },
      {
        "id": "s3-q5-2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q5-3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q5-4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q5-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q5-6",
        "type": "matchaCroffle"
      },
      {
        "id": "s3-q5-7",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q5-8",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q5-9",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q5-10",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q5-11",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q5-12",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q5-13",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q5-14",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q5-15",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q5-16",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q5-17",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q5-18",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s3-q6-0",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-1",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-2",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-3",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-4",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-5",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s3-q6-8",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-9",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-10",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-11",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-12",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q6-13",
        "type": "chocolateCake"
      },
      {
        "id": "s3-q6-14",
        "type": "matchaScone"
      },
      {
        "id": "s3-q6-15",
        "type": "matchaScone"
      },
      {
        "id": "s3-q6-16",
        "type": "matchaScone"
      },
      {
        "id": "s3-q6-17",
        "type": "matchaScone"
      },
      {
        "id": "s3-q6-18",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-19",
        "type": "matchaPudding"
      },
      {
        "id": "s3-q6-20",
        "type": "matchaPudding"
      }
    ],
    [
      {
        "id": "s3-q7-0",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-1",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-2",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-3",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-4",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-5",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-6",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-7",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-8",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q7-9",
        "type": "strawberryTart"
      },
      {
        "id": "s3-q7-10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q7-11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q7-12",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q7-13",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s3-q7-14",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q7-15",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q7-16",
        "type": "raspberryMacaron"
      },
      {
        "id": "s3-q7-17",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q7-18",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q7-19",
        "type": "vanillaIceCream"
      },
      {
        "id": "s3-q7-20",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-21",
        "type": "blueberryTart"
      },
      {
        "id": "s3-q7-22",
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
    },
    {
      "id": "s3-extra-o13",
      "sequence": 13,
      "items": {
        "chocolateCake": 4,
        "blueberryTart": 3,
        "vanillaIceCream": 3
      }
    },
    {
      "id": "s3-extra-o14",
      "sequence": 14,
      "items": {
        "blueberryCupcake": 4,
        "blueberryTart": 3,
        "matchaPudding": 3
      }
    },
    {
      "id": "s3-extra-o15",
      "sequence": 15,
      "items": {
        "cinnamonCroffle": 4,
        "blueberryCupcake": 3,
        "chocolateIceCream": 3
      }
    },
    {
      "id": "s3-extra-o16",
      "sequence": 16,
      "items": {
        "chocolateCake": 3,
        "chocolateCookie": 3,
        "matchaScone": 4
      }
    }
  ]
};
