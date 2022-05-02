import * as React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Title from "../Title";
import Note from "../Note";
import Subtitle from "../Subtitle";

import styles from "../../components/LoginForm/LoginForm.module.scss";

export default function Signup() {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Layout showNavbar={false} showFooter={false}>
      <Grid container className={styles.login}>
        <Grid
          item
          xs={12}
          sm={6}
          className={`${styles.loginTitle} ${styles.signupTitle}`}
        >
          <img src="./compartox2.svg" className={styles.loginLogo} />
          <img
            src="./illustrations/ilu-05.svg"
            className={`${styles.loginImage} ${styles.signupImage}`}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.loginInputs}>
          <Title title="Crea tu cuenta" />
          <TextField
            name="name"
            label="Nombre(s)"
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="lastname"
            label="Apellido"
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="numberWhatsApp"
            label="Teléfono (WhatsApp)"
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <Grid
            item
            className={styles.signupLocation}
            sm={12}
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          >
            <FormControl fullWidth variant="standard" sx={{ flex: "1" }}>
              <InputLabel>Estado</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                value={state}
                label="Estado"
                onChange={handleChange}
              >
                <MenuItem value={1}>Ciudad de México</MenuItem>
                <MenuItem value={2}>Edo. de México</MenuItem>
                <MenuItem value={3}>Puebla</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="city"
              label="Ciudad"
              variant="standard"
              required
              sx={{ flex: "1" }}
            />
          </Grid>
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
          <ButtonPrimary children="Crear cuenta" variant="contained" />
          <Grid item xs={12} className={styles.loginSignUp}>
            <Subtitle subtitle="¿Ya tienes cuenta?" />
            <Note note="Iniciar Sesión" href="/login" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
