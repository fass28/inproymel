import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import delta from "../../assets/imagenes/Clients-img/delta.JPG";
import durabilis from "../../assets/imagenes/Clients-img/durabilis.JPG";
import ecolab from "../../assets/imagenes/Clients-img/ecolab.JPG";
import etna from "../../assets/imagenes/Clients-img/etna.JPG";
import life from "../../assets/imagenes/Clients-img/life.JPG";
import bakels from "../../assets/imagenes/Clients-img/bakels.JPG";
import chocolate from "../../assets/imagenes/Clients-img/chocolate.JPG";
import courty_marriot from "../../assets/imagenes/Clients-img/courty_marriot.JPG";
import farvet from "../../assets/imagenes/Clients-img/farvet.JPG";
import helena from "../../assets/imagenes/Clients-img/helena.JPG";
import marriot from "../../assets/imagenes/Clients-img/marriot.JPG";
import teknomeal from "../../assets/imagenes/Clients-img/teknomeal.JPG";

import "./Clientes.css";

export const Clientes = () => {
  return (
    <section className="clientes" id="clients">
      <h1>Nuestros Clientes</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={80}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
