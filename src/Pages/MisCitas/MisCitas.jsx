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
  // Obtiene las credenciales de usuario desde el estado global
  const { credentials } = useSelector(userData);

  // Define el estado de las citas y el estado para mostrar o ocultar el modal
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Estado para almacenar la cita seleccionada para modificar
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Estado para almacenar la cita modificada
  const [modifiedAppointment, setModifiedAppointment] = useState({
    id: "",
    time: "",
    date: "",
    description: "",
  });

  // Obtiene las citas del usuario al cargar el componente
  useEffect(() => {
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

  // Maneja el evento de modificar una cita
  const handleModifyAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
    setModifiedAppointment({
      id: appointment.id,
      time: appointment.time,
      date: appointment.date,
      description: appointment.description,
    });
  };

  // Maneja el evento de eliminar una cita
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      // Llama a la función deleteAppointment para eliminar la cita utilizando el appointmentId y el token de autenticación
      await deleteAppointment(appointmentId, credentials.token);

      // Filtra las citas para obtener todas excepto la cita eliminada
      const updatedAppointments = appointments.filter(
        (appointment) => appointment.id !== appointmentId
      );

      // Actualiza el estado de las citas con las citas actualizadas
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  // Maneja el evento de guardar los cambios realizados en una cita
  const handleSaveChanges = async () => {
    try {
      // Actualiza la cita
      await updateAppointment(credentials.token, modifiedAppointment);
      setShowModal(false);

      // Actualiza las citas y los cambios realizados
      const updatedAppointments = await fetchUserAppointments(
        credentials.token
      );
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <div className="bodyVista">
      <h1>Tus citas</h1>
      {appointments.length ? (
        appointments.map((appointment) => (
          <div className="cardCita" key={appointment.id}>
            <p>ID cita: {appointment.id}</p>
            <p>Doctor: {appointment.doctor_id === 2 ? "Dr. Jesús Vázquez" : "Dr. Carlos Redondo"}</p>
            <p>Fecha: {new Date(appointment.date).toLocaleString()}</p>
            <p>Descripción: {appointment.description}</p>
            <Button
              variant="primary"
              className="botonModificar"
              onClick={() => handleModifyAppointment(appointment)}
            >
              Modificar Cita
            </Button>
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

