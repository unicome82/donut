import { BASE_TRAY_CAPACITY } from '../constants';
import type { StageDefinition } from '../types';

// Fixed clustered runs; witness solutions are replayed in engine tests.
export const stage04: StageDefinition = {
  "id": 4,
  "revision": 9,
  "donutTypes": [
    "cake",
    "chocolate",
    "raspberryMacaron",
    "chocolateCake",
    "chocolateIceCream",
    "blueberryTart",
    "strawberryTart",
    "chocolateCupcake"
  ],
  "targetOrders": 14,
  "trayCapacity": BASE_TRAY_CAPACITY,
  "queues": [
    [
      {
        "id": "l4-r4-q8-p0",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q0-p0",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p1",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p2",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p3",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p4",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p5",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q8-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q0-p6",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q8-p2",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p3",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p4",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q8-p5",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q8-p6",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p7",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q8-p7",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q8-p8",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q0-p8",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p9",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p10",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p11",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p12",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p13",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p14",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p15",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p16",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p17",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q0-p18",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q8-p9",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q8-p10",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q8-p11",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q8-p12",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q8-p13",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q8-p14",
        "type": "raspberryMacaron"
      }
    ],
    [
      {
        "id": "l4-r4-q9-p0",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q9-p1",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q9-p2",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q9-p3",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q9-p4",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q1-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p4",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q1-p5",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q9-p5",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p6",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q1-p7",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q1-p8",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q1-p9",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q9-p6",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q9-p7",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q1-p10",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q1-p11",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q1-p12",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q1-p13",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q1-p14",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q1-p15",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q9-p8",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q9-p9",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q9-p10",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q9-p11",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p12",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p13",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p14",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p15",
        "type": "cake"
      },
      {
        "id": "l4-r4-q9-p16",
        "type": "cake"
      }
    ],
    [
      {
        "id": "l4-r4-q2-p0",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p1",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p2",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p3",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p4",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p8",
        "type": "cake"
      },
      {
        "id": "l4-r4-q2-p9",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p10",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p11",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p12",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p13",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p14",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q2-p15",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q2-p16",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q2-p17",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q2-p18",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q2-p19",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q2-p20",
        "type": "strawberryTart"
      }
    ],
    [
      {
        "id": "l4-r4-q3-p0",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q3-p1",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q3-p2",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q3-p3",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q3-p4",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q3-p5",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q3-p6",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q3-p7",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q3-p8",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q3-p9",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q3-p10",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q3-p11",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q3-p12",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q3-p13",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q3-p14",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q3-p15",
        "type": "raspberryMacaron"
      }
    ],
    [
      {
        "id": "l4-r4-q4-p0",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p1",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p2",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p3",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p4",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q4-p8",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p9",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p10",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q4-p11",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q4-p12",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q4-p13",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p14",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p15",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p16",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p17",
        "type": "chocolateCupcake"
      },
      {
        "id": "l4-r4-q4-p18",
        "type": "chocolateCupcake"
      }
    ],
    [
      {
        "id": "l4-r4-q5-p0",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q5-p1",
        "type": "raspberryMacaron"
      },
      {
        "id": "l4-r4-q5-p2",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q5-p3",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q5-p4",
        "type": "strawberryTart"
      },
      {
        "id": "l4-r4-q5-p5",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p6",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p7",
        "type": "cake"
      },
      {
        "id": "l4-r4-q5-p8",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q5-p9",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q5-p10",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q5-p11",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q5-p12",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q5-p13",
        "type": "blueberryTart"
      }
    ],
    [
      {
        "id": "l4-r4-q6-p0",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q6-p1",
        "type": "chocolate"
      },
      {
        "id": "l4-r4-q6-p2",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p3",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p4",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p5",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p6",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p7",
        "type": "blueberryTart"
      },
      {
        "id": "l4-r4-q6-p8",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q6-p9",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q6-p10",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p11",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p12",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p13",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p14",
        "type": "cake"
      },
      {
        "id": "l4-r4-q6-p15",
        "type": "cake"
      }
    ],
    [
      {
        "id": "l4-r4-q7-p0",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p1",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p2",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p3",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p4",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p5",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p6",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q7-p7",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q7-p8",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q7-p9",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q7-p10",
        "type": "chocolateCake"
      },
      {
        "id": "l4-r4-q7-p11",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p12",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p13",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p14",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p15",
        "type": "chocolateIceCream"
      },
      {
        "id": "l4-r4-q7-p16",
        "type": "chocolateIceCream"
      }
    ]
  ],
  "orders": [
    {
      "id": "l4-o1",
      "sequence": 1,
      "items": {
        "cake": 2,
        "chocolate": 1
      }
    },
    {
      "id": "l4-o2",
      "sequence": 2,
      "items": {
        "raspberryMacaron": 4
      }
    },
    {
      "id": "l4-o3",
      "sequence": 3,
      "items": {
        "cake": 5,
        "raspberryMacaron": 2
      }
    },
    {
      "id": "l4-o4",
      "sequence": 4,
      "items": {
        "chocolate": 8
      }
    },
    {
      "id": "l4-o5",
      "sequence": 5,
      "items": {
        "chocolateCake": 16
      }
    },
    {
      "id": "l4-o6",
      "sequence": 6,
      "items": {
        "blueberryTart": 1,
        "strawberryTart": 2
      }
    },
    {
      "id": "l4-o7",
      "sequence": 7,
      "items": {
        "raspberryMacaron": 2,
        "chocolateCupcake": 3
      }
    },
    {
      "id": "l4-o8",
      "sequence": 8,
      "items": {
        "blueberryTart": 4,
        "cake": 4
      }
    },
    {
      "id": "l4-o9",
      "sequence": 9,
      "items": {
        "chocolateIceCream": 12
      }
    },
    {
      "id": "l4-o10",
      "sequence": 10,
      "items": {
        "chocolateCake": 12,
        "chocolateIceCream": 2,
        "cake": 2
      }
    },
    {
      "id": "l4-o11",
      "sequence": 11,
      "items": {
        "blueberryTart": 1,
        "strawberryTart": 2
      }
    },
    {
      "id": "l4-o12",
      "sequence": 12,
      "items": {
        "raspberryMacaron": 1,
        "chocolateCupcake": 4
      }
    },
    {
      "id": "l4-o13",
      "sequence": 13,
      "items": {
        "blueberryTart": 6,
        "chocolateCake": 2
      }
    },
    {
      "id": "l4-o14",
      "sequence": 14,
      "items": {
        "chocolateIceCream": 10,
        "raspberryMacaron": 2
      }
    }
  ]
};
