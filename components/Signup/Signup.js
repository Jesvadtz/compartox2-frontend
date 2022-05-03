import React, { useState } from "react";
import { useRouter } from "next/router";

import { Alert, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonPrimary from "../ButtonPrimary";
import Layout from "../Layout";
import Title from "../Title";
import Note from "../Note";
import Subtitle from "../Subtitle";

import styles from "../../components/LoginForm/LoginForm.module.scss";
import signup from "../../services/users/signup";

export default function Signup() {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleForm = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    if (error) setError(null);
  };
  const handleSubmit = async () => {
    try {
      // event.preventDefault();
      const response = await signup(values);
      console.log("response: ", response);

      if (response.success) {
        localStorage.setItem("user", response.user);
        router.push("/");
      }
    } catch (error) {
      setError("Error. Verifique los datos ingresados");
    }
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
            type="text"
            value={values.name || ""}
            onChange={handleForm}
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="lastname"
            label="Apellido"
            type="text"
            value={values.lastname || ""}
            onChange={handleForm}
            variant="standard"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="number"
            label="Teléfono (WhatsApp)"
            variant="standard"
            type="number"
            value={values.number || ""}
            onChange={handleForm}
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <Grid
            item
            className={styles.signupLocation}
            sm={12}
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          >
            <TextField
              name="state"
              label="Estado"
              variant="standard"
              type="text"
              value={values.state || ""}
              onChange={handleForm}
              required
              sx={{ flex: "1" }}
            />
            <TextField
              name="city"
              label="Ciudad"
              variant="standard"
              type="text"
              value={values.city || ""}
              onChange={handleForm}
              required
              sx={{ flex: "1" }}
            />
          </Grid>
          <TextField
            name="email"
            label="Email"
            variant="standard"
            type="email"
            value={values.email || ""}
            onChange={handleForm}
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <TextField
            name="password"
            label="Contraseña"
            type="password"
            value={values.password || ""}
            onChange={handleForm}
            variant="standard"
            size="small"
            required
            sx={{ alignSelf: "stretch", margin: "0 3rem" }}
          />
          <ButtonPrimary
            children="Crear cuenta"
            variant="contained"
            onClick={handleSubmit}
          />
          {error && (
            <Alert variant="standard" color="error">
              {error}
            </Alert>
          )}
          <Grid item xs={12} className={styles.loginSignUp}>
            <Subtitle subtitle="¿Ya tienes cuenta?" />
            <Note note="Inicia Sesión" href="/login" />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
