import logo from './FluidService.png';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><ContactLink/></div>
      </header>
    </div>
  );
}

export default App;

export function ContactLink() {
  const link = "/Reservation/" ;
  return <Link to={link}>Start your experience</Link>;
}
