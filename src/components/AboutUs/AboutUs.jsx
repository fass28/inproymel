import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mision from "../../assets/imagenes/aboutUs-img/mision.svg";
import vision from "../../assets/imagenes/aboutUs-img/vision.svg";
import valores from "../../assets/imagenes/aboutUs-img/valores.svg";

import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us" id="aboutUs">
      <div className="title-h1">
        <h1>¿Quiénes somos?</h1>
        <div className="line-h1">
          <hr />
          <span>Ω</span>
          <hr />
        </div>
      </div>

      <Container className="contanier-box">
        <div>
          <p className="about-us-text">
            Somos una empresa creada para atender las grandes demandas y
            necesidades del sector electrico, mecánico, automatización, tratamientos de frío (cold tratment), servicios técnicos de contenedores refrigerados y 
            servicios generales en el ámbito industrial de empresas de
            manufacturas y construcción
          </p>
        </div>

        <Row>
          <Col xs={12} md={12} lg={4} xl={4} xxl={4} className="card-item">
            <div className=" face-1">
              <div className="content-1">
                <img src={mision} alt="" className="aboutUs-icon" />
                <h3>Misión</h3>
              </div>
            </div>
            <div className="face-2">
              <div className="content-2">
                <p>
                  Ser una empresa de excelencia en variedad y calidad,
                  ofreciendo soluciones prácticas, viables y rentables,
                  cumpliendo con los estandares de seguridad y cuidado del
                  medio ambiente en todas nuestras operaciones.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="card-item">
            <div className="face-1">
              <div className="content-1">
                <img src={vision} alt="" className="aboutUs-icon" />
                <h3>Visión</h3>
              </div>
            </div>
            <div className="face-2">
              <div className="content-2">
                <p>
                  Ser una empresa de servicios reconocida, como líder en el
                  mercado nacional en prestación de servicios eléctricos,
                  mecánicos y de Automatización, tanto por nuestros clientes
                  como nuestros proveedores.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="card-item">
            <div className="face-1">
              <div className="content-1">
                <img src={valores} alt="" className="aboutUs-icon" />
                <h3>Valores</h3>
              </div>
            </div>
            <div className="face-2">
              <div className="content-2">
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
