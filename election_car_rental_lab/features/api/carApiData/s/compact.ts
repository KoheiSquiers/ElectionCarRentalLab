import { ClassType } from "../../type";

// コンパクトカーのAPIデータを定義

export const compact: ClassType = {
  // 統一地方選挙
  unity: {
    unitPrice: {
      car: 495000,
      ampSize: {
        "150": 0,
        "300": 50000,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 50000,
    },
    takingPlatformFix: false,
    takingPlatformChangeDisplay: true,
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

  // 一般地方選挙
  general: {
    unitPrice: {
      car: 198000,
      ampSize: {
        "150": 0,
        "300": 50000,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 50000,
    },
    takingPlatformFix: false,
    takingPlatformChangeDisplay: true,
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
      car: 198000,
      ampSize: {
        "150": 0,
        "300": 50000,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: 50000,
    },
    takingPlatformFix: false,
    takingPlatformChangeDisplay: true,
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
