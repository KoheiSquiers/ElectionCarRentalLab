import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Divider,
  Grid,
  Button, Box, FormControl, InputLabel, MenuItem, SelectChangeEvent, Select,

} from "@mui/material";
import { blue, green } from "@mui/material/colors";

import { SubmitHandler, useForm, useWatch } from "react-hook-form";


import CarClass from "../utils/carClass";
import ElectionDiv from "../utils/electionDiv";
import CarOption from "../utils/carOption";
import Footer from "../utils/footer";
import { useGetWindowSize } from "../hooks/useGetWindowSixe";
import Simulation from "../lib/simulation";

const formDefaultValue = {
  electoralClass: "union", // レンタル区分
  electionArea: { label: "鳥取県", value: "tottori" }, // 選挙エリア
  parliamentClass: "chairman", // 議会区分

  carClass: "s", // 車区分
  carType: { s: "nBox", m: "corollaFielder", l: "noah", ll: "regiusaceAce" }, // 車種

  signalLight: "outLight", // ライト区分
  ampSize: "150", // アンプサイズ
  speaker: "twe", // スピーカー

  wirelessMike: false, // ワイヤレスマイク
  wirelessMikeNumber: 1, //ワイヤレスマイク数
  sd: false, // SDカード
  wirelessIncome: false, // ワイヤレスインカム
  handSpeaker: false, // ハンドスピーカー
  insurance: false,
  insuranceDays: 1,
  bodyRapping: false, // ボディラッピング


};

const Home = () => {
  const windowSize = useGetWindowSize();

  // レイアウトサイズ変更
  const [containerSize, setContainerSize] = useState<any>("md");
  const handleChange = (event: SelectChangeEvent) => {
    setContainerSize(event.target.value);
  };

  const [calcValue, setCalcValue] = useState<any>({
    subTotalPrice: 0,
    optionTotalPrice: 0,
    totalPrice: 0,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setValue,
    watch,
  } = useForm<any>({
    defaultValues: formDefaultValue,
    // resolver: yupResolver(schema),
  });


  // 値が変更されるたびにページ全体がレンダリングされるため、最適解ではない。
  // メモ化などを行い、レンダリングをコントロールするべき
  // 特にAPI fetchは気をつけよう
  useEffect(() => {
    const subscription = watch((value) => {
      console.dir(value);
      const calcData = Simulation(value);
      setCalcValue(calcData);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // 初回レンダリング時に計算を行う
  useEffect(() => {
    const calcData = Simulation(formDefaultValue);
    setCalcValue(calcData);
  }, []);

  return (
    <Container maxWidth={containerSize} sx={{ background: blue }}>
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
            <Grid item sm={8}>
              <Typography variant={"h5"}>料金シュミレーション</Typography>
            </Grid>
            <Grid item sm={4}>

              <FormControl fullWidth variant="standard">
                <InputLabel>レイアウトサイズ</InputLabel>
                <Select value={containerSize} onChange={handleChange}>
                  <MenuItem value={"xs"}>xs</MenuItem>
                  <MenuItem value={"sm"}>sm</MenuItem>
                  <MenuItem value={"md"}>md</MenuItem>
                  <MenuItem value={"lg"}>lg</MenuItem>
                  <MenuItem value={"xl"}>xl</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={12}>
              <Divider sx={{ mb: 2, mt: 2 }} />
            </Grid>

            {/*TODO 最適化*/}
            <form
              // onClick={handleSubmit(formSubmitHandler)}
              // onChange={handleSubmit(formSubmitHandler)}
              // onBlur={handleSubmit(formSubmitHandler)}
            >

              {/*選挙区分*/}
              <ElectionDiv control={control} errors={errors} setValue={setValue} />

              {/*サイズ・車両タイプ*/}
              <CarClass setValue={setValue} control={control} errors={errors} calcValue={calcValue} />

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
