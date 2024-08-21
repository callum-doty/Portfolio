import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';  // Import the Header component
import Home from './pages/Home.jsx';      // Import the Home component
import About from './pages/About';    // Import the About component
import Experience from './pages/Experience';  // Import the Experience component
import Work from './pages/Work';      // Import the Work component
import './styles/App.css';
import { Route, Routes, useLocation } from "react-router-dom"

function App() {
  const location = useLocation();

  // Define the colors and logic for the Home page
  const colors = ['#DDDBDE', '#CAD4DF', '#656E77', '#3B373B'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === '/') {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 5000); // Change the background color every 2 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    } else {
      setIndex(0); // Reset to the first color when leaving the home page
    }
  }, [location.pathname, colors.length]);

  const complementaryColor = (hex) => {
    const rgb = parseInt(hex.slice(1), 16);
    const invertedColor = (0xffffff ^ rgb).toString(16).padStart(6, '0');
    return `#${invertedColor}`;
  };

  const backgroundColor = colors[index];
  const textColor = complementaryColor(backgroundColor);

  return (
    <div className="App">
      {location.pathname === '/' ? (
        <div
          style={{ backgroundColor: backgroundColor, color: textColor, minHeight: '100vh' }}
        >
          <Header />
          <Home />
        </div>
      ) : (
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Work" element={<Work />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;