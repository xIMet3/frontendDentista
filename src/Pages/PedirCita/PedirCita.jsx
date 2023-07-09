import React, { useState } from "react";
import "./PedirCita.css";
import { createAppointment } from "../../Services/ApiCalls";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const PedirCita = () => {
  // Obtiene las credenciales del usuario
  const { credentials } = useSelector(userData);

  // Estado para almacenar los datos del formulario
  const [body, setBody] = useState({});

  // Estado para manejar errores en el formulario
  const [error, setError] = useState("");

  // Estado para mostrar el mensaje de exito
  const [successMessage, setSuccessMessage] = useState("");

  // Estado para mostrar el mensaje de no citas disponibles
  const [noCitasDisponibles, setNoCitasDisponibles] = useState(false);

  // Estado local para almacenar las citas existentes
  const [appointments, setAppointments] = useState([]);

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

    // Valida que la fecha seleccionada sea un dia de la semana (lunes a viernes)
    if (!isWeekday(selectedDateTime)) {
      setError("Solo se pueden programar citas de lunes a viernes.");
      return;
    }

    // Valida el rango de horas disponibles
    const selectedHour = selectedDateTime.getHours();
    const isValidHour =
      (selectedHour >= 9 && selectedHour < 14) || (selectedHour >= 16 && selectedHour < 20);
    if (!isValidHour) {
      setError("Las horas de cita disponibles son de 9:00 a 14:00 y de 16:00 a 20:00.");
      return;
    }

    // Verifica si ya existe una cita para el Doctor y la fecha seleccionada
    const isAppointmentExist = appointments.find(
      (appointment) =>
        appointment.doctor_id === body.doctor_id &&
        new Date(appointment.date).getTime() === selectedDateTime.getTime()
    );

    if (isAppointmentExist) {
      setError(
        "Ya existe una cita para el médico seleccionado en la fecha y hora especificadas."
      );
      return;
    }

    // Si no hay citas disponibles, muestra el mensaje correspondiente
    setNoCitasDisponibles(true);

    try {
      // Llama a la funcion de creacion de cita y maneja la respuesta
      createAppointment(credentials.token, body)
        .then((res) => {
          if (res.success) {
            setSuccessMessage("Su cita ha sido creada con éxito");
            setTimeout(() => {
              navigate("/misCitas");
            }, 1500);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para verificar si una fecha es un dia de la semana (lunes a viernes)
  const isWeekday = (date) => {
    const day = date.getDay(); // Obtiene el número del día de la semana (0 para domingo, 1 para lunes, etc.)
    return day >= 1 && day <= 5; // Retorna true si es un día de la semana (lunes a viernes)
  };

  return (
    <div>
      {/* Muestra el mensaje de error si hubiera */}
      {error && <p>{error}</p>}

      {/* Muestra el mensaje de exito si hubiera */}
      {successMessage && <p>{successMessage}</p>}

      {/* Muestra el mensaje de no citas disponibles, si corresponde */}
      {noCitasDisponibles && (
        <p>
          No hay citas disponibles en esa fecha y hora, por favor introduzca
          otra fecha para la cita.
        </p>
      )}

      {/* Formulario para crear la cita */}
      <form onSubmit={handleSubmit} className="formCrearCita">
        {/* Input para seleccionar fecha y hora */}
        <input
          className="camposCrearCita"
          type="datetime-local"
          name="date"
          min="2023-01-01T09:00"
          max="2100-12-31T20:00"
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
          <option value="2">Dr. Jesús Vázquez</option>
          <option value="3">Dr. Carlos Redondo</option>
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
