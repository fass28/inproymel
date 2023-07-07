import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <section className="contactUs" id="contactUs">
      <h1>Contáctanos</h1>
      <Container>
        <Row>
          <div className="data-separation">
            <Col xs={12}>
              <Row>
                <div className="data">
                  <Col>
                    <h3>
                      <FontAwesomeIcon icon={faLocationDot} className="icon" />
                      Direccion
                    </h3>
                  </Col>
                  <Col>
                    <h6>CAL.19 MZA. J LOTE. 3 COO. COOPEMMAR - VENTANILLA</h6>
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="data">
                  <Col>
                    <h3>
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />
                      Email
                    </h3>
                  </Col>
                  <Col>
                    <h6>ventas@inproymel.com</h6>
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="data">
                  <Col>
                    <h3>
                      <FontAwesomeIcon icon={faPhone} className="icon" />
                      Llámanos
                    </h3>
                  </Col>
                  <Col>
                    <h6>+51 934862130</h6>
                  </Col>
                </div>
              </Row>
            </Col>
          </div>
          <Col xs={12}>
            <Form
              action="https://formspree.io/f/maygwrvb"
              method="POST"
              className="form-blocks"
            >
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="Nombre de la Persona"
                    label="Tu Nombre"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="nombre"
                      name="Nombre de la Persona"
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="Direccion de Correo"
                    label="Tu correo"
                    className="mb-3"
                    type="email"
                  >
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      name="Direccion de Correo"
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel
                controlId="Asunto"
                label="Asunto"
                className="mb-3"
                required
              >
                <Form.Control
                  type="text"
                  placeholder="Asunto"
                  name="Asunto"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="Mensaje"
                label="Mensaje"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="Mensaje"
                  name="Mensaje"
                  required
                  style={{ height: "115px" }}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
