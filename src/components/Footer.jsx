import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <a href="https://github.com/callum-doty" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/callum-doty-62b501192" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
        <a href="mailto:your-email@example.com">
          <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
        </a>
      </div>
      <div className="footer-column">
        <p className="footer-cta">Let's Connect!</p>
      </div>
      <div className="footer-column">
        <p className="footer-name">Callum Doty</p>
      </div>
    </footer>
  );
}
