import React, { Component } from 'react';
import OfficeMap from 'office-map';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './Images/FluidService.png';
import Form from 'react-bootstrap/Form';

const INITIAL_STATE = {
  desk: undefined,
  tables: [], 
};

function Navbarfonc() {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" width="75" height="75" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="nav-link-custom"> Accueil </Link> </Nav.Link>
            <Nav.Link><Link to="/Reservation" className="nav-link-custom"> Réservation </Link> </Nav.Link>
            <Nav.Link ><Link to="/Salle" className="nav-link-custom"> Plan salle </Link></Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Occupation">Occupation</NavDropdown.Item>
              <NavDropdown.Item href="/ServiceSuggere">Service suggéré</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default class Salle extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  // Fonction pour ajouter une table
  addTableWest = () => {
    const { tables } = this.state;
    const id = tables.length + 1; // Générer un ID unique
    const newTable = {
      id,
      chairDirection: 'west',
      x: 0,
      y: 0,
      equipments: [
        { type: 'desk', specification: 'Plat' },
        { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      ],
    };
    this.setState({
      tables: [...tables, newTable], // Ajouter la nouvelle table au tableau des tables
    });
  };

  addTableSouth = () => {
    const { tables } = this.state;
    const id = tables.length + 1; // Générer un ID unique
    const newTable = {
      id,
      chairDirection: 'south',
      x: 0,
      y: 0,
      equipments: [
        { type: 'desk', specification: 'Plat' },
        { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      ],
    };
    this.setState({
      tables: [...tables, newTable], // Ajouter la nouvelle table au tableau des tables
    });
  };

   addTableNorth = () => {
    const { tables } = this.state;
    const id = tables.length + 1; // Générer un ID unique
    const newTable = {
      id,
      chairDirection: 'north',
      x: 0,
      y: 0,
      equipments: [
        { type: 'desk', specification: 'Libre' },
        { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      ],
    };
    this.setState({
      tables: [...tables, newTable], // Ajouter la nouvelle table au tableau des tables
    });
  };

  addTableEast = () => {
    const { tables } = this.state;
    const id = tables.length + 1; // Générer un ID unique
    const newTable = {
      id,
      chairDirection: 'east',
      x: 0,
      y: 0,
      equipments: [
        { type: 'desk', specification: 'Plat' },
        { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      ],
    };
    this.setState({
      tables: [...tables, newTable], // Ajouter la nouvelle table au tableau des tables
    });
  };

  // Fonction pour supprimer une table en fonction de son ID
  removeTable = (id) => {
    this.setState(prevState => ({
      tables: prevState.tables.filter(table => table.id !== id) // Filtrer la table à supprimer
    }));
  };

  // Gestion de l'événement de clic sur une table
  handleTableClick = (id) => {
    console.log("Table clicked with ID:", id);
    this.removeTable(id); // Supprimer la table lors du clic
  };

  render() {
    const { tables } = this.state;

    // Fusionner les tables statiques avec les tables dynamiques
    const data = [
      ...tables,
      // Tables statiques (déjà définies dans le code)
      // Mettez votre tableau de données statiques ici
    ];
 const desk = this.state.desk
    return (
      <div style={{ width: "100%", margin: "10px auto", backgroundColor: "#EDE3DA" }}>
        <header>
          <Navbarfonc />
        </header>
        <h1>Plan de salle</h1>
        <button onClick={this.addTableWest}>Ajouter une table droite</button>
        <button onClick={this.addTableSouth}>Ajouter une table haut</button>
        <button onClick={this.addTableNorth}>Ajouter une table bas</button>
        <button onClick={this.addTableEast}>Ajouter une table gauche</button>
        <hr />
        <br />
        <div style={{ position: 'relative', width: '250px', height: '250px', backgroundColor: '#CCC' }}>
          
          {data.map(table => (
            <div key={table.id} style={{ position: 'absolute', left: `${table.x * 100}px`, top: `${table.y * 100}px` }}>
              
              {desk && desk.id === table.id && (
  <div>
    Numéro de table : {desk.id}
    <form>
      <Form.Group  style={{ width: '100px', height: '100px',color: '#CCC'}}>
          <h6>Etat</h6>
          <Form.Select defaultValue={desk.equipments[0].specification}>
            <option>Libre</option>
            <option>Appéritif</option>
            <option>Entrée</option>
            <option>Plat</option>
            <option>Dessert</option>
            <option>Reservee</option>
          </Form.Select>
        </Form.Group>
        <button>Valider</button>
    </form>
    <div
      style={{ width: '50px', height: '50px', backgroundColor: 'rgba(255, 0, 0, 0.5)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
      onClick={() => this.handleTableClick(table.id)} // Appeler la fonction de suppression lorsque la zone est cliquée
    >
      X
    </div>
  </div>
)}

              
            </div>
          ))}
        </div>
        <OfficeMap
          data={data}
          onSelect={desk => this.setState({ desk })}
          onMove={desk => this.setState({ desk })}
          editMode={true}
          showNavigator={true}
          horizontalSize={5}
          verticalSize={3} />
      </div>
        
    )
  }
}
