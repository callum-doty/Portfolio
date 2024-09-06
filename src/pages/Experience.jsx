import React from 'react';
import '../styles/Experience.css'; // Assuming this is the CSS file for styling

export default function Experience() {
  const projects = [
    {
      title: 'Conversion',
      description: 'Get shoppers to the finish line. Convert more shoppers into buyers.',
      image: '/assets/profile.png',
      link: '#',
    },
    {
      title: 'Logged In',
      description: 'So long, guest checkout.',
      image: '/assets/profile.png',
      link: '#',
    },
    {
      title: 'Sign Up',
      description: 'Twice the account creation.',
      image: '/assets/profile.png',
      link: '#',
    },
    {
        title: 'Sign Up',
        description: 'Twice the account creation.',
        image: '/assets/profile.png',
        link: '#',
    },
    {
        title: 'Sign Up',
        description: 'Twice the account creation.',
        image: '/assets/profile.png',
        link: '#',
    },
    {
        title: 'Sign Up',
        description: 'Twice the account creation.',
        image: '/assets/profile.png',
        link: '#',
    },
    {
        title: 'Sign Up',
        description: 'Twice the account creation.',
        image: '/assets/profile.png',
        link: '#',
    },
    {
        title: 'Sign Up',
        description: 'Twice the account creation.',
        image: '/assets/profile.png',
        link: '#',
    }
  ];

  return (
    <div className="experience-container">
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
  );
}
