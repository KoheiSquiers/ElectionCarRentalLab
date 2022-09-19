import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

interface SendingProps {
  setStepper: any;
}

const Sending = ({ setStepper }: SendingProps) => {
  const router = useRouter();

  return (
    <>
      <Typography>送信しました</Typography>
      <Grid item sm={6}>
        <Box textAlign={"left"} padding={2}>
          <Button
            variant={"outlined"}
            centerRipple={true}
            onClick={() => {
              setStepper(1);
            }}
          >
            戻る
          </Button>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box textAlign={"right"} padding={2}>
          <Button
            variant={"contained"}
            centerRipple={true}
            onClick={() => {
              router.push("simulation");
            }}
          >
            TOP
          </Button>
        </Box>
      </Grid>
    </>
  );
};
export default Sending;
