import React from "react";
import "./BotonCambiaVista.css";
import { useNavigate } from "react-router-dom";

export const BotonCambiaVista = ({ path, name }) => {
  const navigate = useNavigate();

  return (
    <div className="botonCambiaVistaDesign" onClick={() => navigate(path)}>
      {name}
    </div>
  );
};
