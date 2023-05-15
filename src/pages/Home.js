import './styles/Home.css';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'
import Navbar from '../pages/components/Navbar.js'
import commimg from './assets/CommunityImage.png';
import edimg from './assets/EducationImage.png';
import accimg from './assets/AccessImage.png';
import "./fonts/JosefinSans-VariableFont_wght.ttf"
import './App.css';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AboutUs />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='Our-values'>
          <p>OUR VALUES</p>
          <img className='CommImg' src={commimg} alt='Community' />
          <img className='AccImg' src={accimg} alt='Access' />
        </div>
      </header>
      <Footer />
    </div>
  )
}

