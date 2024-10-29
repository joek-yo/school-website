// Home.jsx - Updated to use Bootstrap classes

import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="home container">
      {/* Hero Section */}
      <section className="hero text-center py-5 bg-light">
        <img src={logo} alt="School Logo" className="hero-logo mb-3" />
        <h2 className="display-4">Welcome to Tommie Fulp Adventist Academy & Junior School</h2>
        <p className="lead">Your child's future starts here with quality education and Christian values.</p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision mt-5 p-4 bg-white rounded shadow-sm">
        <h3 className="h4 text-primary">Our Mission</h3>
        <p>To provide a nurturing environment that fosters academic excellence and spiritual growth.</p>
        
        <h3 className="h4 text-primary">Our Vision</h3>
        <p>To inspire students to be lifelong learners and impactful community leaders.</p>
      </section>

      {/* Overview Section */}
      <section className="overview mt-5">
        <h3 className="h4 text-primary">About Our School</h3>
        <p>
          Established with a commitment to quality education, Tommie Fulp Adventist Academy offers a well-rounded program that develops each child's mind, body, and spirit.
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links mt-5 text-center">
        <h3 className="h4 text-primary">Explore Our School</h3>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/admissions" className="btn btn-primary">Admissions</a></li>
          <li className="list-inline-item"><a href="/gallery" className="btn btn-primary">Gallery</a></li>
          <li className="list-inline-item"><a href="/contact" className="btn btn-primary">Contact Us</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
