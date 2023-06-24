import React from "react";
import "./Header.css";
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";
import { BotonCambiaVista2 } from "../../Common/BotonCambiaVista2/BotonCambiaVista2";

export const Header = () => {
  return (
    <div className="headerGeneral">
      <div className="headerIzquierda">
        <div className="botonIconoPrincipal">
          <BotonCambiaVista2 path={"/Home"} name={"GeeksDent"} />
        </div>
      </div>

      <div className="headerDerecha">
        <div className="botonUno">
          <BotonCambiaVista path={"/Login"} name={"Login"} />
        </div>
        <div className="botonDos">
          <BotonCambiaVista path={"/Register"} name={"Registro"} />
        </div>
      </div>
    </div>
  );
};
