import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { PerfilUsuario } from "../PerfilUsuario/PerfilUsuario";
import { ZonaAdmin } from "../ZonaAdmin/ZonaAdmin";
import { CitasCliente } from "../CitasCliente/CitasCliente";
import { CitasDentista } from "../CitasDentista/CitasDentista";
import { RegistrosAdmin } from "../RegistrosAdmin/RegistrosAdmin";
export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfilUsuario" element={<PerfilUsuario />} />
        <Route path="/zonaAdmin" element={<ZonaAdmin />} />
        <Route path="/citasCliente" element={<CitasCliente />} />
        <Route path="/citasDentista" element={<CitasDentista />} />
        <Route path="/registrosAdmin" element={<RegistrosAdmin />} />

        
      </Routes>
    </>
  );
};
