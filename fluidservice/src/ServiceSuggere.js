import logo from './Images/FluidService.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CSS/Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function ServiceSuggere() {
    return (
        <div>
              <header>
      <Navbarfonc/>
      </header>
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Service suggére</h1>
                        <form action="../Reservation/">
                            <Container>
                                <Row>
                                   <Col>Table n°3</Col>
                                  <Col>Entrée<ul>
                                    <li>
                                      1 salade
                                      </li></ul></Col>
                                </Row>
                                <Row>
                                      <Col>Table n°4</Col>
                                      <Col>Entrée<ul>
                                    <li>
                                      1 tartare de saumon
                                      </li></ul></Col>
                                </Row>
                                <Row>
                                   <Col>Table n°1</Col>
                                   <Col></Col>
                                </Row>
                                <Row>
                                 <Col>Table n°2</Col>
                                 <Col></Col>
                                 </Row>
                            </Container>
                            <button type='submit'>Sauvegarder</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

function Navbarfonc(){
    return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand ><Link to="/"><img src={logo}
                    alt="Logo" width="75" height="75" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link><Link to="/" className="nav-link-custom"> Accueil </Link> </Nav.Link>   
           <Nav.Link><Link to="/Reservation" className="nav-link-custom"> Réservation </Link> </Nav.Link>  
            <Nav.Link ><Link to="/Salle" className="nav-link-custom"> Plan salle </Link></Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Occupation">Occupation</NavDropdown.Item>
              <NavDropdown.Item href="/Service_suggere">
                Service suggéré
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ServiceSuggere;
