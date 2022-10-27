import { ClassType } from "../../type";

// 軽ハコバンのAPIデータを定義

export const boxVan: ClassType = {
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
        inLight: null,
      },
      takingPlatform: 100000,
    },
    takingPlatformChangeDisplay: false,
    takingPlatformSwitch: false,
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
        inLight: null,
      },
      takingPlatform: null,
    },
    takingPlatformChangeDisplay: false,
    takingPlatformSwitch: true,
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
        inLight: null,
      },
      takingPlatform: null,
    },
    takingPlatformChangeDisplay: false,
    takingPlatformSwitch: true,
  },
};
