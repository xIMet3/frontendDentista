import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Contacto.css";

export const InfoContacto = () => {
  // Estado para controlar la apertura/cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Estado para controlar si se ha enviado el mensaje
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  // Funcion para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Funcion para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Maneja el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Marcar el mensaje como enviado
    setMensajeEnviado(true);
    // Cerrar el modal despues de enviar el formulario
    closeModal();
  };

  // Efecto que reinicia el estado de mensaje enviado despues de 2 segundos
  useEffect(() => {
    if (mensajeEnviado) {
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 2000);
    }
  }, [mensajeEnviado]);

  return (
    <div className="vistaEntera">
      <div className="cardContacto">
        <div className="contenidoContacto">
          <p>Dirección: Av. General Muelas Sanas, 32</p>
          <p>Provicia: Valencia - CP: 46000</p>
          <p>Horario: De Lunes a Viernes de 9:00 a 14:00 y de 16:00 a 21:00</p>
          <p className="emailContacto" onClick={openModal}>
            Email: ximo@falsomail.com
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal show={modalIsOpen} onHide={closeModal} dialogClassName="modal-custom">
        {/* Encabezado del modal */}
        <Modal.Header closeButton>
          <Modal.Title>Formulario de contacto</Modal.Title>
        </Modal.Header>

        {/* Contenido del modal */}
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* Campo de nombre */}
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" className="form-control" />
            </div>

            {/* Campo de email */}
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" />
            </div>

            {/* Campo de telefono */}
            <div className="form-group">
              <label>Teléfono:</label>
              <input type="tel" className="form-control" />
            </div>

            {/* Campo de mensaje */}
            <div className="form-group">
              <label>Mensaje:</label>
              <textarea 
              className="form-control" 
              rows="4" 
              maxLength="80"
              />
            </div>

            {/* Botones del modal */}
            <Button variant="secondary" onClick={closeModal}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Mensaje enviado */}
      {mensajeEnviado && (
        <div className="mensajeEnviado-overlay">
          <div className="mensajeEnviado">
            <p>Mensaje enviado, en breve recibirá respuesta.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoContacto;
