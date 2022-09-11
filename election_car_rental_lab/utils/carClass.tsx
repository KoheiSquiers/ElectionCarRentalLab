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
import ImageTest from "../public/image/lightCar/nBox.png";
import React, { useEffect, useState } from "react";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import { Controller } from "react-hook-form";
import CarTypeSubTotal from "./carTypeSubTotal";
import CarToggle from "../component/organisms/rapForm/carToggle";

import { useWatch } from "react-hook-form";
import { LightCar, CompactCar, VanCar, StandardCar } from "./carType";


interface Props {
  setValue: any;
  control: any;
  errors: any;
  calcValue: any;
}

const CarClass = ({ setValue, control, errors, calcValue }: Props) => {


  const [carClass, setCarClass] = useState<any>("");
  const getCarClass = useWatch({ control, name: "carClass" });

  useEffect(() => {
    switch (getCarClass) {
      case "lightCar":
        setCarClass(<LightCar control={control} setValue={setValue} />);
        return;
      case "compactCar":
        setCarClass(<CompactCar control={control} setValue={setValue} />);
        return;
      case "standardCar":
        setCarClass(<StandardCar control={control} setValue={setValue} />);
        return;
      case "vanCar":
        setCarClass(<VanCar control={control} setValue={setValue} />);
        return;
      default:
        break;
    }
  }, [getCarClass]);

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
                errors={errors}
                name={"carClass"}
                options={
                  [
                    { label: "Sクラス", value: "lightCar" },
                    { label: "Mクラス", value: "compactCar" },
                    { label: "Lクラス", value: "standardCar" },
                    { label: "LLクラス", value: "vanCar" },
                  ]
                }
                sx={{ pb: 3, whiteSpace: "nowrap" }}
              />
            </Grid>

            {/*カード写真*/}
            {carClass}


            <CarTypeSubTotal control={control} errors={errors} calcValue={calcValue} />

          </Grid>
        </Container>
      </Grid>
      <Divider />
    </>
  );
};

export default CarClass;
