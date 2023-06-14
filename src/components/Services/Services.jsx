import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { ServiceModal } from "./Modal/Modal";

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
  const [modalShowAuto, setModalShowAuto] = useState(false);

  function modalAuto() {
    setModalShowAuto(true);
  }

  function modalElec() {
    console.log("elec");
  }

  function modalMech() {
    console.log("mech");
  }

  function modalReefer() {
    console.log("reefer");
  }

  function modalAc() {
    console.log("ac");
  }

  function modalDrywall() {
    console.log("drywall");
  }

  return (
    <section className="services" id="services">
      <h1>NUESTROS SERVICIOS</h1>
      <ServiceModal
        showModal={modalShowAuto}
        onHide={() => setModalShowAuto(false)}
      ></ServiceModal>
      <Container>
        <Row>
          <Col className="col-img" onClick={modalAuto}>
            <img
              src={automation_svg}
              alt="AutomationSVG ICON"
              className="icon-img"
            />
            <h6>Automatización Industrial</h6>
          </Col>
          <Col className="col-img" onClick={modalElec}>
            <img
              src={electrical_svg}
              alt="electricalSVG ICON"
              className="icon-img"
            />
            <h6> Electricidad Industrial y Domestica</h6>
          </Col>
          <Col className="col-img" onClick={modalMech}>
            <img
              src={mechanical_svg}
              alt="mechanicalSVG ICON"
              className="icon-img"
            />
            <h6>Mecánica Industrial</h6>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="col-img" onClick={modalReefer}>
            <img src={reefer_svg} alt="reeferSVG ICON" className="icon-img" />
            <h6> Asistencia de contenedores refrigerados</h6>
          </Col>
          <Col className="col-img" onClick={modalAc}>
            <img src={ac_svg} alt="acSVG ICON" className="icon-img" />
            <h6>Aire Acondicionado</h6>
          </Col>
          <Col className="col-img" onClick={modalDrywall}>
            <img src={drywall_svg} alt="drywallSVG ICON" className="icon-img" />
            <h6>Carpinteria y Drywall</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
