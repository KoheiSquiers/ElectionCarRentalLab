import {
  Autocomplete,
  Container,
  Divider,
  Grid,
  TextField, TextFieldProps,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";


import React, { useState } from "react";
import { RhfAutocomplete } from "../component/molecules/rhfForm";
import ja from "date-fns/locale/ja";
import { Controller } from "react-hook-form";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props {
  control: any;
  errors: any;
}

const ElectionDiv = ({ control, errors }: Props) => {

  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      {/*<Grid item sm={12}>*/}
      {/*  <Typography variant={"h6"}>選挙区分</Typography>*/}
      {/*</Grid>*/}

      <Grid item sm={12}>
        <RhfToggleButtonGroup
          control={control}
          name={"electoralClass"}
          sx={{ pb: 1 }}
          options={
            [
              { label: "統一地方選", value: "union" },
              { label: "一般選挙", value: "general" },
              { label: "衆議委員選挙", value: "lowRep" },
              { label: "広告宣伝者", value: "kokoku" },

            ]
          }
        />
      </Grid>
      <Grid item sm={12} sx={{ pb: 2 }}>
        <Container fixed>
          <Grid
            container
          >
            <Grid item sm={4} sx={{ pr: 2 }}>
              <RhfAutocomplete
                name={"electionArea"}
                label={"選挙区"}
                variant={"standard"}
                control={control}
                errors={errors}
                size={"small"}
                options={
                  [
                    { label: "鳥取県", value: "tottori" },
                    { label: "島根県", value: "shimane" },
                  ]
                }
              />
            </Grid>

            <Grid item sm={4} sx={{ pr: 2 }}>
              {/*TODO datePicker 日本語化　コンポーネント作成*/}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="告示日"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField size={"small"} variant={"standard"} {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item sm={4} sx={{ pr: 2 }}>
              <RhfToggleButtonGroup
                control={control}
                name={"parliamentClass"}
                size={"small"}
                sx={{ pt: "8px" }}
                options={
                  [
                    { label: "議長", value: "chairman" },
                    { label: "首長", value: "chief" },
                  ]
                }
              />
            </Grid>


          </Grid>
          {/*<Grid item sm={12}>*/}
          {/*  <Divider sx={{ mb: 2 }} />*/}
          {/*</Grid>*/}
        </Container>
      </Grid>
    </>
  );
};


export default ElectionDiv;
