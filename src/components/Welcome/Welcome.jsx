import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img_1 from "../../assets/imagenes/welcome-img/img-1.avif";
import img_7 from "../../assets/imagenes/welcome-img/img-7.jpg";
import img_6 from "../../assets/imagenes/welcome-img/img-6.jpg";
import img_8 from "../../assets/imagenes/welcome-img/img-8.jpg";
import img_9 from "../../assets/imagenes/welcome-img/img-9.jpg";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <section className="welcome" id="welcome">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        /*        pagination={{
          clickable: true,
        }} */
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-img"><img src={img_7} alt=""  id="welcome-img"/></SwiperSlide>
        <SwiperSlide className="slide-img"><img src={img_6} alt=""  id="welcome-img"/></SwiperSlide>
        <SwiperSlide className="slide-img"><img src={img_8} alt="" id="welcome-img" /></SwiperSlide>
        <SwiperSlide className="slide-img"><img src={img_9} alt=""  id="welcome-img"/></SwiperSlide>
      </Swiper>
    </section>
  );
};
