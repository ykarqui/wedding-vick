// import logo from '../public/logo.png';
import "./App.css";
import Contact from "./components/Contact";
import WeadingDate from "./components/WeadingDate";
import CountDown from "./components/CountDown";
import Invitation from "./components/Invitation";
import Tarjeta from "./components/Tarjeta";
import Detalles from "./components/Detalles";

function App() {
    return (
      <div className="App">
        <WeadingDate />
        <CountDown />
        <Invitation />
        <Tarjeta />
        <Detalles />
        <Contact />
      </div>
    );
};


export default App;
