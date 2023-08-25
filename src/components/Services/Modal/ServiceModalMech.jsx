import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import mech from "../../../assets/imagenes/services-img/mechanical.jpg";
import mec_1 from "../../../assets/imagenes/services-img/mec-1.jpg";
import mec_2 from "../../../assets/imagenes/services-img/mec-2.jpg";
import mec_3 from "../../../assets/imagenes/services-img/mec-3.jpg";
import mec_4 from "../../../assets/imagenes/services-img/mec-4.jpg";
import mec_5 from "../../../assets/imagenes/services-img/mec-5.jpg";
import mec_6 from "../../../assets/imagenes/services-img/mec-6.jpg";
import mec_7 from "../../../assets/imagenes/services-img/mec-7.jpg";
import mec_8 from "../../../assets/imagenes/services-img/mec-8.jpg";
import mec_9 from "../../../assets/imagenes/services-img/mec-9.jpg";
import mec_10 from "../../../assets/imagenes/services-img/mec-10.jpg";
import mec_11 from "../../../assets/imagenes/services-img/mec-11.jpg";

import "./Modal.css";

export const ServiceModalMech = ({ showModal, onHide }) => {
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
          Mecánica Industrial
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>Mantenimiento de Motoreductores.</li>
          <li>
            Servicio de soldadura eléctrica, TIG, MIG, corte y soldadura
            oxiacetilenica.
          </li>
          <li>
            Servicio de diseño mecánico, montaje e instalación de sistema de
            tuberias conduit.
          </li>
          <li>
            Servicio de mantenimiento mecánico industrial (preventivo,
            correctivo y predictivo).
          </li>
          <li>Servicio de diseño de piezas mecanicas con torno.</li>
          <li>Diseño de tableros eléctricos industriales y domésticos.</li>
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
              <img src={mech} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_1} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_2} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_3} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_4} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_5} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_6} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_7} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_8} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_9} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_10} alt="mech ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mec_11} alt="mech ICON" className="services-img" />
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
