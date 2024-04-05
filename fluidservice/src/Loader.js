import React, { useEffect } from 'react';
import './CSS/Loader.css';
import video_smoke from './Images/smoke.mp4';

function Loader() {
  useEffect(() => {
    const video = document.querySelector('video');
    const handleVideoEnd = () => {
      // Redirection vers la page 'App' après la fin de la vidéo
      window.location.href = '/Accueil';
    };
    // Écouter l'événement 'ended' pour détecter la fin de la vidéo
    video.addEventListener('ended', handleVideoEnd);
    // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  return (
    <div className='loader-app'>
      <VideoComponent />
    </div>
  );
}

const VideoComponent = () => {
  return (
    <section>
      <video src={video_smoke} autoPlay muted></video>
      <h1 className='loader-h1'>
        <span>F</span>
        <span>L</span>
        <span>U</span>
        <span>I</span>
        <span>D</span>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
      </h1>
    </section>
  );
};

export default Loader;
