import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Note from "../Note";
import Title from "../Title";

import styles from "./LoginForm.module.scss";

export default function Login() {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <Grid container>
        <Grid item>
          <img src="./ilustrations/ilu-04.svg" />
        </Grid>
        <Grid item xs={12}>
          <Title title="Bienvenido" />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            size="small"
            required
          />
          <TextField
            name="password"
            label="Contraseña"
            variant="standard"
            size="small"
            required
          />
          <ButtonPrimary children="Ingresar" variant="contained" />
          <Note note="Olvidé contraseña" />
        </Grid>
      </Grid>
    </Layout>
  );
}
