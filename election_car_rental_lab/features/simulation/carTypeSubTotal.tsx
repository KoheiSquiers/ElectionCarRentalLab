import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import RhfToggleButtonGroup from "../../component/molecules/rhfForm/rhfToggleButtonGroup";
import { RhfRadioButton } from "../../component/molecules/rhfForm";
import { useWatch } from "react-hook-form";
import {
  CompactCar,
  LightCar,
  StandardCar,
  VanCar,
} from "../../component/organisms/carType";
import NBoxOption from "./carOption/s/nBoxOption";
import EveryOption from "./carOption/s/everyOption";
import NoteOption from "./carOption/s/note";
import CorollaFielderOption from "./carOption/m/corollaFielder";
import ShientaOption from "./carOption/m/shienta";
import ProBocOption from "./carOption/m/proBoc";
import NoahOption from "./carOption/l/noahOprion";
import TownAceOption from "./carOption/l/townAce";
import RegiusaceAceOption from "./carOption/ll/regiusaceAce";

interface Props {
  setValue: any;
  control: any;
  errors: any;
  calcValue: any;
}

const CarTypeSubTotal = ({ setValue, control, errors, calcValue }: Props) => {
  const [carType, setCarType] = useState<any>("");
  const getCarClass = useWatch({ control, name: "carClass" });
  const getCarType = useWatch({ control, name: "carType" });

  // 車のタイプによって、オプション表示を切り替える
  // useWatchでサイレンダンリングされるため、副作用はセットしない
  useEffect(() => {
    switch (getCarType[getCarClass]) {
      // sClass
      case "nBox":
        setCarType(
          <NBoxOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;
      case "every":
        setCarType(
          <EveryOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;
      case "note":
        setCarType(
          <NoteOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;

      // mClass
      case "corollaFielder":
        setCarType(
          <CorollaFielderOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;
      case "shienta":
        setCarType(
          <ShientaOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;
      case "proBoc":
        // setValue("ampSize", "300");
        setCarType(
          <ProBocOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;

      // lClass
      case "noah":
        setCarType(
          <NoahOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;
      case "townAce":
        setCarType(
          <TownAceOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;

      // llClass
      case "regiusaceAce":
        setCarType(
          <RegiusaceAceOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        break;

      default:
        break;
    }
  }, [getCarClass, getCarType, calcValue]);

  return carType;
};

export default CarTypeSubTotal;
