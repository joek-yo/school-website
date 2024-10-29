// Home.jsx - Home Page for Tommie Fulp Adventist Academy & Junior School

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to Tommie Fulp Adventist Academy & Junior School</h2>
        <p>
          At Tommie Fulp Adventist Academy & Junior School, we are dedicated to
          providing a nurturing environment that fosters academic excellence and
          moral values. Our commitment to holistic education empowers our students
          to become confident, compassionate, and responsible citizens.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To inspire and equip students with the knowledge, skills, and values
            necessary to make meaningful contributions to society.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be a center of excellence in Christian education, shaping future leaders
            with strong academic foundations and spiritual guidance.
          </p>
        </div>
      </section>

      {/* Quick Links/Notices Section */}
      <section className="quick-links">
        <h3>Quick Links & Notices</h3>
        <ul>
          <li>Admissions open for the 2024-2025 school year.</li>
          <li>Parent-Teacher meeting scheduled for November 15th.</li>
          <li>Annual Sports Day on December 8th - Join us!</li>
        </ul>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <h3>Our Gallery</h3>
        <div className="gallery-grid">
          {/* Add placeholder images or replace with actual images */}
          <img src="https://via.placeholder.com/150" alt="School Activity 1" />
          <img src="https://via.placeholder.com/150" alt="School Activity 2" />
          <img src="https://via.placeholder.com/150" alt="School Activity 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
