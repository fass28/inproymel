import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ac from "../../../assets/imagenes/services-img/ac.jpg";
import ac_1 from "../../../assets/imagenes/services-img/ac-1.jpg";
import ac_2 from "../../../assets/imagenes/services-img/ac-2.jpg";
import ac_3 from "../../../assets/imagenes/services-img/ac-3.jpg";
import ac_4 from "../../../assets/imagenes/services-img/ac-4.jpg";
import ac_5 from "../../../assets/imagenes/services-img/ac-5.jpg";
import ac_6 from "../../../assets/imagenes/services-img/ac-6.jpg";
import ac_7 from "../../../assets/imagenes/services-img/ac-7.jpg";
import ac_8 from "../../../assets/imagenes/services-img/ac-8.jpg";
import ac_9 from "../../../assets/imagenes/services-img/ac-9.jpg";
import ac_10 from "../../../assets/imagenes/services-img/ac-10.jpg";
import ac_11 from "../../../assets/imagenes/services-img/ac-11.jpg";
import ac_12 from "../../../assets/imagenes/services-img/ac-12.jpg";
import ac_13 from "../../../assets/imagenes/services-img/ac-13.jpg";
import ac_14 from "../../../assets/imagenes/services-img/ac-14.jpg";
import ac_15 from "../../../assets/imagenes/services-img/ac-15.jpg";
import ac_16 from "../../../assets/imagenes/services-img/ac-16.jpg";
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
          <h4 className="modal-title">Servicios</h4>

          <ul className="modal-list">
            <li>
              Mantenimiento de equiposde AC split pared,inverter, portátil y
              ventana
            </li>
            <li>Servicio de Instalación de AC.</li>
            <li>Diseño industrial y residencial de equipos AC.</li>
            <li>Revisión y medicion de Gas.</li>
            <li>Visita técnica a empresas y residencias.</li>
          </ul>

          <div className="img-modal">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={ac_9} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_10} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_11} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_1} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_2} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_3} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_4} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_5} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_6} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_7} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_8} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>

              <SwiperSlide>
                <img src={ac_12} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_13} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_14} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_15} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={ac_16} alt="ac ICON" className="services-img" />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
