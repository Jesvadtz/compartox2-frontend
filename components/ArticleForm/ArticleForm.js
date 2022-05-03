import React, { useState } from "react";

import { Alert, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ButtonPrimary from "../ButtonPrimary";
import Note from "../Note";
import Layout from "../Layout";
import Title from "../Title";

import styles from "./ArticleForm.module.scss";

const formDefault = {
  name: "",
  type: "Material",
  description: "",
  precio: 0,
  author: "",
  editorial: "",
  images: "",
};

export default function ArticleForm() {
  const [values, setValues] = useState(formDefault);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleType = (event) => {
    console.log("event target: ", event.target);
    setValues(formDefault);
  };

  console.log("values: ", values);
  const isBook = values.type === "Libro";

  return (
    <Layout>
      <div className={styles.articleLayout}>
        <div className={styles.articleTitle}>
          <Title title="Datos de artículo" />
        </div>
        <Grid container spacing={2} className={styles.article}>
          <Grid item xs={12} md={6} className={styles.articleForm}>
            <TextField
              name="name"
              label={isBook ? "Título de libro" : "Nombre del artículo"}
              variant="standard"
              type="text"
              value={values.name}
              onChange={handleChange}
              required
              sx={{ alignSelf: "stretch", margin: "0 3rem" }}
            />
            <FormControl fullWidth variant="standard">
              <InputLabel sx={{ alignSelf: "stretch", margin: "0 3rem" }}>
                Tipo de artículo
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                value={values.type}
                name="type"
                label="Tipo de Artículo"
                onChange={handleType}
                sx={{
                  alignSelf: "stretch",
                  margin: "0 3rem",
                  textAlign: "left",
                }}
              >
                <MenuItem value={"Material"}>Material</MenuItem>
                <MenuItem value={"Libro"}>Libro</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="description"
              label="Descripción"
              variant="standard"
              type="description"
              value={values.description}
              onChange={handleChange}
              required
              sx={{ alignSelf: "stretch", margin: "0 3rem" }}
            />
            <TextField
              name="price"
              label="Precio"
              variant="standard"
              type="number"
              value={values.price}
              onChange={handleChange}
              required
              sx={{ alignSelf: "stretch", margin: "0 3rem" }}
            />
            {isBook && (
              <>
                <TextField
                  name="author"
                  label="Autor del libro"
                  variant="standard"
                  type="text"
                  value={values.author}
                  onChange={handleChange}
                  required
                  sx={{ alignSelf: "stretch", margin: "0 3rem" }}
                />
                <TextField
                  name="editorial"
                  label="Editorial"
                  variant="standard"
                  type="text"
                  value={values.editorial}
                  onChange={handleChange}
                  required
                  sx={{ alignSelf: "stretch", margin: "0 3rem" }}
                />
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${styles.articleForm} ${styles.articleImages}`}
          >
            <TextField
              name="images"
              label="Imágenes"
              variant="standard"
              type="text"
              value={values.images}
              onChange={handleChange}
              required
              sx={{ alignSelf: "stretch", margin: "0 3rem" }}
            />
            <div className={styles.articlePublish}>
              <ButtonPrimary
                children="Publicar artículo"
                variant="contained"
                className={styles.articleButton}
                // onClick={handleSubmit}
              />
              <div className={styles.articlePublish}>
                <Note note="Cancelar" href="/" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
