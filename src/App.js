import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbarmenu from './components/menu/Navbarmenu';
import Callpaper from './components/CallForPlayer/Callpaper';
import Footer from './components/Footer';
import Advisiory from './components/Advisiory';
import Organization from './components/Organization';
function App() {
  return (
   
  <Router>
      
      <Navbarmenu />
      <Routes>
      <Route exact path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Advisiory" element={<Advisiory />}/>
          <Route path="/Organization" element={<Organization />}/>
          <Route path="/Callpaper" element={<Callpaper/>}/>
          <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}
export default App;
