import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/callum-doty" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            <span className="icon-label">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/callum-doty-62b501192" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            <span className="icon-label">LinkedIn</span>
          </a>
          <a href="mailto:doty.callum9@gmail.com" className="social-link">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            <span className="icon-label">Email</span>
          </a>
        </div>
        
        <div className="coded-by">
          <span className="coded-text">Coded by me in </span>
          <FontAwesomeIcon icon={faReact} className="react-icon spin" />
          <span className="react-text">React</span>
        </div>

        <div className="signature-container">
          <img src="assets/signature.png" alt="Signature" className="footer-signature" />
        </div>
      </div>
    </footer>
  );
}