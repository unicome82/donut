import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage04: StageDefinition = {
  "id": 4,
  "difficulty": "normal",
  "revision": 13,
  "donutTypes": [
    "croissant",
    "chocolateCake",
    "chocolateCroissant",
    "chocolateIceCream",
    "blueberryTart",
    "cinnamonCroffle",
    "matchaCroffle",
    "raspberryMacaron",
    "chocolateCookie",
    "chocolateCupcake",
    "berryScone",
    "whiteCookie",
    "vanillaIceCream",
    "strawberryTart"
  ],
  "targetOrders": 15,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.normal,
  "queues": [
    [
      {
        "id": "s4-q0-0",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q0-1",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q0-2",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q0-3",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q0-4",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q0-5",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q0-6",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q0-7",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q0-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q0-9",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q0-10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q0-11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q0-12",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q0-13",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-14",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-15",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-16",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-17",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-18",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q0-19",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q0-20",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q0-21",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q0-22",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q0-23",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q0-24",
        "type": "strawberryTart"
      }
    ],
    [
      {
        "id": "s4-q1-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q1-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q1-2",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q1-3",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q1-4",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q1-5",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q1-6",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q1-7",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q1-8",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q1-9",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q1-10",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q1-11",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-12",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-13",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-14",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-15",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-16",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q1-17",
        "type": "croissant"
      },
      {
        "id": "s4-q1-18",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q1-19",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q1-20",
        "type": "chocolateCookie"
      }
    ],
    [
      {
        "id": "s4-q2-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q2-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q2-2",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q2-3",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q2-4",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q2-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q2-6",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q2-7",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q2-8",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q2-9",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q2-10",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q2-11",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q2-12",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q2-13",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q2-14",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q2-15",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q2-16",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q2-17",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q2-18",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q2-19",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q2-20",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q2-21",
        "type": "whiteCookie"
      }
    ],
    [
      {
        "id": "s4-q3-0",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q3-1",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q3-2",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q3-3",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q3-4",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q3-5",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q3-6",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q3-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q3-8",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q3-9",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q3-10",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q3-11",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q3-12",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q3-13",
        "type": "cinnamonCroffle"
      }
    ],
    [
      {
        "id": "s4-q4-0",
        "type": "berryScone"
      },
      {
        "id": "s4-q4-1",
        "type": "croissant"
      },
      {
        "id": "s4-q4-2",
        "type": "croissant"
      },
      {
        "id": "s4-q4-3",
        "type": "croissant"
      },
      {
        "id": "s4-q4-4",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q4-5",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q4-6",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q4-7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q4-8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q4-9",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q4-10",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q4-11",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q4-12",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q4-13",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q4-14",
        "type": "matchaCroffle"
      },
      {
        "id": "s4-q4-15",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q4-16",
        "type": "chocolateCake"
      },
      {
        "id": "s4-q4-17",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q4-18",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q4-19",
        "type": "vanillaIceCream"
      }
    ],
    [
      {
        "id": "s4-q5-0",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q5-1",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q5-2",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q5-3",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q5-4",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q5-5",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q5-6",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q5-7",
        "type": "berryScone"
      },
      {
        "id": "s4-q5-8",
        "type": "berryScone"
      },
      {
        "id": "s4-q5-9",
        "type": "berryScone"
      },
      {
        "id": "s4-q5-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q5-11",
        "type": "chocolateIceCream"
      },
      {
        "id": "s4-q5-12",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q5-13",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q5-14",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q5-15",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q5-16",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q5-17",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q5-18",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q5-19",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q5-20",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q5-21",
        "type": "cinnamonCroffle"
      }
    ],
    [
      {
        "id": "s4-q6-0",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q6-1",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q6-2",
        "type": "vanillaIceCream"
      },
      {
        "id": "s4-q6-3",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q6-4",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q6-5",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q6-6",
        "type": "chocolateCupcake"
      },
      {
        "id": "s4-q6-7",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-8",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-9",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-10",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-11",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-12",
        "type": "raspberryMacaron"
      },
      {
        "id": "s4-q6-13",
        "type": "strawberryTart"
      },
      {
        "id": "s4-q6-14",
        "type": "croissant"
      },
      {
        "id": "s4-q6-15",
        "type": "croissant"
      },
      {
        "id": "s4-q6-16",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "s4-q7-0",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q7-1",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q7-2",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q7-3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q7-4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q7-5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q7-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q7-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q7-8",
        "type": "chocolateCookie"
      },
      {
        "id": "s4-q7-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s4-q7-10",
        "type": "berryScone"
      },
      {
        "id": "s4-q7-11",
        "type": "berryScone"
      },
      {
        "id": "s4-q7-12",
        "type": "berryScone"
      },
      {
        "id": "s4-q7-13",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q7-14",
        "type": "blueberryTart"
      },
      {
        "id": "s4-q7-15",
        "type": "chocolateCroissant"
      },
      {
        "id": "s4-q7-16",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q7-17",
        "type": "whiteCookie"
      },
      {
        "id": "s4-q7-18",
        "type": "whiteCookie"
      }
    ]
  ],
  "orders": [
    {
      "id": "s4-o1",
      "sequence": 1,
      "items": {
        "croissant": 3,
        "vanillaIceCream": 4,
        "chocolateCupcake": 5
      }
    },
    {
      "id": "s4-o2",
      "sequence": 2,
      "items": {
        "chocolateCake": 4,
        "strawberryTart": 3,
        "whiteCookie": 3
      }
    },
    {
      "id": "s4-o3",
      "sequence": 3,
      "items": {
        "chocolateCroissant": 4,
        "blueberryTart": 2,
        "vanillaIceCream": 4
      }
    },
    {
      "id": "s4-o4",
      "sequence": 4,
      "items": {
        "chocolateIceCream": 5,
        "berryScone": 4,
        "matchaCroffle": 4
      }
    },
    {
      "id": "s4-o5",
      "sequence": 5,
      "items": {
        "blueberryTart": 3,
        "strawberryTart": 5,
        "chocolateIceCream": 5
      }
    },
    {
      "id": "s4-o6",
      "sequence": 6,
      "items": {
        "cinnamonCroffle": 5,
        "chocolateCookie": 3,
        "whiteCookie": 5
      }
    },
    {
      "id": "s4-o7",
      "sequence": 7,
      "items": {
        "matchaCroffle": 4,
        "chocolateCroissant": 4,
        "cinnamonCroffle": 4
      }
    },
    {
      "id": "s4-o8",
      "sequence": 8,
      "items": {
        "raspberryMacaron": 3,
        "chocolateCookie": 4,
        "blueberryTart": 2
      }
    },
    {
      "id": "s4-o9",
      "sequence": 9,
      "items": {
        "chocolateCookie": 4,
        "matchaCroffle": 2,
        "whiteCookie": 3
      }
    },
    {
      "id": "s4-o10",
      "sequence": 10,
      "items": {
        "chocolateCupcake": 3,
        "strawberryTart": 2,
        "raspberryMacaron": 4
      }
    },
    {
      "id": "s4-o11",
      "sequence": 11,
      "items": {
        "berryScone": 3,
        "chocolateIceCream": 2,
        "chocolateCupcake": 3
      }
    },
    {
      "id": "s4-o12",
      "sequence": 12,
      "items": {
        "whiteCookie": 3,
        "chocolateCookie": 2,
        "raspberryMacaron": 5
      }
    },
    {
      "id": "s4-extra-o13",
      "sequence": 13,
      "items": {
        "strawberryTart": 4,
        "whiteCookie": 4,
        "vanillaIceCream": 3
      }
    },
    {
      "id": "s4-extra-o14",
      "sequence": 14,
      "items": {
        "croissant": 4,
        "cinnamonCroffle": 4,
        "chocolateCookie": 3
      }
    },
    {
      "id": "s4-extra-o15",
      "sequence": 15,
      "items": {
        "chocolateCake": 4,
        "chocolateCookie": 3,
        "matchaCroffle": 3
      }
    }
  ]
};
