import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card1.css"

const CardComponent = ({ title, content, price }) => {
  return (
    <div className="card1">
      <div>
        <div className="bodyCard1">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;