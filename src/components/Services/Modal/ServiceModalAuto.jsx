import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import automation from "../../../assets/imagenes/services-img/automation.jpg";
import auto_1 from "../../../assets/imagenes/services-img/auto-1.jpg";
import auto_2 from "../../../assets/imagenes/services-img/auto-2.jpg";
import auto_3 from "../../../assets/imagenes/services-img/auto-3.jpg";
import auto_4 from "../../../assets/imagenes/services-img/auto-4.jpg";
import auto_5 from "../../../assets/imagenes/services-img/auto-5.jpg";
import auto_6 from "../../../assets/imagenes/services-img/auto-6.jpg";

import "./Modal.css";

export const ServiceModalAuto = ({ showModal, onHide }) => {
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
          Automatizacion Industrial
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-title">Servicios</h4>

        <ul className="modal-list">
          <li>
            Servicio de automatización industrial en funcionamiento continuo.
          </li>
          <li>
            Programacion y comisionamiento de PLC's, SIEMENS, ONROM, ALLEN
            BRADLEY, ABB.
          </li>
          <li>Servicio de programación SCADA</li>
          <li>Servicio de Upgrade de PLC, SCADA y HMI</li>
          <li>Configuración de Instrumentos industriales</li>
          <li>Configuración de redes de telecomunicacion</li>
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
            pagination={true}
            modules={[Autoplay,EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={auto_6}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={auto_1}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={auto_2}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={auto_3}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={auto_4}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={automation}
                alt="Automation ICON"
                className="services-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={auto_5}
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
