import axios from "axios";

export const loginUser = async (body) => {
  let res = await axios.post("http://localhost:3000/login", body);
  return res.data.token;
};

export const registerUser = async (body) => {
  let res = await axios.post("http://localhost:3000/register", body);
  return res.data;
};

export const fetchUserData = async (token) => {
    const res = await axios.get("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
};

// Función para actualizar los datos del usuario
export const updateUserData = async (token, userData) => {
  // Realiza una solicitud usando axios
  const res = await axios.put(
    "http://localhost:3000/updateProfile", 
    // Datos del usuario a actualizar
    userData, 
    {
      headers: {
        // Agregar el token de autorización en el encabezado de la solicitud
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // Devuelve los datos de la respuesta
  return res.data;
}
