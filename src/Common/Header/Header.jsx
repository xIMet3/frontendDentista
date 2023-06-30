import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";
import { BotonCambiaVista2 } from "../BotonCambiaVista2/BotonCambiaVista2";

export const Header = () => {
  return (
    <div className="navbarComun">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <BotonCambiaVista2 path={"/"} name={"GEEKSDENT"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="navbar-links">
              <BotonCambiaVista path={"/Login"} name={"LOGIN"} />
              <BotonCambiaVista path={"/Register"} name={"REGÍSTRATE"} />
              <BotonCambiaVista path={"/PerfilUsuario"} name={"PERFIL"} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
