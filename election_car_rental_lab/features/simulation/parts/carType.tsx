import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import NBoxOption from "../carOption/s/nBoxOption";
import BoxVanOption from "../carOption/s/boxVanOption";
import NoteOption from "../carOption/s/compact";
import CorollaFielderOption from "../carOption/m/corollaFielder";
import ShientaOption from "../carOption/m/shienta";
import ProBocOption from "../carOption/m/proBoc";
import NoahOption from "../carOption/l/noahOprion";
import TownAceOption from "../carOption/l/townAce";
import RegiusaceAceOption from "../carOption/ll/regiusaceAce";

interface Props {
  setValue: any;
  control: any;
  errors: any;
  calcValue: any;
}

const CarType = ({ setValue, control, errors, calcValue }: Props) => {
  const [carType, setCarType] = useState<any>("");
  const getCarClass = useWatch({ control, name: "carClass" });
  const getCarType = useWatch({ control, name: "carType" });

  // 車のタイプによって、オプション表示を切り替える
  // useWatchでサイレンダンリングされるため、副作用はセットしない
  useEffect(() => {
    switch (getCarType[getCarClass]) {
      // sClass
      case "heightWagon":
        setCarType(<NBoxOption control={control} errors={errors} calcValue={calcValue} />);
        break;
      case "boxVan":
        setCarType(<BoxVanOption control={control} errors={errors} calcValue={calcValue} />);
        break;
      case "compact":
        setCarType(<NoteOption control={control} errors={errors} calcValue={calcValue} />);
        break;

      // mClass
      case "corollaFielder":
        setCarType(
          <CorollaFielderOption control={control} errors={errors} calcValue={calcValue} />,
        );
        break;
      case "shienta":
        setCarType(<ShientaOption control={control} errors={errors} calcValue={calcValue} />);
        break;
      case "proBoc":
        // setValue("ampSize", "300");
        setCarType(<ProBocOption control={control} errors={errors} calcValue={calcValue} />);
        break;

      // lClass
      case "noah":
        setCarType(<NoahOption control={control} errors={errors} calcValue={calcValue} />);
        break;
      case "townAce":
        setCarType(<TownAceOption control={control} errors={errors} calcValue={calcValue} />);
        break;

      // llClass
      case "regiusaceAceBasic":
        setCarType(<RegiusaceAceOption control={control} errors={errors} calcValue={calcValue} />);
        break;

      default:
        break;
    }
  }, [getCarClass, getCarType, calcValue]);

  return carType;
};

export default CarType;
