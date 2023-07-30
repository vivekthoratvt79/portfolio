import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Career from './components/Career.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
