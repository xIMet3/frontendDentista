import React from "react";
import "./PerfilUsuario.css";
import { fetchUserData } from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from "react";

export const PerfilUsuario = () => {
  // Estado para almacenar los datos del usuario
  const [user, setUser] = useState(null);
  // Obtiene los datos del usuario del estado global
  const { credentials } = useSelector(userData);

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Obtiene los datos del usuario usando el token
        const userData = await fetchUserData(credentials.token);
        // Actualiza el estado con los datos del usuario obtenidos
        setUser(userData);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    // Ejecuta la funcion para obtener los datos del usuario
    getUserData();
  }, []);

  return (
    <div>
      {user ? (
        // Si se obtienen los datos del usuario:
        <div className="cardPerfilUsuario">
          <h1>PERFIL DE USUARIO</h1>
          <p>Nombre: {user.data.name}</p>
          <p>Teléfono: {user.data.telephoneNumber}</p>
          <p>Correo electrónico: {user.data.email}</p>
        </div>
      ) : (
        // Si no se han obtenido los datos del usuario
        <p>Debes loguearte para acceder a tu perfil</p>
      )}
    </div>
  );
};

export default PerfilUsuario;
