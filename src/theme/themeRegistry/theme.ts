"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

import GoogleInterFont from "@/fonts/fonts";

// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme(
  {
    palette: {
      background: {
        paper: "#fff",
      },
      text: {
        primary: "#173A5E",
        secondary: "#46505A",
      },
      primary: {
        main: "#0098F5",
      },
    },
    typography: {
      fontFamily: GoogleInterFont.style.fontFamily,
      body1: { fontFamily: GoogleInterFont.style.fontFamily },
      body2: { fontFamily: GoogleInterFont.style.fontFamily },
    },
  },
  {} satisfies ThemeOptions
);

export default defaultTheme;
