import React, { useState } from "react";

import { Alert, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Note from "../Note";
import Subtitle from "../Subtitle";
import Title from "../Title";

import styles from "./LoginForm.module.scss";
import login from "../../services/users/login";
import { useRouter } from "next/router";

export default function Login() {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async () => {
    try {
      const data = await login(values);
      localStorage.setItem("user", JSON.stringify(data));
      router.replace("/");
    } catch (error) {
      setError("Error. Compruebe su usuario y/o constraseña");
    }
  };
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
            type="email"
            value={values["email"] || ""}
            onChange={handleChange}
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="password"
            label="Contraseña"
            variant="standard"
            type="password"
            value={values["password"] || ""}
            onChange={handleChange}
            size="small"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <ButtonPrimary
            children="Ingresar"
            variant="contained"
            onClick={handleSubmit}
          />
          {error && (
            <Alert variant="standard" color="error">
              {error}
            </Alert>
          )}
          <Grid item xs={12} className={styles.loginSignUp}>
            <Subtitle subtitle="¿Aún no tienes cuenta?" />
            <Note note="Crear una cuenta" href="/signup" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
