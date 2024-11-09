import { useNavigate } from 'react-router-dom'; // Import the navigate hook
import '../styles/Projects.css';

const ArrowIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="arrow-icon"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Projects = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleProjectClick = (path) => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
    navigate(path);  // Navigate to the project
  };

  const projects = [
    {
      title: "Palter",
      description: "Palter is a four to eight player social deduction game concerning subtle hints and observations via a mind-bending dialogue.",
      image: "/assets/palteretc/DSC01647-1024x683.jpg",
      path: "/projects/palter"
    },
    {
      title: "Mycelium",
      description: "Mycelium is a seventy-page catalog for the 2023 Virginia Commonwealth University graphic design exhibition.",
      image: "/assets/mycelium/DSC01699-1024x683.jpg",
      path: "/projects/mycelium"
    },
    {
      title: "Cherge",
      description: "Cherge is an Ecommerce platform for chess players to build, customize, and purchase their ideal chess piece(s).",
      image: "/assets/cherge/cherge_hero.png",
      path: "/projects/cherge"
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="vertical-text">Latest Projects</div>
      <div className="projects-wrapper">
        <section className="projects-section">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button
                  onClick={() => handleProjectClick(project.path)}  // Custom click handler for scrolling and navigation
                  className="view-project"
                >
                  View Project <ArrowIcon />
                </button>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
