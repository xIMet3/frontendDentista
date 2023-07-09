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

export const updateUserData = async (token, userData) => {
  const res = await axios.put(
    "http://localhost:3000/updateProfile",
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const createAppointment = async (token, appointmentData) => {
  const res = await axios.post(
    "http://localhost:3000/newAppointment",
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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
  const res = await axios.get("http://localhost:3000/allProfiles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const profiles = res.data;
  return profiles;
};

export const deleteProfile = async (userId, token) => {
  const res = await axios.delete(`http://localhost:3000/deleteProfile/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
