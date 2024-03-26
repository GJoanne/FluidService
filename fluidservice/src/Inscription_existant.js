import logo from './Images/FluidService.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Inscription_Existant() {
    return (
        <div>
            <div className='Logo-position'>
            <Link to="/"><img src={logo}
                    alt="Logo" width="120" height="120"/></Link>
                    </div>
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Inscription</h1>
                        <form action="../Reservation/">
                            <Container>
                                <Row>
                                    <Col>
                            <input type="text" placeholder='Nom'></input>
                            </Col>
                             <Col>
                             <input type="text" placeholder='Adresse'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input type="text" placeholder='Prenom'></input>
                            </Col>
                             <Col>
                             <input type="text" placeholder='Code Activation'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input type="email" placeholder='Email'></input>
                            </Col>
                             <Col>
                             <input type="password" placeholder='Mot de passe'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input type="text" placeholder='Telephone'></input>
                            </Col>
                             <Col>
                             <input type="password" placeholder='Confirmation du mot de passe'></input>
                            </Col>
                                </Row>
                            </Container>
                            <button type='submit'>Se connecter</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

function ReservationLink() {
    const link = "/Reservation/";
    return <Link to={link} className="link">Bonjour</Link>;
}


export default Inscription_Existant;
