import {
  Card, CardActionArea,
  CardContent,
  CardMedia,
  Container, Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ImageTest from "../public/image/hakoban.jpeg";
import React from "react";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { Controller } from "react-hook-form";
import SubTotal from "./subTotal";


interface Props {
  control: any;
  errors: any;
  calcValue: any;
}

const CarType = ({ control, errors, calcValue }: Props) => {

  // 車のギャラリースタイルについて
  //
  // ToggleButtonGroup 一つにつき一個の車を表示させる
  // 写真とcardは透明にする
  // がんばれ！


  return (
    <>
      <Grid item sm={12}>
        <Typography variant={"h6"}>サイズ・車両タイプ</Typography>
      </Grid>

      <Grid item sm={12} sx={{ pb: 2 }}>
        <Container fixed>
          <Grid
            container
            spacing={1}
          >

            <Grid item sm={12}>
              <RhfToggleButtonGroup
                control={control}
                name={"carClass"}
                options={
                  [
                    { label: "軽自動車", value: "lightCar" },
                    { label: "コンパクトカー", value: "compactCar" },
                    { label: "普通車", value: "standardCar" },
                    { label: "バンタイプ", value: "vanCar" },
                  ]
                }
                sx={{ pb: 3, whiteSpace: "nowrap" }}
              />

            </Grid>

            {/*カード写真*/}

            <Grid item sm={4}>
              <Controller
                control={control}
                name={"carType.boxCar"}
                render={({ field }): JSX.Element => (
                  <ToggleButtonGroup
                    {...field}
                    exclusive
                    color="primary"
                    fullWidth
                    sx={{ pb: 3 }}
                    onChange={(e, value) => {
                      field.onChange(value);
                    }}>
                    <ToggleButton value={"option.alue"}>
                      <Card>
                        <CardMedia
                        >
                          {/*<Container maxWidth="sm">*/}
                          <Image src={ImageTest} />
                          {/*</Container>*/}
                        </CardMedia>
                        <CardContent>
                          <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                            ハコバン
                          </Typography>
                        </CardContent>
                      </Card>
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              />
            </Grid>

            <Grid item sm={4}>
              <Controller
                control={control}
                name={"name"}
                render={({ field }): JSX.Element => (
                  <ToggleButtonGroup
                    {...field}
                    exclusive
                    color="primary"
                    fullWidth
                    sx={{ pb: 3 }}
                    onChange={(e, value) => {
                      field.onChange(value);
                    }}>
                    <ToggleButton value={"option.alue"}>
                      <Card>
                        <CardMedia
                        >
                          {/*<Container maxWidth="sm">*/}
                          <Image src={ImageTest} />
                          {/*</Container>*/}
                        </CardMedia>
                        <CardContent>
                          <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                            ハコバン
                          </Typography>
                        </CardContent>
                      </Card>
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              />
            </Grid>

            <Grid item sm={4}>
              <Controller
                control={control}
                name={"name"}
                render={({ field }): JSX.Element => (
                  <ToggleButtonGroup
                    {...field}
                    exclusive
                    color="primary"
                    fullWidth
                    sx={{ pb: 3 }}
                    onChange={(e, value) => {
                      field.onChange(value);
                    }}>
                    <ToggleButton value={"option.alue"}>
                      <Card>
                        <CardMedia
                        >
                          {/*<Container maxWidth="sm">*/}
                          <Image src={ImageTest} />
                          {/*</Container>*/}
                        </CardMedia>
                        <CardContent>
                          <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                            ハコバン
                          </Typography>
                        </CardContent>
                      </Card>
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              />
            </Grid>


            <SubTotal control={control} calcValue={calcValue} />

          </Grid>
        </Container>
      </Grid>
      <Divider />
    </>
  );
};

export default CarType;
