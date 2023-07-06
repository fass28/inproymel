import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import drywall from "../../../assets/imagenes/services-img/drywall.jpg";

import "./Modal.css";

export const ServiceModalDry = ({ showModal, onHide }) => {
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-Header">
        <Modal.Title id="contained-modal-title-vcenter">
          Carpinteria y Drywall
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Servicios</h4>

        <ul className="modal-list">
          <li>Diseño de oficinas con separaciones drywall y cielo raso</li>
          <li>Mantenimiento de instalaciones Drywall</li>
          <li>Instalaciones electricas en paredes drywall y cielo raso</li>
          <li>
            Instalaciones de estructuras drywall para empresas industriales y
            residencias
          </li>
          <li>Pintura de Interioes y exteriores en estructuras Drywall</li>
        </ul>

        <img src={drywall} alt="drywall ICON" className="services-img" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
