const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const searchArticles = async (search) => {
  try {
    const result = await fetch(`${HOST}/articles?q=${encodeURI(search)}`, {
      mode: "cors",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default searchArticles;
