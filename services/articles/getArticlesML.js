const HOST = process.env.API_MERCADO_LIBRE || "";

const getArticles = async () => {
  try {
    const result = await fetch(
      `${HOST}limit=10&category=MLM1499&q=${searching}`
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default getArticles;
