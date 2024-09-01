import React from 'react';
import '../styles/Home.css';

export default function Home({ currentWord }) {
  return (
    <div>
      {currentWord !== 'HI, IM CALLUM' && (
        <p className="home-description">I have experience in...</p>
      )}
      <div className="home">
        <h1 className="plop-text">{currentWord}</h1>
      </div>
    </div>
  );
}
