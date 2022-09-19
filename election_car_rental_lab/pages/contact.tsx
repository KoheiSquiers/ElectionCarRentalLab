import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Step,
  StepButton,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useQState } from "../hooks/library/useQstate";
import { blue } from "@mui/material/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { RhfSelectBox, RhfTextArea } from "../component/molecules/rhfForm";
import Layout from "../component/templates/layout";
import { useGetWindowSize } from "../hooks/useGetWindowSixe";
import { useRouter } from "next/router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "../utils/contact/input";
import Confirmation from "../utils/contact/confirmation";
import Sending from "../utils/contact/sending";

const Contact = () => {
  const windowSize = useGetWindowSize();

  const [sendData] = useQState<any>(["sendData"]);
  const [calcData] = useQState<any>(["calcData"]);

  // カラー変更
  const [globalColor, setGlobalColor] = useQState<string>(
    ["globalColor"],
    "warning",
  );
  const handleChangeColor = (event: SelectChangeEvent) => {
    setGlobalColor(event.target.value);
  };

  // レイアウトサイズ変更
  const [containerSize, setContainerSize] = useState<any>("md");
  const handleChangeSize = (event: SelectChangeEvent) => {
    setContainerSize(event.target.value);
  };

  // formType Change
  const [formTypeChange, setFormTypeChange] = useState<any>("outlined");
  const handleChangeForm = (event: SelectChangeEvent) => {
    setFormTypeChange(event.target.value);
  };

  const schema = yup.object().shape({
    name: yup.string().required("必須です"),
    furigana: yup.string().required("必須です"),
  });

  // react hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    setValue,
    watch,
  } = useForm<any>({
    // defaultValues: formDefaultValue,
    resolver: yupResolver(schema),
  });

  const [inputData, setInputData] = useState();

  const formSubmitHandler: SubmitHandler<any> = (data) => {
    setInputData(data);
    setStepper(1);
    // alert("まだ作ってないでーしゅ");
  };

  // stepper control
  const [stepper, setStepper] = useState<number>(0);

  return (
    <>
      <Layout>
        <Container maxWidth={containerSize}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box
              sx={{
                pt: 0,
                pl: 3,
                pr: 3,
                pb: 0,
                overflow: "scroll",
                height: windowSize.height - 70,
              }}
            >
              <Grid container>
                {/*メインタイトル*/}
                <Grid item sm={6}>
                  <Typography variant={"h5"}>お問合せ(未完成)</Typography>
                </Grid>

                <Grid item sm={2} sx={{ pr: 1 }}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>カラータイプ</InputLabel>
                    <Select value={globalColor} onChange={handleChangeColor}>
                      <MenuItem value={"primary"}>青色</MenuItem>
                      <MenuItem value={"secondary"}>紫色</MenuItem>
                      <MenuItem value={"error"}>赤色</MenuItem>
                      <MenuItem value={"warning"}>黄色</MenuItem>
                      <MenuItem value={"info"}>水色</MenuItem>
                      <MenuItem value={"success"}>緑色</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item sm={2} sx={{ pr: 1 }}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>フォームタイプ</InputLabel>
                    <Select value={formTypeChange} onChange={handleChangeForm}>
                      <MenuItem value={"standard"}>パターン1</MenuItem>
                      <MenuItem value={"filled"}>パターン2</MenuItem>
                      <MenuItem value={"outlined"}>パターン3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item sm={2}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>レイアウトサイズ</InputLabel>
                    <Select value={containerSize} onChange={handleChangeSize}>
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

                {/*ステッパー*/}
                <Grid item sm={12}>
                  <Box sx={{ pb: 4 }}>
                    <Container maxWidth="sm">
                      <Stepper activeStep={stepper}>
                        <Step>
                          <StepButton>お問合せ入力</StepButton>
                        </Step>

                        <Step>
                          <StepButton>お問合せ確認</StepButton>
                        </Step>

                        <Step>
                          <StepButton>送信</StepButton>
                        </Step>
                      </Stepper>
                    </Container>
                  </Box>
                </Grid>

                {/*メインフォーム*/}
                <Grid item sm={12}>
                  <form onSubmit={handleSubmit(formSubmitHandler)}>
                    {/*入力*/}
                    {stepper === 0 && (
                      <InputForm
                        control={control}
                        errors={errors}
                        variant={formTypeChange}
                        setStepper={setStepper}
                      />
                    )}

                    {/*確認*/}
                    {stepper === 1 && (
                      <Confirmation
                        inputData={inputData}
                        setStepper={setStepper}
                      />
                    )}

                    {/*送信*/}
                    {stepper === 2 && <Sending setStepper={setStepper} />}
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Layout>
    </>
  );
};
export default Contact;
