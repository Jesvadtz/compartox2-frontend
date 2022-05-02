import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Note from "../Note";
import Subtitle from "../Subtitle";
import Title from "../Title";

import styles from "./LoginForm.module.scss";

export default function Login() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <Grid container className={styles.login}>
        <Grid item xs={12} sm={6} className={styles.loginTitle}>
          <img src="./compartox2.svg" className={styles.loginLogo} />
          <img src="./illustrations/ilu-04.svg" className={styles.loginImage} />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.loginInputs}>
          <Title title="Bienvenido" />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="password"
            label="Contraseña"
            variant="standard"
            size="small"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <ButtonPrimary children="Ingresar" variant="contained" />
          <Grid item xs={12} className={styles.loginSignUp}>
            <Subtitle subtitle="¿Aún no tienes cuenta?" />
            <Note note="Crear una cuenta" href="/signup" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
