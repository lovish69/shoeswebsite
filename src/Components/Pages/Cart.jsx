// // src/Components/Pages/Cart.jsx
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul className="cart-items">
//             {cartItems.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h2>{item.name}</h2>
//                   <p>&#8377;{item.price}</p>
//                   <button onClick={() => removeFromCart(item)} className="remove-button">Remove</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="cart-summary">
//             <h3>Total: &#8377;{getTotal()}</h3>
//             <button className="checkout-button">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React, { useContext, useState } from 'react';
// import { CartContext } from './CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);
//   const [showNotification, setShowNotification] = useState(false);

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   const handleProceedToCheckout = () => {
//     // Logic for proceeding to checkout
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
//     // You can add more logic here, such as sending order details to backend
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul className="cart-items">
//             {cartItems.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h2>{item.name}</h2>
//                   <p>&#8377;{item.price}</p>
//                   <button onClick={() => removeFromCart(item)} className="remove-button">Remove</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="cart-summary">
//             <h3>Total: &#8377;{getTotal()}</h3>
//             <button onClick={handleProceedToCheckout} className="checkout-button">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//       {showNotification && <div className="notification">Order placed successfully!</div>}
//     </div>
//   );
// };

// export default Cart;

// src/Components/Pages/Cart.js
// src/Components/Pages/Cart.js
// src/Components/Pages/Cart.js
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useContext(CartContext);

//   return (
//     <div className="cart">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="item-details">
//                   <h2>{item.name}</h2>
//                   <p>Price: &#8377;{item.price}</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                   </div>
//                   <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-total">
//             <h2>Total Amount: &#8377;{getTotalAmount()}</h2>
//           </div>
//           <div className="checkout">
//             <button className="checkout-button">Proceed to Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    // Placeholder logic for handling checkout (to be implemented)
    setOrderPlaced(true); // Example: Marking order as placed
    setTimeout(() => {
      setOrderPlaced(false); // Reset after 3 seconds
    }, 3000);
  };

  return (
    <div className="cart">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="item-details">
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">&#8377;{item.price}</p>
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2 className="total-amount">Total Amount: &#8377;{getTotalAmount()}</h2>
          </div>
          <div className="checkout">
            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
          {orderPlaced && (
            <div className="order-success">
              <p className="order-success-message">Order successfully placed!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;

