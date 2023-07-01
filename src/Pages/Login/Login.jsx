import React from "react";
import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../Services/ApiCalls";
import { login } from "../userSlice";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => {
  // Define el estado "user" inicializado con las propiedades email y password vacias
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // Obtiene la funcion dispatch de react-redux para despachar acciones
  const dispatch = useDispatch();
  // Obtiene la funcion navigate de react-router-dom para la navegacion
  const navigate = useNavigate();

  // Maneja los cambios en los campos de entrada y actualiza el estado "user"
  const inputHandler = ({ target }) => {
    let { name, value } = target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Maneja el envio del formulario y realiza la llamada a la API para iniciar sesion
  const submitHandler = (e, body) => {
    // Evita el comportamiento predeterminado del evento
    e.preventDefault();
    loginUser(body).then((res) => {
      // Decodifica el token
      let decoded = jwtDecode(res);
      // Despacha la accion login con los datos del usuario
      dispatch(
        login({
          token: res,
          name: decoded.name,
          role: decoded.rol,
        })
      );
      // Redirige al usuario a la pagina principal
      navigate("/");
    });
  };
  return (
    <>
      <Container>
        <Row className="formularioLogin justify-content-center m-5">
          <Col xs={10} md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Introduce email"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
              </Form.Group>
              {/* Se le asigna la funcion inputHandler al evento onChange para manejar los cambios
              en el campo de entrada. */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Introduce contraseña"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
                {/* Se crea un boton de tipo de "submit" para enviar el formulario. Se le asigna la funcion 
              submitHandler al evento onClick, pasando el evento y el objeto 'user' como argumentos.*/}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  submitHandler(e, user);
                }}
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
