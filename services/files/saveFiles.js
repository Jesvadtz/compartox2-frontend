const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const saveFiles = async (formData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("usertoken", user.token);
    const result = await fetch(`${HOST}/files`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: user.token,
      },
      mode: "cors",
    });
    const data = await result.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default saveFiles;
