import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Import the CSS file for styling

export default function Home() {
  const words = ['Developer', 'Designer', 'Creator', 'Innovator'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className="home">
      <h1 key={index} className="plop-text">{words[index]}</h1>
    </div>
  );
}
