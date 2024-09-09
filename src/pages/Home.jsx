import React from 'react';
import FullScreenWaveUndulation from '../components/FullScreenWaveUndulation.jsx';
import Projects from '../components/Projects.jsx';

const Home = () => {
  return (
    <div className="home-content">
      <FullScreenWaveUndulation />
      <Projects /> 
    </div>
  );
};

export default Home;
