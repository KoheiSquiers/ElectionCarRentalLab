import { Grid } from "@mui/material";
import RhfToggleButtonGroup from "../../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfRadioButton } from "../../component/molecules/rhfForm";
import React from "react";

interface option {
  control: any;
  errors: any;
}

const nBoxOption = ({ control, errors }: option) => {
  return (
    <Grid item sm={12}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Grid item sm={7} />
        <Grid item sm={5}>
          <RhfToggleButtonGroup
            control={control}
            errors={errors}
            name={"signalLight"}
            size={"small"}
            sx={{ whiteSpace: "nowrap" }}
            options={
              [
                { label: "外照明", value: "outLight" },
              ]
            }
          />
        </Grid>

        <Grid item sm={8}>
          <Grid container>

            <Grid item sm={12}>
              <RhfRadioButton
                control={control}
                errors={errors}
                name={"ampSize"}
                label={"アンプサイズ"}
                size={"small"}
                row={true}
                sx={{ pl: "20px", flexWrap: "nowrap" }}
                options={
                  [
                    { label: "150w", value: "150" },
                  ]
                }
              />
            </Grid>

            <Grid item sm={12}>
              <RhfRadioButton
                control={control}
                errors={errors}
                name={"speaker"}
                label={"スピーカー"}
                size={"small"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "2個", value: "twe" },
                    { label: "4個", value: "four" },
                  ]
                }
              />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
};

export default nBoxOption;
