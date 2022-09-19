import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

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
        <Typography variant={"h6"}>{label}</Typography>
      </Grid>
      <Grid sm={6}>
        <Typography variant={"h6"}>{value}</Typography>
      </Grid>
    </>
  );
};

const Confirmation = ({ inputData, setStepper }: ConfirmationProps) => {
  const router = useRouter();

  useEffect(() => {
    setStepper(1);
  }, []);
  return (
    <Container maxWidth="xs">
      <Grid container rowSpacing={2}>
        <Grid sm={12} sx={{ pb: 3 }}>
          <Typography variant={"caption"}>
            下記の入力内容に相違ないようでしたら「送信する」ボタンを押してください。
            内容の変更を行う場合は「戻る」ボタンを押してください。
          </Typography>
        </Grid>

        <ConfLabel label={"お名前"} value={inputData.name} />
        <ConfLabel label={"フリガナ"} value={inputData.furigana} />
        <ConfLabel label={"電話番号"} value={inputData.tel} />
        <ConfLabel label={"メールアドレス"} value={inputData.mail} />
        <ConfLabel label={"郵便番号"} value={inputData.postCode} />
        <ConfLabel label={"住所"} value={inputData.address} />
        <ConfLabel label={"当社との連絡方法"} value={inputData.contactType} />
        <ConfLabel label={"お問合せ内容"} value={inputData.contactDetails} />

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
                setStepper(2);
              }}
            >
              確認画面へ
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Confirmation;
