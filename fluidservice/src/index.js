import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import Reservation from "./Reservation";
import Salle from "./Plan_de_salle";
import Accueil from "./Accueil";
import Inscription_Existant from "./Inscription_existant";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Reservation/" element={<Reservation />} />
        <Route path="/Salle/" element={<Salle />} />
        <Route path="/Connexion/" element={<Accueil />} />
        <Route path="/Inscription_Existant/" element={<Inscription_Existant />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
