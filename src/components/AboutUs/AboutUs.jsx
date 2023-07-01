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
          <Col>
            <h2>Mision</h2>
            <p>
                Ser una empresa que brinda servicio de excelencia en variedad y calidad, ofreciendo soluciones prácticas, viables y economicamente rentables, cummpliendo con los estandares de seguridad y cuidado del medio ambiente en todas sus operaciones, ofreciendo una garantía optima con marcas nacionales e internacionales.
            </p>
          </Col>
          <Col>
            <h2>Vision</h2>
            <p>
                Ser una empresa de servicios reconocida, como líder en el mercado nacional en prestación de servicios eléctricos, mecánicos y de Automatización, tanto por nuestros clientes como nuestros proveedores, con el propósito de tener una mejora continua y buscar el incremento de nuestra eficacia y asi brindar soluciones en buena calidad y garantía que se adecuen a sus necesidades
            </p>
          </Col>
          <Col>
            <h2>Valores</h2>
              <ul className="valores">
                <li>Ética</li>
                <li>Pasión</li>
                <li>Puntualidad</li>
                <li>Responsabilidad</li>
                <li>Transparencia</li>
                <li>Calidad</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
