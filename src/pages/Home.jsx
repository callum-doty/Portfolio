import React from 'react';
import Projects from '../components/Projects.jsx';
import Home from '../styles/Home.css';
import AnimatedHero from '../components/AnimatedHero.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';

const Homer = () => {
  return (
    <div className="home-wrapper">
      <div className="dot-pattern-background" />
      <div className="home-content layout-animation">
        <div className="layout-element">
          <AnimatedHero />
        </div>
        <div className="layout-element delay-1">
          <Projects /> 
          <ProjectGallery />
        </div>
      </div>
    </div>
  );
};

export default Homer;