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
    takingPlatformFix: true,
    changeDisplay: {
      ampSize: {
        "150": true,
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
        outLight: true,
        inLight: false,
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
        inLight: null,
      },
      takingPlatform: 50000,
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
        outLight: true,
        inLight: false,
      },
    },
  },
};
