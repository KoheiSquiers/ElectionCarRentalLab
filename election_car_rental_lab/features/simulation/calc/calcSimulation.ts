import { SendDataType } from "../utils/sendDataType";
import { apiData } from "../../api/apiData";
import { ampSize, apiPrices, signalLight } from "./calcSimlationParts";

export interface CalcDataType {
  subs: {
    carPrice: number;
    ampSize: number;
    signalLight: number;
    takingPlatform: number;
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

const CalcSimulation = (inputValue: SendDataType): CalcDataType => {
  // apiデータ取得
  const subPrices = apiPrices(inputValue);
  //
  // 小計
  //
  // 車種料金
  const carPrice = subPrices.unitPrice.car;
  // アンプ料金
  const ampPrice = ampSize(inputValue.ampSize, subPrices.unitPrice.ampSize);
  // ライト料金
  const signalLightPrice = signalLight(inputValue.signalLight, subPrices.unitPrice.signalLight);
  // 登壇料金
  const takingPlatform = subPrices.unitPrice.takingPlatform || 0;
  // 小計合計金額
  const subTotalPrice = carPrice + ampPrice + signalLightPrice + takingPlatform;

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

  // オプション合計金額
  const optionTotalPrice =
    totalMikePrice + sdPrice + incomePrice + handSpeakerPrice + bluetoothUnit + insurancePrice;

  //
  // 合計金額 ... 小計＋オプション
  //
  const totalPrice = subTotalPrice + optionTotalPrice;

  return {
    subs: {
      carPrice: carPrice,
      ampSize: ampPrice,
      signalLight: signalLightPrice,
      takingPlatform: takingPlatform,
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
