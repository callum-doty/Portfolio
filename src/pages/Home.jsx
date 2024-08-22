import React from 'react';
import '../styles/Home.css';

export default function Home({ currentWord }) {
  return (
    <div className="home">
      <h1 className="plop-text">{currentWord}</h1>
    </div>
  );
}
