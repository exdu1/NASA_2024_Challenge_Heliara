import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWeatherDisplay, setShowWeatherDisplay] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleWeatherDisplay = () => {
    setShowWeatherDisplay(!showWeatherDisplay);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src/Images/logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className={`links-container ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" activeClassName="active-link" exact>Home</NavLink>
          <NavLink to="Weather" className="nav-link" activeClassName="active-link" >Weather</NavLink>
          <NavLink to="/about-us" className="nav-link" activeClassName="active-link">About Us</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;