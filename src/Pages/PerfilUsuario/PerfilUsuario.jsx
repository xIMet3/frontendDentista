import React from "react";
import "./PerfilUsuario.css";
import { fetchUserData, updateUserData } from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";

export const PerfilUsuario = () => {
  const [user, setUser] = useState(null);
  const { credentials } = useSelector(userData);
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});

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

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedUserData = await updateUserData(
        credentials.token,
        editedUser
      );
      setUser(updatedUserData);
      setEditedUser(updatedUserData);
      console.log("Perfil actualizado:", updatedUserData);
      handleCloseModal();
    } catch (error) {
      console.error("Error al actualizar el perfil del usuario:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="vistaPerfil">
      {user ? (
        <Card className="cardPerfilUsuario" id="cardPerfil" >
          <Card.Body>
            <Card.Title className="tituloPerfil">PERFIL DE USUARIO</Card.Title>
            <Card.Text>
              <p>Nombre: {user.data.name}</p>
              <p>Teléfono: {user.data.telephoneNumber}</p>
              <p>Correo electrónico: {user.data.email}</p>
            </Card.Text>
            <Button
              variant="primary"
              onClick={handleShowModal}
              className="botonModPerfil"
            >
              Modificar
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Debes loguearte para acceder a tu perfil</p>
      )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar datos de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleUpdateProfile}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PerfilUsuario;
