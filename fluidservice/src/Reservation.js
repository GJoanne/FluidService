import './Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './FluidService.png';

function Reservation() {
  return (
    <div className="Reservation">
        <header>
      <Navbarfonc/>
      </header>
      <body className="Reservation-body">
        <Title text="Réservations" />
        <Calendrier/>
      </body>
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
           <Nav.Link><Link to="/"> Accueil </Link> </Nav.Link>   
            <Nav.Link href="#link">Link</Nav.Link>
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
     const currentDate = new Date();
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
  const moisActuel = mois[currentDate.getMonth()];
return (<div>
    <div className='Table-Header'>
            <h2>{moisActuel}</h2>
            <div><input type='checkbox' id='Arrive'/><h6 className='Arrive'>Arrivé </h6><input type='checkbox' id='Annule'/><h6 className='Annule'>Annulé</h6> <input type='checkbox' id='Prevu'/>Prévue</div>
<div>Aujourd'hui precedent suivant</div>
        </div>
        <div>
            <table>
<thead>
    <tr>
        <th>Lundi</th>
        <th>Mardi</th>
        <th>Mercredi</th>
            <th>Jeudi</th>
        <th>Vendredi</th>
        <th>Samedi</th>
        <th>Dimanche</th>
    </tr>   
</thead>
<tbody>
    <tr>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
          <td>11</td>
    </tr>
    <tr>
        
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17
            <hr className='Arrive'></hr>
        </td>
        <td>18</td>
    </tr>
    <tr>
        
        <td>19</td>
        <td className='Date-jour'>20</td>
        <td>21</td>
        <td>22</td>
        <td ><hr className='Annule'></hr>23</td>
        <td>24</td>
        <td>25</td>
    </tr>
    <tr>
        
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
</tbody>

        </table></div></div>);
}

function Mois(){

}

export default Reservation;
