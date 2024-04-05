import logo from './Images/FluidService.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import axios from 'axios';
import InscriptionExistant from './InscriptionExistant';

function InscriptionInexistant() {
    const [inscrit, setInscrit] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        siret: '',
        adresse: '',
        email: '',
        siteWeb: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/InscriptionInexistant', formData);
        setInscrit(true);
    } catch (error) {
        alert("Veuillez renseigner tous les champs correctement.");
    }
};
    return (
        <div>
            <div className='Logo-position'>
            <Link to="/Connexion"><img src={logo}
                    alt="Logo" width="120" height="120"/><h2>Retour</h2></Link>
                    </div>
                    {inscrit ? (
        <InscriptionExistant />
      ) : (
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Inscription d'un nouveau restaurant</h1>
                        <form onSubmit={handleSubmit}>
                            <Container>
                                <Row>
                                    <Col>
                            <input className='input_accu' name='nom' value={formData.nom}
    onChange={handleChange} type="text" placeholder='Nom'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' name='siret' value={formData.siret}
    onChange={handleChange} type="text" placeholder='Numéro de siret'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input className='input_accu' name='adresse' value={formData.adresse}
    onChange={handleChange} type="text" placeholder='Adresse'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' name='email' value={formData.email}
    onChange={handleChange} type="email" placeholder='Email'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input className='input_accu' name='siteWeb' value={formData.siteWeb}
    onChange={handleChange}  type="text" placeholder='Site web'></input>
                            </Col>
                             <Col>
                            </Col>
                                </Row>
                            </Container>
                            <button type='submit'>Inscrisption</button>
                        </form>
                    </div>
                </div>)}
            </div>
    );
}



export default InscriptionInexistant;
