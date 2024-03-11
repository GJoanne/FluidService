import './Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './FluidService.png';
import React from 'react';

function Reservation() {
  return (
    <div className="Reservation">
        <header>
      <Navbarfonc/>
      </header>
      <div className="Reservation-body">
        <Title text="Réservations" />
        <Calendrier/>
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
            <Nav.Link href="#link" >Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Title = ({ text }) => (
 <p>
   <h1>{text}</h1>
 </p>
);

function Calendrier (){
     const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];
  const jours = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const currentDate = new Date();
  const jourActuel = currentDate.getUTCDate();
  let moisActuel = mois[currentDate.getMonth()];
  const [moisCourant, setmoisCourant] = React.useState(currentDate.getMonth());
  const [AnneeCourant, setAnneeCourant] = React.useState(currentDate.getFullYear());


  const AllerAuMoisSuivant = () => {
    setmoisCourant((prevMonth) => (prevMonth + 1) % 12);
    if (moisCourant === 11) {
      setAnneeCourant((prevYear) => prevYear + 1);
    }
  };

  const AllerAuMoisPrecedent= () => {
    setmoisCourant((prevMonth) => (prevMonth - 1 + 12) % 12);
    if (moisCourant === 0) {
      setAnneeCourant((prevYear) => prevYear - 1);
    }
  };

  const AllerAuMoiscourant= () => {
    setmoisCourant(currentDate.getMonth());
    setAnneeCourant(currentDate.getFullYear());
  };

  moisActuel=mois[moisCourant];
  let nbJoursMoisActuel = new Date(AnneeCourant, moisCourant, 0).getDate();
  let nbJoursMoisprecedent = new Date(AnneeCourant, moisCourant-1 , 0).getDate();
  let premierJourMoisActuel = new Date(AnneeCourant, moisCourant , 0).getDay();


  //Remplissage du mois
  const tableauMois=[];
  let j=0;
  let ligne=[];
  for(let i=premierJourMoisActuel; i>1;i--){
    ligne.push(<td>{nbJoursMoisprecedent-i+2}</td>);
    j++;
  }
  for(let i=1; i<=nbJoursMoisActuel;i++){
    if(j%7===0){
      tableauMois.push(<tr>{ligne}</tr>)
      ligne=[];
    }
    if(currentDate.getFullYear()===AnneeCourant && currentDate.getMonth()===moisCourant &&  jourActuel===i){
       ligne.push(<td className='Date-jour'>{i}</td>);
    }
    else {
      ligne.push(<td>{i}</td>);
    }
     
    j++;
  }
  let i=1;
  while(j<=35){
    if(j%7===0){
      tableauMois.push(<tr>{ligne}</tr>)
      ligne=[];
    }
     ligne.push(<td>{i}</td>);
     i++;
    j++;
  }



return (<div>
    <div className='Table-Header'>
            <h2>{moisActuel}</h2>
            <div><input type='checkbox' id='Arrive'/><h6 className='Arrive'>Arrivé </h6><input type='checkbox' id='Annule'/><h6 className='Annule'>Annulé</h6> <input type='checkbox' id='Prevu'/>Prévue</div>
<div><button onClick={AllerAuMoiscourant}>Aujourd'hui</button> <button onClick={AllerAuMoisPrecedent}>precedent</button> <button onClick={AllerAuMoisSuivant}>suivant</button></div>
        </div>
        <div>
            <table>
<thead>
    <tr>
       {jours.map(jour=>(
       <th>{jour}</th>))}
    </tr>   
</thead>
<tbody>
   {tableauMois}
</tbody>

        </table></div></div>);
}

export default Reservation;
