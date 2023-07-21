import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/imagenes/icon/logo-1.png";

export const NavBar = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo-section">
              <span>
                <img src={logo} alt="" className="logo" />
              </span>
              <h1>INPROYMEL</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items">
              <Nav.Link href="#welcome">
                <h4>Inicio</h4>
              </Nav.Link>
              <Nav.Link href="#aboutUs">
                <h4>Sobre Nosotros</h4>
              </Nav.Link>
              <Nav.Link href="#services">
                <h4>Servicios</h4>
              </Nav.Link>
              <Nav.Link href="#clients">
                <h4>Clientes</h4>
              </Nav.Link>
              <Nav.Link href="#whyUs">
                <h4>¿Por qué elegirnos?</h4>
              </Nav.Link>
              <Nav.Link href="#contactUs">
                <h4>Contactanos</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};
