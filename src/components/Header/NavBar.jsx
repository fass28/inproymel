import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar = () => {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
              <Navbar.Brand href="#home">INPRO<span style={{color:"white"}}>YMEL</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto nav-items">
                  <Nav.Link className="items" href="#home">Inicio</Nav.Link>
                  <Nav.Link className="items" href="#aboutUs">Sobre Nosotros</Nav.Link>
                  <Nav.Link className="items" href="#services">Servicios</Nav.Link>
                  <Nav.Link className="items" href="#clients">Clientes</Nav.Link>
                  <Nav.Link className="items" href="#contactUs">Contactanos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </nav>
  )
}
