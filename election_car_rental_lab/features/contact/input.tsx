import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Tooltip,
} from "@mui/material";

import { RhfSelectBox, RhfTextArea } from "../../component/molecules/rhfForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./parts/inputParts";
import { InputValue } from "../../pages/contact";

import { Controller } from "react-hook-form";

import SearchIcon from "@mui/icons-material/Search";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useGetZipAddress } from "../../hooks/api/useGetZipAddress";
import useFetch from "../../hooks/fech/use-fetch";
import { useQuery } from "@tanstack/react-query";

interface InputFormProps {
  variant: any;
  setStepper: any;
  setInputData: any;
}

const InputForm = ({ variant, setStepper, setInputData }: InputFormProps) => {
  const router = useRouter();

  const defaultValues: InputValue = {
    name: "", //"お名前"
    furigana: "", //"フリガナ"
    tel: "", //"電話番号"
    mail: "", //"メールアドレス"
    mailCheck: "", // 再確認メールアドレス
    postCode: "", //"郵便番号"
    address: "", //"住所"
    contactType: "", //"当社との連絡方法"
    contactDetails: "", //"お問合せ内容"
  };

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
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<any> = (data) => {
    setInputData(data);
    setStepper(1);
  };

  const [zip, setZip] = useState<string>("");
  const address = useGetZipAddress(zip);

  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const GetAdd = () => {
    const getPostCode = getValues("postCode");
    setZip(getPostCode);
    console.dir(address.data.results);
    if (address.data.results !== null) {
      setValue(
        "address",
        address?.data?.results[0]?.address1 +
          address?.data?.results[0]?.address2 +
          address?.data?.results[0]?.address3,
      );
      setAlertOpen(false);
    } else {
      setAlertOpen(true);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  useEffect(() => {
    setStepper(0);
  }, []);

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      {/* container fixsed で可変スタイルでもいいかも */}
      <Container maxWidth="xs">
        <Grid container rowSpacing={2}>
          {alertOpen && (
            <Snackbar
              open={alertOpen}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                severity="error"
                onClose={handleClose}
                sx={{ width: "100%" }}
              >
                住所の検索に失敗しました。
              </Alert>
            </Snackbar>
          )}
          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"name"}
              label={"お名前*"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"furigana"}
              label={"フリガナ*"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"tel"}
              label={"電話番号"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"mail"}
              label={"メールアドレス*"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"mailCheck"}
              label={"メールアドレス再入力*"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              control={control}
              name={"postCode"}
              render={({ field }): JSX.Element => (
                <FormControl fullWidth>
                  <InputLabel error={!!errors.postCode}>郵便番号</InputLabel>
                  <OutlinedInput
                    {...field}
                    error={!!errors.postCode}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            GetAdd();
                          }}
                          edge="end"
                        >
                          <Tooltip title="住所を検索" placement="top">
                            <SearchIcon />
                          </Tooltip>
                        </IconButton>
                      </InputAdornment>
                    }
                    label="郵便番号"
                  />
                  {errors.postCode && (
                    <FormHelperText error={!!errors.postCode}>
                      {errors?.postCode?.message as string}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfTextArea
              control={control}
              errors={errors}
              name={"address"}
              label={"住所"}
              variant={variant}
            />
          </Grid>

          <Grid item sm={12}>
            <RhfSelectBox
              control={control}
              errors={errors}
              name={"contactType"}
              label={"当社との連絡方法*"}
              variant={variant}
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
              variant={variant}
              multiline={true}
              rows={5}
            />
          </Grid>

          <Grid item sm={4}>
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
          <Grid item sm={8}>
            <Box textAlign={"right"} padding={2}>
              <Button type={"submit"} variant={"contained"} centerRipple={true}>
                確認画面へ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default InputForm;
