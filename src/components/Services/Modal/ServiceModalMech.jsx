import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import mech from "../../../assets/imagenes/services-img/mechanical.jpg";


import "./Modal.css"

export const ServiceModalMech = ({showModal, onHide}) => {
    return (
        <Modal
          show={showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modal-Header">
            <Modal.Title id="contained-modal-title-vcenter" > 
            Mecánica Industrial
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Servicios</h4>
            <strong>
        <ul>
          <li>Mantenimiento de Motoreductores.</li>
          <li>Servicio de soldadura eléctrica, TIG, MIG, corte y soldadura oxiacetilenica.</li>
          <li>Servicio de diseño mecánico, montaje e instalacion de sistema de tuberias conduit.</li>
          <li>Servicio de mantenimiento mecánico industrial (preventivo, correctivo y predictivo).</li>
          <li>Servicio de diseño de piezas mecanicas con torno.</li>
          <li>Diseño  de tableros électricos industriales y domesticos.</li>
        </ul>
        </strong>
            <img
                  src={mech}
                  alt="mech ICON"
                  className="services-img"
                />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}
