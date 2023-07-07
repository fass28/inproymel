import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper";


import delta from "../../assets/imagenes/Clients-img/delta.jpg";
import durabilis from "../../assets/imagenes/Clients-img/durabilis.jpg";
import ecolab from "../../assets/imagenes/Clients-img/ecolab.jpg";
import etna from "../../assets/imagenes/Clients-img/etna.jpg";
import life from "../../assets/imagenes/Clients-img/life.jpg";
import bakels from "../../assets/imagenes/Clients-img/bakels.jpg";
import chocolate from "../../assets/imagenes/Clients-img/chocolate.jpg";
import courty_marriot from "../../assets/imagenes/Clients-img/courty_marriot.jpg";
import farvet from "../../assets/imagenes/Clients-img/farvet.jpg";
import helena from "../../assets/imagenes/Clients-img/helena.jpg";
import marriot from "../../assets/imagenes/Clients-img/marriot.jpg";
import teknomeal from "../../assets/imagenes/Clients-img/teknomeal.jpg";

import "./Clientes.css";

export const Clientes = () => {
  return (
    <section className="clientes" id="clients">
      <h1>Nuestros Clientes</h1>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={5}
        spaceBetween={80}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="clientes-img" src={bakels} alt="bakels JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={chocolate} alt="chocolate JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={courty_marriot} alt="courty_marriot JPG"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={delta} alt="delta JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={durabilis} alt="durabilis JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={ecolab} alt="ecolab JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={etna} alt="Etna JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={farvet} alt="farvet JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={helena} alt="helena JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={life} alt="life JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={marriot} alt="marriot JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="clientes-img" src={teknomeal} alt="teknomeal JPG" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
