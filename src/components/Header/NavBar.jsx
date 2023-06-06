import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar = () => {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
              <Navbar.Brand href="#home">INPROYMEL</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto nav-items">
                  <Nav.Link className="items" href="#features">Inicio</Nav.Link>
                  <Nav.Link className="items" href="#pricing">Sobre Nosotros</Nav.Link>
                  <Nav.Link className="items" href="#pricing">Servicios</Nav.Link>
                  <Nav.Link className="items" href="#pricing">Clientes</Nav.Link>
                  <Nav.Link className="items" href="#pricing">Contactanos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </nav>
  )
}
