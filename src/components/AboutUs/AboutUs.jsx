import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-Us">
      <Container>
        <Row>
          <Col>
            <h2>¿Quienes somos?</h2>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem alias qui at facere velit recusandae, dolores aliquid rerum sequi ratione ducimus sint quo eius harum, voluptate aspernatur, accusantium nisi.
            </p>
          </Col>
          <Col>
            <h2>Vision</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid quia temporibus dignissimos, voluptatem eum adipisci hic facere reprehenderit repellendus suscipit velit sed iusto impedit, nam at qui consequatur mollitia.
            </p>
          </Col>
          <Col>
            <h2>Valores</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quasi impedit ducimus quis sint aperiam iusto sed suscipit ab reiciendis, eius dolor ullam nostrum error modi mollitia facilis necessitatibus. Voluptatum?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
