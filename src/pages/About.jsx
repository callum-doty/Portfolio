
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="main-content">
        <div className="about-container">
          <div className="image-column">
            {/* Replace with your image */}
            <img src="..\assets\profile.png" alt="Profile" className="profile-image" />
          </div>
          
          <div className="text-column">
            <h3>About me</h3>
            <h1>Callum Doty</h1>
            <p className="subtitle">
            Passionate about UI/UX design, user research, and product design. I am deeply invested in chess, exercising, league of legends, and continuous learning.
            </p>
            <p>
              Graduating in early 2023, I have honed my skills information technology, computer science, web development, graphic design, and am beginning my journey into deep learning.
            </p>
            <p>
              I seek to research and build applications and concepts on the job or in my free time.
            </p>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills-column education">
            <h3>Education</h3>
            <ul>
              <li>
                <h4>Virginia Commonwealth University</h4>
                <p>Graphic Design</p>
                <span>2019 - 2023</span>
              </li>
              <li>
                <h4>CompTIA A+ ce</h4>
                <p>Pearson Certification</p>
                <span>August - December 2023</span>
              </li>
              <li>
                <h4>Power BI Data Analyst Associate</h4>
                <p>Microsoft Certification</p>
                <span>January - May 2024</span>
              </li>
              <li>
                <h4>IBM Data Science</h4>
                <p>IBM Certification</p>
                <span>May - August 2024</span>
              </li>
              <li>
                <h4>Google UX Design</h4>
                <p>Google Certification</p>
                <span>August - December 2023</span>
              </li>
            </ul>
          </div>

          <div className="skills-column design">
            <h3>Design Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Data Visualization</li>
              <li>Layout Design</li>
              <li>Branding + Identity</li>
              <li>Qualitative Research</li>
              <li>Design Thinking</li>
              <li>Storyboarding</li>
              <li>Wireframing</li>
            </ul>
          </div>

          <div className="skills-column technical">
            <h3>Technical Skills</h3>
            <ul>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Indesign</li>
              <li>Premiere Pro</li>
              <li>Power BI</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>WordPress</li>
              <li>Mac OS</li>
              <li>Windows OS</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;