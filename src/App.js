import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Work from './pages/Work.jsx';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Header /> {/* Header at the top */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
