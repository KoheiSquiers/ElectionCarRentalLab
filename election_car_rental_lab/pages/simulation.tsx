import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Divider,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";

import { SubmitHandler, useForm, useWatch } from "react-hook-form";

import { useQState } from "../hooks/library/useQstate";

import CarClass from "../features/simulation/carClass";
import ElectionDiv from "../features/simulation/electionDiv";
import CarOption from "../features/simulation/carOption";
import Footer from "../features/simulation/footer";
import { useGetWindowSize } from "../hooks/useGetWindowSixe";
import CalcSimulation from "../utils/calcSimulation";
import Layout from "../component/templates/layout";

export interface simulation {
  electoralClass: string; // レンタル区分
  electionArea: { label: string; value: string }; // 選挙エリア
  parliamentClass: string; // 議会区分

  carClass: string; // 車区分
  carType: { s: string; m: string; l: string; ll: string }; // 車種

  signalLight: string; // ライト区分
  ampSize: string; // アンプサイズ
  speaker: string; // スピーカー

  wirelessMike: boolean; // ワイヤレスマイク
  wirelessMikeNumber: number; //ワイヤレスマイク数
  sd: boolean; // SDカード
  wirelessIncome: boolean; // ワイヤレスインカム
  handSpeaker: boolean; // ハンドスピーカー
  bluetoothUnit: boolean; // Bluetoothユニット
  insurance: boolean;
  insuranceDays: number;
  bodyRapping: boolean; // ボディラッピング
}

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
  bluetoothUnit: false, // Bluetoothユニット
  insurance: false,
  insuranceDays: 1,
  bodyRapping: false, // ボディラッピング
};

const Simulation = () => {
  const windowSize = useGetWindowSize();

  // グローバルステート
  const [sendData, setSendData] = useQState(["sendData"], formDefaultValue);
  const [calcData, setCalcData] = useQState(["calcData"]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setValue,
    watch,
  } = useForm<any>({
    defaultValues: sendData,
    // resolver: yupResolver(schema),
  });

  // 値が変更されるたびにページ全体がレンダリングされるため、最適解ではない。
  // メモ化などを行い、レンダリングをコントロールするべき
  // 特にAPI fetchは気をつけよう
  useEffect(() => {
    const subscription = watch((value) => {
      const calcData = CalcSimulation(value);

      // グローバルステートにセット
      setSendData(value);
      setCalcData(calcData);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  //
  // 初回レンダリング時にグローバルステートにセット
  //
  useEffect(() => {
    // ToDo any!!
    const firstCalcData = CalcSimulation(sendData);
    setCalcData(firstCalcData);

    setSendData(sendData);
  }, [sendData, setCalcData, setSendData]);

  return (
    <Layout>
      <Grid container>
        {/*メインタイトル*/}
        <Grid item sm={12}>
          <Typography variant={"h5"}>料金シュミレーション</Typography>
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
          <CarClass
            setValue={setValue}
            control={control}
            errors={errors}
            calcValue={calcData}
          />

          {/*オプション選択*/}
          <CarOption control={control} errors={errors} calcValue={calcData} />

          {/*  フッター  */}
          <Footer calcValue={calcData} />
        </form>
      </Grid>
    </Layout>
  );
};

export default Simulation;
