import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import RhfToggleButtonGroup from "../molecules/rhfForm/rhfToggleButtonGroup";
import React from "react";
import CarToggle from "./rapForm/carToggle";

// 軽自動車
import heightWagon from "../../public/image/lightCar/heightWagon.png";
import boxVan from "../../public/image/lightCar/boxVan.png";

// コンパクトカー
import compact from "../../public/image/compactCar/compact.png";

// 普通車
import corollaFielder from "../../public/image/standardCar/corollaFielder.png";

// バンタイプ
import noah from "../../public/image/boxCar/noah.png";
import regiusaceAce from "../../public/image/boxCar/regiusaceAce.png";
import townAce from "../../public/image/boxCar/townAce.png";
import { en } from "../../constants/convDate";

//no image
import noImage from "../../public/image/noImage.png";

interface CarCarProps {
  control: any;
  setValue: any;
}

export const LightCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.s"}
        options={[
          {
            label: "軽ハイトワゴン",
            value: "heightWagon",
            priceLabel: en(1000),
            image: heightWagon,
          },
          {
            label: "軽ハコバン",
            value: "boxVan",
            priceLabel: en(2000),
            image: boxVan,
          },
          {
            label: "コンパクトカー",
            value: "compact",
            priceLabel: en(3000),
            image: compact,
          },
        ]}
      />
    </>
  );
};

export const CompactCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.m"}
        options={[
          {
            label: "カローラ フィルダー",
            value: "corollaFielder",
            priceLabel: en(4000),
            image: corollaFielder,
          },
          {
            label: "トヨタ シエンタ",
            value: "shienta",
            priceLabel: en(5000),
            image: noImage,
          },
          {
            label: "プロボックス",
            value: "proBoc",
            priceLabel: en(6000),
            image: noImage,
          },
        ]}
      />
    </>
  );
};

export const StandardCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.l"}
        options={[
          {
            label: "NOAH",
            value: "noah",
            priceLabel: en(7000),
            image: noah,
          },
          {
            label: "タウンエース",
            value: "townAce",
            priceLabel: en(8000),
            image: townAce,
          },
        ]}
      />
    </>
  );
};

export const VanCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.ll"}
        options={[
          {
            label: "regiusaceAce(標準ボディ)",
            value: "regiusaceAceBasic",
            priceLabel: en(9000),
            image: regiusaceAce,
          },
          {
            label: "regiusaceAce(ワイドボディ)",
            value: "regiusaceAceWide",
            priceLabel: en(9000),
            image: regiusaceAce,
          },
        ]}
      />
    </>
  );
};
