// App.jsx - Main application with routing setup

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Admissions from './Admissions/Admissions';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Adding the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
