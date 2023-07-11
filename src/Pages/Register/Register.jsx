import React from "react";
import "./Register.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Services/ApiCalls";
import { Form } from "react-bootstrap";

export const Register = () => {
  // Declara la variable 'user' y una funcion para actualizar su valor llamada 'setUser'. A 'user' se le asigna el
  // objeto con las propiedades 'name', 'mail' y 'password'
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    telephoneNumber: "",
  });

  // Inicializacion de hook useDispatch para despachar acciones en Redux y useNavigate para navegacion
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define la funcion inputHandler que recibe un objeto evento como argumento y lo desestructura para extraer
  // la propiedad 'target' del evento
  const inputHandler = ({ target }) => {
    // Desestructura el objeto para extraer las propiedades 'name' y 'value' del objeto 'target'.
    let { name, value } = target;
    // Se utiliza la funcion setUser para actualizar el estado de 'user'. Recibe el estado anterior y devuelve un
    // nuevo objeto de estado. Se utiliza el operador spread (...prevState) para copiar todas las propiedades
    // existentes del estado anterior, y luego se define una nueva propiedad [name] con el 'valor' value introducido
    // por el usuario
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e, body) => {
    // Evita la recarga de la pagina al enviar el formulario
    e.preventDefault();
    registerUser(body)
      .then((res) => {
        // Navega al home despues de registrar el usuario
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container id="registerEntera">
        <Row className="formularioRegister justify-content-center m-5">
          <Col xs={10} md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Introduce tu nombre"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Introduce tu email"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="phone" //Proxima peticion de número de telefono
                  name="telephoneNumber"
                  placeholder="Introduce tu número de teléfono"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Introduce tu contraseña"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
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
