import React, { ReactNode, useEffect, useState } from "react";

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { useQState } from "../../hooks/library/useQstate";
import { Box, Container } from "@mui/material";
import { blue } from "@mui/material/colors";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // colorChange
  const [globalColor] = useQState<string>(["globalColor"], "primary");

  const [color, setColor] = useState<any>({
    light: "#e3f2fd",
    main: "#90caf9",
    dark: "#42a5f5",
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText: "#fff",
      },
      secondary: {
        main: color.main,
        light: color.light,
        dark: color.dark,
        contrastText: "#fff",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1025,
        xl: 1536,
      },
    },
  });

  useEffect(() => {
    setColor(() => {
      switch (globalColor) {
        case "primary":
          return { main: "#1976d2", light: "#42a5f5", dark: "#1565c0" };

        case "secondary":
          return { main: "#9c27b0", light: "#ba68c8", dark: "#7b1fa2" };

        case "error":
          return { main: "#d32f2f", light: "#ef5350", dark: "#c62828" };

        case "warning":
          return { main: "#ed6c02", light: "#ff9800", dark: "#e65100" };

        case "info":
          return { main: "#0288d1", light: "#03a9f4", dark: "#01579b" };

        case "success":
          return { main: "#2e7d32", light: "#4caf50", dark: "#1b5e20" };

        default:
          return { main: "#1976d2", light: "#42a5f5", dark: "#1565c0" };
      }
    });
  }, [globalColor]);

  return (
    <Container sx={{ background: "light" }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Container>
  );

  // return <Box>{children}</Box>;
};

export default Layout;
