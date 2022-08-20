import React, { useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Autocomplete,
  TextField,
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";

//datePicker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


import Image from "next/image";
import ImageTest from "../public/image/hakoban.jpeg";

const Home = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Container maxWidth="sm" sx={{ background: blue }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Grid container>
          {/*メインタイトル*/}
          <Grid sm={6}>
            <Typography variant={"h5"}>お見積り</Typography>
          </Grid>
          <Grid sm={12}>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          {/*選挙区分*/}
          <Grid sm={12}>
            <Typography variant={"h6"}>選挙区分</Typography>
          </Grid>
          <Grid sm={12}>
            <Container fixed>
              <Grid
                container
                spacing={1}
              >
                <Grid sm={12}>
                  <ToggleButtonGroup fullWidth sx={{ pb: 3 }}>
                    <ToggleButton value="1">統一地方選</ToggleButton>
                    <ToggleButton value="2">一般選挙</ToggleButton>
                    <ToggleButton value="3">衆議委員選挙</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid sm={6}>
                  <Autocomplete
                    options={[
                      { label: "The Shawshaaank Redemption", year: 1994 },
                      { label: "The Godfather", year: 1972 }]}
                    renderInput={(params) => <TextField variant={"standard"} {...params} label="選挙区" />}
                  />
                </Grid>
                <Grid sm={2}></Grid>
                <Grid sm={4}>
                  <ToggleButtonGroup fullWidth sx={{ pb: 3 }}>
                    <ToggleButton value="1">議長</ToggleButton>
                    <ToggleButton value="2">首長</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid sm={8}></Grid>
                <Grid sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="告示日"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

              </Grid>
              <Grid sm={12}>
                <Divider sx={{ mb: 2 }} />
              </Grid>
            </Container>
          </Grid>


          {/*サイズ・車両タイプ*/}
          <Grid sm={12}>
            <Typography variant={"h6"}>サイズ・車両タイプ</Typography>
          </Grid>

          <Grid sm={12}>
            <Container fixed>
              <Grid
                container
              >
                <Grid sm={12}>
                  <ToggleButtonGroup fullWidth sx={{ pb: 3, whiteSpace: "nowrap" }}>
                    <ToggleButton value="1">軽自動車</ToggleButton>
                    <ToggleButton value="2">コンパクトカー</ToggleButton>
                    <ToggleButton value="3">普通車</ToggleButton>
                    <ToggleButton value="4">バンタイプ</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                {/*カード写真*/}
                <Grid sm={4}>
                  <Card sx={{ maxWidth: 345, mr: 1 }}>
                    <CardMedia
                    >
                      <Container maxWidth="sm">
                        <Image src={ImageTest} />
                      </Container>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        ハコバン
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={4}>
                  <Card sx={{ maxWidth: 345, mr: 1 }}>
                    <CardMedia
                    >
                      <Container maxWidth="sm">
                        <Image src={ImageTest} />
                      </Container>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        ハコバン
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid sm={4}>
                  <Card sx={{ maxWidth: 345, mr: 1, mb: 3 }}>
                    <CardMedia
                    >
                      <Container maxWidth="sm">
                        <Image src={ImageTest} />
                      </Container>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        ハコバン
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>


                <ToggleButtonGroup sx={{ pb: 3 }}>
                  <ToggleButton value="1">外照</ToggleButton>
                  <ToggleButton value="2">内照</ToggleButton>
                  <ToggleButton value="3">登壇</ToggleButton>
                </ToggleButtonGroup>


              </Grid>
            </Container>
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );

};

export default Home;
