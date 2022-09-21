import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { init, send } from "emailjs-com";
import { useQState } from "../../hooks/library/useQstate";

interface ConfirmationProps {
  inputData: any;
  setStepper: any;
}

interface ConfLabelProps {
  label: string;
  value: string;
}

const ConfLabel = ({ label, value }: ConfLabelProps) => {
  return (
    <>
      <Grid sm={6}>
        <Typography>【 {label} 】</Typography>
      </Grid>
      <Grid sm={6}>
        <Typography>{value}</Typography>
      </Grid>
    </>
  );
};

const Confirmation = ({ inputData, setStepper }: ConfirmationProps) => {
  const userID = process.env.NEXT_PUBLIC_USER_ID;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const [sendData] = useQState<any>(["sendData"]);
  const [calcData] = useQState<any>(["calcData"]);

  const sendMail = () => {
    // ここに処理を書いていきます。
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      // undefinedでなければ、init(userID)で初期化を実行
      init(userID);

      const template_param = {
        name: inputData.name,
        furigana: inputData.furigana,
        tel: inputData.tel,
        mail: inputData.mail,
        postCode: inputData.postCode,
        address: inputData.address,
        contactType: inputData.contactType === "tel" ? "電話" : "メール",
        contactDetails: inputData.contactDetails,
      };

      send(serviceID, templateID, template_param, "tvR3Qt2HckYv81QKY").then(
        () => {
          console.dir(userID);
          setStepper(2);
        },
      );
    }
  };
  console.dir(sendData);

  useEffect(() => {
    setStepper(1);
  }, []);

  return (
    <Container maxWidth="xs">
      <Grid container rowSpacing={2}>
        <Grid sm={12}>
          <Typography variant={"caption"}>
            下記の入力内容に相違ないようでしたら「送信する」ボタンを押してください。
            内容の変更を行う場合は「戻る」ボタンを押してください。
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Divider sx={{ mb: 2 }} />
        </Grid>
        <ConfLabel label={"お名前"} value={inputData.name} />
        <ConfLabel label={"フリガナ"} value={inputData.furigana} />
        <ConfLabel label={"電話番号"} value={inputData.tel} />
        <ConfLabel label={"メールアドレス"} value={inputData.mail} />
        <ConfLabel label={"郵便番号"} value={inputData.postCode} />
        <ConfLabel label={"住所"} value={inputData.address} />
        <ConfLabel
          label={"当社との連絡方法"}
          value={inputData.contactType === "tel" ? "電話" : "メール"}
        />
        <ConfLabel label={"お問合せ内容"} value={inputData.contactDetails} />
        <Grid item sm={12}>
          <Divider sx={{ mb: 2, mt: 2 }} />
        </Grid>

        {/*TODO データコンバート*/}
        <ConfLabel label={"レンタル区分"} value={sendData.electoralClass} />
        <ConfLabel label={"選挙エリア"} value={sendData.electionArea.label} />
        <ConfLabel label={"議会区分"} value={sendData.parliamentClass} />
        {/*TODO*/}
        {/*<ConfLabel label={"車区分"} value={sendData.carClass} />*/}
        {/*<ConfLabel label={"車種"} value={sendData.carType} />*/}
        <ConfLabel label={"ライト区分"} value={sendData.signalLight} />
        <ConfLabel label={"アンプサイズ"} value={sendData.ampSize} />
        <ConfLabel label={"スピーカー"} value={sendData.speaker} />
        <ConfLabel label={"ワイヤレスマイク"} value={sendData.wirelessMike} />
        <ConfLabel
          label={"ワイヤレスマイク数"}
          value={sendData.wirelessMikeNumber}
        />
        <ConfLabel label={"SDカード"} value={sendData.sd} />
        <ConfLabel
          label={"ワイヤレスインカム"}
          value={sendData.wirelessIncome}
        />
        <ConfLabel label={"ハンドスピーカー"} value={sendData.handSpeaker} />
        <ConfLabel label={"Bluetoothユニット"} value={sendData.bluetoothUnit} />
        <ConfLabel label={"保険"} value={sendData.insurance} />
        <ConfLabel label={"保険日数"} value={sendData.insuranceDays} />
        <ConfLabel label={"ボディラッピング"} value={sendData.bodyRapping} />

        <Grid item sm={12}>
          <Divider sx={{ mb: 2, mt: 2 }} />
        </Grid>
        <ConfLabel label={"小計金額"} value={calcData.subTotalPrice} />
        <ConfLabel label={"オプション金額"} value={calcData.optionTotalPrice} />
        <ConfLabel label={"合計金額"} value={calcData.totalPrice} />

        <Grid item sm={6}>
          <Box textAlign={"left"} padding={2}>
            <Button
              variant={"outlined"}
              centerRipple={true}
              onClick={() => {
                setStepper(0);
              }}
            >
              戻る
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box textAlign={"right"} padding={2}>
            <Button
              variant={"contained"}
              centerRipple={true}
              onClick={() => {
                sendMail();
              }}
            >
              送信
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Confirmation;
