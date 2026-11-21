import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage01: StageDefinition = {
  "id": 1,
  "difficulty": "easy",
  "revision": 15,
  "donutTypes": [
    "croissant",
    "chocolateIceCream",
    "vanillaIceCream",
    "matchaCroffle",
    "blueberryCupcake",
    "cinnamonCroffle",
    "lemonMacaron",
    "strawberryTart",
    "hamSandwich",
    "chocolateDonut"
  ],
  "targetOrders": 11,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.easy,
  "queues": [
    [
      {
        "id": "s1-q0-0",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-1",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-2",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-3",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-4",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-5",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q0-6",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-7",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-11",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q0-12",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q0-13",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q0-14",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q0-15",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q0-16",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q0-17",
        "type": "chocolateDonut"
      },
      {
        "id": "s1-q0-18",
        "type": "chocolateDonut"
      },
      {
        "id": "s1-q0-19",
        "type": "chocolateDonut"
      },
      {
        "id": "s1-q0-20",
        "type": "chocolateDonut"
      },
      {
        "id": "s1-q0-21",
        "type": "chocolateDonut"
      },
      {
        "id": "s1-q0-22",
        "type": "chocolateDonut"
      }
    ],
    [
      {
        "id": "s1-q1-0",
        "type": "croissant"
      },
      {
        "id": "s1-q1-1",
        "type": "croissant"
      },
      {
        "id": "s1-q1-2",
        "type": "croissant"
      },
      {
        "id": "s1-q1-3",
        "type": "croissant"
      },
      {
        "id": "s1-q1-4",
        "type": "lemonMacaron"
      },
      {
        "id": "s1-q1-5",
        "type": "lemonMacaron"
      },
      {
        "id": "s1-q1-6",
        "type": "lemonMacaron"
      },
      {
        "id": "s1-q1-7",
        "type": "lemonMacaron"
      },
      {
        "id": "s1-q1-8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-12",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-13",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q1-14",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q1-15",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q1-16",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q1-17",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q1-18",
        "type": "strawberryTart"
      },
      {
        "id": "s1-q1-19",
        "type": "strawberryTart"
      }
    ],
    [
      {
        "id": "s1-q2-0",
        "type": "croissant"
      },
      {
        "id": "s1-q2-1",
        "type": "croissant"
      },
      {
        "id": "s1-q2-2",
        "type": "croissant"
      },
      {
        "id": "s1-q2-3",
        "type": "croissant"
      },
      {
        "id": "s1-q2-4",
        "type": "croissant"
      },
      {
        "id": "s1-q2-5",
        "type": "croissant"
      },
      {
        "id": "s1-q2-6",
        "type": "blueberryCupcake"
      },
      {
        "id": "s1-q2-7",
        "type": "blueberryCupcake"
      },
      {
        "id": "s1-q2-8",
        "type": "blueberryCupcake"
      },
      {
        "id": "s1-q2-9",
        "type": "blueberryCupcake"
      },
      {
        "id": "s1-q2-10",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q2-11",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q2-12",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q2-13",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q2-14",
        "type": "hamSandwich"
      },
      {
        "id": "s1-q2-15",
        "type": "hamSandwich"
      },
      {
        "id": "s1-q2-16",
        "type": "hamSandwich"
      },
      {
        "id": "s1-q2-17",
        "type": "hamSandwich"
      },
      {
        "id": "s1-q2-18",
        "type": "hamSandwich"
      },
      {
        "id": "s1-q2-19",
        "type": "hamSandwich"
      }
    ],
    [
      {
        "id": "s1-q3-0",
        "type": "croissant"
      },
      {
        "id": "s1-q3-1",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-2",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-3",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-6",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q3-9",
        "type": "hamSandwich"
      }
    ],
    [
      {
        "id": "s1-q4-0",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q4-1",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q4-2",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q4-3",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q4-4",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-6",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-8",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s1-q4-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q4-11",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q4-12",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q4-13",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q4-14",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q4-15",
        "type": "chocolateIceCream"
      }
    ],
    [
      {
        "id": "s1-q5-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q5-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q5-2",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q5-3",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-4",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-5",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-6",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-7",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-8",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q5-9",
        "type": "chocolateIceCream"
      }
    ],
    [
      {
        "id": "s1-q6-0",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q6-1",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q6-2",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q6-3",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q6-4",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q6-5",
        "type": "croissant"
      },
      {
        "id": "s1-q6-6",
        "type": "croissant"
      },
      {
        "id": "s1-q6-7",
        "type": "croissant"
      },
      {
        "id": "s1-q6-8",
        "type": "croissant"
      },
      {
        "id": "s1-q6-9",
        "type": "croissant"
      },
      {
        "id": "s1-q6-10",
        "type": "croissant"
      },
      {
        "id": "s1-q6-11",
        "type": "chocolateDonut"
      }
    ],
    [
      {
        "id": "s1-q7-0",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q7-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q7-2",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q7-3",
        "type": "chocolateIceCream"
      },
      {
        "id": "s1-q7-4",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q7-5",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q7-6",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q7-7",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q7-8",
        "type": "vanillaIceCream"
      },
      {
        "id": "s1-q7-9",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q7-10",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q7-11",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q7-12",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q7-13",
        "type": "matchaCroffle"
      },
      {
        "id": "s1-q7-14",
        "type": "matchaCroffle"
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
    },
    {
      "id": "s1-extra-o9",
      "sequence": 9,
      "items": {
        "chocolateIceCream": 7,
        "croissant": 6
      }
    },
    {
      "id": "s1-extra-o10",
      "sequence": 10,
      "items": {
        "strawberryTart": 6,
        "chocolateDonut": 7
      }
    },
    {
      "id": "s1-extra-o11",
      "sequence": 11,
      "items": {
        "matchaCroffle": 6,
        "hamSandwich": 7
      }
    }
  ]
};
