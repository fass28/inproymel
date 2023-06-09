import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import delta from "../../assets/imagenes/Clients-img/delta.JPG"
import durabilis from "../../assets/imagenes/Clients-img/durabilis.JPG"
import ecolab from "../../assets/imagenes/Clients-img/ecolab.JPG"
import etna from "../../assets/imagenes/Clients-img/etna.JPG"
import life from "../../assets/imagenes/Clients-img/life.JPG"


import "./Clientes.css"

export const Clientes = () => {
  return (
    <section className='clientes'>
      <h1>Clientes</h1>
      <Container >
        <Row >
          <Col >
           <img className="clientes-img"
              src={delta}
              alt="delta JPG"
            />
          </Col>
          <Col >
           <img className="clientes-img"
              src={durabilis}
              alt="durabilis JPG"
            />
          </Col>
          <Col >
           <img className="clientes-img"
              src={ecolab}
              alt="ecolab JPG"
            />
          </Col>
          <Col >
           <img className="clientes-img"
              src={etna}
              alt="Etna JPG"
            />
          </Col>
          <Col >
           <img className="clientes-img"
              src={life}
              alt="life JPG"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
