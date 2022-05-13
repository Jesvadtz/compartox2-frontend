import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import DetailCard from "../../components/DetailCard/DetailCard";
import Layout from "../../components/Layout";
import getByIdArticle from "../../services/articles/getByIdArticle";

export default function ArticlePage() {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const articleId = router.query?.articleId;

  useEffect(() => {
    const fetchArticle = async () => {
      const dataArticle = await getByIdArticle(articleId);

      setArticle(dataArticle.data?.article);
    };
    if (articleId) fetchArticle();
  }, [articleId]);

  return <Layout>{article && <DetailCard article={article} />}</Layout>;
}
