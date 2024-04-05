import React from 'react';
import './CSS/index.css';
import App from './App';
import Loader from './Loader';
import Reservation from "./Reservation";
import Salle from "./Plan_de_salle";
import Accueil from "./Accueil";
import DetailResa from "./DetailResa";
import Occupation from "./Occupation";
import ServiceSuggere from "./ServiceSuggere";
import InscriptionExistant from "./InscriptionExistant";
import InscriptionInexistant from "./InscriptionInexistant";
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById('root')); // Utilisation de createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/Accueil" element={<App />} />
        <Route path="/Reservation/" element={<Reservation />} />
        <Route path="/Salle/" element={<Salle />} />
        <Route path="/Connexion/" element={<Accueil />} />
        <Route path="/InscriptionExistant/" element={<InscriptionExistant />} />
        <Route path="/InscriptionInexistant/" element={<InscriptionInexistant />} />
        <Route path="/DetailResa/" element={<DetailResa />} />
        <Route path="/Occupation/" element={<Occupation />} />
        <Route path="/ServiceSuggere/" element={<ServiceSuggere />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

