import { Grid } from "@mui/material";
import RhfToggleButtonGroup from "../component/molecules/rhfForm/rhfToggleButtonGroup";
import React from "react";
import CarToggle from "../component/organisms/rapForm/carToggle";

// 軽自動車
import nBox from "../public/image/lightCar/nBox.png";
import every from "../public/image/lightCar/every.png";

// コンパクトカー
import note from "../public/image/compactCar/note.png";

// 普通車
import corollaFielder from "../public/image/standardCar/corollaFielder.png";

// バンタイプ
import noah from "../public/image/boxCar/noah.png";
import regiusaceAce from "../public/image/boxCar/regiusaceAce.png";
import townAce from "../public/image/boxCar/townAce.png";

interface CarCarProps {
  control: any;
  setValue: any;
}

export const LightCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <Grid item sm={6}>
        <CarToggle setValue={setValue} control={control} name={"carType.boxCar"} label={"軽ハイトワゴン"} image={nBox} />
      </Grid>

      <Grid item sm={6}>
        <CarToggle setValue={setValue} control={control} name={"carType.every"} label={"軽ハコバン"} image={every} />
      </Grid>

      <Grid item sm={6}>
        <CarToggle setValue={setValue} control={control} name={"carType.note"} label={"コンパクトカー"} image={note} />
      </Grid>

    </>
  );
};

export const CompactCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.corollaFielder"}
          label={"カローラ フィルダー"}
          image={corollaFielder} />
      </Grid>

      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.corollaFielder"}
          label={"トヨタ シエンタ"}
          image={corollaFielder} />
      </Grid>

      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.corollaFielder"}
          label={"プロボックス"}
          image={corollaFielder} />
      </Grid>
    </>
  );
};

export const StandardCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>
      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.noah"}

          label={"NOAH"}
          image={noah} />
      </Grid>
      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.townAce"}
          label={"タウンエース"}
          image={townAce} />
      </Grid>

    </>
  );
};

export const VanCar = ({ control, setValue }: CarCarProps) => {
  return (
    <>

      <Grid item sm={6}>
        <CarToggle
          setValue={setValue}
          control={control}
          name={"carType.regiusaceAce"}
          label={"regiusaceAce"}
          image={regiusaceAce} />
      </Grid>

    </>
  );
};
