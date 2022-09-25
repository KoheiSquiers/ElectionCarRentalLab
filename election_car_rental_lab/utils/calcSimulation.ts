import { SendDataType } from "../pages/simulation";

export interface CalcDataType {
  subs: {
    electoralClass: number;
    parliamentClass: number;
    carPrice: number;
    signalLight: number;
    ampSize: number;
    speaker: number;
  };
  options: {
    totalMikePrice: number;
    sdPrice: number;
    incomePrice: number;
    handSpeakerPrice: number;
    bluetoothUnit: number;
    insurancePrice: number;
  };

  subTotalPrice: number;
  optionTotalPrice: number;
  totalPrice: number;
}

// 仮
const apiData = {
  // レンタル区分
  electoralClass: {
    union: 1000,
    general: 2000,
    lowRep: 3000,
    advertisement: 0,
  },
  // 議会区分
  electoralType: {
    chairman: 1500,
    chief: 3500,
  },
  // 車種料金
  s: {
    nBox: 1000,
    every: 2000,
    note: 3000,
  },
  m: {
    corollaFielder: 4000,
    shienta: 5000,
    proBoc: 6000,
  },
  l: {
    noah: 7000,
    townAce: 8000,
  },
  ll: {
    regiusaceAce: 9000,
  },
  // ライト区分
  signalLight: {
    outLight: 5000,
    inLight: 5000,
    topLight: 7500,
  },
  // アンプサイズ
  ampSize: {
    150: 150,
    300: 300,
    600: 600,
  },
  // スピーカー
  speaker: { twe: 200, four: 400 },

  //
  // オプション
  //

  // ワイヤレスマイク
  mikeValue: 500,

  // SDカード料金
  sdPrice: 1000,

  // ワイヤレスインカム料金
  incomePrice: 1000,

  // ハンドスピーカー
  handSpeaker: 1500,

  // Bluetoothユニット料金
  bluetoothUnit: 2500,

  // 保険単価
  insuranceValue: 3000,
};

const CalcSimulation = (inputValue: SendDataType): CalcDataType => {
  // レンタル区分
  const electoralClass = () => {
    switch (inputValue.electoralClass) {
      case "union": //統一地方選挙
        return apiData.electoralClass.union;
      case "general": // 一般地方選挙
        return apiData.electoralClass.general;
      case "lowRep": // 衆・参議委員選挙
        return apiData.electoralClass.lowRep;
      case "advertisement": // 広告宣伝者
        return apiData.electoralClass.advertisement;
      default:
        return 0;
    }
  };

  // 議会区分
  const parliamentClass = () => {
    switch (inputValue.parliamentClass) {
      case "chairman": // 議員
        return apiData.electoralType.chairman;
      case "chief": // 首長
        return apiData.electoralType.chief;
      default:
        return 0;
    }
  };

  // 車料金
  const carPrice = () => {
    switch (inputValue.carClass) {
      case "s":
        return sType(inputValue.carType.s);
      case "m":
        return mType(inputValue.carType.m);
      case "l":
        return lType(inputValue.carType.l);
      case "ll":
        return llType(inputValue.carType.ll);

      default:
        return 0;
    }
  };
  // s
  const sType = (typeS: string) => {
    switch (typeS) {
      case "nBox":
        return apiData.s.nBox;
      case "every":
        return apiData.s.every;
      case "note":
        return apiData.s.note;
      default:
        return 0;
    }
  };

  // m
  const mType = (typeM: string) => {
    switch (typeM) {
      case "corollaFielder":
        return apiData.m.corollaFielder;
      case "shienta":
        return apiData.m.shienta;
      case "proBoc":
        return apiData.m.proBoc;
      default:
        return 0;
    }
  };

  // l
  const lType = (typeM: string) => {
    switch (typeM) {
      case "noah":
        return apiData.l.noah;
      case "townAce":
        return apiData.l.townAce;
      default:
        return 0;
    }
  };

  // ll
  const llType = (typeM: string) => {
    switch (typeM) {
      case "regiusaceAce":
        return apiData.ll.regiusaceAce;
      default:
        return 0;
    }
  };

  // ライト区分
  const signalLight = () => {
    switch (inputValue.signalLight) {
      case "outLight": //外照明
        return apiData.signalLight.outLight;
      case "inLight": // 内照明
        return apiData.signalLight.inLight;
      case "topLight": // 登壇
        return apiData.signalLight.topLight;
      default:
        return 0;
    }
  };

  // アンプサイズ
  const ampSize = () => {
    switch (inputValue.ampSize) {
      case "150":
        return apiData.ampSize[150];
      case "300":
        return apiData.ampSize[300];
      case "600":
        return apiData.ampSize[600];
      default:
        return 0;
    }
  };

  // スピーカー
  const speaker = () => {
    switch (inputValue.speaker) {
      case "twe":
        return apiData.speaker.twe;
      case "four":
        return apiData.speaker.four;
      default:
        return 0;
    }
  };

  const subTotalPrice =
    electoralClass() +
    parliamentClass() +
    carPrice() +
    signalLight() +
    ampSize() +
    speaker();

  //
  // オプション
  //
  // ワイヤレスマイク単価セット（1本分）
  const mikeValue = inputValue?.wirelessMike ? apiData.mikeValue : 0;
  // ワイヤレスマイク数セット
  const mikeNumberValue = inputValue?.wirelessMikeNumber;
  // ワイヤレスマイク料金 ・・・ ワイヤレスマイク * 数量
  const totalMikePrice = mikeValue * mikeNumberValue;

  // SDカード料金
  const sdPrice = inputValue?.sd ? apiData.sdPrice : 0;

  // ワイヤレスインカム料金
  const incomePrice = inputValue?.wirelessIncome ? apiData.incomePrice : 0;

  // ハンドスピーカー料金
  const handSpeakerPrice = inputValue?.handSpeaker ? apiData.handSpeaker : 0;

  // Bluetoothユニット料金
  const bluetoothUnit = inputValue?.bluetoothUnit ? apiData.bluetoothUnit : 0;

  // 保険単価セット（1日分）
  const insuranceValue = inputValue?.insurance ? apiData.insuranceValue : 0;
  // 保険日数セット
  const insuranceDays = inputValue?.insuranceDays;
  // 保険料金 ... 保険単価 * 日数
  const insurancePrice = insuranceValue * insuranceDays;

  const optionTotalPrice =
    totalMikePrice +
    sdPrice +
    incomePrice +
    handSpeakerPrice +
    bluetoothUnit +
    insurancePrice;
  const totalPrice = subTotalPrice + optionTotalPrice;

  return {
    subs: {
      electoralClass: electoralClass(),
      parliamentClass: parliamentClass(),
      carPrice: carPrice(),
      signalLight: signalLight(),
      ampSize: ampSize(),
      speaker: speaker(),
    },
    options: {
      totalMikePrice: totalMikePrice,
      sdPrice: sdPrice,
      incomePrice: incomePrice,
      handSpeakerPrice: handSpeakerPrice,
      bluetoothUnit: bluetoothUnit,
      insurancePrice: insurancePrice,
    },
    subTotalPrice: subTotalPrice,
    optionTotalPrice: optionTotalPrice,
    totalPrice: totalPrice,
  };
};

export default CalcSimulation;
