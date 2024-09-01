import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import './styles/App.css';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Define the colors and words for the Home page
  const colors = ['#DDDBDE', '#CAD4DF', '#656E77', '#3B373B'];
  const words = ['HI, IM CALLUM', 'DATA VISUALIZATION', 'WEB DEVELOPMENT', 'INFORMATION TECHNOLOGY', 'CREATIVE NETWORK'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === '/') {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 5000); // Change the background color and word every 5 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    } else {
      setIndex(0); // Reset to the first color and word when leaving the home page
    }
  }, [location.pathname, colors.length]);

  const complementaryColor = (hex) => {
    const rgb = parseInt(hex.slice(1), 16);
    const invertedColor = (0xffffff ^ rgb).toString(16).padStart(6, '0');
    return `#${invertedColor}`;
  };

  const backgroundColor = colors[index];
  const textColor = complementaryColor(backgroundColor);
  const currentWord = words[index];

  return (
    <div className="App">
      <div
        style={{ backgroundColor: location.pathname === '/' ? backgroundColor : '', color: location.pathname === '/' ? textColor : '' , minHeight: '100vh' }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home currentWord={currentWord} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
