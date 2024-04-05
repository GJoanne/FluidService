import logo from './Images/FluidService.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Reservation from './Reservation';


function InscriptionExistant() {
    const [inscrit, setInscrit] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        adresse: '',
        motDePasse:'',
        motDePasse2:'',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/InscriptionExistant', formData);
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
        <Reservation />
      ) : (
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <h1>Inscription</h1>
                        <form onSubmit={handleSubmit}>
                            <Container>
                                <Row>
                                    <Col>
                            <input className='input_accu' type="text" name='nom' value={formData.nom}
    onChange={handleChange}  placeholder='Nom'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' type="text" name='adresse' value={formData.adresse}
    onChange={handleChange} placeholder='Adresse'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input className='input_accu' type="text" name='prenom' value={formData.prenom}
    onChange={handleChange} placeholder='Prenom'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' type="text" placeholder='Code Activation'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input className='input_accu' type="email" name='email' value={formData.email}
    onChange={handleChange} placeholder='Email'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' type="password" name='motDePasse' value={formData.motDePasse}
    onChange={handleChange} placeholder='Mot de passe'></input>
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                            <input className='input_accu' type="text" name='tel' value={formData.tel}
    onChange={handleChange}  placeholder='Telephone'></input>
                            </Col>
                             <Col>
                             <input className='input_accu' type="password" name='motDePasse2' value={formData.motDePasse2}
    onChange={handleChange}  placeholder='Confirmation du mot de passe'></input>
                            </Col>
                                </Row>
                            </Container><button type='submit'>Se connecter</button>
                        </form>
                    </div>
                </div>)}
            </div>
    );
}

export default InscriptionExistant;
