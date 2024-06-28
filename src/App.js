import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Facilities from './components/Pages/Facilities';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import Contactus from './components/Contact/Contactus';


function App() {
  return (
    <div>
     <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Facilities />
            <Map />
          </>} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
