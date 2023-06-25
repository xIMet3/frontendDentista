import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card1.css"

const CardComponent = ({ title, content, buttonText }) => {
  return (
    <div className="card1">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;