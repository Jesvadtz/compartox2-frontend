const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const addFavorite = async (articleId, userId) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    userId = user?.user._id;

    const result = await fetch(`${HOST}/users/${userId}/favorites`, {
      method: "POST",
      body: JSON.stringify({ articleId }),
      headers: {
        Authorization: user.token,
        "Content-Type": "application/json",
        accept: "applications/json",
      },
      mode: "cors",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("Error al guardar favorito");
  }
};

export default addFavorite;
