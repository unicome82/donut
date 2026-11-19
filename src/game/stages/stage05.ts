import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage05: StageDefinition = {
  "id": 5,
  "difficulty": "hard",
  "revision": 13,
  "donutTypes": [
    "matchaCroffle",
    "chocolateCupcake",
    "croissant",
    "blueberryTart",
    "pudding",
    "chocolateIceCream",
    "matchaScone",
    "chocolateCake",
    "strawberry",
    "raspberry",
    "blueberryCupcake",
    "strawberryTart",
    "berryScone",
    "sprinkle",
    "caramel",
    "chocolateCookie",
    "coconut",
    "matchaPudding",
    "blueberry",
    "chocolateCroissant",
    "vanilla",
    "matcha",
    "vanillaIceCream",
    "orange",
    "chocolate",
    "cake",
    "lemon",
    "cinnamonCroffle",
    "whiteCookie",
    "coffee"
  ],
  "targetOrders": 15,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.hard,
  "queues": [
    [
      {
        "id": "s5-q0-0",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q0-1",
        "type": "cake"
      },
      {
        "id": "s5-q0-2",
        "type": "blueberry"
      },
      {
        "id": "s5-q0-3",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q0-4",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q0-5",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q0-6",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-7",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-8",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q0-9",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-10",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-11",
        "type": "pudding"
      },
      {
        "id": "s5-q0-12",
        "type": "cake"
      },
      {
        "id": "s5-q0-13",
        "type": "raspberry"
      },
      {
        "id": "s5-q0-14",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q0-15",
        "type": "orange"
      },
      {
        "id": "s5-q0-16",
        "type": "raspberry"
      },
      {
        "id": "s5-q0-17",
        "type": "orange"
      },
      {
        "id": "s5-q0-18",
        "type": "chocolate"
      },
      {
        "id": "s5-q0-19",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "s5-q1-0",
        "type": "coconut"
      },
      {
        "id": "s5-q1-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-2",
        "type": "cake"
      },
      {
        "id": "s5-q1-3",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-4",
        "type": "matcha"
      },
      {
        "id": "s5-q1-5",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q1-6",
        "type": "coconut"
      },
      {
        "id": "s5-q1-7",
        "type": "vanilla"
      },
      {
        "id": "s5-q1-8",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q1-10",
        "type": "lemon"
      },
      {
        "id": "s5-q1-11",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q1-12",
        "type": "caramel"
      },
      {
        "id": "s5-q1-13",
        "type": "lemon"
      },
      {
        "id": "s5-q1-14",
        "type": "caramel"
      },
      {
        "id": "s5-q1-15",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q1-16",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-17",
        "type": "orange"
      },
      {
        "id": "s5-q1-18",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q1-19",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "s5-q2-0",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q2-2",
        "type": "pudding"
      },
      {
        "id": "s5-q2-3",
        "type": "matchaScone"
      },
      {
        "id": "s5-q2-4",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q2-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q2-6",
        "type": "matcha"
      },
      {
        "id": "s5-q2-7",
        "type": "blueberry"
      },
      {
        "id": "s5-q2-8",
        "type": "matchaScone"
      },
      {
        "id": "s5-q2-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q2-10",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q2-11",
        "type": "strawberry"
      },
      {
        "id": "s5-q2-12",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q2-13",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q2-14",
        "type": "caramel"
      },
      {
        "id": "s5-q2-15",
        "type": "strawberry"
      },
      {
        "id": "s5-q2-16",
        "type": "strawberry"
      },
      {
        "id": "s5-q2-17",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q2-18",
        "type": "coffee"
      },
      {
        "id": "s5-q2-19",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "s5-q3-0",
        "type": "matchaScone"
      },
      {
        "id": "s5-q3-1",
        "type": "coconut"
      },
      {
        "id": "s5-q3-2",
        "type": "cake"
      },
      {
        "id": "s5-q3-3",
        "type": "coconut"
      },
      {
        "id": "s5-q3-4",
        "type": "cake"
      },
      {
        "id": "s5-q3-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-6",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-7",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-8",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-9",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q3-10",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-11",
        "type": "cake"
      },
      {
        "id": "s5-q3-12",
        "type": "vanillaIceCream"
      },
      {
        "id": "s5-q3-13",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q3-14",
        "type": "sprinkle"
      },
      {
        "id": "s5-q3-15",
        "type": "pudding"
      },
      {
        "id": "s5-q3-16",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q3-17",
        "type": "berryScone"
      },
      {
        "id": "s5-q3-18",
        "type": "chocolate"
      },
      {
        "id": "s5-q3-19",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "s5-q4-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q4-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-2",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q4-3",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-4",
        "type": "croissant"
      },
      {
        "id": "s5-q4-5",
        "type": "matcha"
      },
      {
        "id": "s5-q4-6",
        "type": "croissant"
      },
      {
        "id": "s5-q4-7",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q4-8",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-9",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q4-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-11",
        "type": "cake"
      },
      {
        "id": "s5-q4-12",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q4-13",
        "type": "cake"
      },
      {
        "id": "s5-q4-14",
        "type": "pudding"
      },
      {
        "id": "s5-q4-15",
        "type": "caramel"
      },
      {
        "id": "s5-q4-16",
        "type": "pudding"
      },
      {
        "id": "s5-q4-17",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q4-18",
        "type": "chocolate"
      },
      {
        "id": "s5-q4-19",
        "type": "caramel"
      }
    ],
    [
      {
        "id": "s5-q5-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q5-1",
        "type": "cake"
      },
      {
        "id": "s5-q5-2",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q5-3",
        "type": "vanilla"
      },
      {
        "id": "s5-q5-4",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-5",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-6",
        "type": "blueberry"
      },
      {
        "id": "s5-q5-7",
        "type": "vanilla"
      },
      {
        "id": "s5-q5-8",
        "type": "matcha"
      },
      {
        "id": "s5-q5-9",
        "type": "pudding"
      },
      {
        "id": "s5-q5-10",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-11",
        "type": "vanillaIceCream"
      },
      {
        "id": "s5-q5-12",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q5-13",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q5-14",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q5-15",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-16",
        "type": "berryScone"
      },
      {
        "id": "s5-q5-17",
        "type": "berryScone"
      },
      {
        "id": "s5-q5-18",
        "type": "chocolate"
      },
      {
        "id": "s5-q5-19",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "s5-q6-0",
        "type": "coconut"
      },
      {
        "id": "s5-q6-1",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q6-2",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q6-3",
        "type": "vanilla"
      },
      {
        "id": "s5-q6-4",
        "type": "croissant"
      },
      {
        "id": "s5-q6-5",
        "type": "blueberry"
      },
      {
        "id": "s5-q6-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q6-7",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q6-8",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q6-9",
        "type": "matcha"
      },
      {
        "id": "s5-q6-10",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-11",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q6-12",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q6-13",
        "type": "caramel"
      },
      {
        "id": "s5-q6-14",
        "type": "cake"
      },
      {
        "id": "s5-q6-15",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q6-16",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q6-17",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-18",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q6-19",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "s5-q7-0",
        "type": "blueberry"
      },
      {
        "id": "s5-q7-1",
        "type": "croissant"
      },
      {
        "id": "s5-q7-2",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-3",
        "type": "pudding"
      },
      {
        "id": "s5-q7-4",
        "type": "vanilla"
      },
      {
        "id": "s5-q7-5",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q7-6",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q7-7",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q7-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-10",
        "type": "strawberry"
      },
      {
        "id": "s5-q7-11",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q7-12",
        "type": "orange"
      },
      {
        "id": "s5-q7-13",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q7-14",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q7-15",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-16",
        "type": "berryScone"
      },
      {
        "id": "s5-q7-17",
        "type": "pudding"
      },
      {
        "id": "s5-q7-18",
        "type": "cake"
      },
      {
        "id": "s5-q7-19",
        "type": "coffee"
      }
    ]
  ],
  "orders": [
    {
      "id": "s5-o1",
      "sequence": 1,
      "items": {
        "matchaCroffle": 2,
        "chocolateCookie": 5,
        "chocolateCroissant": 4
      }
    },
    {
      "id": "s5-o2",
      "sequence": 2,
      "items": {
        "chocolateCupcake": 2,
        "coconut": 5,
        "cake": 5
      }
    },
    {
      "id": "s5-o3",
      "sequence": 3,
      "items": {
        "croissant": 4,
        "matchaPudding": 5,
        "matchaScone": 4
      }
    },
    {
      "id": "s5-o4",
      "sequence": 4,
      "items": {
        "blueberryTart": 3,
        "blueberry": 5,
        "vanilla": 2
      }
    },
    {
      "id": "s5-o5",
      "sequence": 5,
      "items": {
        "pudding": 3,
        "chocolateCroissant": 4,
        "chocolateIceCream": 3
      }
    },
    {
      "id": "s5-o6",
      "sequence": 6,
      "items": {
        "chocolateIceCream": 3,
        "vanilla": 5,
        "chocolateCroissant": 3
      }
    },
    {
      "id": "s5-o7",
      "sequence": 7,
      "items": {
        "matchaScone": 3,
        "matcha": 5,
        "chocolateCake": 4
      }
    },
    {
      "id": "s5-o8",
      "sequence": 8,
      "items": {
        "chocolateCake": 4,
        "vanillaIceCream": 2,
        "chocolateIceCream": 5
      }
    },
    {
      "id": "s5-o9",
      "sequence": 9,
      "items": {
        "strawberry": 4,
        "orange": 4,
        "chocolateCroissant": 2
      }
    },
    {
      "id": "s5-o10",
      "sequence": 10,
      "items": {
        "raspberry": 2,
        "chocolate": 2,
        "pudding": 5
      }
    },
    {
      "id": "s5-o11",
      "sequence": 11,
      "items": {
        "blueberryCupcake": 3,
        "cake": 3,
        "caramel": 5
      }
    },
    {
      "id": "s5-o12",
      "sequence": 12,
      "items": {
        "strawberryTart": 3,
        "lemon": 2,
        "chocolateIceCream": 4
      }
    },
    {
      "id": "s5-o13",
      "sequence": 13,
      "items": {
        "berryScone": 4,
        "cinnamonCroffle": 4,
        "cake": 3
      }
    },
    {
      "id": "s5-o14",
      "sequence": 14,
      "items": {
        "sprinkle": 3,
        "whiteCookie": 4,
        "matchaPudding": 2
      }
    },
    {
      "id": "s5-o15",
      "sequence": 15,
      "items": {
        "caramel": 4,
        "coffee": 2,
        "chocolate": 5
      }
    }
  ]
};
