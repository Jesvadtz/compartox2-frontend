import React, { useState } from "react";
import { useRouter } from "next/router";

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
import ImageUploader from "../ImageUploader";
import saveFiles from "../../services/files/saveFiles";

import styles from "./ArticleForm.module.scss";

const formDefault = {
  name: "",
  type: "Material",
  description: "",
  price: 0,
  author: "",
  editorial: "",
};

export default function ArticleForm() {
  const [values, setValues] = useState(formDefault);
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleType = (event) => {
    setValues({ ...formDefault, [event.target.name]: event.target.value });
    setFiles([]);
  };

  const router = useRouter();

  const onSubmit = () => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("type", values.type);
    form.append("description", values.description);
    form.append("price", values.price);
    form.append("author", values.author);
    form.append("editorial", values.editorial);
    files.forEach((file) => {
      form.append("image", file);
    });
    saveFiles(form).then(() => router.push("/"));
  };

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
              type="text"
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
            <ImageUploader files={files} setFiles={setFiles} />
            <div className={styles.articlePublish}>
              <ButtonPrimary
                children="Publicar artículo"
                variant="contained"
                className={styles.articleButton}
                onClick={onSubmit}
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
