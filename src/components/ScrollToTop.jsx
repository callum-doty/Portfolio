// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Assuming your header has an id of 'header'
    const headerElement = document.getElementById('header');
    
    if (headerElement) {
      // Scroll to the header element
      headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return null;
};

export default ScrollToTop;

