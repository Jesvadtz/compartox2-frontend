const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const fetchArticles = async () => {
  try {
    const result = await fetch(`${HOST}/articles`);
    console.log("result", result);
    const data = await result.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default fetchArticles;
