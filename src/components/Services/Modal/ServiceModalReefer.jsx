import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import reefer from "../../../assets/imagenes/services-img/reefer.jpg";
import refer_1 from "../../../assets/imagenes/services-img/refer-1.jpg";
import refer_2 from "../../../assets/imagenes/services-img/refer-2.jpg";
import refer_3 from "../../../assets/imagenes/services-img/refer-3.jpg";
import refer_4 from "../../../assets/imagenes/services-img/refer-4.jpg";
import refer_5 from "../../../assets/imagenes/services-img/refer-5.jpg";
import refer_6 from "../../../assets/imagenes/services-img/refer-6.jpg";
import refer_7 from "../../../assets/imagenes/services-img/refer-7.jpg";
import refer_8 from "../../../assets/imagenes/services-img/refer-8.jpg";
import refer_9 from "../../../assets/imagenes/services-img/refer-9.jpg";
import refer_10 from "../../../assets/imagenes/services-img/refer-10.jpg";

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
          Asistencia de Contenedores Refrigerados
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
          <li>Supervisión de funcionamiento de contenedores refrigerados.</li>
          <li>Inspección y reparación estructural de contenedores.</li>
          <li>
            Inspección y reparacion de compresor, evaporador, condensador,etc.
          </li>
          <li>
            {" "}
            Servicios de coldtreatment ( instalación de sensores usdas y
            calibración )
          </li>
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
              <img src={reefer} alt="reefer ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_1} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_2} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_3} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_4} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_5} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_6} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_7} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_8} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_9} alt="reefer icon" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={refer_10} alt="reefer icon" className="services-img" />
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
