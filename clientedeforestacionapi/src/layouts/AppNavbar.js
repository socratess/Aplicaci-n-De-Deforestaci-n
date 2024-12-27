import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom';


function AppNavbar() {

const location = useLocation();

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container className="mt-3">
        <Navbar.Brand as={Link} to="/">Deforestación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/areas-criticas" className={location.pathname === "/areas-criticas" ? "active":""}>Areas criticas</Nav.Link>
            <Nav.Link as={Link} to="/evaluaciones"   className={location.pathname === "/areas-criticas" ? "active":""}>Evaluaciones</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

// <Nav.Link as={Link} to="/areas-criticas/:id">Areas criticas Detalle</Nav.Link>
//<Nav.Link as={Link} to="/evaluaciones/:id">Evaluaciones Detalle</Nav.Link>
         