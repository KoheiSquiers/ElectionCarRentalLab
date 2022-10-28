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

//no image
import noImage from "../../public/image/noImage.png";
import { PriceConv } from "../../utils/dataConv";
import { ApiDataType } from "../../features/api/type";
import { useWatch } from "react-hook-form";

interface CarCarProps {
  control: any;
  setValue: any;
  apiData: ApiDataType;
}

export const LightCar = ({ control, setValue, apiData }: CarCarProps) => {
  const getElectoralClass: "unity" | "general" | "ad" = useWatch({
    control,
    name: "electoralClass",
  });
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.s"}
        options={[
          {
            label: "軽ハイトワゴン",
            value: "heightWagon",
            priceLabel: PriceConv(apiData?.s.heightWagon[getElectoralClass].unitPrice.car),
            image: heightWagon,
          },
          {
            label: "軽ハコバン",
            value: "boxVan",
            priceLabel: PriceConv(apiData?.s.boxVan[getElectoralClass].unitPrice.car),
            image: boxVan,
          },
          {
            label: "コンパクトカー",
            value: "compact",
            priceLabel: PriceConv(apiData?.s.compact[getElectoralClass].unitPrice.car),
            image: compact,
          },
        ]}
      />
    </>
  );
};

export const CompactCar = ({ control, setValue, apiData }: CarCarProps) => {
  const getElectoralClass: "unity" | "general" | "ad" = useWatch({
    control,
    name: "electoralClass",
  });
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.m"}
        options={[
          {
            label: "カローラ フィルダー",
            value: "corollaFielder",
            priceLabel: PriceConv(apiData?.m.corollaFielder[getElectoralClass].unitPrice.car),
            image: corollaFielder,
          },
          {
            label: "トヨタ シエンタ",
            value: "shienta",
            priceLabel: PriceConv(apiData?.m.shienta[getElectoralClass].unitPrice.car),
            image: noImage,
          },
          {
            label: "プロボックス",
            value: "proBox",
            priceLabel: PriceConv(apiData?.m.proBox[getElectoralClass].unitPrice.car),
            image: noImage,
          },
        ]}
      />
    </>
  );
};

export const StandardCar = ({ control, setValue, apiData }: CarCarProps) => {
  const getElectoralClass: "unity" | "general" | "ad" = useWatch({
    control,
    name: "electoralClass",
  });
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.l"}
        options={[
          {
            label: "NOAH",
            value: "noah",
            priceLabel: PriceConv(apiData?.l.noah[getElectoralClass].unitPrice.car),
            image: noah,
          },
          {
            label: "タウンエース",
            value: "townAce",
            priceLabel: PriceConv(apiData?.l.townAce[getElectoralClass].unitPrice.car),
            image: townAce,
          },
        ]}
      />
    </>
  );
};

export const VanCar = ({ control, setValue, apiData }: CarCarProps) => {
  const getElectoralClass: "unity" | "general" | "ad" = useWatch({
    control,
    name: "electoralClass",
  });
  return (
    <>
      <CarToggle
        control={control}
        name={"carType.ll"}
        options={[
          {
            label: "regiusaceAce(標準ボディ)",
            value: "regiusaceAceBasic",
            priceLabel: PriceConv(apiData?.ll.regiusaceAceBasic[getElectoralClass].unitPrice.car),
            image: regiusaceAce,
          },
          {
            label: "regiusaceAce(ワイドボディ)",
            value: "regiusaceAceWide",
            priceLabel: PriceConv(apiData?.ll.regiusaceAceWide[getElectoralClass].unitPrice.car),
            image: regiusaceAce,
          },
        ]}
      />
    </>
  );
};
