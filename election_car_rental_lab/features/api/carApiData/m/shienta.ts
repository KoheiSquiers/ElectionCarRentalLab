import { ClassType } from "../../type";

// シエンタのAPIデータを定義

export const shienta: ClassType = {
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
      takingPlatform: null,
    },
  },

  // 一般地方選挙
  general: {
    unitPrice: {
      car: 249000,
      ampSize: {
        "150": 0,
        "300": 50000,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: null,
    },
  },

  // 広告宣伝社
  ad: {
    unitPrice: {
      car: 249000,
      ampSize: {
        "150": 0,
        "300": 50000,
        "600": null,
      },
      signalLight: {
        outLight: 0,
        inLight: 50000,
      },
      takingPlatform: null,
    },
  },
};
