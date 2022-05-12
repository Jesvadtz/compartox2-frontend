import "../styles/globals.css";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "../theme/theme";
// import { StylesProvider } from "@mui/styles";
function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
