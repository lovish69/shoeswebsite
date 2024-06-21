// src/Header.js
import React from 'react';
import './Header.css';
import Carticon from '../Pages/Carticon';
import LoginIcon from '../Pages/LoginIcon';



const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src='./logo.png' style={{height: "80px"}}/>
          <a href="/">SOLE SNEAKERS</a>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/collections">COLLECTIONS</a></li>
            <li><a href="/aboutus">ABOUT US</a></li>
            <li><a href="/contactus">CONTACT US</a></li>

          </ul>
        </nav>
        <div className="header__search">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <Carticon/>
        <LoginIcon/>
      </header>
      
    </>
  );
}

export default Header;
