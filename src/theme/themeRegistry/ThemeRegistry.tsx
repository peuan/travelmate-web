"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
}
