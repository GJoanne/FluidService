import './CSS/Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './Images/FluidService.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Reservation() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/Reservation')
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des réservations :", error);
      });
  }, []);

  return (
    <div className="Reservation">
        <header>
      <Navbarfonc/>
      </header>
      <div className="Reservation-body">
        <Title text="Réservations" />
        <Calendrier reservations={reservations} />
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
        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link><Link to="/" className="nav-link-custom"> Accueil </Link> </Nav.Link>   
           <Nav.Link><Link to="/Reservation" className="nav-link-custom"> Réservation </Link> </Nav.Link>  
            <Nav.Link ><Link to="/Salle" className="nav-link-custom"> Plan salle </Link></Nav.Link>
            <NavDropdown  title="Service" id="basic-nav-dropdown">
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

const Title = ({ text }) => (
 <p>
   <h1>{text}</h1>
 </p>
);

function Calendrier ({ reservations }){
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
    if(jourActuel===i && currentDate.getFullYear()===AnneeCourant && currentDate.getMonth()===moisCourant){

       const reservationPrevu = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Prevu'; 
       });
       const reservationAnnulee = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Annulee'; 
       });
       const reservationArrivee = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Arrivee'; 
       });
       if (reservationPrevu) {
         ligne.push(
           <td className='Date-jour'>
             {i}<Link to="/DetailResa" className="nav-link-custom">
             <hr className='Prevu'></hr></Link>
           </td>
         );
       } 
        else if (reservationAnnulee) {
         ligne.push(
           <td className='Date-jour'>
             {i}
             <hr className='Annule'></hr>
           </td>
         );
       }
       else if (reservationArrivee) {
         ligne.push(
           <td className='Date-jour'>
             {i}
             <hr className='Arrive'></hr>
           </td>
         );
       }
       else {
         ligne.push(<td className='Date-jour'>{i}</td>);
       }
    } const reservationPrevu = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Prevu'; 
       });
       const reservationAnnulee = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Annulee'; 
       });
       const reservationArrivee = reservations.find(reservation => {
         const reservationDate = new Date(reservation.Date);
         return reservationDate.getDate() === i &&
                reservationDate.getMonth() === moisCourant &&
                reservationDate.getFullYear() === AnneeCourant &&
                reservation.Etat_resa === 'Arrivee'; 
       });
       if (reservationPrevu) {
         ligne.push(
           <td>
             {i}
             <hr className='Prevu'></hr>
           </td>
         );
       } 
        else if (reservationAnnulee) {
         ligne.push(
           <td >
             {i}
             <hr className='Annule'></hr>
           </td>
         );
       }
       else if (reservationArrivee) {
         ligne.push(
           <td >
             {i}
             <hr className='Arrive'></hr>
           </td>
         );
       }
       else {
        ligne.push(<td>{i}</td>)
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

  return (
    <div>
      <div className='Table-Header'>
        <h2>{moisActuel}</h2>
        <div class="checkbox_reservation">
          <input type='checkbox' id='Arrive'/><h6 className='Arrive'>Arrivé </h6>
          <input type='checkbox' id='Annule'/><h6 className='Annule'>Annulé</h6>
          <input type='checkbox' id='Prevu'/><h6 className='Prevu'>Prévue</h6>
        </div>
        <div>
          <button onClick={AllerAuMoiscourant}>Aujourd'hui</button>
          <button onClick={AllerAuMoisPrecedent}>Précédent</button>
          <button onClick={AllerAuMoisSuivant}>Suivant</button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {jours.map(jour=>(
              <th>{jour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableauMois}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reservation;
