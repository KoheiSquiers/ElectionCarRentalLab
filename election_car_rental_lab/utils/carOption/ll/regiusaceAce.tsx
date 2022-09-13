import { Grid, Typography } from "@mui/material";
import RhfToggleButtonGroup from "../../../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfRadioButton } from "../../../component/molecules/rhfForm";
import React from "react";

interface option {
  control: any;
  errors: any;
  calcValue: any;
}

const RegiusaceAceOption = ({ control, errors, calcValue }: option) => {
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
                { label: "内照明", value: "inLight" },
                { label: "登壇", value: "topLight" },
                // todo ワイドadd
                { label: "ワイドボディ", value: "outLight" },
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
                    // todo 600w add
                    { label: "600w", value: "150" },
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

        <Grid item sm={4}>
          <Typography
            variant={"h6"}
            textAlign={"right"}
            fontStyle={"italic"}
          >
            {`小計 ¥ ${calcValue.subTotalPrice.toLocaleString()}（税込）`}
          </Typography>
        </Grid>


      </Grid>
    </Grid>

  );
};

export default RegiusaceAceOption;
