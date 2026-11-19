import { TRAY_CAPACITY_BY_DIFFICULTY } from '../trayCapacity';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage05: StageDefinition = {
  "id": 5,
  "difficulty": "hard",
  "revision": 14,
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
  "targetOrders": 19,
  "trayCapacity": TRAY_CAPACITY_BY_DIFFICULTY.hard,
  "queues": [
    [
      {
        "id": "s5-q0-0",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-1",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-2",
        "type": "coconut"
      },
      {
        "id": "s5-q0-3",
        "type": "coconut"
      },
      {
        "id": "s5-q0-4",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-5",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-6",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q0-7",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q0-8",
        "type": "croissant"
      },
      {
        "id": "s5-q0-9",
        "type": "croissant"
      },
      {
        "id": "s5-q0-10",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q0-11",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q0-12",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q0-13",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q0-14",
        "type": "cake"
      },
      {
        "id": "s5-q0-15",
        "type": "cake"
      },
      {
        "id": "s5-q0-16",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q0-17",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q0-18",
        "type": "caramel"
      },
      {
        "id": "s5-q0-19",
        "type": "caramel"
      },
      {
        "id": "s5-q0-20",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-21",
        "type": "caramel"
      },
      {
        "id": "s5-q0-22",
        "type": "caramel"
      },
      {
        "id": "s5-q0-23",
        "type": "chocolate"
      },
      {
        "id": "s5-q0-24",
        "type": "chocolate"
      },
      {
        "id": "s5-q0-25",
        "type": "croissant"
      }
    ],
    [
      {
        "id": "s5-q1-0",
        "type": "coconut"
      },
      {
        "id": "s5-q1-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q1-2",
        "type": "cake"
      },
      {
        "id": "s5-q1-3",
        "type": "blueberry"
      },
      {
        "id": "s5-q1-4",
        "type": "blueberry"
      },
      {
        "id": "s5-q1-5",
        "type": "blueberry"
      },
      {
        "id": "s5-q1-6",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q1-7",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q1-8",
        "type": "cake"
      },
      {
        "id": "s5-q1-9",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-10",
        "type": "berryScone"
      },
      {
        "id": "s5-q1-11",
        "type": "berryScone"
      },
      {
        "id": "s5-q1-12",
        "type": "pudding"
      },
      {
        "id": "s5-q1-13",
        "type": "pudding"
      },
      {
        "id": "s5-q1-14",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q1-15",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q1-16",
        "type": "chocolate"
      },
      {
        "id": "s5-q1-17",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q1-18",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q1-19",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q1-20",
        "type": "chocolateCookie"
      }
    ],
    [
      {
        "id": "s5-q2-0",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q2-1",
        "type": "pudding"
      },
      {
        "id": "s5-q2-2",
        "type": "pudding"
      },
      {
        "id": "s5-q2-3",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q2-4",
        "type": "croissant"
      },
      {
        "id": "s5-q2-5",
        "type": "croissant"
      },
      {
        "id": "s5-q2-6",
        "type": "matcha"
      },
      {
        "id": "s5-q2-7",
        "type": "matcha"
      },
      {
        "id": "s5-q2-8",
        "type": "cake"
      },
      {
        "id": "s5-q2-9",
        "type": "cake"
      },
      {
        "id": "s5-q2-10",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q2-11",
        "type": "whiteCookie"
      },
      {
        "id": "s5-q2-12",
        "type": "caramel"
      },
      {
        "id": "s5-q2-13",
        "type": "caramel"
      },
      {
        "id": "s5-q2-14",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q2-15",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q2-16",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q2-17",
        "type": "caramel"
      },
      {
        "id": "s5-q2-18",
        "type": "caramel"
      },
      {
        "id": "s5-q2-19",
        "type": "caramel"
      },
      {
        "id": "s5-q2-20",
        "type": "caramel"
      },
      {
        "id": "s5-q2-21",
        "type": "matcha"
      },
      {
        "id": "s5-q2-22",
        "type": "matcha"
      },
      {
        "id": "s5-q2-23",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s5-q3-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-2",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-3",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-4",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-6",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q3-7",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q3-8",
        "type": "vanilla"
      },
      {
        "id": "s5-q3-9",
        "type": "vanilla"
      },
      {
        "id": "s5-q3-10",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-11",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-12",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q3-13",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q3-14",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q3-15",
        "type": "chocolate"
      },
      {
        "id": "s5-q3-16",
        "type": "chocolate"
      },
      {
        "id": "s5-q3-17",
        "type": "vanillaIceCream"
      },
      {
        "id": "s5-q3-18",
        "type": "vanillaIceCream"
      },
      {
        "id": "s5-q3-19",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q3-20",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q3-21",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q3-22",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-23",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-24",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q3-25",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q3-26",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q3-27",
        "type": "strawberryTart"
      }
    ],
    [
      {
        "id": "s5-q4-0",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q4-1",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-2",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-3",
        "type": "coconut"
      },
      {
        "id": "s5-q4-4",
        "type": "coconut"
      },
      {
        "id": "s5-q4-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q4-6",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q4-7",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-8",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-9",
        "type": "matchaScone"
      },
      {
        "id": "s5-q4-10",
        "type": "orange"
      },
      {
        "id": "s5-q4-11",
        "type": "orange"
      },
      {
        "id": "s5-q4-12",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-13",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-14",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-15",
        "type": "berryScone"
      },
      {
        "id": "s5-q4-16",
        "type": "berryScone"
      },
      {
        "id": "s5-q4-17",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-18",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q4-19",
        "type": "coffee"
      },
      {
        "id": "s5-q4-20",
        "type": "coffee"
      },
      {
        "id": "s5-q4-21",
        "type": "matcha"
      },
      {
        "id": "s5-q4-22",
        "type": "matcha"
      },
      {
        "id": "s5-q4-23",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q4-24",
        "type": "chocolateCupcake"
      }
    ],
    [
      {
        "id": "s5-q5-0",
        "type": "blueberry"
      },
      {
        "id": "s5-q5-1",
        "type": "blueberry"
      },
      {
        "id": "s5-q5-2",
        "type": "cake"
      },
      {
        "id": "s5-q5-3",
        "type": "cake"
      },
      {
        "id": "s5-q5-4",
        "type": "matcha"
      },
      {
        "id": "s5-q5-5",
        "type": "matcha"
      },
      {
        "id": "s5-q5-6",
        "type": "matchaScone"
      },
      {
        "id": "s5-q5-7",
        "type": "matchaScone"
      },
      {
        "id": "s5-q5-8",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q5-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q5-10",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q5-11",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q5-12",
        "type": "pudding"
      },
      {
        "id": "s5-q5-13",
        "type": "pudding"
      },
      {
        "id": "s5-q5-14",
        "type": "orange"
      },
      {
        "id": "s5-q5-15",
        "type": "orange"
      },
      {
        "id": "s5-q5-16",
        "type": "caramel"
      },
      {
        "id": "s5-q5-17",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-18",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-19",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q5-20",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q5-21",
        "type": "chocolate"
      },
      {
        "id": "s5-q5-22",
        "type": "chocolate"
      },
      {
        "id": "s5-q5-23",
        "type": "strawberry"
      },
      {
        "id": "s5-q5-24",
        "type": "chocolate"
      }
    ],
    [
      {
        "id": "s5-q6-0",
        "type": "matcha"
      },
      {
        "id": "s5-q6-1",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q6-2",
        "type": "pudding"
      },
      {
        "id": "s5-q6-3",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q6-4",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q6-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q6-6",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-7",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-8",
        "type": "strawberry"
      },
      {
        "id": "s5-q6-9",
        "type": "strawberry"
      },
      {
        "id": "s5-q6-10",
        "type": "lemon"
      },
      {
        "id": "s5-q6-11",
        "type": "lemon"
      },
      {
        "id": "s5-q6-12",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-13",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-14",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-15",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-16",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-17",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-18",
        "type": "cake"
      },
      {
        "id": "s5-q6-19",
        "type": "cake"
      },
      {
        "id": "s5-q6-20",
        "type": "strawberry"
      },
      {
        "id": "s5-q6-21",
        "type": "strawberry"
      },
      {
        "id": "s5-q6-22",
        "type": "matchaPudding"
      },
      {
        "id": "s5-q6-23",
        "type": "matchaPudding"
      }
    ],
    [
      {
        "id": "s5-q7-0",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q7-1",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q7-2",
        "type": "vanilla"
      },
      {
        "id": "s5-q7-3",
        "type": "cake"
      },
      {
        "id": "s5-q7-4",
        "type": "cake"
      },
      {
        "id": "s5-q7-5",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q7-6",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q7-7",
        "type": "vanilla"
      },
      {
        "id": "s5-q7-8",
        "type": "vanilla"
      },
      {
        "id": "s5-q7-9",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q7-10",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q7-11",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q7-12",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q7-13",
        "type": "cake"
      },
      {
        "id": "s5-q7-14",
        "type": "pudding"
      },
      {
        "id": "s5-q7-15",
        "type": "strawberry"
      },
      {
        "id": "s5-q7-16",
        "type": "strawberry"
      },
      {
        "id": "s5-q7-17",
        "type": "raspberry"
      },
      {
        "id": "s5-q7-18",
        "type": "raspberry"
      },
      {
        "id": "s5-q7-19",
        "type": "cake"
      },
      {
        "id": "s5-q7-20",
        "type": "cake"
      },
      {
        "id": "s5-q7-21",
        "type": "caramel"
      },
      {
        "id": "s5-q7-22",
        "type": "caramel"
      },
      {
        "id": "s5-q7-23",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-24",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-25",
        "type": "croissant"
      },
      {
        "id": "s5-q7-26",
        "type": "croissant"
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
    },
    {
      "id": "s5-extra-o16",
      "sequence": 16,
      "items": {
        "matcha": 4,
        "croissant": 3,
        "strawberry": 3
      }
    },
    {
      "id": "s5-extra-o17",
      "sequence": 17,
      "items": {
        "cake": 4,
        "chocolateCupcake": 3,
        "chocolateCookie": 3
      }
    },
    {
      "id": "s5-extra-o18",
      "sequence": 18,
      "items": {
        "caramel": 4,
        "chocolateCake": 3,
        "chocolate": 3
      }
    },
    {
      "id": "s5-extra-o19",
      "sequence": 19,
      "items": {
        "strawberryTart": 4,
        "matchaPudding": 3,
        "chocolateCake": 3
      }
    }
  ]
};
