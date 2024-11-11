import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // You can style this page as needed
import scoob from "../assets/scoob.png"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img 
        src={scoob}
        alt="Scooby Doo" 
      />
      <h1>ZOINKS</h1>
      <p>404 Not Found.</p>
      <Link to="/" className="back-home-link">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
