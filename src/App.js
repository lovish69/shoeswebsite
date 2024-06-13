// src/App.js
import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home';
import Collections from './Components/Pages/Collections';
import ContactUs from './Components/Pages/ContactUs';
import AboutUs from './Components/Pages/AboutUs';
//import Images from './public/shoes.png';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/collections" element={<Collections/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
