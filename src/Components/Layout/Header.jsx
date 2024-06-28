// // src/Header.js
// import React from 'react';
// import './Header.css';
// import Carticon from '../Pages/Carticon';
// import LoginIcon from '../Pages/LoginIcon';



// const Header = () => {
//   return (
//     <>
//       <header className="header">
//         <div className="header__logo">
//           <img src='./logo.png' style={{height: "80px"}}/>
//           <a href="/">SOLE SNEAKERS</a>
//         </div>
//         <nav className="header__nav">
//           <ul>
//             <li><a href="/home">HOME</a></li>
//             <li><a href="/collections">COLLECTIONS</a></li>
//             <li><a href="/aboutus">ABOUT US</a></li>
//             <li><a href="/contactus">CONTACT US</a></li>

//           </ul>
//         </nav>
//         <div className="header__search">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </div>
//         <Carticon/>
//         <LoginIcon/>
//       </header>
      
//     </>
//   );
// }

// export default Header;
// src/Header.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import Carticon from '../Pages/Carticon';
// import LoginIcon from '../Pages/LoginIcon';

// const Header = () => {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   // Function to handle adding to wishlist
//   const addToWishlist = () => {
//     // Perform logic to add item to wishlist
//     setWishlistCount(prevCount => prevCount + 1); // Increment wishlist count
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="header__logo">
//           <img src='./logo.png' style={{height: "80px"}} alt="Logo" />
//           <a href="/">SOLE SNEAKERS</a>
//         </div>
//         <nav className="header__nav">
//           <ul>
//             <li><Link to="/home">HOME</Link></li>
//             <li><Link to="/collections">COLLECTIONS</Link></li>
//             <li><Link to="/aboutus">ABOUT US</Link></li>
//             <li><Link to="/contactus">CONTACT US</Link></li>
//           </ul>
//         </nav>
//         <div className="header__search">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </div>
//         <div className="header__icons">
//           <Link to="/wishlist" className="header__wishlist">
//             <i className="fas fa-heart"></i>
//             {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
//           </Link>
//           <Carticon/>
//           <LoginIcon/>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

// src/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Carticon from '../Pages/Carticon';
import LoginIcon from '../Pages/LoginIcon';
import { WishlistContext } from '../Pages/WishlistContext';
//import { WishlistContext } from './WishlistContext'; // Import WishlistContext

const Header = () => {
  const { wishlist } = useContext(WishlistContext); // Use WishlistContext

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src='./logo.png' style={{height: "80px"}} alt="Logo" />
          <a href="/">SOLE SNEAKERS</a>
        </div>
        <nav className="header__nav">
          <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/collections">COLLECTIONS</Link></li>
            <li><Link to="/aboutus">ABOUT US</Link></li>
            <li><Link to="/contactus">CONTACT US</Link></li>
          </ul>
        </nav>
        <div className="header__search">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <div className="header__icons">
          <Link to="/wishlist" className="header__wishlist">
            <i className="fas fa-heart"></i>
            {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
          </Link>
          <Carticon/>
          <LoginIcon/>
        </div>
      </header>
    </>
  );
}

export default Header;
