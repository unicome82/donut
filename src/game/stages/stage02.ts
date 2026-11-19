import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage02: StageDefinition = {
  "id": 2,
  "difficulty": "normal",
  "revision": 11,
  "donutTypes": [
    "raspberryMacaron",
    "blueberryCupcake",
    "blueberryTart",
    "chocolateIceCream",
    "lemonMacaron",
    "matchaCroffle",
    "croissant",
    "pudding",
    "chocolateCookie",
    "matchaScone",
    "whiteCookie",
    "berryScone",
    "cake",
    "chocolateCroissant"
  ],
  "targetOrders": 12,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.normal,
  "queues": [
    [
      {
        "id": "s2-q0-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q0-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q0-2",
        "type": "croissant"
      },
      {
        "id": "s2-q0-3",
        "type": "croissant"
      },
      {
        "id": "s2-q0-4",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q0-5",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q0-6",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q0-7",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q0-8",
        "type": "matchaScone"
      },
      {
        "id": "s2-q0-9",
        "type": "matchaScone"
      },
      {
        "id": "s2-q0-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q0-11",
        "type": "matchaCroffle"
      },
      {
        "id": "s2-q0-12",
        "type": "matchaCroffle"
      },
      {
        "id": "s2-q0-13",
        "type": "pudding"
      },
      {
        "id": "s2-q0-14",
        "type": "pudding"
      },
      {
        "id": "s2-q0-15",
        "type": "raspberryMacaron"
      }
    ],
    [
      {
        "id": "s2-q1-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q1-1",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q1-2",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q1-3",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q1-4",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q1-5",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q1-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q1-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q1-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q1-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q1-10",
        "type": "matchaScone"
      },
      {
        "id": "s2-q1-11",
        "type": "matchaScone"
      },
      {
        "id": "s2-q1-12",
        "type": "berryScone"
      },
      {
        "id": "s2-q1-13",
        "type": "berryScone"
      },
      {
        "id": "s2-q1-14",
        "type": "croissant"
      },
      {
        "id": "s2-q1-15",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "s2-q2-0",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q2-1",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q2-2",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q2-3",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q2-4",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q2-5",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q2-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q2-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q2-8",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q2-9",
        "type": "croissant"
      },
      {
        "id": "s2-q2-10",
        "type": "croissant"
      },
      {
        "id": "s2-q2-11",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q2-12",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q2-13",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q2-14",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q2-15",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q2-16",
        "type": "whiteCookie"
      }
    ],
    [
      {
        "id": "s2-q3-0",
        "type": "berryScone"
      },
      {
        "id": "s2-q3-1",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q3-2",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q3-3",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q3-4",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q3-5",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q3-6",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q3-7",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q3-8",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q3-9",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q3-10",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q3-11",
        "type": "croissant"
      },
      {
        "id": "s2-q3-12",
        "type": "croissant"
      },
      {
        "id": "s2-q3-13",
        "type": "croissant"
      },
      {
        "id": "s2-q3-14",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q3-15",
        "type": "raspberryMacaron"
      }
    ],
    [
      {
        "id": "s2-q4-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q4-1",
        "type": "berryScone"
      },
      {
        "id": "s2-q4-2",
        "type": "berryScone"
      },
      {
        "id": "s2-q4-3",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q4-4",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q4-5",
        "type": "blueberryCupcake"
      },
      {
        "id": "s2-q4-6",
        "type": "blueberryCupcake"
      },
      {
        "id": "s2-q4-7",
        "type": "croissant"
      },
      {
        "id": "s2-q4-8",
        "type": "croissant"
      },
      {
        "id": "s2-q4-9",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q4-10",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q4-11",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q4-12",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q4-13",
        "type": "croissant"
      },
      {
        "id": "s2-q4-14",
        "type": "croissant"
      },
      {
        "id": "s2-q4-15",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q4-16",
        "type": "chocolateCookie"
      }
    ],
    [
      {
        "id": "s2-q5-0",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q5-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q5-2",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q5-3",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q5-4",
        "type": "matchaCroffle"
      },
      {
        "id": "s2-q5-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s2-q5-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q5-7",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q5-8",
        "type": "croissant"
      },
      {
        "id": "s2-q5-9",
        "type": "croissant"
      },
      {
        "id": "s2-q5-10",
        "type": "matchaScone"
      },
      {
        "id": "s2-q5-11",
        "type": "matchaScone"
      },
      {
        "id": "s2-q5-12",
        "type": "berryScone"
      },
      {
        "id": "s2-q5-13",
        "type": "berryScone"
      },
      {
        "id": "s2-q5-14",
        "type": "berryScone"
      }
    ],
    [
      {
        "id": "s2-q6-0",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q6-1",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q6-2",
        "type": "cake"
      },
      {
        "id": "s2-q6-3",
        "type": "cake"
      },
      {
        "id": "s2-q6-4",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q6-5",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q6-6",
        "type": "berryScone"
      },
      {
        "id": "s2-q6-7",
        "type": "berryScone"
      },
      {
        "id": "s2-q6-8",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q6-9",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q6-10",
        "type": "matchaCroffle"
      },
      {
        "id": "s2-q6-11",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q6-12",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q6-13",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q6-14",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q6-15",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "s2-q7-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q7-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s2-q7-2",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q7-3",
        "type": "lemonMacaron"
      },
      {
        "id": "s2-q7-4",
        "type": "blueberryCupcake"
      },
      {
        "id": "s2-q7-5",
        "type": "blueberryCupcake"
      },
      {
        "id": "s2-q7-6",
        "type": "blueberryTart"
      },
      {
        "id": "s2-q7-7",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q7-8",
        "type": "raspberryMacaron"
      },
      {
        "id": "s2-q7-9",
        "type": "chocolateCroissant"
      },
      {
        "id": "s2-q7-10",
        "type": "chocolateCookie"
      },
      {
        "id": "s2-q7-11",
        "type": "croissant"
      },
      {
        "id": "s2-q7-12",
        "type": "whiteCookie"
      },
      {
        "id": "s2-q7-13",
        "type": "whiteCookie"
      }
    ]
  ],
  "orders": [
    {
      "id": "s2-o1",
      "sequence": 1,
      "items": {
        "raspberryMacaron": 5,
        "cake": 2,
        "whiteCookie": 4
      }
    },
    {
      "id": "s2-o2",
      "sequence": 2,
      "items": {
        "blueberryCupcake": 4,
        "chocolateCroissant": 3,
        "chocolateCookie": 5
      }
    },
    {
      "id": "s2-o3",
      "sequence": 3,
      "items": {
        "blueberryTart": 5,
        "chocolateCookie": 4,
        "croissant": 2
      }
    },
    {
      "id": "s2-o4",
      "sequence": 4,
      "items": {
        "chocolateIceCream": 3,
        "raspberryMacaron": 3,
        "chocolateCroissant": 3
      }
    },
    {
      "id": "s2-o5",
      "sequence": 5,
      "items": {
        "lemonMacaron": 4,
        "raspberryMacaron": 2,
        "berryScone": 5
      }
    },
    {
      "id": "s2-o6",
      "sequence": 6,
      "items": {
        "matchaCroffle": 3,
        "blueberryTart": 2,
        "raspberryMacaron": 4
      }
    },
    {
      "id": "s2-o7",
      "sequence": 7,
      "items": {
        "croissant": 5,
        "chocolateIceCream": 3,
        "matchaCroffle": 2
      }
    },
    {
      "id": "s2-o8",
      "sequence": 8,
      "items": {
        "pudding": 2,
        "croissant": 5,
        "matchaScone": 2
      }
    },
    {
      "id": "s2-o9",
      "sequence": 9,
      "items": {
        "chocolateCookie": 4,
        "lemonMacaron": 2,
        "blueberryTart": 2
      }
    },
    {
      "id": "s2-o10",
      "sequence": 10,
      "items": {
        "matchaScone": 4,
        "chocolateCookie": 5,
        "chocolateCroissant": 5
      }
    },
    {
      "id": "s2-o11",
      "sequence": 11,
      "items": {
        "whiteCookie": 4,
        "raspberryMacaron": 4,
        "croissant": 5
      }
    },
    {
      "id": "s2-o12",
      "sequence": 12,
      "items": {
        "berryScone": 5,
        "chocolateCookie": 2,
        "raspberryMacaron": 3
      }
    }
  ]
};
