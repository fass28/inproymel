import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-redes">
          <strong>Siguenos en:</strong>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'facebook']} className="follow-icon" /> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'linkedin']}  className="follow-icon"/> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'tiktok']} className="follow-icon"/> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'instagram']}  className="follow-icon"/> </a>
        </div>
        <Container>
          <Row>
            <Col>
              <h6 className="footer-title"><strong>ACERCA DE NOSOTROS</strong></h6>
              <p>
              Somos una empresa creada para atender las grandes demandas y necesidades del sector de Automatizacion,Electrico y mecanico  en ámbitos industriales de empresas de manufacturas y construcción.
              </p>
            </Col>
            <Col>
              <h6 className="footer-title"><strong>HORARIO DE OFICINA</strong></h6>
              <p>Estamos para apoyarte</p>
              <p>De lunes a domingo</p>
              <p>de 8 am hasta 7pm</p>
              <p>Trabajamos tambien feriados!</p>
            </Col>
            <Col>
              <h6 className="footer-title"><strong>NUESTRO CONTACTO</strong></h6>
              <Row className="footer-col">
                <Col xs={2}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="footer-icon"
                  />
                </Col>
                <Col xs={10}>
                  <span className="text-icon">
                    CAL.19 MZA. J LOTE. 3 COO. COOPEMMAR - VENTANILLA
                  </span>
                </Col>
              </Row>
              <Row className="footer-col">
                <Col xs={2}>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </Col>
                <Col xs={10}>
                  <span className="text-icon">ventas@inproymel.com</span>
                </Col>
              </Row>
              <Row className="footer-col">
                <Col xs={2}>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </Col>
                <Col xs={10}>
                  <span className="text-icon">+51 934862130</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sub-footer">
        <p>
          Copyrigth <span>© Inproymel</span> Website 2023
        </p>
        <p> *Todos los derechos reservados*</p>
      </section>
    </>
  );
};
