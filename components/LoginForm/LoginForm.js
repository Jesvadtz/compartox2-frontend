import React, { useState } from "react";
import { useRouter } from "next/router";

import { Alert, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Note from "../Note";
import Subtitle from "../Subtitle";
import Title from "../Title";

import styles from "./LoginForm.module.scss";

import login from "../../services/users/login";
import getUser from "../../services/users/getUser";
import Image from "next/image";

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
      const { token } = await login(values);
      const user = await getUser(token);

      localStorage.setItem("user", JSON.stringify({ token, user }));
      router.replace("/dashboard");
    } catch (error) {
      setError("Error. Compruebe su usuario y/o constraseña");
    }
  };
  return (
    <Layout showNavbar={false} showFooter={false}>
      <Grid
        container
        className={styles.login}
        direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} className={styles.loginTitle}>
          <Image
            src="/compartox2.svg"
            width="144px"
            height="50px"
            alt="compartox2-logo"
            layout="raw"
            className={styles.loginLogo}
          />
          <Image
            src="/illustrations/ilu-04.svg"
            width="100px"
            height="200px"
            alt="compartox2-login-illustration"
            layout="raw"
            className={styles.loginImage}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={styles.loginInputs}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title title="Bienvenido" />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="password"
            label="Contraseña"
            variant="standard"
            type="password"
            value={values.password || ""}
            onChange={handleChange}
            size="small"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <ButtonPrimary variant="contained" onClick={handleSubmit}>
            Ingresar
          </ButtonPrimary>
          {error && (
            <Alert variant="standard" color="error">
              {error}
            </Alert>
          )}
          <Grid
            item
            xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.loginSignUp}
          >
            <Subtitle subtitle="¿Aún no tienes cuenta?" />
            <Note note="Crear una cuenta" href="/signup" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
