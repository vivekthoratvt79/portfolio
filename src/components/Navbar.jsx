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
          <a href='#home' className='active'>
            Home
          </a>
          <a href='#about'>About</a>
          <Link to='/career'>Career</Link>
          <a href='#education'>Education</a>
          <a href='#skills'>Skills</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
