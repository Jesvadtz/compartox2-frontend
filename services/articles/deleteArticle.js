const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const deleteArticle = async (articleId) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const result = await fetch(`${HOST}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        Authorization: user.token,
      },
      mode: "cors",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default deleteArticle;
