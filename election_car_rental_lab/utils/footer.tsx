import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {
  calcValue: any;
}

const Footer = ({ calcValue }: Props) => {


  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        mb: 0,
        height: 40,
        background: "white",

        pl: 3,
        pr: 3,
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid black",
        }}
      >
        <Grid container>
          <Grid container direction="row">
            <Grid item sm={2} />
            <Grid item sm={10}>
              <Typography
                variant={"h6"}
                textAlign={"right"}
                fontStyle={"italic"}
                borderBottom={1}
                noWrap={true}
              >
                {`合計金額 ¥${calcValue.totalPrice.toLocaleString()}（税込）`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
