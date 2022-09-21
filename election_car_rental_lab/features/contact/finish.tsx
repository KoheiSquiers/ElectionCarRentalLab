import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

interface SendingProps {
  setStepper: any;
}

const Finish = ({ setStepper }: SendingProps) => {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="xs">
        <Grid container>
          <Grid item sm={12}>
            <Typography
              textAlign={"center"}
              variant={"h6"}
              sx={{ textDecoration: "underline" }}
            >
              送信完了
            </Typography>
          </Grid>

          <Grid item sm={12} sx={{ pt: 2 }}>
            <Typography textAlign={"center"}>仮文章</Typography>
          </Grid>

          <Grid item sm={12} sx={{ pt: 2 }}>
            <Typography textAlign={"center"}>
              お問合せいただきありがとうございました。
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography textAlign={"center"}>
              3営業日以内にご希望いただいた連絡方法にて、弊社からご連絡させていただきます。
            </Typography>
          </Grid>
          <Grid item sm={12} sx={{ pt: 2 }}>
            <Typography textAlign={"center"}>
              ＊3営業日以内に連絡がない場合は、お手数ですが、下記連絡先までお問合せください。
            </Typography>
          </Grid>
          <Grid item sm={12} sx={{ pt: 2 }}>
            <Typography textAlign={"center"}>
              ＊3営業日以内に連絡がない場合は、お手数ですが、下記連絡先までお問合せください。
            </Typography>
          </Grid>
          <Grid item sm={12} sx={{ pt: 2 }}>
            <Typography variant={"h6"} textAlign={"center"}>
              090-1234-4567
            </Typography>
          </Grid>

          <Grid item sm={6} sx={{ pt: 4 }}>
            <Box textAlign={"center"}>
              <Button
                variant="outlined"
                startIcon={<PictureAsPdfIcon />}
                onClick={() => {
                  alert("未完成");
                }}
              >
                見積もり発行
              </Button>
            </Box>
          </Grid>

          <Grid item sm={6} sx={{ pt: 4 }}>
            <Box textAlign={"center"}>
              <Button
                variant={"contained"}
                centerRipple={true}
                onClick={() => {
                  router.push("simulation");
                }}
              >
                {"　　　TOP　　　"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Finish;
