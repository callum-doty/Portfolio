import React from 'react';
import '../../styles/Palter.css';

import heroImg from '../../assets/palteretc/DSC01646-1024x683.jpg';
import img1 from '../../assets/palteretc/DSC01643-1024x683.jpg';
import img2 from '../../assets/palteretc/DSC01644-1024x683.jpg';
import img3 from '../../assets/palteretc/DSC01648-1024x683.jpg';
import img4 from '../../assets/palteretc/DSC01646-1024x683.jpg';
import img5 from '../../assets/palteretc/DSC01647-1024x683.jpg';
import img6 from '../../assets/palteretc/DSC01655-1024x683.jpg';
import img7 from '../../assets/palteretc/DSC01657-1024x683.jpg';
import img8 from '../../assets/palteretc/DSC01659-1024x683.jpg';
import img9 from '../../assets/palteretc/DSC01662-1024x683.jpg';
import img10 from '../../assets/palteretc/DSC01664-1024x683.jpg';
import img11 from '../../assets/palteretc/DSC01675-1024x683.jpg';
import img12 from '../../assets/palteretc/p1.jpg';
import img15 from '../../assets/palteretc/DSC01666-1024x683.jpg';


const Palter = () => {
  const videoId = "Ses9fye4dFc";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`; // Changed this line

  const galleryImages = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    { src: img7, alt: "Gallery Image 7" },
    { src: img8, alt: "Gallery Image 8" },
    { src: img9, alt: "Gallery Image 9" },
    { src: img10, alt: "Gallery Image 10" },
    { src: img11, alt: "Gallery Image 11" },
    { src: img12, alt: "Gallery Image 12" },
    // Using first 4 images again to complete the 16-image grid
    { src: img1, alt: "Gallery Image 13" },
    { src: img2, alt: "Gallery Image 14" },
    { src: img15, alt: "Gallery Image 15" },
    { src: img4, alt: "Gallery Image 16" }
  ];
  
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-hero">
          <h1>Palter</h1>
          <p className="project-subtitle">
            Palter is a four to eight player social deduction game concerning subtle
            hints and observations via a mind-bending dialogue. 
          </p>
        </div>

        <div className="project-main-image">
          <img 
            src={heroImg} 
            alt="Head img" 
            className="hero-image"
          />
        </div>

        <div className="project-details">
          <div className="project-info-grid">
            <div className="info-section">
              <h2 className="info-title">Problem</h2>
              <p className="info-text">
              When challenged to design a game, I created a physical experience that balanced key elements: replayability, strategic depth, intuitive rules, and above all – pure fun.
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Solution</h2>
              <p className="info-text">
              After multiple iterations and rigorous user testing, <br />I developed Palter – a game that achieves its core goals: replayability, strategic depth, accessibility, and fun.
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">My role</h2>
              <p className="info-text">
                Lead Concept Researcher <br /> Lead Qualitative Researcher <br /> Lead Material Researcher <br /> Lead Graphic Designer <br />
                Lead Package Designer <br /> Lead Brand Designer
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Scope</h2>
              <p className="info-text">
                3 month Senior Synthesis Project
              </p>
            </div>
          </div>

          <div className="video-section">
            <h2 className="video-title">Watch the Demo</h2>
            <div className="video-container">
              <iframe
                className="youtube-video"
                src={embedUrl}
                title="Palter Game Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>

          <div className="content-column">
            {/* Additional project content can go here */}
          </div>
          <div className="gallery-section">
            <h2 className="gallery-title">Project Gallery</h2>
              <div className="gallery-grid">
              {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading={index > 3 ? "lazy" : "eager"} // Lazy load images below the fold
              />
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Palter;