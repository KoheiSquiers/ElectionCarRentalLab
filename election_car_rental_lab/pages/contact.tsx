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

const Contact = () => {
  const router = useRouter();
  const windowSize = useGetWindowSize();

  const [sendData] = useQState<any>(["sendData"]);
  const [calcData] = useQState<any>(["calcData"]);

  // カラー変更
  const [globalColor, setGlobalColor] = useQState<string>(
    ["globalColor"],
    "primary",
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
  const [formTypeChange, setFormTypeChange] = useState<any>("standard");
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

  const formSubmitHandler: SubmitHandler<any> = (data) => {
    alert("まだ作ってないでーしゅ");
  };

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
                  <Box sx={{ pb: 2 }}>
                    <Container maxWidth="sm">
                      <Stepper>
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
                    {/* container fixsed で可変スタイルでもいいかも*/}
                    <Container maxWidth="xs">
                      <Grid container rowSpacing={2}>
                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"name"}
                            label={"お名前*"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"furigana"}
                            label={"フリガナ*"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"tel"}
                            label={"電話番号"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"mail"}
                            label={"メールアドレス*"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"mailCheck"}
                            label={"メールアドレス再入力*"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"postCode"}
                            label={"郵便番号"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"address"}
                            label={"住所"}
                            variant={formTypeChange}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfSelectBox
                            control={control}
                            errors={errors}
                            name={"contactType"}
                            label={"当社との連絡方法*"}
                            variant={formTypeChange}
                            options={[
                              { label: "電話", value: "tel" },
                              { label: "メール", value: "mail" },
                            ]}
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <RhfTextArea
                            control={control}
                            errors={errors}
                            name={"contactDetails"}
                            label={"お問合せ内容"}
                            variant={formTypeChange}
                            multiline={true}
                            rows={5}
                          />
                        </Grid>

                        <Grid item sm={6}>
                          <Box textAlign={"left"} padding={2}>
                            <Button
                              variant={"outlined"}
                              centerRipple={true}
                              onClick={() => {
                                router.back();
                              }}
                            >
                              戻る
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item sm={6}>
                          <Box textAlign={"right"} padding={2}>
                            <Button
                              type="submit"
                              variant={"contained"}
                              centerRipple={true}
                            >
                              確認画面へ
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
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
