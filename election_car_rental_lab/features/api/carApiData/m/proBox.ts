import { ClassType } from "../../type";

// プロボックスのAPIデータを定義

export const proBox: ClassType = {
  // 統一地方選挙
  unity: {
    unitPrice: {
      car: 550000,
      ampSize: {
        "150": null,
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
    takingPlatformFix: false,
    changeDisplay: {
      ampSize: {
        "150": false,
        "300": true,
        "600": false,
      },
      signalLight: {
        outLight: true,
        inLight: false,
      },
    },
  },

  // 一般地方選挙
  general: {
    unitPrice: {
      car: 239000,
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
    takingPlatformFix: false,
    changeDisplay: {
      ampSize: {
        "150": false,
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
      car: 239000,
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
    takingPlatformFix: false,
    changeDisplay: {
      ampSize: {
        "150": false,
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
