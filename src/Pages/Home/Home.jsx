import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import CardComponent from "../../Common/Card1/Card1";

export const Home = () => {
  return (
    <div className="padre">
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
              <Row>
                <div className="segundaCard">
                  <CardComponent
                    title="BLANQUEAMIENTO BUCAL"
                    content="Blanqueamiento dental y desinfección de encías."
                    price="49.95€"
                  />
                </div>
              </Row>
              <Row>
                <div className="terceraCard">
                  <CardComponent
                    title="EXTRACCIÓN"
                    content="Extracción de diente, inicisivo o molar y curetaje."
                    price="49.95€"
                  />
                </div>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              {/* <div className="fondoPrincipal">
            <img className="img-f" src="./img/muelaTatoo.png" alt="" />
          </div>   */}
            </Col>
            <Col xs={12} md={4}>
              <Row>
                <div className="cuartaCard">
                  <CardComponent
                    title="LIMPIEZA BUCAL"
                    content="Revisión y limpieza a fondo de dientes y encias"
                    price="39.95€"
                  />
                </div>
              </Row>
              <Row>
                <div className="quintaCard">
                  <CardComponent
                    title="IMPLANTE"
                    content="Extracción y colocación de implante."
                    price="899.95€"
                  />
                </div>
              </Row>
              <Row>
                <div className="sextaCard">
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
    </div>
  );
};
