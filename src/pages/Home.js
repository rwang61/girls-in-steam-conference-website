import './styles/Home.css';
import Alert from './components/Alert';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'
import Navbar from '../pages/components/Navbar.js'
import "./../fonts/JosefinSans-VariableFont_wght.ttf"
import OurValues from './components/OurValues.js';
import TheTeam from "./components/TheTeam.js";
import Hero from "./components/Hero.js";
import SupportUs from "./components/SupportUs.js";

export default function Home() {
  return (
    <div id="App">
      <Alert rounded={false}> Want to join the team? <a href="https://linktr.ee/girlsinsteamorg">We're hiring Campus Ambassadors!</a> </Alert>
      <Navbar />
      <Hero />
      <AboutUs />
      <div className='Values-Team-Background'>
        <OurValues />
        <TheTeam />
        <SupportUs />
      </div>
      <Footer />
    </div>
  )
}

