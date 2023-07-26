import './styles/Home.css';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'
import Navbar from '../pages/components/Navbar.js'
import "./../fonts/JosefinSans-VariableFont_wght.ttf"
import OurValues from './components/OurValues.js';
import TheTeam from "./components/TheTeam.js";
import Hero from "./components/Hero.js";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Hero />
        <AboutUs />
        <div className='Values-Team-Background'>
          <OurValues />
          <TheTeam />
        </div>
      </header>
      <Footer />
    </div>
  )
}

