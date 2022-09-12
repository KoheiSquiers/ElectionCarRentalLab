import React from "react";
import { Controller } from "react-hook-form";
import { Box, Card, CardContent, CardMedia, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Image from "next/image";

interface CarToggleProps {
  control: any;
  name: string;
  options: { label: string, value: string, priceLabel: string | number, image: any }[];
}

const CarToggle = ({ control, name, options }: CarToggleProps) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }): JSX.Element => (
        <ToggleButtonGroup
          {...field}
          exclusive
          color="primary"
          fullWidth
          sx={{ pb: 3 }}
          onChange={(e, value) => {
            if (value !== null) {
              field.onChange(value);
            }
          }}
        >

          {options.map((option, index) => (
            <ToggleButton
              key={index}
              value={option.value}
            >
              <Card sx={{ backgroundColor: "#fff0", boxShadow: "none" }}>
                <CardMedia>
                  <Box sx={{ width: "100%" }}>
                    <Image src={option.image} height={"100"} width={"150"} />
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                    {option.label}
                  </Typography>
                  <Typography gutterBottom component="div" sx={{ whiteSpace: "nowrap" }}>
                    {option.priceLabel}
                  </Typography>
                </CardContent>
              </Card>
            </ToggleButton>
          ))}

        </ToggleButtonGroup>
      )}
    />
  );
};
export default CarToggle;
