import React from "react";
import {
  Container, Grid, Radio, Typography, FormControlLabel, RadioGroup, FormControl, Select, MenuItem, InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfAutocomplete, RhfRadioButton, RhfSelectBox } from "../component/molecules/rhfForm";
import RhfCheckbox from "../component/molecules/rhfForm/rhfCheckbox";


interface Props {
  control: any;
  errors: any;
}

const CarOption = ({ control, errors }: Props) => {
  return (
    <>
      <Grid item sm={12}>
        <Typography variant={"h6"}>オプション</Typography>
      </Grid>


      {/*テスト*/}
      <Grid item sm={12}>
        <Container fixed>
          <Grid container>
            <Grid item sm={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >

                <Grid item sm={4}>
                  <RhfCheckbox
                    control={control}
                    label={"ワイヤレスマイク"}
                    // row={true}
                    sx={{ pl: "20px" }}
                    options={
                      [
                        { label: "¥15,000~", name: "wirelessMike" },
                      ]
                    }
                  />
                </Grid>


                <Grid item sm={4}>
                  <RhfSelectBox
                    name={"wirelessMike.piece"}
                    label={""}
                    variant={"standard"}
                    control={control}
                    errors={errors}
                    sx={{ maxWidth: 80 }}
                    options={
                      [
                        { label: "1本", value: "one" },
                        { label: "2本", value: "twe" },
                      ]
                    }
                  />
                </Grid>

                <Grid item sm={4}>
                  <Typography textAlign={"center"}>
                    {/*¥15,000*/}
                  </Typography>
                </Grid>


              </Grid>
            </Grid>


            <Grid item sm={12}>
              <RhfCheckbox
                control={control}
                label={"SD"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "¥20,000", name: "sd" },
                  ]
                }
              />
            </Grid>

            <Grid item sm={12}>
              <RhfCheckbox
                control={control}
                label={"ワイヤレスインカム"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "¥1,000", name: "wirelessIncome" },
                  ]
                }
              />
            </Grid>

            <Grid item sm={12}>
              <RhfCheckbox
                control={control}
                label={"ハンドスピーカー"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "¥1,500", name: "handSpeaker" },
                  ]
                }
              />
            </Grid>

            <Grid item sm={12}>
              <RhfCheckbox
                control={control}
                label={"ボディラッピング"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "要相談", name: "bodyRapping" },
                  ]
                }
              />
            </Grid>

          </Grid>


        </Container>
      </Grid>

    </>

  );
};

export default CarOption;

// ゴミ箱

// <Grid item sm={12}>
//   <Container fixed>
//     <Grid container>
//
//       <Grid item sm={12}>
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
//       <Grid item sm={12}>
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
//       <Grid item sm={12}>
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
//       <Grid item sm={12}>
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
//       <Grid item sm={12}>
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
