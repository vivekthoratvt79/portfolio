import React from 'react';
import './Home.css';
import resume from '../Images/resume.pdf';
import image from '../Images/code.jpeg';

const Home = () => {
  const handleClick = () => {
    window.open(resume);
  };
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
          <a target='_blank' className='btn' onClick={handleClick}>
            Download CV
          </a>
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
      </div>
      <div className='img-container'>
        <img src={image} alt='image' width={525} />
      </div>
    </section>
  );
};

export default Home;
