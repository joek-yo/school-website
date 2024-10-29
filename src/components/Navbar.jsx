// Navbar.jsx - Component for the Navigation Bar

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo

const Navbar = () => {
  return (
    <nav>
      <div className='logo-section'>
        <img src={logo} alt='Tommie Fulp Adventist Academy Logo' className='logo' />
      </div>
      <h1>Tommie Fulp Adventist Academy & Junior High School</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
