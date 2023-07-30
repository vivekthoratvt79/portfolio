import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <Link to='/' className='logo'>
          <i class='bx bxs-user'></i> MY PORTFOLIO
        </Link>
        <div className='bx bx-menu' id='menu-icon'></div>
        <nav className='navbar'>
          <Link to='/' className='active'>
            Home
          </Link>
          <Link to='/career'>Career</Link>
          <Link to='/education'>Education</Link>
          <Link to='/skills'>Skills</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
