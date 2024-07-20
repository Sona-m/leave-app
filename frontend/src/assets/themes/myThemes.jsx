import { createTheme } from "@mui/material/styles";

export const myThemes = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4B49AC",
    },
    secondary: {
      main: "#F0F0FA",
    },
    error: {
      main: "#E8415B",
    },
    success: {
      main: "#47C746",
    },
    info: {
      main: "#AAAAAE",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    h5: {
      fontSize: 32,
      fontWeight: 700,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontSize: 14,
      fontWeight: 600,
      color: "#FFF",
    },
  },
});
