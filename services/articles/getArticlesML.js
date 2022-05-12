const HOST = process.env.NEXT_PUBLIC_API_MERCADO_LIBRE || "";

const getArticlesML = async (search) => {
  try {
    const result = await fetch(`${HOST}limit=8&category=MLM1499&q=${search}`, {
      mode: "cors",
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default getArticlesML;
