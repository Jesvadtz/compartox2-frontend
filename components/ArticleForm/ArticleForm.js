import React, { useState, useEffect } from "react";
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
import saveArticle from "../../services/articles/saveArticle";

import styles from "./ArticleForm.module.scss";
import updateArticle from "../../services/articles/updateArticle";

export default function ArticleForm({ article }) {
  const formDefault = {
    name: article?.name || "",
    type: article?.type || "Material",
    description: article?.description || "",
    price: article?.price || "",
    author: article?.author || "",
    editorial: article?.editorial || "",
  };

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

  const isBook = values.type === "Libro";
  const articleId = article?._id;

  const onSubmit = () => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("type", values.type);
    form.append("description", values.description);
    form.append("price", values.price);
    if (isBook) {
      form.append("author", values.author);
      form.append("editorial", values.editorial);
    }
    files.forEach((file) => {
      form.append("image", file);
    });
    if (articleId) {
      updateArticle(form, articleId).then(() => router.push("/catalogue"));
    } else {
      saveArticle(form).then(() => router.push("/catalogue"));
    }
  };

  return (
    <Layout>
      <div className={styles.articleLayout}>
        <div className={styles.articleTitle}>
          <Title title="Datos de artículo" />
        </div>
        <Grid
          container
          spacing={2}
          className={styles.article}
          sx={{ marginBottom: "3rem" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            direction="column"
            className={styles.articleForm}
          >
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
              name="name"
              label={isBook ? "Título de libro" : "Nombre del artículo"}
              variant="standard"
              type="text"
              value={values.name}
              onChange={handleChange}
              required
              sx={{ alignSelf: "stretch", margin: "0 3rem" }}
            />
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
            direction="column"
            className={`${styles.articleForm} ${styles.articleImages}`}
          >
            {!articleId && <ImageUploader files={files} setFiles={setFiles} />}
            <div className={styles.articlePublish}>
              <ButtonPrimary
                variant="contained"
                className={styles.articleButton}
                onClick={onSubmit}
              >
                Publicar artículo
              </ButtonPrimary>
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
