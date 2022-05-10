const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const getByIdArticle = async (articleId) => {
  try {
    const result = await fetch(`${HOST}/articles/${articleId}`);
    const data = await result.json();
    console.log("dataArticle", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default getByIdArticle;
