import React, { useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Divider,
  Grid,
  Button,

} from "@mui/material";
import { blue, green } from "@mui/material/colors";

import { SubmitHandler, useForm } from "react-hook-form";


import CarType from "../utils/carType";
import ElectionDiv from "../utils/electionDiv";
import CarOption from "../utils/carOption";

const Home = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setValue,
  } = useForm<any>({
    // defaultValues: formDefaultValue,
    // resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<any> = (inputValues) => {
    alert("form が送信されました");
    console.dir(inputValues);
  };
  return (
    <Container maxWidth="sm" sx={{ background: blue }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Grid container>

          {/*メインタイトル*/}
          <Grid item sm={6}>
            <Typography variant={"h5"}>お見積り</Typography>
          </Grid>
          <Grid item sm={12}>
            <Divider sx={{ mb: 2 }} />
          </Grid>
          <form onSubmit={handleSubmit(formSubmitHandler)}>

            {/*選挙区分*/}
            <ElectionDiv control={control} errors={errors} />

            {/*サイズ・車両タイプ*/}
            <CarType control={control} errors={errors} />

            {/*オプション選択*/}
            <CarOption control={control} errors={errors} />

            {/*送信ボタン*/}
            {/*最終的にはフォーカスを外した段階で送信させる*/}
            <Button type="submit" variant="contained" size="large">
              登録
            </Button>
          </form>
        </Grid>
      </Paper>
    </Container>
  );

};

export default Home;
