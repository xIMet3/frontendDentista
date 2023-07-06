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

// Funcion para actualizar los datos del usuario
export const updateUserData = async (token, userData) => {
  // Realiza una solicitud usando axios
  const res = await axios.put(
    "http://localhost:3000/updateProfile",
    // Datos del usuario a actualizar
    userData,
    {
      headers: {
        // Agrega el token en el header de la solicitud
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // Devuelve los datos de la respuesta
  return res.data;
};

export const createAppointment = async (token, appointmentData) => {
  // Realiza una solicitud usando axios
  const res = await axios.post(
    "http://localhost:3000/newAppointment",
    // Datos del usuario a actualizar
    appointmentData,
    {
      headers: {
        // Agrega el token en el header de la solicitud
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // Devuelve los datos de la respuesta
  return res.data;
};

export const fetchUserAppointments = async (token) => {
  const res = await axios.get("http://localhost:3000/allAppointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
  return res.data.data;
};

export const updateAppointment = async (token, appointmentData) => {
  const res = await axios.put(
    `http://localhost:3000/updateAppointment/${appointmentData.id}`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const fetchAllAppointments = async (token, appointmentData) => {
  const res = await axios.get("http://localhost:3000/appointmentsByDoctor", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: appointmentData,
  });
  return res.data;
};

export const getAllProfiles = async (token) => {
  let access = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };
  let res = await axios.get(`http://localhost:3000/allProfiles`, access);
  return res.data;
};
