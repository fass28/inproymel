import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import drywall from "../../../assets/imagenes/services-img/drywall.jpg";
import dry_1 from "../../../assets/imagenes/services-img/dry-1.jpg";
import dry_2 from "../../../assets/imagenes/services-img/dry-2.jpg";
import dry_3 from "../../../assets/imagenes/services-img/dry-3.jpg";
import dry_4 from "../../../assets/imagenes/services-img/dry-4.jpg";
import dry_5 from "../../../assets/imagenes/services-img/dry-5.jpg";
import dry_6 from "../../../assets/imagenes/services-img/dry-6.jpg";
import dry_7 from "../../../assets/imagenes/services-img/dry-7.jpg";
import dry_8 from "../../../assets/imagenes/services-img/dry-8.jpg";
import dry_9 from "../../../assets/imagenes/services-img/dry-9.jpg";
import dry_10 from "../../../assets/imagenes/services-img/dry-10.jpg";
import dry_11 from "../../../assets/imagenes/services-img/dry-11.jpg";

import "./Modal.css";

export const ServiceModalDry = ({ showModal, onHide }) => {
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
          Carpinteria y Drywall
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>Diseño de oficinas con separaciones drywall y cielo raso</li>
          <li>Mantenimiento de instalaciones Drywall</li>
          <li>Instalaciones eléctricas en paredes drywall y cielo raso</li>
          <li>
            Instalaciones de estructuras drywall para empresas industriales y
            comerciales
          </li>
          <li>Pintura de Interioes y exteriores en estructuras Drywall</li>
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
              <img src={drywall} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_1} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_2} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_3} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_4} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_5} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_6} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_7} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_8} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_9} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_10} alt="drywall ICON" className="services-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={dry_11} alt="drywall ICON" className="services-img" />
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
