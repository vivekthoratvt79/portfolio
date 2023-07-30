import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <a href='#' className='logo'>
          <i class='bx bxs-user'></i> MY PORTFOLIO
        </a>
        <div className='bx bx-menu' id='menu-icon'></div>
        <nav className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/career'>Career</Link>
          <Link to='/education'>Education</Link>
          <Link to='/skills'>Skills</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
