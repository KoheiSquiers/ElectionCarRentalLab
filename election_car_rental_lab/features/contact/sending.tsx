import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

interface SendingProps {
  setStepper: any;
}

const Sending = ({ setStepper }: SendingProps) => {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="xs">
        <Grid container>
          <Grid item sm={12}>
            <Typography variant={"h6"}>送信しました</Typography>
          </Grid>
          <Grid item sm={12}>
            <Box textAlign={"right"} padding={2}>
              <Button
                variant={"contained"}
                centerRipple={true}
                onClick={() => {
                  router.push("simulation");
                }}
              >
                シュミレーションに戻る
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Sending;
