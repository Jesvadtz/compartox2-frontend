const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const signup = async (body) => {
  try {
    const response = await fetch(`${HOST}/users/signup`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    throw new Error("Error de conexión de red", error);
  }
};

export default signup;
