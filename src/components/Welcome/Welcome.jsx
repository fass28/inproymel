import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img_2 from "../../assets/imagenes/welcome-img/img-2.avif";
import img_6 from "../../assets/imagenes/welcome-img/img-6.webp";
import img_7 from "../../assets/imagenes/welcome-img/img-7.avif";
import img_9 from "../../assets/imagenes/welcome-img/img-9.jpg";
import img_10 from "../../assets/imagenes/welcome-img/img-10.jpg";
import img_12 from "../../assets/imagenes/welcome-img/img-12.jpg";
import img_13 from "../../assets/imagenes/welcome-img/img-13.jpg";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <section className="welcome" id="welcome">
      <div className="welcome-text">
        <h1>Bienvenido</h1>
        <h2>¿Buscando algún Servicio?</h2>
        <p>
          En Inproymel estamos para ayudarte y
          <br />
          brindarte la mejor experiencia con trabajos seguros.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
   /*      pagination={{
          clickable: true,
        }} */
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="before"></div>
        <SwiperSlide className="slide-img">
          <img src={img_7} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_6} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_2} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_9} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_12} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_13} alt="" className="welcome-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-img">
          <img src={img_10} alt="" className="welcome-img" />
        </SwiperSlide>
        <div className="after"></div>
      </Swiper>
    </section>
  );
};
