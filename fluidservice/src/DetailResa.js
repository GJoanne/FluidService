import logo from './Images/FluidService.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CSS/Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function DetailResa() {
    return (
        <div>
              <header>
      <Navbarfonc/>
      </header>
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Réservations du 05 Avril 2024</h1>
                        <form action="../Reservation/">
                            <Container>
                                <Row>
                                    <Col><h6>Reservation_Id : 10</h6></Col>
                                    <Col>
                            <h6>Nom : TinTin</h6>
                            </Col>
                             <Col>
                              <h6>Heure : 12h00</h6>
                            </Col>
                            <Col>
                      
                                <Form.Group as={Col} controlId="formGridState">
          <h6>Etat</h6>
          <Form.Select defaultValue="Etat">
            <option>Prévue</option>
            <option>Arrivée</option>
            <option>Annulée</option>
          </Form.Select>
        </Form.Group>
                      
                            </Col>
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
           <Nav.Link><Link to="/Reservation2" className="nav-link-custom"> Réservation </Link> </Nav.Link>  
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

export default DetailResa;
