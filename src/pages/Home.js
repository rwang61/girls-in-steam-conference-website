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
import FAQ from "./components/FAQ.js";

export default function Home() {
  return (
    <div id="App">
      <Alert rounded={false}> Want to keep updated about our events? <a href="https://www.instagram.com/girlsinsteamorg/" target="_blank" rel="noreferrer">Check out our Instagram page!</a> </Alert>
      <div className='App-Component'>
        <div className='Nav-Component'>
          <Navbar />
          </div>
        </div>
      <div className='Hero-Background'>
       <div className='App-Component'>
          <Hero />
        </div>
      </div>
      <div className='App-Component'>
        <AboutUs />
      </div>
      <div className='Values-Team-Background'>
        <div className='App-Component'>
          <OurValues />
          <TheTeam />
          <FAQ />
          <SupportUs />
        </div>
      </div>
      <Footer />
    </div>
  )
}

