import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Blog from './pages/Blog.jsx';
import Palter from './pages/Projects/Palter.jsx';
import Mycelium from './pages/Projects/Mycelium.jsx';
import Cherge from './pages/Projects/Cherge.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop'
import ProjectGallery from './components/ProjectGallery.jsx';
import FullImageView from './components/ProjectGallery.jsx';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <ScrollToTop />  {/* Keep ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/palter" element={<Palter />} />
          <Route path="/projects/mycelium" element={<Mycelium />} />
          <Route path="/projects/cherge" element={<Cherge />} />
          <Route path="/gallery" element={<ProjectGallery />} />
          <Route path="/gallery/:imagePath" element={<FullImageView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;