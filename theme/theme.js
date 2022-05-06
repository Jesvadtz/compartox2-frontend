import { createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: yellow[600],
    },
    white: {
      main: "#ffffff",
    },
    gray: {
      main: "#959595",
    },
  },
  typography: {
    fontFamily: "Work Sans",
  },
});
export default theme;
