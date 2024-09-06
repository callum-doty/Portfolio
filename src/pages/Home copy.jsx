import React from 'react';
import '../styles/Home.css';

export default function Home({ currentWord }) {
  // Bento boxes data from Experience.jsx
  const projects = [
    {
      title: 'Title',
      description: 'Insert Description',
      image: '/assets/profile.png',
      link: '#',
    },
    {
      title: 'Title',
      description: 'Insert Description',
      image: '/assets/profile.png',
      link: '#',
    },
    {
      title: 'Title',
      description: 'Insert Description',
      image: '/assets/profile.png',
      link: '#',
    },
    {
      title: 'Title',
      description: 'Insert Description',
      image: '/assets/profile.png',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Background and Plop-text Section */}
      <div className="background-section">
        {currentWord !== 'HI, IM CALLUM' && (
          <p className="home-description">I have experience in...</p>
        )}
        <div className="home">
          <h1 className="plop-text">{currentWord}</h1>
        </div>
      </div>

      {/* Bento Boxes Section */}
      <div className="experience-section">
        <div className="bento-grid">
          {projects.map((project, index) => (
            <div key={index} className="bento-box">
              <img src={project.image} alt={project.title} className="bento-image" />
              <div className="bento-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="learn-more">More about {project.title} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
