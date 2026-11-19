import { BASE_TRAY_CAPACITY } from '../constants';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage05: StageDefinition = {
  "id": 5,
  "difficulty": "hard",
  "donutTypes": [
    "pudding",
    "matcha",
    "lemon",
    "strawberryTart",
    "chocolateCupcake",
    "coconut",
    "vanilla",
    "blueberryTart",
    "whiteCookie",
    "coffee",
    "matchaScone",
    "croissant",
    "raspberryMacaron",
    "cake",
    "raspberry",
    "matchaCroffle",
    "strawberry",
    "chocolateIceCream",
    "caramel",
    "sesame",
    "blueberryCupcake",
    "chocolateCookie",
    "mint",
    "chocolate",
    "chocolateCroissant",
    "cinnamonCroffle",
    "blueberry",
    "lemonMacaron",
    "sprinkle",
    "chocolateCake"
  ],
  "targetOrders": 15,
  "trayCapacity": BASE_TRAY_CAPACITY,
  "queues": [
    [
      {
        "id": "s5-q0-0",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-1",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-2",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-3",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-4",
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q0-5",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q0-6",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q0-7",
        "type": "pudding"
      },
      {
        "id": "s5-q0-8",
        "type": "pudding"
      },
      {
        "id": "s5-q0-9",
        "type": "strawberry"
      },
      {
        "id": "s5-q0-10",
        "type": "strawberry"
      },
      {
        "id": "s5-q0-11",
        "type": "whiteCookie"
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
        "type": "vanilla"
      },
      {
        "id": "s5-q0-15",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-16",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-17",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-18",
        "type": "vanilla"
      },
      {
        "id": "s5-q0-19",
        "type": "sprinkle"
      },
      {
        "id": "s5-q0-20",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-21",
        "type": "sprinkle"
      },
      {
        "id": "s5-q0-22",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-23",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-24",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-25",
        "type": "sprinkle"
      },
      {
        "id": "s5-q0-26",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q0-27",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "s5-q1-0",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-1",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-2",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-3",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-4",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q1-5",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q1-6",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q1-7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q1-8",
        "type": "mint"
      },
      {
        "id": "s5-q1-9",
        "type": "mint"
      },
      {
        "id": "s5-q1-10",
        "type": "mint"
      },
      {
        "id": "s5-q1-11",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-12",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-13",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-14",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-15",
        "type": "matchaScone"
      },
      {
        "id": "s5-q1-16",
        "type": "pudding"
      },
      {
        "id": "s5-q1-17",
        "type": "pudding"
      },
      {
        "id": "s5-q1-18",
        "type": "pudding"
      },
      {
        "id": "s5-q1-19",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q1-20",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-21",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-22",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-23",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-24",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-25",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-26",
        "type": "sprinkle"
      },
      {
        "id": "s5-q1-27",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q1-28",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "s5-q2-0",
        "type": "coffee"
      },
      {
        "id": "s5-q2-1",
        "type": "coffee"
      },
      {
        "id": "s5-q2-2",
        "type": "coffee"
      },
      {
        "id": "s5-q2-3",
        "type": "coffee"
      },
      {
        "id": "s5-q2-4",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q2-5",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q2-6",
        "type": "chocolateCookie"
      },
      {
        "id": "s5-q2-7",
        "type": "pudding"
      },
      {
        "id": "s5-q2-8",
        "type": "pudding"
      },
      {
        "id": "s5-q2-9",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q2-10",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q2-11",
        "type": "cake"
      },
      {
        "id": "s5-q2-12",
        "type": "cake"
      },
      {
        "id": "s5-q2-13",
        "type": "cake"
      },
      {
        "id": "s5-q2-14",
        "type": "raspberry"
      },
      {
        "id": "s5-q2-15",
        "type": "raspberry"
      },
      {
        "id": "s5-q2-16",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-17",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-18",
        "type": "sprinkle"
      },
      {
        "id": "s5-q2-19",
        "type": "sprinkle"
      },
      {
        "id": "s5-q2-20",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-21",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-22",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-23",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q2-24",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "s5-q3-0",
        "type": "caramel"
      },
      {
        "id": "s5-q3-1",
        "type": "caramel"
      },
      {
        "id": "s5-q3-2",
        "type": "caramel"
      },
      {
        "id": "s5-q3-3",
        "type": "caramel"
      },
      {
        "id": "s5-q3-4",
        "type": "strawberry"
      },
      {
        "id": "s5-q3-5",
        "type": "strawberry"
      },
      {
        "id": "s5-q3-6",
        "type": "strawberry"
      },
      {
        "id": "s5-q3-7",
        "type": "strawberry"
      },
      {
        "id": "s5-q3-8",
        "type": "sesame"
      },
      {
        "id": "s5-q3-9",
        "type": "sesame"
      },
      {
        "id": "s5-q3-10",
        "type": "sesame"
      },
      {
        "id": "s5-q3-11",
        "type": "sesame"
      },
      {
        "id": "s5-q3-12",
        "type": "sesame"
      },
      {
        "id": "s5-q3-13",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-14",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-15",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-16",
        "type": "blueberryTart"
      },
      {
        "id": "s5-q3-17",
        "type": "chocolateCroissant"
      },
      {
        "id": "s5-q3-18",
        "type": "chocolateCroissant"
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
        "type": "blueberryCupcake"
      },
      {
        "id": "s5-q3-22",
        "type": "sprinkle"
      },
      {
        "id": "s5-q3-23",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-24",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-25",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-26",
        "type": "sprinkle"
      },
      {
        "id": "s5-q3-27",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-28",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-29",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-30",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q3-31",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "s5-q4-0",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q4-1",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q4-2",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q4-3",
        "type": "chocolateCupcake"
      },
      {
        "id": "s5-q4-4",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q4-5",
        "type": "matchaCroffle"
      },
      {
        "id": "s5-q4-6",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q4-7",
        "type": "cinnamonCroffle"
      },
      {
        "id": "s5-q4-8",
        "type": "croissant"
      },
      {
        "id": "s5-q4-9",
        "type": "croissant"
      },
      {
        "id": "s5-q4-10",
        "type": "cake"
      },
      {
        "id": "s5-q4-11",
        "type": "cake"
      },
      {
        "id": "s5-q4-12",
        "type": "cake"
      },
      {
        "id": "s5-q4-13",
        "type": "cake"
      },
      {
        "id": "s5-q4-14",
        "type": "sprinkle"
      },
      {
        "id": "s5-q4-15",
        "type": "sprinkle"
      },
      {
        "id": "s5-q4-16",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q4-17",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q4-18",
        "type": "sprinkle"
      },
      {
        "id": "s5-q4-19",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q4-20",
        "type": "sprinkle"
      },
      {
        "id": "s5-q4-21",
        "type": "sprinkle"
      },
      {
        "id": "s5-q4-22",
        "type": "sprinkle"
      }
    ],
    [
      {
        "id": "s5-q5-0",
        "type": "chocolate"
      },
      {
        "id": "s5-q5-1",
        "type": "chocolate"
      },
      {
        "id": "s5-q5-2",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q5-3",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q5-4",
        "type": "strawberryTart"
      },
      {
        "id": "s5-q5-5",
        "type": "coffee"
      },
      {
        "id": "s5-q5-6",
        "type": "coffee"
      },
      {
        "id": "s5-q5-7",
        "type": "coffee"
      },
      {
        "id": "s5-q5-8",
        "type": "coffee"
      },
      {
        "id": "s5-q5-9",
        "type": "raspberryMacaron"
      },
      {
        "id": "s5-q5-10",
        "type": "raspberryMacaron"
      },
      {
        "id": "s5-q5-11",
        "type": "raspberryMacaron"
      },
      {
        "id": "s5-q5-12",
        "type": "raspberry"
      },
      {
        "id": "s5-q5-13",
        "type": "raspberry"
      },
      {
        "id": "s5-q5-14",
        "type": "raspberry"
      },
      {
        "id": "s5-q5-15",
        "type": "raspberry"
      },
      {
        "id": "s5-q5-16",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-17",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-18",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-19",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-20",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q5-21",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-22",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-23",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-24",
        "type": "sprinkle"
      },
      {
        "id": "s5-q5-25",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s5-q6-0",
        "type": "vanilla"
      },
      {
        "id": "s5-q6-1",
        "type": "vanilla"
      },
      {
        "id": "s5-q6-2",
        "type": "vanilla"
      },
      {
        "id": "s5-q6-3",
        "type": "raspberry"
      },
      {
        "id": "s5-q6-4",
        "type": "raspberry"
      },
      {
        "id": "s5-q6-5",
        "type": "matcha"
      },
      {
        "id": "s5-q6-6",
        "type": "matcha"
      },
      {
        "id": "s5-q6-7",
        "type": "matcha"
      },
      {
        "id": "s5-q6-8",
        "type": "matcha"
      },
      {
        "id": "s5-q6-9",
        "type": "matcha"
      },
      {
        "id": "s5-q6-10",
        "type": "mint"
      },
      {
        "id": "s5-q6-11",
        "type": "mint"
      },
      {
        "id": "s5-q6-12",
        "type": "mint"
      },
      {
        "id": "s5-q6-13",
        "type": "mint"
      },
      {
        "id": "s5-q6-14",
        "type": "mint"
      },
      {
        "id": "s5-q6-15",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-16",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-17",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-18",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-19",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-20",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-21",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-22",
        "type": "lemonMacaron"
      },
      {
        "id": "s5-q6-23",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-24",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-25",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-26",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-27",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-28",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-29",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-30",
        "type": "sprinkle"
      },
      {
        "id": "s5-q6-31",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q6-32",
        "type": "chocolateCake"
      }
    ],
    [
      {
        "id": "s5-q7-0",
        "type": "coconut"
      },
      {
        "id": "s5-q7-1",
        "type": "coconut"
      },
      {
        "id": "s5-q7-2",
        "type": "coconut"
      },
      {
        "id": "s5-q7-3",
        "type": "coconut"
      },
      {
        "id": "s5-q7-4",
        "type": "lemon"
      },
      {
        "id": "s5-q7-5",
        "type": "lemon"
      },
      {
        "id": "s5-q7-6",
        "type": "lemon"
      },
      {
        "id": "s5-q7-7",
        "type": "lemon"
      },
      {
        "id": "s5-q7-8",
        "type": "lemon"
      },
      {
        "id": "s5-q7-9",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-10",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-11",
        "type": "chocolateIceCream"
      },
      {
        "id": "s5-q7-12",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-13",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-14",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-15",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-16",
        "type": "matchaScone"
      },
      {
        "id": "s5-q7-17",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-18",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-19",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-20",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-21",
        "type": "chocolate"
      },
      {
        "id": "s5-q7-22",
        "type": "blueberry"
      },
      {
        "id": "s5-q7-23",
        "type": "blueberry"
      },
      {
        "id": "s5-q7-24",
        "type": "blueberry"
      },
      {
        "id": "s5-q7-25",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q7-26",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q7-27",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-28",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-29",
        "type": "chocolateCake"
      },
      {
        "id": "s5-q7-30",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-31",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-32",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-33",
        "type": "sprinkle"
      },
      {
        "id": "s5-q7-34",
        "type": "sprinkle"
      }
    ]
  ],
  "orders": [
    {
      "id": "s5-o1",
      "sequence": 1,
      "items": {
        "pudding": 2,
        "matchaCroffle": 2,
        "raspberry": 2
      }
    },
    {
      "id": "s5-o2",
      "sequence": 2,
      "items": {
        "matcha": 5,
        "strawberry": 4,
        "pudding": 2
      }
    },
    {
      "id": "s5-o3",
      "sequence": 3,
      "items": {
        "lemon": 5,
        "chocolateIceCream": 3,
        "chocolateCupcake": 2
      }
    },
    {
      "id": "s5-o4",
      "sequence": 4,
      "items": {
        "strawberryTart": 3,
        "caramel": 4,
        "cinnamonCroffle": 3
      }
    },
    {
      "id": "s5-o5",
      "sequence": 5,
      "items": {
        "chocolateCupcake": 4,
        "sesame": 5,
        "chocolate": 2
      }
    },
    {
      "id": "s5-o6",
      "sequence": 6,
      "items": {
        "coconut": 4,
        "blueberryCupcake": 5,
        "chocolateCroissant": 5
      }
    },
    {
      "id": "s5-o7",
      "sequence": 7,
      "items": {
        "vanilla": 3,
        "chocolateCookie": 3,
        "coffee": 4
      }
    },
    {
      "id": "s5-o8",
      "sequence": 8,
      "items": {
        "blueberryTart": 4,
        "mint": 5,
        "matchaScone": 5
      }
    },
    {
      "id": "s5-o9",
      "sequence": 9,
      "items": {
        "whiteCookie": 3,
        "chocolate": 5,
        "pudding": 3
      }
    },
    {
      "id": "s5-o10",
      "sequence": 10,
      "items": {
        "coffee": 4,
        "chocolateCroissant": 2,
        "strawberry": 2
      }
    },
    {
      "id": "s5-o11",
      "sequence": 11,
      "items": {
        "matchaScone": 5,
        "cinnamonCroffle": 2,
        "blueberryCupcake": 3
      }
    },
    {
      "id": "s5-o12",
      "sequence": 12,
      "items": {
        "croissant": 2,
        "blueberry": 3,
        "raspberry": 4
      }
    },
    {
      "id": "s5-o13",
      "sequence": 13,
      "items": {
        "raspberryMacaron": 3,
        "lemonMacaron": 4,
        "cake": 3
      }
    },
    {
      "id": "s5-o14",
      "sequence": 14,
      "items": {
        "cake": 4,
        "cinnamonCroffle": 2,
        "mint": 3
      }
    },
    {
      "id": "s5-o15",
      "sequence": 15,
      "items": {
        "raspberry": 2,
        "vanilla": 5,
        "lemonMacaron": 4
      }
    }
  ],
  "revision": 12
};
