import React from "react";
import { Controller } from "react-hook-form";
import { Box, Card, CardContent, CardMedia, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Image from "next/image";

interface CarToggleProps {
  setValue: any;
  control: any;
  name: string;
  label: string;
  image: any;
}

const CarToggle = ({ setValue, control, name, label, image }: CarToggleProps) => {

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setValue(name, newAlignment);
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }): JSX.Element => (
        <ToggleButtonGroup
          {...field}
          // exclusive
          color="primary"
          fullWidth
          sx={{ pb: 3 }}
          // onChange={handleAlignment}
          // onChange={(e, value) => {
          //   if (value === true) {
          //     field.onChange(false);
          //
          //   } else if (value === false) {
          //     field.onChange(true);
          //   }

          onChange={(e, value) => {
            field.onChange(value);
          }}>
          
          <ToggleButton
            value={false}
          >
            <Card sx={{ backgroundColor: "#fff0", boxShadow: "none" }}>
              <CardMedia>
                <Box sx={{ width: "100%" }}>
                  <Image src={image} height={"100"} width={"150"} />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                  {label}
                </Typography>
              </CardContent>
            </Card>

          </ToggleButton>
        </ToggleButtonGroup>
      )}
    />
  );
};
export default CarToggle;
