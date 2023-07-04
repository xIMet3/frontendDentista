import React, { useState, useEffect } from 'react';
import { updateAppointment, fetchUserAppointments } from '../../Services/ApiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { Button, Modal, Form } from 'react-bootstrap';

function UpdateAppointments() {
  const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modifiedAppointment, setModifiedAppointment] = useState({
    id: '',
    time: '',
    date: '',
    observations: '',
  });

  useEffect(() => {
    const getUserAppointments = async () => {
      try {
        const appointments = await fetchUserAppointments(credentials.token);
        setAppointments(appointments);
      } catch (error) {
        console.error('Error fetching user appointments:', error);
      }
    };

    getUserAppointments();
  }, []);

  const handleModifyAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
    setModifiedAppointment({
      id: appointment.id,
      time: appointment.time,
      date: appointment.date,
      observations: appointment.observations,
    });
  };

  const handleSaveChanges = async () => {
    try {
      await updateAppointment(credentials.token, modifiedAppointment);
      setShowModal(false);
      // Actualizar las citas para reflejar los cambios realizados
      const updatedAppointments = await fetchUserAppointments(credentials.token);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <div>
      <h2>Tus citas</h2>
      {appointments.length ? (
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <p>ID de la cita: {appointment.id}</p>
            <p>Doctor: {appointment.doctor_id}</p>
            <p>Fecha: {appointment.date}</p>
            <p>Descripción: {appointment.description}</p>
            <Button
              variant="primary"
              className="boton"
              onClick={() => handleModifyAppointment(appointment)}
            >
              Modificar Cita
            </Button>
            <hr />
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
            <Form.Group >
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                value={modifiedAppointment.date}
                onChange={(e) =>
                  setModifiedAppointment({
                    ...modifiedAppointment,
                    date: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAppointmentObservations">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={modifiedAppointment.observations}
                onChange={(e) =>
                  setModifiedAppointment({
                    ...modifiedAppointment,
                    observations: e.target.value,
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

