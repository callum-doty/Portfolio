import { useState, useEffect, useRef } from 'react';
import '../styles/ProjectGallery.css';
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

import pdf1 from '../assets/axiom/esports-poster-draft.pdf';
import pdf2 from '../assets/axiom/ljproj-draft04.pdf';
import pdf3 from '../assets/axiom/gamingclub-draft.pdf';
import axiom1 from '../assets/axiom/AX (1).pdf';
import axiom2 from '../assets/axiom/AX (2).pdf';
import axiom3 from '../assets/axiom/AX (3).pdf';
import axiom4 from '../assets/axiom/AX (4).pdf';
import axiom5 from '../assets/axiom/AX (5).pdf';
import axiom6 from '../assets/axiom/AX (6).pdf';
import axiom7 from '../assets/axiom/AX (7).pdf';
import axiom8 from '../assets/axiom/AX (8).pdf';
import axiom9 from '../assets/axiom/AX (9).pdf';
import axiom10 from '../assets/axiom/AX (10).pdf';
import axiom11 from '../assets/axiom/AX (11).pdf';
import axiom12 from '../assets/axiom/AX (12).pdf';
import axiom13 from '../assets/axiom/AX (13).pdf';
import axiom14 from '../assets/axiom/AX (14).pdf';
import axiom15 from '../assets/axiom/AX (15).pdf';
import axiom16 from '../assets/axiom/AX (16).pdf';
import axiom17 from '../assets/axiom/AX (17).pdf';
import axiom18 from '../assets/axiom/AX (18).pdf';
import axiom19 from '../assets/axiom/AX (19).pdf';
import axiom20 from '../assets/axiom/AX (20).pdf';
import axiom21 from '../assets/axiom/AX (21).pdf';
import axiom22 from '../assets/axiom/AX (22).pdf';
import axiom23 from '../assets/axiom/AX (23).pdf';
import axiom24 from '../assets/axiom/AX (24).pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SimpleGallery = () => {
  const galleryRef = useRef(null);
  const [columns, setColumns] = useState(3);
  const [numPages, setNumPages] = useState(null);


  const projects = [
    {
      id: 'rand1',
      image: pdf1
    },
    {
      id: 'rand2',
      image: pdf2
    },
    {
      id: 'rand3',
      image: pdf3
    },
    {
      id: 'axiom1',
      image: axiom1
    },
    {
      id: 'axiom2',
      image: axiom2
    },
    {
      id: 'axiom3',
      image: axiom3
    },
    {
      id: 'axiom4',
      image: axiom4
    },
    {
      id: 'axiom5',
      image: axiom5
    },
    {
      id: 'axiom6',
      image: axiom6
    },
    {
      id: 'axiom7',
      image: axiom7
    },
    {
      id: 'axiom8',
      image: axiom8
    },
    {
      id: 'axiom9',
      image: axiom9
    },
    {
      id: 'axiom10',
      image: axiom10
    },
    {
      id: 'axiom11',
      image: axiom11
    },
    {
      id: 'axiom12',
      image: axiom12
    },
    {
      id: 'axiom13',
      image: axiom13
    },
    {
      id: 'axiom14',
      image: axiom14
    },
    {
      id: 'axiom15',
      image: axiom15
    },
    {
      id: 'axiom16',
      image: axiom16
    },
    {
      id: 'axiom17',
      image: axiom17
    },
    {
      id: 'axiom18',
      image: axiom18
    },
    {
      id: 'axiom19',
      image: axiom19
    },
    {
      id: 'axiom20',
      image: axiom20
    },
    {
      id: 'axiom21',
      image: axiom21
    },
    {
      id: 'axiom22',
      image: axiom22
    },
    {
      id: 'axiom23',
      image: axiom23
    },
    {
      id: 'axiom24',
      image: axiom24
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
      <div className="title">
        <div className="vertical-text2">Project Gallery</div>
        <div className="disclaimer">DISCLAIMER: THE WORKS PRESENTED ARE FOR DEMONSTRATION PURPOSES ONLY AND DO NOT REFLECT PERSONAL VIEWS OR OPINION. <br />I HAVE EITHER CREATED OR EDITED THE ARTWORK BELOW.</div>
      </div>
      <div className="masonry-gallery" ref={galleryRef}>
        {distributeItems().map((column, columnIndex) => (
          <div key={columnIndex} className="masonry-column">
            {column.map((project) => (
              <div key={project.id} className="masonry-item">
                {renderItem(project)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleGallery;