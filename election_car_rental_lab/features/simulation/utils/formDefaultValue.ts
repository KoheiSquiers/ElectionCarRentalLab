import { SendDataType } from "./sendDataType";

export const formDefaultValue: SendDataType = {
  // レンタル区分
  electoralClass: "unity",
  // 選挙エリア
  electionArea: {
    label: "鳥取県",
    value: "tottori",
  },
  // 議会区分
  parliamentClass: "chairman",
  // 車区分
  carClass: "s",
  // 車種
  carType: {
    s: "heightWagon",
    m: "corollaFielder",
    l: "noah",
    ll: "regiusaceAceBasic",
  },

  signalLight: "outLight", // ライト区分
  ampSize: "150", // アンプサイズ
  speaker: "twe", // スピーカー

  wirelessMike: false, // ワイヤレスマイク
  wirelessMikeNumber: 1, //ワイヤレスマイク数
  sd: false, // SDカード
  wirelessIncome: false, // ワイヤレスインカム
  handSpeaker: false, // ハンドスピーカー
  bluetoothUnit: false, // Bluetoothユニット
  insurance: false,
  insuranceDays: 1,
  bodyRapping: false, // ボディラッピング
};
