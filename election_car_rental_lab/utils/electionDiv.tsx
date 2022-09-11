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
import { prefCd } from "../constants/preCd";
import RhfDatePicker from "../component/molecules/rhfForm/rhfDatePicker";

interface Props {
  control: any;
  errors: any;
  setValue: any;
}

const ElectionDiv = ({ control, errors, setValue }: Props) => {


  // const [alignment, setAlignment] = React.useState("union");
  // const handleAlignment = (
  //   event: React.MouseEvent<HTMLElement>,
  //   newAlignment: string | null,
  // ) => {
  //   console.dir(newAlignment);
  //   if (newAlignment !== null) {
  //     setAlignment(newAlignment);
  //     setValue(newAlignment, true);
  //   } else {
  //     setValue("union", false);
  //     setValue("general", false);
  //     setValue("lowRep", false);
  //     setValue("advertisement", false);
  //     setValue(newAlignment, true);
  //   }
  //
  // };

  return (
    <>

      {/*<Grid item sm={12}>*/}

      {/*  <ToggleButtonGroup*/}
      {/*    value={alignment}*/}
      {/*    exclusive*/}
      {/*    color="primary"*/}
      {/*    fullWidth*/}
      {/*    sx={{ pb: 1, whiteSpace: "nowrap" }}*/}
      {/*    onChange={handleAlignment}*/}
      {/*  >*/}
      {/*    <ToggleButton value={"union"}>*/}
      {/*      統一地方選*/}
      {/*    </ToggleButton>*/}
      {/*    <ToggleButton value={"general"}>*/}
      {/*      一般選挙*/}
      {/*    </ToggleButton>*/}
      {/*    <ToggleButton value={"lowRep"}>*/}
      {/*      衆議委員選挙*/}
      {/*    </ToggleButton>*/}
      {/*    <ToggleButton value={"advertisement"}>*/}
      {/*      広告宣伝者*/}
      {/*    </ToggleButton>*/}
      {/*  </ToggleButtonGroup>*/}
      {/*</Grid>*/}


      <Grid item sm={12}>
        <RhfToggleButtonGroup
          control={control}
          errors={errors}
          name={"electoralClass"}
          sx={{ pb: 1, whiteSpace: "nowrap" }}
          options={
            [
              // { label: "統一地方選挙", value: "union" },
              // { label: "一般地方選挙", value: "general" },
              // { label: "衆・参議委員選挙", value: "lowRep" },
              // { label: "広告宣伝者", value: "advertisement" },
              { label: "統一地方選挙", value: "1" },
              { label: "一般地方選挙", value: "2" },
              { label: "衆・参議委員選挙", value: "3" },
              { label: "広告宣伝者", value: "4" },

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
                options={prefCd}
              />
            </Grid>

            <Grid item sm={4} sx={{ pr: 2 }}>
              <RhfDatePicker
                control={control}
                errors={errors}
                name={"notificationDate"}
                label={"告示日"} />
            </Grid>

            <Grid item sm={4} sx={{ pr: 2 }}>
              <RhfToggleButtonGroup
                control={control}
                errors={errors}
                name={"parliamentClass"}
                size={"small"}
                sx={{ pt: "8px" }}
                options={
                  [
                    { label: "議員", value: "chairman" },
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
