interface InputValues {
  electoralClass: string, // 選挙区分
  // electionArea: { label: "鳥取県", value: "tottori" }, // 選挙エリア
  parliamentClass: string, // 議会区分

  carClass: string,
  carType: { s: string, m: string, l: string, ll: string },
  signalLight: string, // ライト区分
  ampSize: string, // アンプサイズ
  speaker: string, // スピーカー

  // オプション
  wirelessMike: boolean // ワイヤレスマイク
  wirelessMikeNumber: number //ワイヤレスマイク数

  sd: boolean // SDカード

  wirelessIncome: boolean // ワイヤレスインカム

  handSpeaker: boolean // ハンドスピーカー

  bluetoothUnit: boolean // Bluetoothユニット

  insurance: boolean //保険
  insuranceDays: number // 保険日数

  bodyRapping: boolean // ボディラッピング

}

const CalcSimulation = (
  inputValue: InputValues,
) => {
  // レンタル区分
  const electoralClass = () => {
    switch (inputValue.electoralClass) {
      case "union": //統一地方選挙
        return 1000;
      case "general": // 一般地方選挙
        return 2000;
      case "lowRep": // 衆・参議委員選挙
        return 3000;
      case "advertisement": // 広告宣伝者
        return 4000;
      default:
        return 0;
    }
  };

  // 議会区分
  const parliamentClass = () => {
    switch (inputValue.parliamentClass) {
      case "chairman": // 議員
        return 1500;
      case "chief": // 首長
        return 3500;
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
        return 1000;
      case "every":
        return 2000;
      case "note":
        return 3000;
      default:
        return 0;

    }
  };

  // m
  const mType = (typeM: string) => {
    switch (typeM) {
      case "corollaFielder":
        return 4000;
      case "shienta":
        return 5000;
      case "proBoc":
        return 6000;
      default:
        return 0;

    }
  };

  // l
  const lType = (typeM: string) => {
    switch (typeM) {
      case "noah":
        return 7000;
      case "townAce":
        return 8000;
      default:
        return 0;

    }
  };

  // ll
  const llType = (typeM: string) => {
    switch (typeM) {
      case "regiusaceAce":
        return 9000;
      default:
        return 0;

    }
  };


  // ライト区分
  const signalLight = () => {
    switch (inputValue.signalLight) {
      case "outLight": //外照明
        return 2500;
      case "inLight": // 内照明
        return 5000;
      case "topLight": // 登壇
        return 7500;
      default:
        return 0;
    }
  };

  // アンプサイズ
  const ampSize = () => {
    switch (inputValue.ampSize) {
      case "150":
        return 125;
      case "300":
        return 250;
      case "600":
        return 375;
      default:
        return 0;
    }
  };

  // スピーカー
  const speaker = () => {
    switch (inputValue.speaker) {
      case "twe":
        return 200;
      case "four":
        return 400;
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
    speaker()
  ;


  // ワイヤレスマイク単価セット（1本分）
  const mikeValue = inputValue?.wirelessMike ? 1500 : 0;
  // ワイヤレスマイク数セット
  const mikeNumberValue = inputValue?.wirelessMikeNumber;
  // ワイヤレスマイク料金 ・・・ ワイヤレスマイク * 数量
  const totalMikePrice = mikeValue * mikeNumberValue;

  // SDカード料金
  const sdPrice = inputValue?.sd ? 20000 : 0;

  // ワイヤレスインカム料金
  const incomePrice = inputValue?.wirelessIncome ? 1000 : 0;

  // ハンドスピーカー料金
  const handSpeakerPrice = inputValue?.handSpeaker ? 1500 : 0;

  // Bluetoothユニット料金
  const bluetoothUnit = inputValue?.bluetoothUnit ? 15000 : 0;

  // 保険単価セット（1日分）
  const insuranceValue = inputValue?.insurance ? 1500 : 0;
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
    insurancePrice
  ;
  const totalPrice = subTotalPrice + optionTotalPrice;

  return {
    subTotalPrice: subTotalPrice,
    optionTotalPrice: optionTotalPrice,
    totalPrice: totalPrice,
  };
};

export default CalcSimulation;
