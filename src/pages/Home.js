import logo from './images/logo.svg';
import './styles/Home.css';
import Navbar from '../pages/components/Navbar.js'
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AboutUs />
      </header>
    </div>
  );
}

export default Home;
