import { useEffect, useState } from "react";

import CatalogueCards from "../components/CatalogueCards";
import getArticles from "../services/articles/getArticles";

export default function CataloguePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const dataArticles = await getArticles();
      setArticles(dataArticles.data.articles);
      console.log("dataArticles", dataArticles.data.articles);
    };
    fetchArticles();
  }, []);

  return <CatalogueCards articles={articles} />;
}
