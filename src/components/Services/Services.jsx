import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./Services.css";
import electrical from "../../assets/imagenes/services-img/electrical.jpg";
import mechanical from "../../assets/imagenes/services-img/mechanical.jpg";
import automation from "../../assets/imagenes/services-img/automation.jpg";
import reefer from "../../assets/imagenes/services-img/reefer.jpg";
import ac from "../../assets/imagenes/services-img/ac.jpg";
import drywall from "../../assets/imagenes/services-img/drywall.jpg";




export const Services = () => {
  return (
    <section className="services" id="services">
      <h1>SERVICIOS</h1>
      <Container>
        <Carousel>
          <Carousel.Item className="services-card">
            <img 
                src={electrical} 
                alt="electrical JPG" 
            />
            <Carousel.Caption>
              <h3>Electrico</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, iste voluptates nam quis sequi saepe nisi qui dicta culpa ratione obcaecati exercitationem. Quaerat, officia? Culpa ipsum nam repellendus perspiciatis a!
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="services-card">
            <img
              src={mechanical}
              alt="Mechanical JPG"
            />
            <Carousel.Caption>
              <h3>Mecanico</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At natus quibusdam neque soluta. Voluptatum obcaecati possimus aut consequuntur necessitatibus iure at sapiente tempore provident voluptates, voluptatem explicabo nemo ab asperiores!
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="services-card">
            <img 
                src={automation} 
                alt="Automation JPG" 
            />
            <Carousel.Caption>
              <h3>Automatizacion</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab, repudiandae obcaecati illo voluptate ex id quibusdam odio ducimus, blanditiis inventore numquam voluptas ipsam praesentium nisi consectetur facilis quas cumque.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="services-card">
            <img 
                src={reefer} 
                alt="Reefer JPG" 
            />
            <Carousel.Caption>
              <h3>Asistencia técnica de contenedores refrigerados</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab, repudiandae obcaecati illo voluptate ex id quibusdam odio ducimus, blanditiis inventore numquam voluptas ipsam praesentium nisi consectetur facilis quas cumque.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="services-card">
            <img 
                src={ac} 
                alt="AC JPG" 
            />
            <Carousel.Caption>
              <h3>Mantenimiento de Aire Acondicionado</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab, repudiandae obcaecati illo voluptate ex id quibusdam odio ducimus, blanditiis inventore numquam voluptas ipsam praesentium nisi consectetur facilis quas cumque.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="services-card">
            <img 
                src={drywall} 
                alt="Carpenter & drywall JPG" 
            />
            <Carousel.Caption>
              <h3>Carpìnteria y Drywall</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab, repudiandae obcaecati illo voluptate ex id quibusdam odio ducimus, blanditiis inventore numquam voluptas ipsam praesentium nisi consectetur facilis quas cumque.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};
