import './styles/Home.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer.js';
import Navbar from '../pages/components/Navbar.js';
import './../fonts/JosefinSans-VariableFont_wght.ttf';
import TheTeam from './components/TheTeam.js';
import Hero from './components/Hero.js';
import Sponsors from './components/Sponsors.js';
import FAQ from './components/FAQ.js';
import Agenda from './components/Agenda.js';

export default function Home() {
  return (
    <div id="App">
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
      <div className="Agenda-Background" id="Agenda">
        {' '}
        {/* Add the 'id' here */}
        <div className="App-Component">
          <Agenda />
        </div>
      </div>
      <div className="Sponsor-FAQ-Team-Background">
        <div className="App-Component" id="Sponsors">
          {' '}
          {/* Add 'id' here */}
          <Sponsors />
        </div>
        <div className="App-Component" id="FAQ">
          {' '}
          {/* Add 'id' here */}
          <FAQ />
        </div>
        <div className="App-Component" id="TheTeam">
          {' '}
          {/* Add 'id' here */}
          <TheTeam />
        </div>
      </div>
      <Footer />
    </div>
  );
}
