import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card1.css"

const CardComponent = () => {
  return (
    <div className="card1">
      <Card>
        <Card.Body>
          <Card.Title>Título de la card</Card.Title>
          <Card.Text>Contenido de la card.</Card.Text>
          <Button variant="primary">Botón</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;