import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import electrical from "../../../assets/imagenes/services-img/electrical.jpg";

import "./Modal.css";

export const ServiceModalElec = ({ showModal, onHide }) => {
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
          Electricidad Industrial & Comercial
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Servicios</h4>

        <ul className="modal-list">
          <li>
            Servicio de Mantenimiento de Motores trifasicos y Monofasicos.
          </li>
          <li>Instalacion y Desinstalacion de motores en planta.</li>
          <li>Servicio de Instalaciones Electricos a empresas industriales.</li>
          <li>
            Servicio de Instalaciones Electricos a Galerias y Departamentos.
          </li>
          <li>
            Servicio de montaje y Mantenimiento de equipos y sistemas eléctricos
            en media y baja tensión.
          </li>
          <li>Instalacion de tableros électricos.</li>
        </ul>

        <img src={electrical} alt="electrical ICON" className="services-img" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
