import React from "react";
import "./PerfilUsuario.css";
import { fetchUserData } from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from "react";

export const PerfilUsuario = () => {
  const [user, setUser] = useState(null);
  const { credentials } = useSelector(userData);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(credentials.token);
        setUser(userData);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    getUserData();
  }, []);

  return (
    <div>
      {user ? (
        <div className="cardPerfilUsuario">
          <h1>PERFIL DE USUARIO</h1>
          <p>Nombre: {user.data.name}</p>
          <p>Teléfono: {user.data.telephoneNumber}</p>
          <p>Correo electrónico: {user.data.email}</p>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default PerfilUsuario;
