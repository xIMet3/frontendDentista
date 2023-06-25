import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";
import { BotonCambiaVista2 } from "../BotonCambiaVista2/BotonCambiaVista2";


export const Header = () => {
  return (
    <div className="navbarComun">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
            <BotonCambiaVista2 path={"/Home"} name={"GEEKSDENT"} />
          </Navbar.Brand>
          <Nav className="navbar-links">
          <BotonCambiaVista path={"/Login"} name={"LOGIN"} />
          <BotonCambiaVista path={"/Register"} name={"REGÍSTRATE"} />
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

  








  // <div className="headerGeneral">
  //   <div className="headerIzquierda">
  //     <div className="botonIconoPrincipal">
  //       <BotonCambiaVista2 path={"/Home"} name={"GeeksDent"} />
  //     </div>
  //   </div>

  //   <div className="headerDerecha">
  //     <div className="botonUno">
  //       <BotonCambiaVista path={"/Login"} name={"Login"} />
  //     </div>
  //     <div className="botonDos">
  //       <BotonCambiaVista path={"/Register"} name={"Registro"} />
  //     </div>
  //   </div>
  // </div>































