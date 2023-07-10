import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Contacto.css";

export const InfoContacto = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMensajeEnviado(true);
    closeModal();
  };

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
          <p>Provicia: Valencia - CP: 46006</p>
          <p>Horario: De Lunes a Viernes de 9:00 a 14:00 y de 16:00 a 21:00</p>
          <p className="emailContacto" onClick={openModal}>
            Email: ximo@falsomail.com
          </p>
        </div>
      </div>

      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        dialogClassName="modal-custom"
      >
        <Modal.Header closeButton>
          <Modal.Title>Formulario de contacto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Teléfono:</label>
              <input type="tel" className="form-control" />
            </div>

            <div className="form-group">
              <label>Mensaje:</label>
              <textarea className="form-control" rows="4" />
            </div>

            <Button variant="secondary" onClick={closeModal}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </form>
        </Modal.Body>
      </Modal>

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
