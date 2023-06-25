import React from "react";
import axios from "axios";
import "./Home.css";
import CardComponent from "../../Common/Card1/Card1";

export const Home = () => {
  return (
    <div className="homeGeneral">
      <div className="fondoPrincipal">
        <img src="./img/muelaTatoo.png" alt="" />
      </div>

      <div className="cardsIzquierda">
        <div className="primeraCard">
        <CardComponent
          title="REVISIÓN BUCAL"
          content="Revisión de dientes y encias."
          buttonText="Más info."
        />
        </div>

        <div className="segundaCard">
        <CardComponent />
        </div>

        <div className="terceraCard">
        <CardComponent />
        </div>


      </div>

      <div className="cardsDerecha">
        {/* Contenido de cardsDerecha */}
      </div>
    </div>
  );
};