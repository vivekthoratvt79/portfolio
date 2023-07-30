import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h1>
          Hi, I'm <span>Vivek Thorat</span>
        </h1>
        <div className='text-animate'>
          <h3>Frontend Developer</h3>
        </div>
        <p>
          React front end developer with 2 years 9 months of experience building
          websites and web applications using ReactJS and modern JavaScript
          tools/frameworks. Worked on Banking domain and Ed-tech domain. Key
          achievement: collaborated with 25+ backend developers to execute new
          features and create API endpoint’s request/response payloads.
        </p>
        <div className='btn-box'>
          <a href='#' className='btn'>
            Download CV
          </a>
        </div>
      </div>

      <div className='home-sci'>
        <a href='#'>
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href='#'>
          <i className='bx bxl-github'></i>
        </a>
        <a href='#'>
          <i class='bx bxl-instagram-alt'></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
