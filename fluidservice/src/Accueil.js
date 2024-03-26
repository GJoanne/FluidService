import logo from './Images/FluidService.png';
import restaurant from './Images/restaurant.png';
import existant from './Images/serveur.png';
import './CSS/Accueil.css';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react'; // Import useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Accueil() {
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

        // Nettoyer les écouteurs d'événements lorsque le composant est démonté
        return () => {
            signUpButton.removeEventListener('click', () => {
                contenant.classList.add('panel-active');
            });
            loginButton.removeEventListener('click', () => {
                contenant.classList.remove('panel-active');
            });
        };
    }, []); // Le tableau vide en second argument signifie que ce code ne s'exécutera qu'une seule fois après le premier rendu

    return (
        <div>
            <div className='Logo-position'>
            <Link to="/"><img src={logo}
                    alt="Logo" width="120" height="120"/></Link>
                    </div>
      <div className="Accueil-fond">
                <div className='contenant' id="contenant">
                    <div className='form-contenant sign-up-contenant'>
                        <form action="#">
                            <h1>Creer un compte</h1>
                            <div class="card-Accueil">
                            <ReservationLink/>    
                            <InscriptionExistantLink/>
                            </div>
                        </form>
                    </div>
                    <div className='form-contenant login-contenant'>
                        <form action="../Reservation/">
                            <h1>Se connecter</h1>
                            <input type="text" placeholder='Identifiant'></input>
                            <input type="password" placeholder='Mot de passe'></input>
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
            </div>
        </div>
    );
}

function ReservationLink() {
    const link = "/Reservation/";
    return <Link to={link} className="link"><div className='card_effect'><Card style={{ width: '18rem' }}>
      <Card.Img class="card-image" variant="top" src={restaurant} />
      
      <Card.Body>
        <Card.Title>Nouveau restaurant</Card.Title>
      </Card.Body>
     
      </Card>
  
     </div> </Link>;
}

function InscriptionExistantLink() {
    const link = "/Inscription_Existant/";
    return <Link to={link} className="link"> <div className='card_effect'><Card style={{ width: '18rem' }}>
      <Card.Img class="card-image" variant="top" src={existant} />
      
      <Card.Body>
        <Card.Title>Restaurant déjà existant</Card.Title>
        
      </Card.Body>
      
    </Card>
    
    </div> </Link>;
}

export default Accueil;
