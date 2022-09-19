import { Box, Button, Container, Grid } from "@mui/material";
import { RhfSelectBox, RhfTextArea } from "../../component/molecules/rhfForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface InputFormProps {
  control: any;
  errors: any;
  variant: any;
  setStepper: any;
}

const InputForm = ({
  control,
  errors,
  variant,
  setStepper,
}: InputFormProps) => {
  const router = useRouter();

  useEffect(() => {
    setStepper(0);
  }, []);

  return (
    //   container fixsed で可変スタイルでもいいかも

    <Container maxWidth="xs">
      <Grid container rowSpacing={2}>
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
          <RhfTextArea
            control={control}
            errors={errors}
            name={"postCode"}
            label={"郵便番号"}
            variant={variant}
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
            <Button type={"submit"} variant={"contained"} centerRipple={true}>
              確認画面へ
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InputForm;
