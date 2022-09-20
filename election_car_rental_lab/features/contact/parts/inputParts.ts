// tel variation
import * as yup from "yup";

const telVariation = /^0[-0-9]{9,12}$/;

// postCode variation
const postCodeVariation = /^([0-9]{3}-?[0-9]{4})?$/;

export const schema = yup.object().shape({
  name: yup.string().required("必須項目です。"),

  furigana: yup
    .string()
    .max(25, "最大25文字です。")
    .test(
      "katakana-checker",
      "カタカナで入力して下さい。",
      function(value: any) {
        return !!value.match(/^[ァ-ヶー　]*$/);
      },
    )
    .required("必須項目です。"),

  // TODO 全角も許容するようにする
  tel: yup.string().matches(telVariation, "電話番号の形式に誤りがあります"),

  mail: yup
    .string()
    .lowercase()
    .email("正しいメールアドレスを入力してください。")
    .required("必須項目です。"),

  mailCheck: yup
    .string()
    .lowercase()
    .email("正しいメールアドレスを入力してください。")
    .test(
      "emails-match",
      "入力されたメールアドレスが一致しません。",
      function(value) {
        return value === this.parent.mail;
      },
    )
    .required("必須項目です。"),

  // TODO 全角も許容するようにする
  postCode: yup
    .string()
    .matches(postCodeVariation, "郵便番号の形式に誤りがあります"),

  contactType: yup.string().required("必須項目です。"),
});
