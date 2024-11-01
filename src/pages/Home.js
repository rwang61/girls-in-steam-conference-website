import './styles/Home.css';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer.js';
import Navbar from '../pages/components/Navbar.js';
import './../fonts/JosefinSans-VariableFont_wght.ttf';
import TheTeam from './components/TheTeam.js';
import Hero from './components/Hero.js';
import SupportUs from './components/SupportUs.js';
import FAQ from './components/FAQ.js';
import Agenda from './components/Agenda.js';

export default function Home() {
  return (
    <div id="App">
      <Alert rounded={false}>
        {' '}
        Want to keep updated about our events?{' '}
        <a href="https://www.instagram.com/girlsinsteamorg/" target="_blank" rel="noreferrer">
          Check out our Instagram page!
        </a>{' '}
      </Alert>
      <div className="App-Component">
        <div className="Nav-Component">
          <Navbar />
        </div>
      </div>
      <div className="Hero-Background">
        <div className="App-Component">
          <Hero />
        </div>
      </div>
      <div className="About-Us-Background">
        <div className="App-Component">
          <AboutUs />
        </div>
      </div>
      <div className="Agenda-Background">
        <div className="App-Component">
          <Agenda />
        </div>
      </div>
      <div className="Sponsor-FAQ-Team-Background">
        <div className="App-Component">
          <SupportUs />
          <FAQ />
          <TheTeam />
        </div>
      </div>
      <Footer />
    </div>
  );
}
