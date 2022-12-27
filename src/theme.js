import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// ** Vars
const lightColor = "58, 53, 65";
const mainColor = lightColor;

const _COLORS_ = {
  mode: "light",
  common: {
    black: "#000",
    white: "#FFF",
  },
  primary: {
    light: "#EBBF53",
    main: "#e7af28",
    dark: "#A17A1C",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  secondary: {
    light: "#9C9FA4",
    main: "#8A8D93",
    dark: "#777B82",
    contrastText: "#FFF",
  },
  success: {
    light: "#6AD01F",
    main: "#56CA00",
    dark: "#4CB200",
    contrastText: "#FFF",
  },
  error: {
    light: "#FF6166",
    main: "#FF4C51",
    dark: "#E04347",
    contrastText: "#FFF",
  },
  warning: {
    light: "#FFCA64",
    main: "#FFB400",
    dark: "#E09E00",
    contrastText: "#FFF",
  },
  info: {
    light: "#32BAFF",
    main: "#16B1FF",
    dark: "#139CE0",
    contrastText: "#FFF",
  },
  brandColor: {
    light: "#9E69FD",
    main: "#9155FD",
    dark: "#804BDF",
    contrastText: "#FFF",
  },
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#D5D5D5",
    A200: "#AAAAAA",
    A400: "#616161",
    A700: "#303030",
  },
  text: {
    primary: `rgba(${mainColor}, 0.87)`,
    secondary: `rgba(${mainColor}, 0.68)`,
    disabled: `rgba(${mainColor}, 0.38)`,
  },
  divider: `rgba(${mainColor}, 0.12)`,
  background: {
    paper: "#FFF",
    default: "#F4F5FA",
  },
  action: {
    active: `rgba(${mainColor}, 0.54)`,
    hover: `rgba(${mainColor}, 0.04)`,
    selected: `rgba(${mainColor}, 0.08)`,
    disabled: `rgba(${mainColor}, 0.3)`,
    disabledBackground: `rgba(${mainColor}, 0.18)`,
    focus: `rgba(${mainColor}, 0.12)`,
  },
};

let theme = createTheme({
  palette: _COLORS_,
  //   shape: {
  //     borderRadius: 0
  //   },
  typography: {
    fontFamily: ['"Roboto"', "Arial", "sans-serif"].join(","),
    body1: {
      fontSize: "14px",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
