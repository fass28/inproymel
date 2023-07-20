import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import automation from "../../../assets/imagenes/services-img/automation.jpg";

import "./Modal.css";

export const ServiceModalAuto = ({ showModal, onHide }) => {
  return (
    <Modal
      show={showModal}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-Header">
        <Modal.Title id="contained-modal-title-vcenter">
          Automatizacion Industrial
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>
            Servicio de automatización industrial en funcionamiento continuo.
          </li>
          <li>
            Programacion y comisionamiento de PLC's, SIEMENS, ONROM, ALLEN
            BRADLEY, ABB.
          </li>
          <li>Servicio de programación SCADA</li>
          <li>Servicio de Upgrade de PLC, SCADA y HMI</li>
          <li>Configuración de Instrumentos industriales</li>
          <li>Configuración de redes de telecomunicacion</li>
        </ul>

        <img src={automation} alt="Automation ICON" className="services-img" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
