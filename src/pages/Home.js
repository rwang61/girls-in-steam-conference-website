import './styles/Home.css';
import Navbar from './components/Navbar.js'
import AboutUs from "./components/AboutUs";

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
