import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import reefer from "../../../assets/imagenes/services-img/reefer.jpg";

import "./Modal.css";

export const ServiceModalReefer = ({ showModal, onHide }) => {
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
          Asistencia de Contenedores Refierados
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>Reparación y mantenimiento de equipos de refigeración.</li>
          <li>
            Servicio de instalación y mantenimiento de cámaras de conservación y
            congelación.
          </li>
          <li>Supervisión de funcionamiento de containers reefer.</li>
          <li>Mantenimiento Preventivo, correctivo y predictivo.</li>
          <li>Instalación y puesta en marcha.</li>
          <li>Pre-trip Inspection(PTI) para reefers</li>
          <li>Supervisión de funcionamiento de contenedores refigerados.</li>
          <li>Inspección y reparación estructural de contendores.</li>
          <li>
            Inspección y reparacion de compresor, evaporador, condensador,etc.
          </li>
          <li> Servicios de coldtreatment ( instalación de sensores usdas y calibración )</li>
        </ul>

        <img src={reefer} alt="reefer ICON" className="services-img" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
