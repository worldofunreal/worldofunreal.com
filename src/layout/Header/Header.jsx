import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useTheme } from '../../context/ThemeContext';
import './Header.scss';

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header>
      <div className="header-container">
        {/* SVG Home Button */}
        <Link to="/">
          <img src="src/assets/svgs/logo.svg" className="home-icon"/>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </header>
  );
}

export default Header;
