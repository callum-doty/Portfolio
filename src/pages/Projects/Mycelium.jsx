import React from 'react';
import '../../styles/Mycelium.css';

const Mycelium = () => {

  const galleryImages = [
    { src: "/assets/mycelium/DSC01689-1024x683.jpg", alt: "Gallery Image 1" },
    { src: "/assets/mycelium/DSC01691-1024x683.jpg", alt: "Gallery Image 2" },
    { src: "/assets/mycelium/DSC01692-1024x683.jpg", alt: "Gallery Image 3" },
    { src: "/assets/mycelium/DSC01695-1024x683.jpg", alt: "Gallery Image 4" },
    { src: "/assets/mycelium/DSC01697-1024x683.jpg", alt: "Gallery Image 5" },
    { src: "/assets/mycelium/DSC01699-1024x683.jpg", alt: "Gallery Image 6" },
    { src: "/assets/mycelium/DSC01700-1024x683.jpg", alt: "Gallery Image 7" },
    { src: "/assets/mycelium/DSC01704-1024x683.jpg", alt: "Gallery Image 8" },

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
            src="/assets/mycelium/DSC01688-1024x683.jpg" 
            alt="Head img" 
            className="hero-image"
          />
        </div>

        <div className="project-details">
          <div className="project-info-grid">
            <div className="info-section">
              <h2 className="info-title">Problem</h2>
              <p className="info-text">
              With a team of 18 graphic designers, we were tasked with ideating, budgeting, designing, printing, and assembling a catalog for ninety clients.
              Collaborating with two additional teams, installation and branding, we must create a cohesive catalog that captures the theme of "mycelium".
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Solution</h2>
              <p className="info-text">
                After extensive research, project collection, and communication between teams, we put together a catalog that was both elegant and on brand. 
                Each page allows for one students project given a template that they selected. The pages are vellum paper in which you may overlay any combination
                of project for an interesting composition.
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