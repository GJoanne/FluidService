import logo from './FluidService.png';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReservationLink/>
      </header>
    </div>
  );
}

function ReservationLink() {
  const link = "/Reservation/" ;
  return <Link to={link} className="link">Appuyer ici pour commencer votre expérience</Link>;
}

export default App;


