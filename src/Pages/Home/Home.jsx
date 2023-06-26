import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import CardComponent from "../../Common/Card1/Card1";

export const Home = () => {
  return (
    <div className="padre">
      <div className="paginaEntera">
        <Container className="">
          <Row>
            <Col>
              <Row>
                <div className="primeraCard">
                  <CardComponent
                    title="REVISIÓN BUCAL"
                    content="Revisión de dientes y encias."
                    buttonText="Más info."
                  />
                </div>
              </Row>
              <Row>
                <div className="segundaCard">
                  <CardComponent
                    title="BLANQUEAMIENTO BUCAL"
                    content="Blanqueamiento dental y desinfección de encías."
                    buttonText="Más info."
                  />
                </div>
              </Row>
              <Row>
                <div className="terceraCard">
                  <CardComponent
                    title="EXTRACCIÓN"
                    content="Extracción de diente, inicisivo o molar y curetaje."
                    buttonText="Más info."
                  />
                </div>
              </Row>
            </Col>
            <Col>
              {/* <div className="fondoPrincipal">
            <img className="img-f" src="./img/muelaTatoo.png" alt="" />
          </div>   */}
            </Col>
            <Col>
              <Row>
                <div className="cuartaCard">
                  <CardComponent
                    title="REVISIÓN BUCAL"
                    content="Revisión de dientes y encias."
                    buttonText="Más info."
                  />
                </div>
              </Row>
              <Row>
                <div className="quintaCard">
                  <CardComponent
                    title="BLANQUEAMIENTO BUCAL"
                    content="Blanqueamiento dental y desinfección de dientes y encias."
                    buttonText="Más info."
                  />
                </div>
              </Row>
              <Row>
                <div className="sextaCard">
                  <CardComponent
                    title="EXTRACCIÓN"
                    content="Extracción de diente, inicisivo o molar y curetaje."
                    buttonText="Más info."
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
