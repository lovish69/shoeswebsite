
import React, { useContext, useState } from 'react';
import './Collections.css';
import { CartContext } from './CartContext';


const Collections = () => {
  const categories = [
    {
      name: 'Men',
            collections: [
              {
                name: 'Sneakers',
                description: 'Comfortable and stylish sneakers for everyday wear.',
                products: [
                  { name: 'Product 1', image: './men_sneakers_1.jpg' },
                  { name: 'Product 2', image: './men_sneakers_2.jpg' },
                  { name: 'Product 3', image: './men_sneakers_3.jpg' },
                  { name: 'Product 4', image: './men_sneakers_4.jpg' },
                  { name: 'Product 5', image: './men_sneakers_5.jpg' },
                  { name: 'Product 6', image: './men_sneakers_6.jpg' },
                  { name: 'Product 7', image: './men_sneakers_7.jpg' },
                  { name: 'Product 8', image: './men_sneakers_8.jpg' },
                  { name: 'Product 9', image: './men_sneakers_9.jpg' },
                  { name: 'Product 10', image: './men_sneakers_10.jpg' },
                ],
              },
              {
                name: 'Formal Shoes',
                description: 'Elegant and sophisticated formal shoes for all occasions.',
                products: [
                  { name: 'Product 1', image: './men_formal_1.jpg' },
                  { name: 'Product 2', image: './men_formal_2.jpg' },
                  { name: 'Product 3', image: './men_formal_3.jpg' },
                  { name: 'Product 4', image: './men_formal_4.jpg' },
                  { name: 'Product 5', image: './men_formal_5.jpg' },
                  { name: 'Product 6', image: './men_formal_6.jpg' },
                  { name: 'Product 7', image: './men_formal_7.jpg' },
                  { name: 'Product 8', image: './men_formal_8.jpg' },
                  { name: 'Product 9', image: './men_formal_9.jpg' },
                  { name: 'Product 10', image: './men_formal_10.jpg' },
                ],
              },
              {
                name: 'Boots',
                description: 'Durable and stylish boots for all seasons.',
                products: [
                  { name: 'Product 1', image: './men_boots_1.jpg' },
                  { name: 'Product 2', image: './men_boots_2.jpg' },
                  { name: 'Product 3', image: './men_boots_3.jpg' },
                  { name: 'Product 4', image: './men_boots_4.jpg' },
                  { name: 'Product 5', image: './men_boots_5.jpg' },
                  { name: 'Product 6', image: './men_boots_6.jpg' },
                  { name: 'Product 7', image: './men_boots_7.jpg' },
                  { name: 'Product 8', image: './men_boots_8.jpg' },
                  { name: 'Product 9', image: './men_boots_9.jpg' },
                  { name: 'Product 10', image: './men_boots_10.jpg' },
                ],
              },
            ],
          },
          {
            name: 'Women',
            collections: [
              {
                name: 'Sandals',
                description: 'Cool and comfortable sandals for the summer.',
                products: [
                  { name: 'Product 1', image: './women_sandals_1.jpg' },
                  { name: 'Product 2', image: './women_sandals_2.jpg' },
                  { name: 'Product 3', image: './women_sandals_3.jpg' },
                  { name: 'Product 4', image: './women_sandals_4.jpg' },
                  { name: 'Product 5', image: './women_sandals_5.jpg' },
                  { name: 'Product 6', image: './women_sandals_6.jpg' },
                  { name: 'Product 7', image: './women_sandals_7.jpg' },
                  { name: 'Product 8', image: './women_sandals_8.jpg' },
                  { name: 'Product 9', image: './women_sandals_9.jpg' },
                  { name: 'Product 10', image: './women_sandals_10.jpg' },
                ],
              },
              {
                name: 'Heels',
                description: 'Stylish and elegant heels for special occasions.',
                products: [
                  { name: 'Product 1', image: './women_heels_1.jpg' },
                  { name: 'Product 2', image: './women_heels_2.jpg' },
                  { name: 'Product 3', image: './women_heels_3.jpg' },
                  { name: 'Product 4', image: './women_heels_4.jpg' },
                  { name: 'Product 5', image: './women_heels_5.jpg' },
                  { name: 'Product 6', image: './women_heels_6.jpg' },
                  { name: 'Product 7', image: './women_heels_7.jpg' },
                  { name: 'Product 8', image: './women_heels_8.jpg' },
                  { name: 'Product 9', image: './women_heels_9.jpg' },
                  { name: 'Product 10', image: './women_heels_10.jpg' },
                ],
              },
              {
                name: 'Flats',
                description: 'Comfortable and fashionable flats for daily wear.',
                products: [
                  { name: 'Product 1', image: './women_flats_1.jpg' },
                  { name: 'Product 2', image: './women_flats_2.jpg' },
                  { name: 'Product 3', image: './women_flats_3.jpg' },
                  { name: 'Product 4', image: './women_flats_4.jpg' },
                  { name: 'Product 5', image: './women_flats_5.jpg' },
                  { name: 'Product 6', image: './women_flats_6.jpg' },
                  { name: 'Product 7', image: './women_flats_7.jpg' },
                  { name: 'Product 8', image: './women_flats_8.jpg' },
                  { name: 'Product 9', image: './women_flats_9.jpg' },
                  { name: 'Product 10', image: './women_flats_10.jpg' },
                ],
              },
            ],
          },
          {
            name: 'Kids',
            collections: [
              {
                name: 'Sneakers',
                description: 'Fun and colorful sneakers for active kids.',
                products: [
                  { name: 'Product 1', image: './kids_sneakers_1.jpg' },
                  { name: 'Product 2', image: './kids_sneakers_2.jpg' },
                  { name: 'Product 3', image: './kids_sneakers_3.jpg' },
                  { name: 'Product 4', image: './kids_sneakers_4.jpg' },
                  { name: 'Product 5', image: './kids_sneakers_5.jpg' },
                  { name: 'Product 6', image: './kids_sneakers_6.jpg' },
                  { name: 'Product 7', image: './kids_sneakers_7.jpg' },
                  { name: 'Product 8', image: './kids_sneakers_8.jpg' },
                  { name: 'Product 9', image: './kids_sneakers_9.jpg' },
                  { name: 'Product 10', image: './kids_sneakers_10.jpg' },
                ],
              },
              {
                name: 'Sandals',
                description: 'Comfortable sandals for playful days.',
                products: [
                  { name: 'Product 1', image: './kids_sandals_1.jpg' },
                  { name: 'Product 2', image: './kids_sandals_2.jpg' },
                  { name: 'Product 3', image: './kids_sandals_3.jpg' },
                  { name: 'Product 4', image: './kids_sandals_4.jpg' },
                  { name: 'Product 5', image: './kids_sandals_5.jpg' },
                  { name: 'Product 6', image: './kids_sandals_6.jpg' },
                  { name: 'Product 7', image: './kids_sandals_7.jpg' },
                  { name: 'Product 8', image: './kids_sandals_8.jpg' },
                  { name: 'Product 9', image: './kids_sandals_9.jpg' },
                  { name: 'Product 10', image: './kids_sandals_10.jpg' },
                ],
              },
              {
                name: 'Shoes',
                description: 'Sturdy shoes for adventurous kids.',
                products: [
                  { name: 'Product 1', image: './kids_boots_1.jpg' },
                  { name: 'Product 2', image: './kids_boots_2.jpg' },
                  { name: 'Product 3', image: './kids_boots_3.jpg' },
                  { name: 'Product 4', image: './kids_boots_4.jpg' },
                  { name: 'Product 5', image: './kids_boots_5.jpg' },
                  { name: 'Product 6', image: './kids_boots_6.jpg' },
                  { name: 'Product 7', image: './kids_boots_7.jpg' },
                  { name: 'Product 8', image: './kids_boots_8.jpg' },
                  { name: 'Product 9', image: './kids_boots_9.jpg' },
                  { name: 'Product 10', image: './kids_boots_10.jpg' },
                ],
              },
            ],
          },
        ];

     
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useContext(CartContext);

  const handleBuyNow = (product) => {
    addToCart(product);
  };

  return (
    <div className="collections-page">
      <h1>Footwear Collections</h1>
      <div className="dropdown">
        <button className="dropdown-button">Select Category</button>
        <div className="dropdown-content">
          {categories.map((category, index) => (
            <a key={index} onClick={() => setSelectedCategory(category.name)}>
              {category.name}
            </a>
          ))}
        </div>
      </div>
      {selectedCategory && (
        <div className="category-section">
          <h2>{selectedCategory}</h2>
          {categories
            .find((category) => category.name === selectedCategory)
            .collections.map((collection, idx) => (
              <div key={idx} className="collection">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <div className="product-list">
                  {collection.products.map((product, id) => (
                    <div key={id} className="product-card">
                      <img src={product.image} alt={product.name} className="product-image" />
                      <p>{product.name}</p>
                      <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
