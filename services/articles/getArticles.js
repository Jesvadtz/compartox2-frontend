const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const getArticles = async () => {
  try {
    const result = await fetch(`${HOST}/articles`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default getArticles;
