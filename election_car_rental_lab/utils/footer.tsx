import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";

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
        height: 100,
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
        <Grid container sx={{ pt: 1 }}>
          <Grid sm={8}>
            <Grid container>
              <Grid item sm={12}>
                <Typography
                  variant={"h5"}
                  textAlign={"left"}
                  fontStyle={"italic"}
                  noWrap={true}
                  paddingBottom={1}
                >
                  {`合計金額 ¥${calcValue.totalPrice.toLocaleString()}（税込）`}
                </Typography>
              </Grid>
              <Typography
                variant={"caption"}
                textAlign={"left"}
                color={"red"}
              >
                {`公費負担額(¥16,100/日)は別途当社から選管にてご請求させていただきます。`}
              </Typography>

              <Typography
                variant={"caption"}
                textAlign={"left"}
                color={"red"}
              >
                *工費負担額とは、レンタカー利用の場合の借り入れ金額を指します。
              </Typography>

            </Grid>
          </Grid>

          <Grid item sm={4}>
            <Grid container rowSpacing={1}>

              <Grid item sm={12}>
                <Box textAlign={"right"}>
                  <Button
                    variant="outlined"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={() => {
                      alert("PDFはまだ作ってないよ！（9/21 完成予定）");
                    }}
                  >
                    見積もり
                  </Button>
                </Box>
              </Grid>

              <Grid item sm={12}>
                <Box textAlign={"right"}>
                  <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    onClick={() => {
                      alert("お問合せはまだ作ってないよ！（9/16完成予定）");
                    }}
                  >
                    お問合せ
                  </Button>
                </Box>
              </Grid>

            </Grid>
          </Grid>

        </Grid>

      </Box>
    </Box>
  );
};

export default Footer;
