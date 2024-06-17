// src/components/Cart.jsx
import React, { useState } from 'react';
//import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'Running Shoes',
            price: 59.99,
            quantity: 2,
            image: 'https://via.placeholder.com/80',
        },
        {
            id: 2,
            title: 'Formal Shoes',
            price: 89.99,
            quantity: 1,
            image: 'https://via.placeholder.com/80',
        },
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const removeItem = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-container">
            <h1 className="cart-header">Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-details">
                            <div className="cart-item-title">{item.title}</div>
                            <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)} 
                            />
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart-total">Total: ${total}</div>
            <div className="cart-checkout">
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
