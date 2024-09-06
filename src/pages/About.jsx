



import React from 'react';
import '../styles/About.css'; // Create a CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <p className="about-text">
          Hi, I'm Callum, a passionate developer and designer with a focus on creating 
          seamless user experiences. With a background in data visualization, web development, 
          and creative technology, I aim to blend technology and design to craft intuitive, 
          aesthetic solutions.
        </p>
        <div className="about-details">
          <div className="about-section">
            <h2 className="section-heading">Skills</h2>
            <ul className="about-list">
              <li>Web Development</li>
              <li>Data Visualization</li>
              <li>UI/UX Design</li>
              <li>Creative Coding</li>
            </ul>
          </div>
          <div className="about-section">
            <h2 className="section-heading">Interests</h2>
            <ul className="about-list">
              <li>Creative Technology</li>
              <li>Interactive Media</li>
              <li>Design Thinking</li>
              <li>AI in Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src="/assets/profile.png" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}

