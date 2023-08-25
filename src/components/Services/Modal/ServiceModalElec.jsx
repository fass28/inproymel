import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import electrical from "../../../assets/imagenes/services-img/electrical.jpg";
import elec_1 from "../../../assets/imagenes/services-img/elec-1.jpg";
import elec_2 from "../../../assets/imagenes/services-img/elec-2.jpg";
import elec_3 from "../../../assets/imagenes/services-img/elec-3.jpg";
import elec_4 from "../../../assets/imagenes/services-img/elec-4.jpg";
import elec_5 from "../../../assets/imagenes/services-img/elec-5.jpg";
import elec_6 from "../../../assets/imagenes/services-img/elec-6.jpg";
import elec_7 from "../../../assets/imagenes/services-img/elec-7.jpg";
import elec_8 from "../../../assets/imagenes/services-img/elec-8.jpg";
import elec_9 from "../../../assets/imagenes/services-img/elec-9.jpg";

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
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>
            Servicio de Mantenimiento de Motores trifásicos y Monofásicos.
          </li>
          <li>Instalación y Desinstalación de motores en planta.</li>
          <li>Servicio de Instalaciones Eléctricos a empresas industriales.</li>
          <li>
            Servicio de Instalaciones Eléctricos a Galerias y Departamentos.
          </li>
          <li>
            Servicio de montaje y Mantenimiento de equipos y sistemas eléctricos
            en media y baja tensión.
          </li>
          <li>Instalación de tableros eléctricos.</li>
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
              <img
                src={elec_3}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={electrical}
                alt="electrical ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_1}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_2}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_4}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_5}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_6}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_7}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_8}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elec_9}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
