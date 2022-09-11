import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { RhfProps } from "./type";

export interface CheckBoxProps {
  label: string;
  options: { name: string; label: string; defaultChecked?: boolean }[];
  sx?: object;
  row?: boolean;
  labelPlacement?: "top" | "bottom" | "start" | "end";
}

type RhfCheckBoxProps = RhfProps & CheckBoxProps;

const RhfCheckbox = (
  {
    control,
    label,
    options,
    sx,
    row = false,
    labelPlacement = "end",
  }: RhfCheckBoxProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <FormGroup row={row} sx={sx}>
        <>
          {options.map((option, index) => (
            <Controller
              key={index}
              control={control}
              name={option.name}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  key={index}
                  label={option.label}
                  value={option.name}
                  labelPlacement={labelPlacement}
                  control={
                    <Checkbox defaultChecked={option.defaultChecked || false} />
                  }
                />
              )}
            />
          ))}
        </>
      </FormGroup>
    </FormControl>
  );
};
export default RhfCheckbox;
