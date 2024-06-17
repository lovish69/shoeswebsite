// src/App.js
import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home';
import Collections from './Components/Pages/Collections';
import ContactUs from './Components/Pages/ContactUs';
import AboutUs from './Components/Pages/AboutUs';
import Cart from './Components/Pages/Cart';
import { Navbar } from 'react-bootstrap';
import Footer from './Components/Pages/Footer';
// import Footer from './Components/Pages/Footer';


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
          <Route path="/" element={<Footer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
