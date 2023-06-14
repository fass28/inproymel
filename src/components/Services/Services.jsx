import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import automation from "../../assets/imagenes/services-img/automation.jpg";
import automation_svg from "../../assets/imagenes/services-img/svg-icon/automation.svg";
import electrical from "../../assets/imagenes/services-img/electrical.jpg";
import electrical_svg from "../../assets/imagenes/services-img/svg-icon/electrical.svg";
import mechanical from "../../assets/imagenes/services-img/mechanical.jpg";
import mechanical_svg from "../../assets/imagenes/services-img/svg-icon/mechanical.svg";
import reefer from "../../assets/imagenes/services-img/reefer.jpg";
import reefer_svg from "../../assets/imagenes/services-img/svg-icon/reefer.svg";
import ac from "../../assets/imagenes/services-img/ac.jpg";
import ac_svg from "../../assets/imagenes/services-img/svg-icon/ac.svg";
import drywall from "../../assets/imagenes/services-img/drywall.jpg";
import drywall_svg from "../../assets/imagenes/services-img/svg-icon/drywall.svg";

import "./Services.css";

export const Services = () => {
  return (
    <section className="services" id="services">
      <h1>SERVICIOS</h1>
      <Container>
        <Row>
          <Col className="col-img">
            <img
              src={automation_svg}
              alt="AutomationSVG ICON"
              className="icon-img"
            />
            <h6>Automatización Industrial</h6>
          </Col>
          <Col className="col-img">
            <img
              src={electrical_svg}
              alt="electricalSVG ICON"
              className="icon-img"
            />
            <h6> Electricidad Industrial y Domestica</h6>
          </Col>
          <Col className="col-img">
            <img
              src={mechanical_svg}
              alt="mechanicalSVG ICON"
              className="icon-img"
            />
            <h6>Mecánica Industrial</h6>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="col-img">
            <img src={reefer_svg} alt="reeferSVG ICON" className="icon-img" />
            <h6> Asistencia de contenedores refrigerados</h6>
          </Col>
          <Col className="col-img">
            <img src={ac_svg} alt="acSVG ICON" className="icon-img" />
            <h6>Aire Acondicionado</h6>
          </Col>
          <Col className="col-img">
            <img src={drywall_svg} alt="drywallSVG ICON" className="icon-img" />
            <h6>Carpinteria y Drywall</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
