import { ClassType } from "../../type";

// ノアのAPIデータを定義

export const noah: ClassType = {
  // 統一地方選挙
  unity: {
    unitPrice: {
      car: 748000,
      ampSize: {
        "150": null,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: null,
        inLight: 0,
      },
      takingPlatform: null,
    },
    takingPlatformChangeDisplay: undefined,
    takingPlatformSwitch: undefined,
    changeDisplay: undefined,
  },

  // 一般地方選挙
  general: {
    unitPrice: {
      car: 269000,
      ampSize: {
        "150": 0,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 50000,
    },
    takingPlatformChangeDisplay: true,
    takingPlatformSwitch: true,
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
      car: 269000,
      ampSize: {
        "150": 0,
        "300": 0,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 50000,
    },
    takingPlatformChangeDisplay: true,
    takingPlatformSwitch: true,
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
