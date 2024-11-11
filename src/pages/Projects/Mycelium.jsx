import React from 'react';
import '../../styles/Mycelium.css';

import heroImg from '../../assets/mycelium/DSC01688-1024x683.jpg';
import img1 from '../../assets/mycelium/DSC01689-1024x683.jpg';
import img2 from '../../assets/mycelium/DSC01691-1024x683.jpg';
import img3 from '../../assets/mycelium/DSC01692-1024x683.jpg';
import img4 from '../../assets/mycelium/DSC01695-1024x683.jpg';
import img5 from '../../assets/mycelium/DSC01697-1024x683.jpg';
import img6 from '../../assets/mycelium/DSC01699-1024x683.jpg';
import img7 from '../../assets/mycelium/DSC01700-1024x683.jpg';
import img8 from '../../assets/mycelium/DSC01704-1024x683.jpg';

const Mycelium = () => {

  const galleryImages = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    { src: img7, alt: "Gallery Image 7" },
    { src: img8, alt: "Gallery Image 8" },
  ];
  
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-hero">
          <h1>Mycelium</h1>
          <p className="project-subtitle">
            Mycelium is a seventy-page catalog for the 
            <br />
            2023 Virginia Commonwealth University graphic design exhibition. 
           <br />
            Website: <a href="https://vcugdes-seniorshow.net/" target="_blank" rel="noopener noreferrer">https://vcugdes-seniorshow.net/</a>
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
              I led a team of 18 graphic designers in creating a comprehensive catalog for ninety clients, overseeing everything from concept to completion. 
              Working alongside installation and branding teams, we crafted a cohesive publication centered on the theme of 'mycelium'.
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Solution</h2>
              <p className="info-text">
              Our solution combined elegance with innovation: individual vellum pages showcase each student's work through customized templates. 
              The translucent design enables viewers to create dynamic compositions by overlaying different projects, embodying the interconnected nature of mycelium.
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">My role</h2>
              <p className="info-text">
              Catalog Manager <br /> Research Coordinator <br /> Design Coordinator <br /> Print Coordinator <br /> Assembly Coordinator
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Scope</h2>
              <p className="info-text">
                2 month Senior Exhibition Project
              </p>
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

export default Mycelium;