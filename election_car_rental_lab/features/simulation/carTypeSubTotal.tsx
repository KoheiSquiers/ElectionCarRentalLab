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
        return;
      case "every":
        setCarType(
          <EveryOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;
      case "note":
        setCarType(
          <NoteOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;

      // mClass
      case "corollaFielder":
        setCarType(
          <CorollaFielderOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;
      case "shienta":
        setCarType(
          <ShientaOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;
      case "proBoc":
        // setValue("ampSize", "300");
        setCarType(
          <ProBocOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;

      // lClass
      case "noah":
        setCarType(
          <NoahOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;
      case "townAce":
        setCarType(
          <TownAceOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;

      // llClass
      case "regiusaceAce":
        setCarType(
          <RegiusaceAceOption
            control={control}
            errors={errors}
            calcValue={calcValue}
          />,
        );
        return;

      default:
        break;
    }
  }, [getCarClass, getCarType, calcValue]);

  return carType;
};

export default CarTypeSubTotal;

// <Grid item sm={12}>
//   <Grid
//     container
//     direction="row"
//     justifyContent="flex-end"
//     alignItems="flex-end"
//   >
//     <Grid item sm={7} />
//     <Grid item sm={5}>
//       <RhfToggleButtonGroup
//         control={control}
//         errors={errors}
//         name={"signalLight"}
//         size={"small"}
//         sx={{ whiteSpace: "nowrap" }}
//         options={
//           [
//             { label: "外照明", value: "outLight" },
//             { label: "内照明", value: "inLight" },
//             { label: "登壇", value: "topLight" },
//           ]
//         }
//       />
//     </Grid>
//
//     <Grid item sm={8}>
//       <Grid container>
//
//         <Grid item sm={12}>
//           <RhfRadioButton
//             control={control}
//             errors={errors}
//             name={"ampSize"}
//             label={"アンプサイズ"}
//             size={"small"}
//             row={true}
//             sx={{ pl: "20px", flexWrap: "nowrap" }}
//             options={
//               [
//                 { label: "150w", value: "150" },
//                 { label: "300w", value: "300" },
//                 { label: "600w", value: "600" },
//               ]
//             }
//           />
//         </Grid>
//
//         <Grid item sm={12}>
//           <RhfRadioButton
//             control={control}
//             errors={errors}
//             name={"speaker"}
//             label={"スピーカー"}
//             size={"small"}
//             row={true}
//             sx={{ pl: "20px" }}
//             options={
//               [
//                 { label: "2個", value: "twe" },
//                 { label: "4個", value: "four" },
//               ]
//             }
//           />
//         </Grid>
//
//       </Grid>
//     </Grid>
//
//     <Grid item sm={4}>
//       <Typography
//         variant={"h6"}
//         textAlign={"right"}
//         fontStyle={"italic"}
//       >
//         {`小計 ¥ ${calcValue.subTotalPrice.toLocaleString()}（税込）`}
//       </Typography>
//     </Grid>
//
//
//   </Grid>
// </Grid>
