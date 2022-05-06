const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const fetchFiles = async () => {
  try {
    const result = await fetch(`${HOST}/files`);
    console.log("result", result);
    const data = await result.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default fetchFiles;
