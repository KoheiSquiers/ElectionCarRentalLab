import RhfToggleButtonGroup from "../../../component/molecules/rhfForm/rhfToggleButtonGroup";
import { UnitPriceType } from "../../api/type";
import { PriceConv } from "../../../utils/dataConv";

interface SignalLightFormType {
  setValue: any;
  control: any;
  errors: any;
  apiData: UnitPriceType;
}

export const SignalLightForm = ({ setValue, control, errors, apiData }: SignalLightFormType) => {
  let options: { label: string; value: string }[] = [];
  const signalLight = apiData.unitPrice.signalLight;

  const outLightLabel =
    apiData.unitPrice.signalLight.outLight !== null
      ? `外照明（${PriceConv(apiData.unitPrice.signalLight.outLight)}）`
      : "";
  const inLightLabel =
    apiData.unitPrice.signalLight.inLight !== null
      ? `内照明（${PriceConv(apiData.unitPrice.signalLight.inLight)}）`
      : "";

  Object.keys(signalLight).map((key, index) => {
    switch (key) {
      case "outLight":
        if (signalLight[key] !== null) {
          options.push({ label: outLightLabel, value: "outLight" });
        }
        break;
      case "inLight":
        if (signalLight[key] !== null) {
          options.push({ label: inLightLabel, value: "inLight" });
        }
        break;
    }
  });

  if (options.length === 1) {
    setValue("signalLight", options[0].value);
  }

  return (
    <RhfToggleButtonGroup
      key={"SignalLightForm"}
      control={control}
      errors={errors}
      name={"signalLight"}
      size={"small"}
      options={options}
    />
  );
};

export const SwitchSignalLightForm = ({
  setValue,
  control,
  errors,
  apiData,
}: SignalLightFormType) => {
  let options: { label: string; value: string }[] = [];
  const changeDisplay = apiData.changeDisplay?.signalLight;
  const outLightLabel =
    apiData.unitPrice.signalLight.outLight !== null
      ? `外照明（${PriceConv(apiData.unitPrice.signalLight.outLight)}）`
      : "";
  const inLightLabel =
    apiData.unitPrice.signalLight.inLight !== null
      ? `内照明（${PriceConv(apiData.unitPrice.signalLight.inLight)}）`
      : "";

  if (changeDisplay) {
    Object.keys(changeDisplay).map((key, index) => {
      switch (key) {
        case "outLight":
          if (changeDisplay[key]) {
            options.push({ label: outLightLabel, value: "outLight" });
          }
          break;
        case "inLight":
          if (changeDisplay[key]) {
            options.push({ label: inLightLabel, value: "inLight" });
          }
          break;
      }
    });

    if (options.length === 1) {
      setValue("signalLight", options[0].value);
    }
  }

  return (
    <RhfToggleButtonGroup
      key={"SwitchSignalLightForm"}
      control={control}
      errors={errors}
      name={"signalLight"}
      size={"small"}
      options={options}
    />
  );
};
