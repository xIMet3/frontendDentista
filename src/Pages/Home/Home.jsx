import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import CardComponent from "../../Common/Card1/Card1";

export const Home = () => {
  return (
    <div className="paginaEntera">
      <Container className="zonaCards">
        <Row>
          <Col xs={12} md={4}>
            <Row>
              <div className="primeraCard">
                <CardComponent
                  title="REVISIÓN BUCAL"
                  content="Revisión de dientes y encias."
                  price="24.95€"
                />
              </div>
            </Row>
            <CardComponent
              title="LIMPIEZA BUCAL"
              content="Revisión y limpieza a fondo de dientes y encias"
              price="39.95€"
            />
            <Row>
              <div className="segundaCard"></div>
            </Row>
            <CardComponent
              title="IMPLANTE"
              content="Extracción y colocación de implante."
              price="899.95€"
            />
            <Row>
              <div className="sextaCard"></div>
            </Row>
          </Col>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <Row>
              <div className="cuartaCard"></div>
            </Row>
            <CardComponent
              title="EXTRACCIÓN"
              content="Extracción de pieza dental."
              price="49.95€"
            />
            <Row>
              <div className="quintaCard"></div>
            </Row>
            <CardComponent
              title="BLANQUEAMIENTO BUCAL"
              content="Blanqueamiento dental."
              price="49.95€"
            />
            <Row>
              <div className="terceraCard">
                <CardComponent
                  title="ORTODÓNCIA"
                  content="Estudio y colocación de ortodóncia dental y posterior seguimiento."
                  price="Desde 2499.95€"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
