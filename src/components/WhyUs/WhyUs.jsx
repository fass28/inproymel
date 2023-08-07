import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WhyUs.css";

export const WhyUs = () => {
  return (
    <section className="whyUs" id="whyUs">
      <div className="title-h1">
        <h1>¿Por qué Elegirnos?</h1>
        <div className="line-h1">
          <hr />
          <span>Ω</span>
          <hr />
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <h2>
              <span className="why-icon">
                <FontAwesomeIcon icon="fa-solid fa-people-roof" />
              </span>
              Capacidad
            </h2>
            <p>
              Porque nuestros colaboradores son técnicos profesionales
              capacitados y certificados en el área de industrial.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h2>
              <span className="why-icon">
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              </span>
              Experiencia
            </h2>
            <p>
              Porque nuestros técnicos suman más de 15 años de experiencia en el
              ámbito profesional con certificaciones.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h2>
              <span className="why-icon">
                <FontAwesomeIcon icon="fa-solid fa-truck-pickup" />
              </span>
              Disponibilidad
            </h2>
            <p>
              Porque sabemos lo importante que es una rápida respuesta hacia
              nuestros clientes, por ello trabajamos los 7 dias dias a la semana
              y tambien feriados.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <h2>
              <span className="why-icon">
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
              </span>
              Fiabilidad
            </h2>
            <p>
              Porque realizamos mas de 100 proyectos con nuestros distintos
              clientes y en diferentes rubros tanto industriales como
              comerciales
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
