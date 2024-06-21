// CartIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Carticon.css';

const Carticon = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="cart-icon-container" onClick={handleCartClick}>
      <FontAwesomeIcon icon={faShoppingCart} size="1.5x" />
    </div>
  );
};

export default Carticon;
