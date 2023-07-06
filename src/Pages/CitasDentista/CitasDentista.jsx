// Importamos las dependencias necesarias
import React, { useState, useEffect } from "react";
import "./CitasDentista.css";
import { fetchAllAppointments } from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

// Define el componente DoctorAppointments
export const DoctorAppointments = () => {
  // Define el estado local "appointments" utilizando el hook useState, inicializado como un array vacio
  const [appointments, setAppointments] = useState([]);
  // Utiliza el hook useSelector para obtener los datos del usuario desde el estado global
  const { credentials } = useSelector(userData);

  // Utiliza el hook useEffect para cargar las citas del doctor cuando el componente se monte
  useEffect(() => {
    // Define una funcion asincrnica para obtener las citas
    const getAppointments = async () => {
      try {
        // Llama a la funcion fetchAllAppointments para obtener las citas utilizando el token
        const res = await fetchAllAppointments(credentials.token, {});
        // Extrae los datos de las citas del resultado
        const allAppointments = res.data;
        // Actualiza el estado local "appointments" con las citas obtenidas
        setAppointments(allAppointments);
      } catch (error) {
        // Captura el error en caso de que ocurra
        console.error("Error al obtener las citas:", error);
      }
    };
    // Llama a la funcion getAppointments para obtener las citas
    getAppointments();
  }, []); // Asegura que el efecto solo se ejecute una vez

  // Renderiza el componente
  return (
    <div className="citasDoctor">
      <h1>Citas pendientes</h1>
      {/* Comprueba si "appointments" es un array antes de renderizar */}
      {Array.isArray(appointments) &&
        appointments.map((appointment) => (
          <div className="cardsCitas" key={appointment.id}>
            <p>ID cita: {appointment.id}</p>
            {/* Convierte la fecha a formato local utilizando "toLocaleString()" */}
            <p>Fecha: {new Date(appointment.date).toLocaleString()}</p>
            <p>Descripción: {appointment.description}</p>
          </div>
        ))}
    </div>
  );
};

export default DoctorAppointments;