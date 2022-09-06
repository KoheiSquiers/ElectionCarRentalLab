import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Divider,
  Grid,
  Button, Box,

} from "@mui/material";
import { blue, green } from "@mui/material/colors";

import { SubmitHandler, useForm } from "react-hook-form";


import CarType from "../utils/carType";
import ElectionDiv from "../utils/electionDiv";
import CarOption from "../utils/carOption";
import Footer from "../utils/footer";
import { useGetWindowSize } from "../hooks/useGetWindowSixe";
import Simulation from "../lib/simulation";
import moment from "moment";
import { convDate } from "../utils/convDate";

const formDefaultValue = {
  electoralClass: "union", // 選挙区分
  electionArea: { label: "鳥取県", value: "tottori" }, // 選挙エリア
  parliamentClass: "chairman", // 議会区分

  carClass: "lightCar",
  carType: {
    boxCar: "",
  },
  signalLight: "outLight", // ライト区分
  ampSize: "150", // アンプサイズ
  speaker: "twe", // スピーカー

  wirelessMike: false, // ワイヤレスマイク
  wirelessMikeNumber: "one", //ワイヤレスマイク数
  sd: false, // SDカード
  wirelessIncome: false, // ワイヤレスインカム
  handSpeaker: false, // ハンドスピーカー
  bodyRapping: false, // ボディラッピング


};

const Home = () => {
  const windowSize = useGetWindowSize();
  const [calcValue, setCalcValue] = useState<any>("0");

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setValue,
  } = useForm<any>({
    defaultValues: formDefaultValue,
    // resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<any> = (inputValues) => {
    console.dir(inputValues);
    
    inputValues.notificationDate = convDate(inputValues.notificationDate);

    const calcData = Simulation(inputValues);
    setCalcValue(calcData);
  };

  useEffect(() => {
    // const calcData = Simulation(formDefaultValue);
    // setCalcValue(calcData);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ background: blue }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 0,
            overflow: "scroll",
            height: windowSize.height - 120,
          }}
        >

          <Grid container>

            {/*メインタイトル*/}
            <Grid item sm={12}>
              <Typography variant={"h5"}>料金シュミレーション</Typography>
            </Grid>
            <Grid item sm={12}>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            <form onBlur={handleSubmit(formSubmitHandler)}>

              {/*選挙区分*/}
              <ElectionDiv control={control} errors={errors} />

              {/*サイズ・車両タイプ*/}
              <CarType control={control} errors={errors} calcValue={calcValue} />

              {/*オプション選択*/}
              <CarOption control={control} errors={errors} calcValue={calcValue} />

              {/*  フッター  */}
              <Footer calcValue={calcValue} />


            </form>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );

};

export default Home;
