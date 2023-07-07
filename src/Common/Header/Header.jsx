import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";
import { BotonCambiaVista2 } from "../BotonCambiaVista2/BotonCambiaVista2";
import { logout } from "../../Pages/userSlice";
import { useNavigate } from "react-router";

export const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const roleId = userData.data.role_id;

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  }

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
              {userData.credentials.token ? (
                <>
                <BotonCambiaVista path={"/PerfilUsuario"} name={"PERFIL"} />
                <BotonCambiaVista path={"/PedirCita"} name={"PEDIR CITA"} />
                <BotonCambiaVista path={"/MisCitas"} name={"MIS CITAS"} />
                {roleId === 2 && (
                  <BotonCambiaVista path={"/CitasDentista"} name={"AGENDA"} />
                )}

                {roleId === 1 && (
                  <BotonCambiaVista path={"/RegistrosAdmin"} name={"USUARIOS"} />
                )}
                <button onClick={handleLogout}>LOGOUT</button>
                </>
                ) : (
                  <>
                  <BotonCambiaVista path={"/Login"} name={"LOGIN"} />
                  <BotonCambiaVista path={"/Register"} name={"REGÍSTRATE"} />
                  </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
