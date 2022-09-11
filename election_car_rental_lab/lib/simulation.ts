import { convMikeNumber } from "./subCalc";

interface InputValues {
  electoralClass: "1" | "2" | "3" | "4", // 選挙区分
  electionArea: { label: "鳥取県", value: "tottori" }, // 選挙エリア
  parliamentClass: "chairman", // 議会区分

  carClass: "lightCar",
  carType: {},
  signalLight: "outLight", // ライト区分
  ampSize: "150", // アンプサイズ
  speaker: "twe", // スピーカー

  // オプション
  wirelessMike: boolean // ワイヤレスマイク
  wirelessMikeNumber: number //ワイヤレスマイク数
  sd: boolean // SDカード
  wirelessIncome: boolean // ワイヤレスインカム
  handSpeaker: boolean // ハンドスピーカー

  insurance: boolean
  insuranceDays: number

  bodyRapping: boolean // ボディラッピング

}

const Simulation = (
  inputValue: InputValues,
) => {
  // レンタル区分
  const electoralClass = () => {
    switch (inputValue.electoralClass) {
      case "1":
        return 100;
      case "2":
        return 200;
      case "3":
        return 300;
      case "4":
        return 400;
    }
  };

  const subTotalPrice = electoralClass();


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

  // 保険単価セット（1日分）
  const insuranceValue = inputValue?.insurance ? 1500 : 0;
  // 保険日数セット
  const insuranceDays = inputValue?.insuranceDays;
  // 保険料金 ... 保険単価 * 日数
  const insurancePrice = insuranceValue * insuranceDays;


  const optionTotalPrice = totalMikePrice + sdPrice + incomePrice + handSpeakerPrice + insurancePrice;
  const totalPrice = subTotalPrice + optionTotalPrice;

  return {
    subTotalPrice: subTotalPrice,
    optionTotalPrice: optionTotalPrice,
    totalPrice: totalPrice,
  };
};

export default Simulation;
