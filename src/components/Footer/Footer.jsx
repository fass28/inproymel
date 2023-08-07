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
        <div className="redes-shadow"></div>
        <div className="footer-redes">
          <div className="redes-content">
            <span>
              <strong>Siguenos en:</strong>
            </span>
            <a
              href="https://www.facebook.com/profile.php?id=100094046366328&mibextid=ZbWKwL"
              target="_blank"
              id="icon"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="follow-icon"
              />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/inproymel-inproymel-206176227/"
              target="_blank"
              id="icon"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="follow-icon"
              />{" "}
            </a>
            <a href="" id="icon">
              <FontAwesomeIcon
                icon={["fab", "tiktok"]}
                className="follow-icon"
              />{" "}
            </a>
            <a
              href="https://instagram.com/inproymel.sac?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              id="icon"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="follow-icon"
              />{" "}
            </a>
          </div>
        </div>
        <Container>
          <Row>
            <Col>
              <h6 className="footer-title">
                <strong>ACERCA DE NOSOTROS</strong>
              </h6>
              <p>
                Somos una empresa creada para atender las grandes demandas y
                necesidades del sector de Automatizacion,Electrico y mecanico en
                ámbitos industriales de empresas de manufacturas y construcción.
              </p>
            </Col>
            <Col>
              <h6 className="footer-title">
                <strong>HORARIO DE OFICINA</strong>
              </h6>
              <p className="footer-horario">
                Estamos para apoyarte De lunes a domingo de 8 am hasta 7pm
                Trabajamos tambien feriados!
              </p>
            </Col>
            <Col>
              <h6 className="footer-title">
                <strong>NUESTRO CONTACTO</strong>
              </h6>

              <ul >
                <li className="li-footer">
                  <p className="li-text">
                    <span className="footer-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    Calle 19 Mz J Lte 3 Cooperativa Coopemmar Ventanilla
                  </p>
                </li>
                <li className="li-footer">
                  <p className="li-text">
                    <span className="footer-icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                      />
                    </span>
                    ventas@inproymel.com
                  </p>
                </li>
                <li className="li-footer">
                  <p className="li-text">
                    <span className="footer-icon">
                      <FontAwesomeIcon
                        icon={faPhone}
                      />
                    </span>
                    +51 934862130
                  </p>
                </li>

              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sub-footer">
        <p>
          Copyrigth
          <span>© Inproymel</span>
          Website 2023
          <br />
          *Todos los derechos reservados*
        </p>
      </section>
    </>
  );
};
