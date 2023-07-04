import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ServiceModalAuto } from "./Modal/ServiceModalAuto";
import { ServiceModalElec } from "./Modal/ServiceModalElec";
import { ServiceModalMech } from "./Modal/ServiceModalMech";
import { ServiceModalReefer } from "./Modal/ServiceModalReefer";

import automation_svg from "../../assets/imagenes/services-img/svg-icon/automation.svg";
import electrical_svg from "../../assets/imagenes/services-img/svg-icon/electrical.svg";
import mechanical_svg from "../../assets/imagenes/services-img/svg-icon/mechanical.svg";
import reefer_svg from "../../assets/imagenes/services-img/svg-icon/reefer.svg";
import ac_svg from "../../assets/imagenes/services-img/svg-icon/ac.svg";
import drywall_svg from "../../assets/imagenes/services-img/svg-icon/drywall.svg";
import "./Services.css";
import { ServiceModalAc } from "./Modal/ServiceModalAc";
import { ServiceModalDry } from "./Modal/ServiceModalDry";

export const Services = () => {
  const [modalShowAuto, setModalShowAuto] = useState(false);
  const [modalShowElec, setModalShowElec] = useState(false);
  const [modalShowMec, setModalShowMec] = useState(false);
  const [modalShowReefer, setModalShowReefer] = useState(false);
  const [modalShowAc, setModalShowAc] = useState(false);
  const [modalShowDry, setModalShowDry] = useState(false);

  function modalAuto() {
    setModalShowAuto(true);
  }

  function modalElec() {
    setModalShowElec(true);
  }

  function modalMech() {
    setModalShowMec(true);
  }

  function modalReefer() {
    setModalShowReefer(true);
  }

  function modalAc() {
    setModalShowAc(true);
  }

  function modalDrywall() {
    setModalShowDry(true);
  }

  return (
    <section className="services" id="services">
      <h1>Nuestros Servicios</h1>
      <ServiceModalAuto
        showModal={modalShowAuto}
        onHide={() => setModalShowAuto(false)}
      ></ServiceModalAuto>
      <ServiceModalElec
        showModal={modalShowElec}
        onHide={() => setModalShowElec(false)}
      ></ServiceModalElec>
      <ServiceModalMech
        showModal={modalShowMec}
        onHide={() => setModalShowMec(false)}
      ></ServiceModalMech>
      <ServiceModalReefer
        showModal={modalShowReefer}
        onHide={() => setModalShowReefer(false)}
      ></ServiceModalReefer>
      <ServiceModalAc
        onHide={() => setModalShowAc(false)}
        showModal={modalShowAc}
      ></ServiceModalAc>
      <ServiceModalDry
        onHide={() => setModalShowDry(false)}
        showModal={modalShowDry}
      ></ServiceModalDry>

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
