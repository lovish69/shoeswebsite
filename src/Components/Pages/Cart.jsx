// // CartPage.jsx
// import React, { useState } from 'react';
// import './Cart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     // Example cart items, you can replace with actual cart state
//     { id: 1, name: 'Product 1', image: './men_sneakers_1.jpg', price: 50, quantity: 1 },
//     { id: 2, name: 'Product 2', image: './women_sandals_2.jpg', price: 70, quantity: 2 },
//     { id: 3, name: 'Product 3', image: './women_sandals_2.jpg', price: 70, quantity: 2 },
//     { id: 4, name: 'Product 4', image: './women_sandals_2.jpg', price: 70, quantity: 2 },
//   ]);

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
//   };

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Shopping Cart</h1>
//       {cartItems.length > 0 ? (
//         <div className="cart-items">
//           {cartItems.map(item => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h2>{item.name}</h2>
//                 <p>${item.price}</p>
//                 <div className="quantity-control">
//                   <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>
//                 <button onClick={() => removeItem(item.id)} className="remove-button">Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h3>Total: ${getTotal()}</h3>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
// Cart.jsx
// src/Components/Pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


