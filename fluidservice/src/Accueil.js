import logo from './Images/FluidService.png';
import restaurant from './Images/restaurant.png';
import existant from './Images/serveur.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Reservation from './Reservation';
import axios from 'axios';


function Accueil() {
const [identifiant, setIdentifiant] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [connecter, setConnecter] = useState(false);

    const handleChangeIdentifiant = (e) => {
        setIdentifiant(e.target.value);
    };

    const handleChangeMotDePasse = (e) => {
        setMotDePasse(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/Connexion', { identifiant, motDePasse });
            setConnecter(true);
        } catch (error) {
            alert("Authentification échoué.");
        }
    };
   
    useEffect(() => {
        const contenant = document.getElementById('contenant');
        const loginButton = document.getElementById('login');
        const signUpButton = document.getElementById('signup');

        signUpButton.addEventListener('click', () => {
            contenant.classList.add('panel-active');
        });

        loginButton.addEventListener('click', () => {
            contenant.classList.remove('panel-active');
        });

     
        return () => {
            signUpButton.removeEventListener('click', () => {
                contenant.classList.add('panel-active');
            });
            loginButton.removeEventListener('click', () => {
                contenant.classList.remove('panel-active');
            });
        };
    }, []);
    return (
        
        <div>
           
            <div className='Logo-position'>
            <Link to="/"><img src={logo}
                    alt="Logo" width="120" height="120"/></Link>
            </div>
              {connecter ? (
        <Reservation />
      ) : (
            <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <div className='form-contenant sign-up-contenant'>
                        <form action="#">
                            <h1>Creer un compte</h1>
                            <div class="card-Accueil">
                            <InscriptionInexistantLink/>    
                            <InscriptionExistantLink/>
                            </div>
                        </form>
                    </div>
                    <div className='form-contenant login-contenant'>
                        <form onSubmit={handleSubmit}>
                            <h1>Se connecter</h1>
                            <input
                                className='input_accu'
                                type="text"
                                placeholder='Identifiant'
                                nom='identifiant'
                                value={identifiant}
                    onChange={handleChangeIdentifiant}
                            />
                            <input
                                className='input_accu'
                                type="password"
                                placeholder='Mot de passe'
                                nom='motDePasse'
                                value={motDePasse}
                    onChange={handleChangeMotDePasse}
                            />
                            <button type='submit'>Se connecter</button>
                        </form>
                    </div>
                    <div className='overlay-contenant'>
                        <div className='overlay'>
                            <div className="overlay-panel overlay-left">
                                <h1>
                                    Heureux de vous revoir 
                                </h1>
                                <p>
                                    Si vous disposez d'un côtre connectez vous ici.
                                </p>
                                <button className='ghost' id="login">Se connecter</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>
                                    Bienvenue! 
                                </h1>
                                <p>
                                    Créer un compte et gérez votre restaurant.
                                </p>
                                <button className='ghost' id="signup">Creer un compte</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                  
            </div>)}
              
        </div>
  );
}

function InscriptionInexistantLink() {
    const link = "/InscriptionInexistant/";
    return <Link to={link} className="link"><div className='card_effect'><Card style={{ width: '18rem' }}>
      <Card.Img class="card-image" variant="top" src={restaurant} />
      
      <Card.Body>
        <Card.Title>Nouveau restaurant</Card.Title>
      </Card.Body>
     
      </Card>
  
     </div> </Link>;
}

function InscriptionExistantLink() {
    const link = "/InscriptionExistant/";
    return <Link to={link} className="link"> <div className='card_effect'><Card style={{ width: '18rem' }}>
      <Card.Img class="card-image" variant="top" src={existant} />
      
      <Card.Body>
        <Card.Title>Restaurant déjà existant</Card.Title>
        
      </Card.Body>
      
    </Card>
    
    </div> </Link>;
}



export default Accueil;
