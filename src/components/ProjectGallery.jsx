import { useState, useEffect, useRef } from 'react';
import '../styles/ProjectGallery.css';
import { Link } from 'react-router-dom';


const SingleImage = ({ src }) => (
  <div className="single-image-view">
    <img src={src} alt="Full view" className="single-image" />
  </div>
);

const SimpleGallery = () => {
  const galleryRef = useRef(null);
  const [columns, setColumns] = useState(3);
  
  const projects = [
    {
      id: 'project1',
      image: '/assets/salmon.png'
    },
    {
      id: 'project2',
      image: '/assets/cherge/cherge_hero.png'
    },
    {
      id: 'project3',
      image: '/assets/salmon.png'
    },
    {
      id: 'project4',
      image: '/assets/salmon.png'
    },
    {
      id: 'project5',
      image: '/assets/mycelium/DSC01692-1024x683.jpg'
    },
    {
      id: 'project6',
      image: '/assets/salmon.png'
    }
  ];

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width < 600) {
          setColumns(1);
        } else if (width < 900) {
          setColumns(2);
        } else {
          setColumns(3);
        }
      }
    });

    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const distributeItems = () => {
    const columnArrays = Array.from({ length: columns }, () => []);
    const columnHeights = Array(columns).fill(0);
    
    projects.forEach((project, index) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnArrays[shortestColumn].push(project);
      columnHeights[shortestColumn] += 1;
    });

    return columnArrays;
  };

  return (
    <>
    <div className="gallery-container">
    <div className="vertical-text2">Project Gallery</div>
      <div className="masonry-gallery" ref={galleryRef}>
        {distributeItems().map((column, columnIndex) => (
          <div key={columnIndex} className="masonry-column">
            {column.map((project) => (
              <Link
                key={project.id}
                to={`/gallery/image/${project.id}`}
                className="masonry-item"
              >
                <img
                  src={project.image}
                  alt={project.id}
                  className="masonry-image"
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default SimpleGallery;