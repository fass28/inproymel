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
      <h1>Clientes</h1>
      <Container>
        <Row>
          <Col>
            <img className="clientes-img" src={bakels} alt="bakels JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={chocolate} alt="chocolate JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={courty_marriot} alt="courty_marriot JPG"/>
          </Col>
          <Col>
            <img className="clientes-img" src={delta} alt="delta JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={durabilis} alt="durabilis JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={ecolab} alt="ecolab JPG" />
          </Col>
          </Row>
          <Row>
          <Col>
            <img className="clientes-img" src={etna} alt="Etna JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={farvet} alt="farvet JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={helena} alt="helena JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={life} alt="life JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={marriot} alt="marriot JPG" />
          </Col>
          <Col>
            <img className="clientes-img" src={teknomeal} alt="teknomeal JPG" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
