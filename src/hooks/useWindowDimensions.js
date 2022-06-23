import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = getWindowDimensions().width < 575;
  const isTablet = getWindowDimensions().width < 990;
  const isDesktop = getWindowDimensions().width < 1200;

  return { width: windowDimensions.width, height: windowDimensions.height, isMobile, isTablet, isDesktop };
};
