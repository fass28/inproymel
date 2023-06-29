import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ac from "../../../assets/imagenes/services-img/ac.jpg";


import "./modal.css"


export const ServiceModalAc = ({showModal, onHide}) => {
    return (
        <Modal
          show={showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modal-Header">
            <Modal.Title id="contained-modal-title-vcenter" > 
           Aire Acondicionado
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Servicios</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <img
                  src={ac}
                  alt="ac ICON"
                  className="services-img"
                />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}
