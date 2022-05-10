const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const getUser = async (token) => {
  try {
    const response = await fetch(`${HOST}/users/me`, {
      method: "GET",
      headers: {
        Authorization: token,
        accept: "applications/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.data.user;
    }
  } catch (error) {}
};

export default getUser;
