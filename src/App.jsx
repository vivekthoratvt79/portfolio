import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Career from './components/Career.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/career' element={<Career />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
