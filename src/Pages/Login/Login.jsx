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
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = ({ target }) => {
    let { name, value } = target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e, body) => {
    e.preventDefault();
    loginUser(body).then((res) => {
      let decoded = jwtDecode(res);
      dispatch(
        login({
          token: res,
          name: decoded.name,
          role: decoded.rol,
          role_id: decoded.roleId, // Agregar roleId a la acción login
        })
      );
      navigate("/");
    });
  };

  return (
    <>
      <Container className="loginEntero">
        <Row className="formularioLogin justify-content-center m-5">
          <Col xs={10} md={6} className="">
            <Form className="h-100 d-flex flex-column align-items-center justify-content-center">
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

