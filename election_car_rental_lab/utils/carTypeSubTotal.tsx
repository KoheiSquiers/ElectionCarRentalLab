import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfRadioButton } from "../component/molecules/rhfForm";


interface Props {
  control: any;
  errors: any;
  calcValue: any;
}

const CarTypeSubTotal = ({ control, errors, calcValue }: Props) => {
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
                { label: "内照明", value: "inLight" },
                { label: "登壇", value: "topLight" },
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
                    { label: "300w", value: "300" },
                    { label: "600w", value: "600" },
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
            // borderBottom={1}
          >
            {`小計 ¥ ${calcValue.subTotalPrice.toLocaleString()}（税込）`}
          </Typography>
        </Grid>


      </Grid>
    </Grid>

  );
};

export default CarTypeSubTotal;
