import {Global} from './Global';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Global>
        <Navbar/>
        <Hero/>
        <Featured/>
        <Boost/>
        <Footer/>
      </Global>
    </Router>
    
  );
}

export default App;
