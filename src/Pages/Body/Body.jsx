import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { PerfilUsuario } from "../PerfilUsuario/PerfilUsuario";
export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfilUsuario" element={<PerfilUsuario />} />
      </Routes>
    </>
  );
};
