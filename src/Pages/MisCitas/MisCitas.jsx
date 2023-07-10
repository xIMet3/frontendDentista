import React, { useState, useEffect } from "react";
import {
  updateAppointment,
  fetchUserAppointments,
  deleteAppointment,
} from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Button, Modal, Form } from "react-bootstrap";
import "./MisCitas.css";

function UpdateAppointments() {
  const { credentials } = useSelector(userData);

  // Estado para almacenar las citas del usuario
  const [appointments, setAppointments] = useState([]);

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Estado para almacenar la cita seleccionada
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Estado para almacenar la cita modificada
  const [modifiedAppointment, setModifiedAppointment] = useState({
    id: "",
    time: "",
    date: "",
    description: "",
  });
  // Nuevo estado para almacenar la fecha del filtro
  const [filterDate, setFilterDate] = useState(null);

  useEffect(() => {
    // Obtener las citas del usuario al cargar el componente
    const getUserAppointments = async () => {
      try {
        const appointments = await fetchUserAppointments(credentials.token);
        setAppointments(appointments);
      } catch (error) {
        console.error("Error fetching user appointments:", error);
      }
    };

    getUserAppointments();
  }, []);

  const handleModifyAppointment = (appointment) => {
    // Manejar la selección de una cita y mostrar el modal de modificación
    setSelectedAppointment(appointment);
    setShowModal(true);
    setModifiedAppointment({
      id: appointment.id,
      time: appointment.time,
      date: appointment.date,
      description: appointment.description,
    });
  };

  const handleDeleteAppointment = async (appointmentId) => {
    // Manejar la eliminación de una cita

    try {
      // Llamada a la API para eliminar la cita utilizando el ID de la cita y el token
      await deleteAppointment(appointmentId, credentials.token);
      // Filtra las citas actualizadas, excluyendo la cita que se elimino
      const updatedAppointments = appointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
      // Actualiza el estado de las citas con las citas actualizadas
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };


  const handleSaveChanges = async () => {
    // Maneja la actualizacion de una cita

    try {
      // Actualiza la cita en el servidor mediante la API
      await updateAppointment(credentials.token, modifiedAppointment);

      // Cerrar el modal de modificacion de cita
      setShowModal(false);

      // Obtener las citas actualizadas del usuario desde el servidor
      const updatedAppointments = await fetchUserAppointments(
        credentials.token
      );

      // Filtrar las citas actualizadas segun la fecha de filtro (si esta seleccionada)
      const filteredAppointments = filterDate
        ? updatedAppointments.filter(
            (appointment) =>
              new Date(appointment.date).toLocaleDateString() ===
              filterDate.toLocaleDateString()
          )
        : updatedAppointments;

      // Actualiza el estado de las citas con las citas filtradas o sin filtrar
      setAppointments(filteredAppointments);
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bodyVista">
      <h1>Tus citas</h1>

      {/* Filtro de fecha */}
      <div className="filterContainer">
        <label htmlFor="filterDate"></label>{" "}
        {/* Input de fecha */}
        <input
          type="date"
          id="filterDate"
          value={filterDate ? filterDate.toISOString().substring(0, 10) : ""}
          onChange={(e) => {
            // Obtiene la fecha seleccionada del input
            const selectedDate = e.target.value; 
            // Actualiza el estado filterDate con la fecha seleccionada convertida en objeto Date o null
            // si no hay fecha seleccionada
            setFilterDate(selectedDate ? new Date(selectedDate) : null);
          }}
        />
      </div>

      {/* Renderiza las citas */}
      {appointments.length ? (
        appointments
          .filter((appointment) => {
            if (!filterDate) {
              return true;
            }

            return (
              new Date(appointment.date).toLocaleDateString() ===
              filterDate.toLocaleDateString()
            );
          })
          .map((appointment) => (
            <div className="cardCita" key={appointment.id}>
              <p>ID cita: {appointment.id}</p>
              <p>
                Doctor:{" "}
                {appointment.doctor_id === 2
                  ? "Dr. Jesús Vázquez"
                  : "Dr. Carlos Redondo"}
              </p>
              <p>Fecha: {new Date(appointment.date).toLocaleString()}</p>
              <p>Descripción: {appointment.description}</p>
              {/* Botón para modificar cita */}
              <Button
                variant="primary"
                className="botonModificar"
                onClick={() => handleModifyAppointment(appointment)}
              >
                Modificar Cita
              </Button>
              {/* Boton para eliminar cita */}
              <Button
                variant="danger"
                className="botonEliminar"
                onClick={() => handleDeleteAppointment(appointment.id)}
              >
                Eliminar Cita
              </Button>
            </div>
          ))
      ) : (
        <p className="loadingAppointments">No tiene citas pendientes</p>
      )}

      {/* Modal para modificar cita */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAppointmentId">
              <Form.Label>ID de la cita</Form.Label>
              <Form.Control
                type="text"
                value={modifiedAppointment.id}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                value={new Date(modifiedAppointment.date).toLocaleString()}
                onChange={(e) =>
                  setModifiedAppointment({
                    ...modifiedAppointment,
                    date: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formAppointmentdescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={modifiedAppointment.description}
                onChange={(e) =>
                  setModifiedAppointment({
                    ...modifiedAppointment,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateAppointments;
