import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import getByIdArticle from "../../../services/articles/getByIdArticle";
import updateArticle from "../../../services/articles/updateArticle";

export default function EditArticle() {
  const router = useRouter();
  const articleId = router.query?.articleId;
  const [article, setArticle] = useState(null);
  console.log("articleId", articleId);
  console.log("article", article);

  useEffect(() => {
    if (articleId) {
      console.log("Fetch");
      const fetchArticle = async () => {
        const dataArticle = await getByIdArticle(articleId);
        setArticle(dataArticle.data.article);
      };
      fetchArticle();
    }
  }, [articleId]);

  return article ? <ArticleForm article={article} /> : <>...</>;
}
