// src/components/SVGIcon.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Import both versions of the SVG
import GithubLight from '../assets/svgs/github-light.svg';
import GithubDark from '../assets/svgs/github-dark.svg';


const SVGIcon = ({ name, ...props }) => {
  const { theme } = useTheme();

  console.log("Current theme:", theme); 

  const icons = {
    github: theme === 'dark' ? <img src={GithubDark} {...props} alt="GitHub" /> : <img src={GithubLight} {...props} alt="GitHub" />,
    // Define other icons in a similar way
  };

  return icons[name] || <span>Icon not found</span>;
};

export default SVGIcon;
