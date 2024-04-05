import logo from './Images/FluidService.png';
import './CSS/Occupation.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CSS/Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Occupation() {
    const [occupationData, setOccupationData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/Occupation')
            .then(response => {
                setOccupationData(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données d'occupation :", error);
            });
    }, []);

    return (
        <div>
            <header>
                <Navbarfonc />
            </header>
            <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Occupation du restaurant</h1>
                    <form action="../Reservation2/">
                        <Container>
                            <Row>
                                <Col><label htmlFor="dispo_tables">Nombre de tables disponibles :  {occupationData.tables_disponibles}</label></Col>
                            </Row>
                            <Row>
                                <Col><label htmlFor="dispo_resa">Nombre de tables réservées :  {occupationData.tables_reserves}</label></Col>
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
              <NavDropdown.Item href="/ServiceSuggere">
                Service suggéré
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Occupation;
