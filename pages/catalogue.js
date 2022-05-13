import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import CatalogueCards from "../components/CatalogueCards";
import CatalogueCardsML from "../components/CatalogueCardsML";
import getArticles from "../services/articles/getArticles";
import searchArticles from "../services/articles/searchArticles";
import getArticlesML from "../services/articles/getArticlesML";
import Subtitle from "../components/Subtitle";

import styles from "../styles/Catalogue.module.scss";
import { Typography } from "@mui/material";

export default function CataloguePage() {
  const [articles, setArticles] = useState([]);
  const [articlesML, setArticlesML] = useState([]);

  const router = useRouter();
  console.log("router", router);

  useEffect(() => {
    if (router.isReady) {
      const fetchArticles = async () => {
        const search = router.query.q;
        if (search) {
          searchArticles(search).then((articles) =>
            setArticles(articles.data.articles)
          );
          getArticlesML(search).then((data) => {
            setArticlesML(data.results);
            console.log("articlesML", data.results);
          });
        } else {
          const dataArticles = await getArticles();
          setArticles(dataArticles.data.articles);
          console.log("dataArticles", dataArticles.data.articles);
        }
      };
      fetchArticles();
    }
  }, [router.isReady, router.query?.q]);
  console.log("articles.data.articles", articles);
  return (
    <Layout>
      <div className={styles.catalogueDataBase}>
        {router.query?.q && <Subtitle subtitle="Resultados de tu búsqueda" />}
        {router.query?.q && articles?.length === 0 && (
          <Typography variant="body2">
            Lo sentimos, no hay resultados para tu búsqueda, intenta con otra
            palabra
          </Typography>
        )}
      </div>
      <CatalogueCards articles={articles} />

      {router.query?.q && (
        <CatalogueCardsML
          articles={articlesML.map((item) => ({
            name: item.title,
            price: item.price,
            images: [item.thumbnail],
            _id: item.id,
            link: item.permalink,
          }))}
        />
      )}
    </Layout>
  );
}
