import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfRadioButton } from "../component/molecules/rhfForm";


interface Props {
  control: any;
}

const SubTotal = ({ control }: Props) => {
  return (
    <Grid item sm={12}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >

        <Grid item sm={8}>
          <Grid container>

            <Grid item sm={12}>
              <RhfRadioButton
                control={control}
                name={"ampSize"}
                label={"アンプサイズ"}
                size={"small"}
                row={true}
                sx={{ pl: "20px" }}
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
                name={"speaker"}
                label={"スピーカー"}
                size={"small"}
                row={true}
                sx={{ pl: "20px" }}
                options={
                  [
                    { label: "2個", value: "twe" },
                    { label: "3個", value: "three" },
                  ]
                }
              />
            </Grid>

          </Grid>
        </Grid>

        <Grid item sm={4}>
          <Typography
            variant={"h6"}
            textAlign={"center"}
            fontStyle={"italic"}
            borderBottom={1}
          >
            ¥ 24,003
          </Typography>
        </Grid>


      </Grid>
    </Grid>

  );
};

export default SubTotal;
