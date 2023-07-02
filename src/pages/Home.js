import './styles/Home.css';
import Navbar from './components/Navbar.js'
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AboutUs />
      </header>
      <Footer />
    </div>
  );
}

export default Home;
