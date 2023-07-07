import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-Us" id="aboutUs">
      <h1>¿Quienes somos?</h1>

      <Container>
        <Row>
          <Col>
            <p>
              Somos una empresa creada para atender las grandes demandas y
              necesidades del sector electrico, mecanico, automatizacion y
              servicios generales en el ambito industrial de empresas de
              manufacturas y construccion
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} className="card-item">
            <div class="face face1">
              <div class="content">
                <h3>Mision</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Ser una empresa que brinda servicio de excelencia en variedad
                  y calidad, ofreciendo soluciones prácticas, viables y
                  economicamente rentables, cummpliendo con los estandares de
                  seguridad y cuidado del medio ambiente en todas nuestras
                  operaciones.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} className="card-item">
            <div class="face face1">
              <div class="content">
                <h3>Vision</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Ser una empresa de servicios reconocida, como líder en el
                  mercado nacional en prestación de servicios eléctricos,
                  mecánicos y de Automatización, tanto por nuestros clientes
                  como nuestros proveedores.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} className="card-item">
            <div class="face face1">
              <div class="content">
                <h3>Valores</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <ul className="valores">
                  <li>Ética</li>
                  <li>Pasión</li>
                  <li>Puntualidad</li>
                  <li>Responsabilidad</li>
                  <li>Transparencia</li>
                  <li>Calidad</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
