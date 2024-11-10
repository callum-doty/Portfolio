import { useState, useEffect, useRef } from 'react';
import '../styles/ProjectGallery.css';
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const SimpleGallery = () => {
  const galleryRef = useRef(null);
  const [columns, setColumns] = useState(3);
  const [numPages, setNumPages] = useState(null);


  const projects = [
    {
      id: 'rand1',
      image: '/assets/axiom/esports-poster-draft.pdf'
    },
    {
      id: 'rand2',
      image: '/assets/axiom/ljproj-draft04.pdf'
    },
    {
      id: 'rand3',
      image: '/assets/axiom/gamingclub-draft.pdf'
    },
    {
      id: 'axiom1',
      image: '/assets/axiom/AX (1).pdf'
    },
    {
      id: 'axiom2',
      image: '/assets/axiom/AX (2).pdf'
    },
    {
      id: 'axiom3',
      image: '/assets/axiom/AX (3).pdf'
    },
    {
      id: 'axiom4',
      image: '/assets/axiom/AX (4).pdf'
    },
    {
      id: 'axiom5',
      image: '/assets/axiom/AX (5).pdf'
    },
    {
      id: 'axiom6',
      image: '/assets/axiom/AX (6).pdf'
    },
    {
      id: 'axiom7',
      image: '/assets/axiom/AX (7).pdf'
    },
    {
      id: 'axiom8',
      image: '/assets/axiom/AX (8).pdf'
    },
    {
      id: 'axiom9',
      image: '/assets/axiom/AX (9).pdf'
    },
    {
      id: 'axiom10',
      image: '/assets/axiom/AX (10).pdf'
    },
    {
      id: 'axiom11',
      image: '/assets/axiom/AX (11).pdf'
    },
    {
      id: 'axiom12',
      image: '/assets/axiom/AX (12).pdf'
    },
    {
      id: 'axiom13',
      image: '/assets/axiom/AX (13).pdf'
    },
    {
      id: 'axiom14',
      image: '/assets/axiom/AX (14).pdf'
    },
    {
      id: 'axiom15',
      image: '/assets/axiom/AX (15).pdf'
    },
    {
      id: 'axiom16',
      image: '/assets/axiom/AX (16).pdf'
    },
    {
      id: 'axiom17',
      image: '/assets/axiom/AX (17).pdf'
    },
    {
      id: 'axiom18',
      image: '/assets/axiom/AX (18).pdf'
    },
    {
      id: 'axiom19',
      image: '/assets/axiom/AX (19).pdf'
    },
    {
      id: 'axiom20',
      image: '/assets/axiom/AX (20).pdf'
    },
    {
      id: 'axiom21',
      image: '/assets/axiom/AX (21).pdf'
    },
    {
      id: 'axiom22',
      image: '/assets/axiom/AX (22).pdf'
    },
    {
      id: 'axiom23',
      image: '/assets/axiom/AX (23).pdf'
    },
    {
      id: 'axiom24',
      image: '/assets/axiom/AX (24).pdf'
    }
  ];

  const isPDF = (filename) => filename.toLowerCase().endsWith('.pdf');

  const renderItem = (project) => {
    if (isPDF(project.image)) {
      return (
        <Document
          file={project.image}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading="Loading PDF..."
          className="pdf-document"
        >
          <Page 
            pageNumber={1} 
            width={300}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading="Loading page..."
          />
        </Document>
      );
    }
    return (
      <img
        src={project.image}
        alt={project.id}
        className="masonry-image"
      />
    );
  };

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

  // Function to get GitHub raw content URL
  const getGitHubPDFUrl = (path) => {
    // Using your specific GitHub repository
    const githubBaseUrl = 'https://github.com/callum-doty/Portfolio/blob/main/public';
    // Remove leading slash if present and encode the path
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // For raw content, use the raw.githubusercontent.com domain
    const rawUrl = `https://raw.githubusercontent.com/callum-doty/Portfolio/main/public/${cleanPath}`;
    return rawUrl;
  };

  return (
    <div className="gallery-container">
      <div className="vertical-text2">Project Gallery</div>
      <div className="masonry-gallery" ref={galleryRef}>
        {distributeItems().map((column, columnIndex) => (
          <div key={columnIndex} className="masonry-column">
            {column.map((project) => (
              <a
                key={project.id}
                href={getGitHubPDFUrl(project.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="masonry-item"
              >
                {renderItem(project)}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleGallery;