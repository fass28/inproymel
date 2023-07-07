import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ac from "../../../assets/imagenes/services-img/ac.jpg";

import "./Modal.css";

export const ServiceModalAc = ({ showModal, onHide }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-Header">
          <Modal.Title id="contained-modal-title-vcenter">
            Aire Acondicionado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Servicios</h4>

          <ul className="modal-list">
            <li>
              Mantenimiento de equiposde AC split pared,inverter, portátil y
              ventana
            </li>
            <li>Servicio de Instalacion de AC</li>
            <li>Diseño industrial y residencial de equipos AC</li>
            <li>Revisión y medicion de Gas</li>
            <li>Visita técnica a empresas y residencias</li>
          </ul>

          <img src={ac} alt="ac ICON" className="services-img" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
