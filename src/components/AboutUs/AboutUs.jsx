import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mision from "../../assets/imagenes/aboutUs-img/mision.svg";
import vision from "../../assets/imagenes/aboutUs-img/vision.svg";
import valores from "../../assets/imagenes/aboutUs-img/valores.svg";


import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-Us" id="aboutUs">
      <h1>¿Quienes somos?</h1>

      <Container className="contanier-box">
        <Row>
          <Col>
            <p>
              Somos una empresa creada para atender las grandes demandas y
              necesidades del sector electrico, mecanico, automatizacion y
              servicios generales en el ambito industrial de empresas de
              manufacturas y construccion
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={4} className="card-item">
            <div className="face face1">
              <div className="content">
                <img src={mision} alt="" className="aboutUs-icon" />
                <h3>Mision</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Ser una empresa que brinda servicio de excelencia en variedad
                  y calidad, ofreciendo soluciones prácticas, viables y
                  economicamente rentables, cummpliendo con los estandares de
                  seguridad y cuidado del medio ambiente en todas nuestras
                  operaciones.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="card-item">
            <div className="face face1">
              <div className="content">
                <img src={vision} alt="" className="aboutUs-icon"/>
                <h3>Vision</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Ser una empresa de servicios reconocida, como líder en el
                  mercado nacional en prestación de servicios eléctricos,
                  mecánicos y de Automatización, tanto por nuestros clientes
                  como nuestros proveedores.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="card-item">
            <div className="face face1">
              <div className="content">
                <img src={valores} alt="" className="aboutUs-icon" />
                <h3>Valores</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="valores">
                  <li>Ética</li>
                  <li>Pasión</li>
                  <li>Puntualidad</li>
                  <li>Responsabilidad</li>
                  <li>Transparencia</li>
                  <li>Calidad</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
