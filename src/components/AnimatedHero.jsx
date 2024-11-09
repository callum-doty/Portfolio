import { useState, useEffect } from 'react'
import '../styles/AnimatedHero.css'

const AnimatedHero = () => {
  const roles = ["Graphic Designer", "Web Developer", "UI Designer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="home-content">
      <div className="hero-section">
        <h1>
          Hello, I'm Callum,
          <br />
          a{''}
          <span 
            className="role-container"
            onMouseEnter={() => setIsAnimating(false)}
            onMouseLeave={() => setIsAnimating(true)}
          >
            <span 
              className="role-text"
              style={{
                opacity: isAnimating ? 5 : 5,
              }}
            >
              {roles[currentRole]}
            </span>
          </span>
        </h1>
        <p>
          I focus on solving problems in the 
          <br />
          creative industry using innovative 
          <br />
          and impactful design solutions
          
        </p>
      </div>
    </div>
  );
};

export default AnimatedHero;