// src/components/Collection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';

const collectionsData = [
    {
        category: "Men's Footwear",
        products: [
            { name: 'Running Shoes', count: 10, path: './shoes.png'},
            { name: 'Formal Shoes', count: 5, path: '/products/formal-shoes' },
            { name: 'Casual Shoes', count: 8, path: '/products/casual-shoes' },
        ],
    },
    {
        category: "Women's Footwear",
        products: [
            { name: 'Heels', count: 12, path: '/products/heels' },
            { name: 'Flats', count: 7, path: '/products/flats' },
            { name: 'Boots', count: 9, path: '/products/boots' },
        ],
    },
    {
        category: "Kids' Footwear",
        products: [
            { name: 'Sneakers', count: 15, path: '/products/sneakers' },
            { name: 'Sandals', count: 6, path: '/products/sandals' },
            { name: 'Boots', count: 4, path: '/products/kids-boots' },
        ],
    },
    {
        category: 'Sports Footwear',
        products: [
            { name: 'Football Shoes', count: 5, path: '/products/football-shoes' },
            { name: 'Basketball Shoes', count: 7, path: '/products/basketball-shoes' },
            { name: 'Tennis Shoes', count: 6, path: '/products/tennis-shoes' },
        ],
    },
];

const Collections = () => {
    return (
        <div className="collection-container">
            <h1 className="collection-title">Our Collections</h1>
            {collectionsData.map((category, index) => (
                <div className="category-container" key={index}>
                    <h2 className="category-title">{category.category}</h2>
                    <ul className="product-list">
                        {category.products.map((product, idx) => (
                            <li key={idx}>
                                <Link to={product.path} className="product-item">
                                    {product.name} - <span>{product.count} products</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Collections;
