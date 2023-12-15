import React from 'react';
import {  HashRouter as Router, Route, Routes,Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbars from './components/navbars/Navbars';
import Footers from './components/footers/Footers';
import Backup from './pages/Backup/Backup';

function App() {
  return (
    <div className="App">
    <Router>
      
  
  
    <Navbars/>

        <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/Backup" element={<Backup/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      
      
      <Footers/>
    </Router>
    </div>
    
  );
}

export default App;
