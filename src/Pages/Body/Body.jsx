import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { PerfilUsuario } from "../PerfilUsuario/PerfilUsuario";
import { PedirCita } from "../PedirCita/PedirCita";
import { DoctorAppointments } from "../CitasDentista/CitasDentista";
import AllUsers from "../RegistrosAdmin/RegistrosAdmin";
import UpdateAppointments from "../MisCitas/MisCitas";
export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfilUsuario" element={<PerfilUsuario />} />
        <Route path="/pedirCita" element={<PedirCita />} />
        <Route path="/misCitas" element={<UpdateAppointments />} />
        <Route path="/citasDentista" element={<DoctorAppointments />} />
        <Route path="/registrosAdmin" element={<AllUsers />} />
      </Routes>
    </>
  );
};
