import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <div className="navbarComun">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GEEKS DENTAL</Navbar.Brand>
          <Nav className="navbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Regístrate</Nav.Link>
            <Nav.Link href="#pricing">Log In</Nav.Link>
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































