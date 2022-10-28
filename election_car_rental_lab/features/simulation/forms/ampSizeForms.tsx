import { UnitPriceType } from "../../api/type";
import { RhfRadioButton } from "../../../component/molecules/rhfForm";
import React from "react";
import { PriceConv } from "../../../utils/dataConv";

interface AmpSizeFormType {
  setValue: any;
  control: any;
  errors: any;
  apiData: UnitPriceType;
}

export const AmpSizeForm = ({ setValue, control, errors, apiData }: AmpSizeFormType) => {
  let options: { label: string; value: string }[] = [];
  const ampSize = apiData.unitPrice.ampSize;
  const label150 =
    apiData.unitPrice.ampSize["150"] !== null
      ? `150w（${PriceConv(apiData.unitPrice.ampSize["150"])}）`
      : "";
  const label300 =
    apiData.unitPrice.ampSize["300"] !== null
      ? `300w（${PriceConv(apiData.unitPrice.ampSize["300"])}）`
      : "";
  const label600 =
    apiData.unitPrice.ampSize["600"] !== null
      ? `600w (${PriceConv(apiData.unitPrice.ampSize["600"])})`
      : "";

  Object.keys(ampSize).map((key, index) => {
    switch (key) {
      case "150":
        ampSize[key] !== null && options.push({ label: label150, value: "150" });
        break;
      case "300":
        ampSize[key] !== null && options.push({ label: label300, value: "300" });
        break;
      case "600":
        ampSize[key] !== null && options.push({ label: label600, value: "600" });
        break;
    }
  });
  if (options.length === 1) {
    setValue("ampSize", options[0].value);
  }

  return (
    <RhfRadioButton
      control={control}
      errors={errors}
      name={"ampSize"}
      label={"アンプサイズ"}
      size={"small"}
      // row={true}
      sx={{ pl: "20px" }}
      options={options}
    />
  );
};

export const SwitchAmpSizeForm = ({ setValue, control, errors, apiData }: AmpSizeFormType) => {
  let options: { label: string; value: string }[] = [];
  const ampSize = apiData.changeDisplay?.ampSize;

  const label150 =
    apiData.unitPrice.ampSize["150"] !== null
      ? `150w（${PriceConv(apiData.unitPrice.ampSize["150"])}）`
      : "";
  const label300 =
    apiData.unitPrice.ampSize["300"] !== null
      ? `300w（${PriceConv(apiData.unitPrice.ampSize["300"])}）`
      : "";
  const label600 =
    apiData.unitPrice.ampSize["600"] !== null
      ? `600w (${PriceConv(apiData.unitPrice.ampSize["600"])})`
      : "";

  if (ampSize) {
    Object.keys(ampSize).map((key, index) => {
      switch (key) {
        case "150":
          if (ampSize[key]) {
            options.push({ label: label150, value: "150" });
          }
          break;
        case "300":
          if (ampSize[key]) {
            options.push({ label: label300, value: "300" });
          }
          break;
        case "600":
          if (ampSize[key]) {
            options.push({ label: label600, value: "600" });
          }
          break;
      }
    });

    if (options.length === 1) {
      setValue("ampSize", options[0].value);
    }
  }

  return (
    <RhfRadioButton
      control={control}
      errors={errors}
      name={"ampSize"}
      label={"アンプサイズ"}
      size={"small"}
      // row={true}
      sx={{ pl: "20px" }}
      options={options}
    />
  );
};
