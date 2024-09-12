
import React from 'react';
import '../styles/About.css'; // Create a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="left-column">
        <h2>Dedicated to Eye-Catching Solutions<br />Where Creativity Meets Functionality</h2>

        <h3>Affiliations</h3>
        <p>AIGA &nbsp; IxDA &nbsp; PlasticLife &nbsp; MegaVolt</p>

        <h3>Skills</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>Front-End Development</li>
          <li>JavaScript (ReactJS, NextJS, TypeScript)</li>
          <li>Merch, Apparel Design</li>
          <li>Brand Identity Design</li>
          <li>Multimedia Art (Animation, Cover Art, Music Production)</li>
          <li>Content Management Systems (WordPress, Shopify, Squarespace)</li>
          <li>Adobe Creative Suite (Illustrator, Photoshop, InDesign, Premiere, XD)</li>
        </ul>
      </div>

      <div className="right-column">
        <h3>About me</h3>
        <h1>Azubike Onuosa</h1>
        <p>
          Passionate Multimedia Artist, Designer & Front End Developer | Hybrid UI Expert
        </p>
        <p>
          I am a dynamic Hybrid UI Developer and Designer with a rich background spanning 6 years, dedicated to crafting cutting-edge and impactful web-based applications...
        </p>
        <p>
          Throughout my 6-year journey, I've consistently refined my skills to seamlessly navigate various disciplines. Whether tasked with...
        </p>
        <p>
          If you'd like to know more, follow me on <a href="#">Instagram</a> and <a href="#">Dribbble</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
