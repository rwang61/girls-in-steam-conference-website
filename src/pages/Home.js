import './styles/Home.css';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'
import Navbar from '../pages/components/Navbar.js'
import "./../fonts/JosefinSans-VariableFont_wght.ttf"
import OurValues from './components/OurValues.js';
import TheTeam from "./components/TheTeam.js";


export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AboutUs />
        <OurValues />
        <TheTeam />
      </header>
      <Footer />
    </div>
  )
}

