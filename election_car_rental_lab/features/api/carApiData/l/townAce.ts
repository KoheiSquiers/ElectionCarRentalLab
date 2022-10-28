import { ClassType } from "../../type";

// タウンエースのAPIデータを定義

export const townAce: ClassType = {
  // 統一地方選挙
  unity: {
    unitPrice: {
      car: 858000,
      ampSize: {
        "150": null,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: null,
        inLight: null,
      },
      takingPlatform: 100000,
    },
    takingPlatformChangeDisplay: true,
    takingPlatformFix: true,
    changeDisplay: {
      ampSize: {
        "150": false,
        "300": true,
        "600": false,
      },
      signalLight: {
        outLight: false,
        inLight: false,
      },
    },
  },

  // 一般地方選挙
  general: {
    unitPrice: {
      car: 319000,
      ampSize: {
        "150": 0,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 100000,
    },
    takingPlatformChangeDisplay: true,
    takingPlatformFix: false,
    changeDisplay: {
      ampSize: {
        "150": true,
        "300": true,
        "600": false,
      },
      signalLight: {
        outLight: false,
        inLight: true,
      },
    },
  },

  // 広告宣伝社
  ad: {
    unitPrice: {
      car: 319000,
      ampSize: {
        "150": 0,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 100000,
    },
    takingPlatformChangeDisplay: true,
    takingPlatformFix: false,
    changeDisplay: {
      ampSize: {
        "150": true,
        "300": true,
        "600": false,
      },
      signalLight: {
        outLight: false,
        inLight: true,
      },
    },
  },
};
