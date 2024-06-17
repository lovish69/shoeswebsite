// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Products</h3>
                    <ul className="footer-links">
                        <li><Link to="/products/running-shoes">Running Shoes</Link></li>
                        <li><Link to="/products/formal-shoes">Formal Shoes</Link></li>
                        <li><Link to="/products/casual-shoes">Casual Shoes</Link></li>
                        <li><Link to="/products/heels">Heels</Link></li>
                        <li><Link to="/products/flats">Flats</Link></li>
                        <li><Link to="/products/boots">Boots</Link></li>
                        <li><Link to="/products/sneakers">Sneakers</Link></li>
                        <li><Link to="/products/sandals">Sandals</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul className="footer-links">
                        <li><Link to="/collection/mens-footwear">Men's Footwear</Link></li>
                        <li><Link to="/collection/womens-footwear">Women's Footwear</Link></li>
                        <li><Link to="/collection/kids-footwear">Kids' Footwear</Link></li>
                        <li><Link to="/collection/sports-footwear">Sports Footwear</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Collections</h3>
                    <ul className="footer-links">
                        <li><Link to="/collection/new-arrivals">New Arrivals</Link></li>
                        <li><Link to="/collection/best-sellers">Best Sellers</Link></li>
                        <li><Link to="/collection/seasonal-collection">Seasonal Collection</Link></li>
                        <li><Link to="/collection/discounted">Discounted Items</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <div className="footer-contact-info">
                        <p><strong>Email:</strong> support@footwearstore.com</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Shoe Lane, Footwear City, FC 12345</p>
                    </div>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Footwear Store. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
