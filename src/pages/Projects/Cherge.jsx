import React from 'react';
import '../../styles/Cherge.css';

const Cherge = () => {
  
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-hero">
          <h1>Cherge </h1>
          <p className="project-subtitle">
          Cherge is an Ecommerce platform for chess players and general game players to discover, customize, and purchase their
          ideal chess piece(s).
            </p>
        </div>

      <div className="button-container">
        <a
          href="/assets/cherge/Case-study-cherge.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="process-deck-button"
        >
          PROCESS DECK
        </a>
      </div>
        

      <div className="embed-container">
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7ZbQuT7GEMNOMOczVFY1oD%2FUntitled%3Fpage-id%3D80%253A464%26type%3Ddesign%26node-id%3D80-465%26viewport%3D1414%252C607%252C0.29%26t%3DpDYpsEwpx1oCo95Y-1%26scaling%3Dscale-down%26starting-point-node-id%3D80%253A465%26mode%3Ddesign"
          width="1600"
          height="1000"
          style={{ border: 'none' }}
          allowFullScreen
        
        ></iframe>
      </div>


        <div className="project-details">
          <div className="project-info-grid">
            <div className="info-section">
              <h2 className="info-title">Problem</h2>
              <p className="info-text">
              With my target audience of chess players in mind, I conducted market research and 
              identified a gap: the demand for fully customizable chess pieces.
              How can I create an e-commerce platform that allows users to design and personalize their own chess pieces?
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Solution</h2>
              <p className="info-text">
                Using a goal-directed design approach, 
                I used qualitative research methods, competitive analysis, user interviews, and data-driven 
                insights to bring this website to fruition.
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">My role</h2>
              <p className="info-text">
              Lead UX Researcher <br /> Lead UX Designer <br /> Lead Interface Designer
              </p>
            </div>

            <div className="info-section">
              <h2 className="info-title">Scope</h2>
              <p className="info-text">
                2 week UI/UX Project
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Cherge;