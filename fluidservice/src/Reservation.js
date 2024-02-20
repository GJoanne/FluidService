import './Reservation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reservation() {
  return (
    <div className="Reservations">
        <header>
      <Navbarfonc/>
      </header>
      <body className='Reservation-body'>
        <Title text="Réservation" />
        <Calendrier/>
      </body>
    </div>
  );
}


function Navbarfonc(){
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
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
return (<div>
    <div className='Table-Header'>
            <h2>Février </h2>
            <div>Arrivé Annulé Prévue</div>
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
        </table></div></div>);
}

export default Reservation;
