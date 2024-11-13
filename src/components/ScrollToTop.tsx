import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop.tsx
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on each route change
  }, [pathname]);

  return null;
};

export default ScrollToTop;
