import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src/Images/logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className={`links-container ${isOpen ? 'open' : ''}`}>
        <NavLink className="nav-link" to="/" exact={true.toString()}>Home</NavLink>
        <NavLink className="nav-link" to="/Weather" exact={true.toString()}>Weather</NavLink>
        <NavLink className="nav-link" to="/about-us" exact={true.toString()}> About Us</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
