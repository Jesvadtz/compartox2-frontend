const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const updateArticle = async (formData, articleId) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const result = await fetch(`${HOST}/articles/${articleId}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: user.token,
      },
      mode: "cors",
    });

    const data = await result.json();
    console.log("dataArticle", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default updateArticle;
