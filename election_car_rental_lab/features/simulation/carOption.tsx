import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Radio,
  Typography,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Controller, useWatch } from "react-hook-form";

import RhfToggleButtonGroup from "../../component/molecules/rhfForm/rhfToggleButtonGroup";
import {
  RhfAutocomplete,
  RhfRadioButton,
  RhfSelectBox,
} from "../../component/molecules/rhfForm";
import RhfCheckbox from "../../component/molecules/rhfForm/rhfCheckbox";
import { monthSelect } from "../../constants/month";

interface Props {
  control: any;
  errors: any;
  calcValue: any;
}

const CarOption = ({ control, errors, calcValue }: Props) => {
  // ワイヤレスマイクフォーム制御
  //
  const [mikeLabel, setMikeLabel] = useState<string>("¥15,000");
  const [mikeNumberDisabled, setMikeNumberDisabled] = useState<boolean>(false);
  // マイクチェック状態とマイク数量を取得
  const getMike = useWatch({ control, name: "wirelessMike" });
  const getMikeNum = useWatch({ control, name: "wirelessMikeNumber" });
  useEffect(() => {
    // disable 解除
    setMikeNumberDisabled(!getMike);

    // ラベルセット
    switch (getMikeNum) {
      case 1:
        setMikeLabel("¥15,000");
        return;
      case 2:
        setMikeLabel("¥30,000");
        return;
    }
  }, [getMike, getMikeNum]);

  // 保険フォーム制御
  //
  const [insuranceLabel, setInsuranceLabel] = useState<string>("¥1,500");
  const [insuranceDaysDisabled, setInsuranceDaysDisabled] =
    useState<boolean>(false);
  // 保険チェック状態と保険日数を取得
  const getInsurance = useWatch({ control, name: "insurance" });
  const getInsuranceDays = useWatch({ control, name: "insuranceDays" });
  useEffect(() => {
    // disable 解除
    setInsuranceDaysDisabled(!getInsurance);

    // ラベルセット
    const label = 1500 * getInsuranceDays;

    setInsuranceLabel(`¥${label.toLocaleString()}`);
  }, [getInsurance, getInsuranceDays]);

  return (
    <>
      <Grid item xs={12}>
        <Typography variant={"h6"}>オプション</Typography>
      </Grid>

      <Grid item xs={12}>
        <Container fixed>
          <Grid container alignItems="flex-end" sx={{ pb: 2 }}>
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={6} sm={4}>
                  <RhfCheckbox
                    control={control}
                    errors={errors}
                    label={"ワイヤレスマイク"}
                    sx={{ pl: "20px" }}
                    options={[{ label: mikeLabel, name: "wirelessMike" }]}
                  />
                </Grid>

                <Grid item xs={6} sm={8}>
                  <RhfSelectBox
                    name={"wirelessMikeNumber"}
                    label={""}
                    disabled={mikeNumberDisabled}
                    variant={"standard"}
                    control={control}
                    errors={errors}
                    sx={{ maxWidth: 150 }}
                    options={[
                      { label: "1本", value: 1 },
                      { label: "2本", value: 2 },
                    ]}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <RhfCheckbox
                control={control}
                errors={errors}
                label={"SD"}
                row={true}
                sx={{ pl: "20px" }}
                options={[{ label: "¥20,000", name: "sd" }]}
              />
            </Grid>

            <Grid item xs={12}>
              <RhfCheckbox
                control={control}
                errors={errors}
                label={"ワイヤレスインカム"}
                row={true}
                sx={{ pl: "20px" }}
                options={[{ label: "¥1,000", name: "wirelessIncome" }]}
              />
            </Grid>

            <Grid item xs={12}>
              <RhfCheckbox
                control={control}
                errors={errors}
                label={"ハンドスピーカー"}
                row={true}
                sx={{ pl: "20px" }}
                options={[{ label: "¥1,500", name: "handSpeaker" }]}
              />
            </Grid>

            <Grid item xs={12}>
              <RhfCheckbox
                control={control}
                errors={errors}
                label={"Bluetoothユニット"}
                row={true}
                sx={{ pl: "20px" }}
                options={[{ label: "￥15,000", name: "bluetoothUnit" }]}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={6} sm={4}>
                  <RhfCheckbox
                    control={control}
                    errors={errors}
                    label={"保険"}
                    row={true}
                    sx={{ pl: "20px" }}
                    options={[{ label: insuranceLabel, name: "insurance" }]}
                  />
                </Grid>
                <Grid item xs={6} sm={8}>
                  <RhfSelectBox
                    control={control}
                    errors={errors}
                    name={"insuranceDays"}
                    label={"日数"}
                    variant={"standard"}
                    disabled={insuranceDaysDisabled}
                    sx={{ maxWidth: 150 }}
                    options={monthSelect}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <RhfCheckbox
                control={control}
                errors={errors}
                label={"ボディラッピング"}
                row={true}
                sx={{ pl: "20px" }}
                options={[{ label: "要相談", name: "bodyRapping" }]}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant={"h6"}
                textAlign={{ xs: "left", sm: "right" }}
                fontStyle={"italic"}
                // borderBottom={1}
              >
                {`オプション ¥ ${calcValue?.optionTotalPrice?.toLocaleString()}（税込）`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default CarOption;

// ゴミ箱

// <Grid item xs={12}>
//   <Container fixed>
//     <Grid container>
//
//       <Grid item xs={12}>
//         <RhfRadioButton
//           control={control}
//           name={"wirelessMike"}
//           label={""}
//           row={true}
//           options={
//             [
//               { label: "ワイヤレスマイク", value: "true" },
//             ]
//           }
//         />
//       </Grid>
//
//       <Grid item xs={12}>
//         <RhfRadioButton
//           control={control}
//           name={"sd"}
//           label={""}
//           row={true}
//           options={
//             [
//               { label: "SD", value: "true" },
//             ]
//           }
//         />
//       </Grid>
//
//       <Grid item xs={12}>
//         <RhfRadioButton
//           control={control}
//           name={"wirelessIncome"}
//           label={""}
//           row={true}
//           options={
//             [
//               { label: "ワイヤレスインカム", value: "true" },
//             ]
//           }
//         />
//       </Grid>
//
//       <Grid item xs={12}>
//         <RhfRadioButton
//           control={control}
//           name={"handSpeaker"}
//           label={""}
//           row={true}
//           options={
//             [
//               { label: "ハンドスピーカー", value: "true" },
//             ]
//           }
//         />
//       </Grid>
//
//       <Grid item xs={12}>
//         <RhfRadioButton
//           control={control}
//           name={"bodyRapping"}
//           label={""}
//           row={true}
//           options={
//             [
//               { label: "ボディラッピング", value: "true" },
//             ]
//           }
//         />
//       </Grid>
//
//     </Grid>
//
//
//   </Container>
// </Grid>
