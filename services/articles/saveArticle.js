const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const saveArticle = async (formData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const result = await fetch(`${HOST}/articles`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: user.token,
      },
      mode: "cors",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("Error al crear artículo");
  }
};

export default saveArticle;
