import React from "react";
import axios from "axios";
import "./Home.css";
import { Card, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="homeGeneral">
      <div className="fondoPrincipal">
        <img src="./img/muelaTatoo.png" alt="" />
      </div>

      <div className="cardsIzquierda">
        <div className="card-overlay">
          <Card>
            <Card.Body>
              <Card.Title>Título de la card</Card.Title>
              <Card.Text>Contenido de la card.</Card.Text>
              <Button variant="primary">Botón</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="cardsDerecha">
        {/* Contenido de cardsDerecha */}
      </div>
    </div>
  );
};
