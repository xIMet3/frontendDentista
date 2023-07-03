import React from "react";
import "./PerfilUsuario.css";
import { fetchUserData, updateUserData } from "../../Services/ApiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const PerfilUsuario = () => {
  // Estado para almacenar los datos del usuario
  const [user, setUser] = useState(null);
  // Obtiene los datos del usuario del estado global
  const { credentials } = useSelector(userData);
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});

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
    <div>
      {user ? (
        // Si se obtienen los datos del usuario:
        <div className="cardPerfilUsuario">
          <div className="perfilUsuarioContainer">
            <h1>PERFIL DE USUARIO</h1>
            <p>Nombre: {user.data.name}</p>
            <p>Teléfono: {user.data.telephoneNumber}</p>
            <p>Correo electrónico: {user.data.email}</p>
            <Button
              variant="primary"
              onClick={handleShowModal}
              className="botonModPerfil"
            >
              Modificar
            </Button>
          </div>
        </div>
      ) : (
        // Si no se han obtenido los datos del usuario
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
