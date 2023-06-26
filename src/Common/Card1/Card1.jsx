import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card1.css"

const CardComponent = ({ title, content, price }) => {
  return (
    <div className="card1">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <div>{price}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;