import React, { useState } from "react";
import "./CitasCliente.css";
import { createAppointment } from "../../Services/ApiCalls";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const CitasCliente = () => {
  // Obtiene las credenciales del usuario
  const { credentials } = useSelector(userData);

  // Estado para almacenar los datos del formulario
  const [body, setBody] = useState({});

  // Estado para manejar errores en el formulario
  const [error, setError] = useState("");

  // Estado para mostrar el mensaje de exito
  const [successMessage, setSuccessMessage] = useState("");

  // Hook de enrutamiento para redireccionar despues de enviar el formulario
  const navigate = useNavigate();

  // Funcion para manejar el cambio de valor en los campos del formulario
  const inputHandler = ({ target }) => {
    let { name, value } = target;
    setBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Funcion para manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida si todos los campos del formulario estan seleccionados
    if (!body.date || !body.treatment_id || !body.doctor_id) {
      setError("Por favor, selecciona todos los campos.");
      return;
    }

    // Obtiene la fecha y hora seleccionada y la fecha y hora actual
    const selectedDateTime = new Date(body.date);
    const currentDateTime = new Date();

    // Valida que la fecha y hora seleccionada sea posterior a la actual
    if (selectedDateTime <= currentDateTime) {
      setError("Selecciona una fecha y hora posterior a la actual.");
      return;
    }

    try {
      // Llama a la funcion de creacion de cita y maneja la respuesta
      createAppointment(credentials.token, body)
        .then((res) => {
          if (res.success) {
            setSuccessMessage("Su cita ha sido creada con éxito");
            setTimeout(() => {
              navigate("/");
            }, 3000);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Muestra el mensaje de error, si hubiera */}
      {error && <p>{error}</p>}
      
      {/* Muestra el mensaje de exito, si hubiera */}
      {successMessage && <p>{successMessage}</p>}
      
      {/* Formulario para crear la cita */}
      <form onSubmit={handleSubmit} className="formCrearCita">
        {/* Input para seleccionar fecha y hora */}
        <input
          className="camposCrearCita"
          type="datetime-local"
          name="date"
          min="2023-01-01T09:00"
          max="2100-12-31T19:00"
          step="3600"
          onChange={(e) => inputHandler(e)}
        />

        {/* Input de seleccion de tratamiento */}
        <select
          name="treatment_id"
          onChange={(e) => inputHandler(e)}
          value={body.treatment_id || ""}
        >
          <option value="">Seleccionar tratamiento</option>
          <option value="1">Limpieza bucal</option>
          <option value="2">Extracción</option>
          <option value="3">Implante</option>
          <option value="4">Ortodoncia</option>
          <option value="5">Revisión bucal</option>
          <option value="6">Blanqueamiento dental</option>
        </select>

        {/* Input de seleccion de doctor */}
        <select
          name="doctor_id"
          onChange={(e) => inputHandler(e)}
          value={body.doctor_id || ""}
        >
          <option value="">Seleccionar doctor</option>
          <option value="1">Dr. Jesús Vázquez</option>
          <option value="2">Dr. Carlos Redondo</option>
        </select>

        {/* Input para agregar comentarios o descripciones */}
        <textarea
          className="camposCrearCita"
          name="description"
          placeholder="Descripción.."
          maxLength="150"
          onChange={(e) => inputHandler(e)}
        ></textarea>

        {/* Boton de envio */}
        <button type="submit">Crear cita</button>
      </form>
    </div>
  );
};
