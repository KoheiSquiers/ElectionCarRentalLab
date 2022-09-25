import {
  Autocomplete,
  Container,
  Divider,
  Grid,
  TextField,
  TextFieldProps,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import {
  RhfAutocomplete,
  RhfSelectBox,
} from "../../component/molecules/rhfForm";
import ja from "date-fns/locale/ja";
import { Controller } from "react-hook-form";
import RhfToggleButtonGroup from "../../component/molecules/rhfForm/rhfToggleButtonGroup";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { prefCd } from "../../constants/preCd";
import RhfDatePicker from "../../component/molecules/rhfForm/rhfDatePicker";
import { useGetWindowSize } from "../../hooks/useGetWindowSixe";

interface Props {
  control: any;
  errors: any;
  setValue: any;
}

const ElectionDiv = ({ control, errors, setValue }: Props) => {
  const windowSize = useGetWindowSize();
  const noSmartPhone = windowSize.width >= 600;
  return (
    <>
      {noSmartPhone && (
        <Grid item sm={12}>
          <RhfToggleButtonGroup
            control={control}
            errors={errors}
            name={"electoralClass"}
            sx={{ pb: 1, whiteSpace: "nowrap" }}
            options={[
              { label: "統一地方選挙", value: "union" },
              { label: "一般地方選挙", value: "general" },
              { label: "衆・参議委員選挙", value: "lowRep" },
              { label: "広告宣伝者", value: "advertisement" },
            ]}
          />
        </Grid>
      )}

      <Grid item sm={12} sx={{ pb: 2 }}>
        <Container fixed>
          <Grid container spacing={{ xs: 3, sm: 0 }}>
            {!noSmartPhone && (
              <Grid item xs={12}>
                <RhfSelectBox
                  control={control}
                  errors={errors}
                  label={"レンタル区分"}
                  name={"electoralClass"}
                  variant={"outlined"}
                  options={[
                    { label: "統一地方選挙", value: "union" },
                    { label: "一般地方選挙", value: "general" },
                    { label: "衆・参議委員選挙", value: "lowRep" },
                    { label: "広告宣伝者", value: "advertisement" },
                  ]}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={4} sx={{ pr: { sm: 2 } }}>
              <RhfAutocomplete
                name={"electionArea"}
                label={"選挙区"}
                variant={noSmartPhone ? "standard" : "outlined"}
                control={control}
                errors={errors}
                size={noSmartPhone ? "small" : "medium"}
                options={prefCd}
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ pr: { sm: 2 } }}>
              <RhfDatePicker
                control={control}
                errors={errors}
                variant={noSmartPhone ? "standard" : "outlined"}
                size={noSmartPhone ? "small" : "medium"}
                name={"notificationDate"}
                label={"告示日"}
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ pr: { sm: 2 } }}>
              <RhfToggleButtonGroup
                control={control}
                errors={errors}
                name={"parliamentClass"}
                size={"small"}
                sx={{ pt: "8px" }}
                options={[
                  { label: "議員", value: "chairman" },
                  { label: "首長", value: "chief" },
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ElectionDiv;
