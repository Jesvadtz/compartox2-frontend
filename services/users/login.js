import { ResetTvOutlined } from "@mui/icons-material";
import jwt from "jwt-decode";
const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const login = async (body) => {
  try {
    const response = await fetch(`${HOST}/users/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        accept: "applications/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success === true) {
        const user = jwt(data.data.token).data;
        return { data: user, token: data.data.token };
      }
      throw new Error("Compruebe su email y contraseña");
    }
    throw new Error("Error en el servidor");
  } catch (error) {
    throw new Error("Error de conexión de red", error);
  }
};
export default login;
