
// import React, { useContext, useState } from 'react';
// import './Collections.css';
// import { CartContext } from './CartContext';


// const Collections = () => {
//   const categories = [
//     {
//       name: 'Men',
//             collections: [
//               {
//                 name: 'Sneakers',
//                 description: 'Comfortable and stylish sneakers for everyday wear.',
//                 products: [
//                   { name: 'Product 1', image: './men_sneakers_1.jpg' },
//                   { name: 'Product 2', image: './men_sneakers_2.jpg' },
//                   { name: 'Product 3', image: './men_sneakers_3.jpg' },
//                   { name: 'Product 4', image: './men_sneakers_4.jpg' },
//                   { name: 'Product 5', image: './men_sneakers_5.jpg' },
//                   { name: 'Product 6', image: './men_sneakers_6.jpg' },
//                   { name: 'Product 7', image: './men_sneakers_7.jpg' },
//                   { name: 'Product 8', image: './men_sneakers_8.jpg' },
//                   { name: 'Product 9', image: './men_sneakers_9.jpg' },
//                   { name: 'Product 10', image: './men_sneakers_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Formal Shoes',
//                 description: 'Elegant and sophisticated formal shoes for all occasions.',
//                 products: [
//                   { name: 'Product 1', image: './men_formal_1.jpg' },
//                   { name: 'Product 2', image: './men_formal_2.jpg' },
//                   { name: 'Product 3', image: './men_formal_3.jpg' },
//                   { name: 'Product 4', image: './men_formal_4.jpg' },
//                   { name: 'Product 5', image: './men_formal_5.jpg' },
//                   { name: 'Product 6', image: './men_formal_6.jpg' },
//                   { name: 'Product 7', image: './men_formal_7.jpg' },
//                   { name: 'Product 8', image: './men_formal_8.jpg' },
//                   { name: 'Product 9', image: './men_formal_9.jpg' },
//                   { name: 'Product 10', image: './men_formal_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Boots',
//                 description: 'Durable and stylish boots for all seasons.',
//                 products: [
//                   { name: 'Product 1', image: './men_boots_1.jpg' },
//                   { name: 'Product 2', image: './men_boots_2.jpg' },
//                   { name: 'Product 3', image: './men_boots_3.jpg' },
//                   { name: 'Product 4', image: './men_boots_4.jpg' },
//                   { name: 'Product 5', image: './men_boots_5.jpg' },
//                   { name: 'Product 6', image: './men_boots_6.jpg' },
//                   { name: 'Product 7', image: './men_boots_7.jpg' },
//                   { name: 'Product 8', image: './men_boots_8.jpg' },
//                   { name: 'Product 9', image: './men_boots_9.jpg' },
//                   { name: 'Product 10', image: './men_boots_10.jpg' },
//                 ],
//               },
//             ],
//           },
//           {
//             name: 'Women',
//             collections: [
//               {
//                 name: 'Sandals',
//                 description: 'Cool and comfortable sandals for the summer.',
//                 products: [
//                   { name: 'Product 1', image: './women_sandals_1.jpg' },
//                   { name: 'Product 2', image: './women_sandals_2.jpg' },
//                   { name: 'Product 3', image: './women_sandals_3.jpg' },
//                   { name: 'Product 4', image: './women_sandals_4.jpg' },
//                   { name: 'Product 5', image: './women_sandals_5.jpg' },
//                   { name: 'Product 6', image: './women_sandals_6.jpg' },
//                   { name: 'Product 7', image: './women_sandals_7.jpg' },
//                   { name: 'Product 8', image: './women_sandals_8.jpg' },
//                   { name: 'Product 9', image: './women_sandals_9.jpg' },
//                   { name: 'Product 10', image: './women_sandals_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Heels',
//                 description: 'Stylish and elegant heels for special occasions.',
//                 products: [
//                   { name: 'Product 1', image: './women_heels_1.jpg' },
//                   { name: 'Product 2', image: './women_heels_2.jpg' },
//                   { name: 'Product 3', image: './women_heels_3.jpg' },
//                   { name: 'Product 4', image: './women_heels_4.jpg' },
//                   { name: 'Product 5', image: './women_heels_5.jpg' },
//                   { name: 'Product 6', image: './women_heels_6.jpg' },
//                   { name: 'Product 7', image: './women_heels_7.jpg' },
//                   { name: 'Product 8', image: './women_heels_8.jpg' },
//                   { name: 'Product 9', image: './women_heels_9.jpg' },
//                   { name: 'Product 10', image: './women_heels_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Flats',
//                 description: 'Comfortable and fashionable flats for daily wear.',
//                 products: [
//                   { name: 'Product 1', image: './women_flats_1.jpg' },
//                   { name: 'Product 2', image: './women_flats_2.jpg' },
//                   { name: 'Product 3', image: './women_flats_3.jpg' },
//                   { name: 'Product 4', image: './women_flats_4.jpg' },
//                   { name: 'Product 5', image: './women_flats_5.jpg' },
//                   { name: 'Product 6', image: './women_flats_6.jpg' },
//                   { name: 'Product 7', image: './women_flats_7.jpg' },
//                   { name: 'Product 8', image: './women_flats_8.jpg' },
//                   { name: 'Product 9', image: './women_flats_9.jpg' },
//                   { name: 'Product 10', image: './women_flats_10.jpg' },
//                 ],
//               },
//             ],
//           },
//           {
//             name: 'Kids',
//             collections: [
//               {
//                 name: 'Sneakers',
//                 description: 'Fun and colorful sneakers for active kids.',
//                 products: [
//                   { name: 'Product 1', image: './kids_sneakers_1.jpg' },
//                   { name: 'Product 2', image: './kids_sneakers_2.jpg' },
//                   { name: 'Product 3', image: './kids_sneakers_3.jpg' },
//                   { name: 'Product 4', image: './kids_sneakers_4.jpg' },
//                   { name: 'Product 5', image: './kids_sneakers_5.jpg' },
//                   { name: 'Product 6', image: './kids_sneakers_6.jpg' },
//                   { name: 'Product 7', image: './kids_sneakers_7.jpg' },
//                   { name: 'Product 8', image: './kids_sneakers_8.jpg' },
//                   { name: 'Product 9', image: './kids_sneakers_9.jpg' },
//                   { name: 'Product 10', image: './kids_sneakers_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Sandals',
//                 description: 'Comfortable sandals for playful days.',
//                 products: [
//                   { name: 'Product 1', image: './kids_sandals_1.jpg' },
//                   { name: 'Product 2', image: './kids_sandals_2.jpg' },
//                   { name: 'Product 3', image: './kids_sandals_3.jpg' },
//                   { name: 'Product 4', image: './kids_sandals_4.jpg' },
//                   { name: 'Product 5', image: './kids_sandals_5.jpg' },
//                   { name: 'Product 6', image: './kids_sandals_6.jpg' },
//                   { name: 'Product 7', image: './kids_sandals_7.jpg' },
//                   { name: 'Product 8', image: './kids_sandals_8.jpg' },
//                   { name: 'Product 9', image: './kids_sandals_9.jpg' },
//                   { name: 'Product 10', image: './kids_sandals_10.jpg' },
//                 ],
//               },
//               {
//                 name: 'Shoes',
//                 description: 'Sturdy shoes for adventurous kids.',
//                 products: [
//                   { name: 'Product 1', image: './kids_boots_1.jpg' },
//                   { name: 'Product 2', image: './kids_boots_2.jpg' },
//                   { name: 'Product 3', image: './kids_boots_3.jpg' },
//                   { name: 'Product 4', image: './kids_boots_4.jpg' },
//                   { name: 'Product 5', image: './kids_boots_5.jpg' },
//                   { name: 'Product 6', image: './kids_boots_6.jpg' },
//                   { name: 'Product 7', image: './kids_boots_7.jpg' },
//                   { name: 'Product 8', image: './kids_boots_8.jpg' },
//                   { name: 'Product 9', image: './kids_boots_9.jpg' },
//                   { name: 'Product 10', image: './kids_boots_10.jpg' },
//                 ],
//               },
//             ],
//           },
//         ];

     
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const { addToCart } = useContext(CartContext);

//   const handleBuyNow = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="collections-page">
//       <h1>Footwear Collections</h1>
//       <div className="dropdown">
//         <button className="dropdown-button">Select Category</button>
//         <div className="dropdown-content">
//           {categories.map((category, index) => (
//             <a key={index} onClick={() => setSelectedCategory(category.name)}>
//               {category.name}
//             </a>
//           ))}
//         </div>
//       </div>
//       {selectedCategory && (
//         <div className="category-section">
//           <h2>{selectedCategory}</h2>
//           {categories
//             .find((category) => category.name === selectedCategory)
//             .collections.map((collection, idx) => (
//               <div key={idx} className="collection">
//                 <h3>{collection.name}</h3>
//                 <p>{collection.description}</p>
//                 <div className="product-list">
//                   {collection.products.map((product, id) => (
//                     <div key={id} className="product-card">
//                       <img src={product.image} alt={product.name} className="product-image" />
//                       <p>{product.name}</p>
//                       <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
//                         Buy Now
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;
//src/Components/Pages/Collections.jsx
// import React, { useContext, useState } from 'react';
// import './Collections.css';
// import { CartContext } from './CartContext';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// const Collections = () => {
//   const categories = [
//     {
//       name: 'Men',
//       collections: [
//         {
//           name: 'Sneakers',
//           description: 'Comfortable and stylish sneakers for everyday wear.',
//           products: [
//             { id: 1, name: 'Men Sneakers 1', image: './shoes3.png', price: 100 },
//             { id: 2, name: 'Men Sneakers 2', image: './men_sneakers_2.jpg', price: 120 },
//             { id: 3, name: 'Men Sneakers 3', image: './men_sneakers_3.jpg', price: 110 },
//             { id: 4, name: 'Men Sneakers 4', image: './men_sneakers_4.jpg', price: 130 },
//             { id: 5, name: 'Men Sneakers 5', image: './men_sneakers_5.jpg', price: 140 },
//             { id: 6, name: 'Men Sneakers 6', image: './men_sneakers_6.jpg', price: 150 },
//             { id: 7, name: 'Men Sneakers 7', image: './men_sneakers_7.jpg', price: 160 },
//             { id: 8, name: 'Men Sneakers 8', image: './men_sneakers_8.jpg', price: 170 },
//             { id: 8, name: 'Men Sneakers 8', image: './men_sneakers_8.jpg', price: 170 },
//             { id: 8, name: 'Men Sneakers 8', image: './men_sneakers_8.jpg', price: 170 },
//             { id: 8, name: 'Men Sneakers 8', image: './men_sneakers_8.jpg', price: 170 },
//             { id: 8, name: 'Men Sneakers 8', image: './men_sneakers_8.jpg', price: 170 },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Women',
//       collections: [
//         {
//           name: 'Sandals',
//           description: 'Cool and comfortable sandals for the summer.',
//           products: [
//             { id: 9, name: 'Women Sandals 1', image: './women_sandals_1.jpg', price: 80 },
//             { id: 10, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 90 },
//             { id: 11, name: 'Women Sandals 3', image: './women_sandals_3.jpg', price: 85 },
//             { id: 12, name: 'Women Sandals 4', image: './women_sandals_4.jpg', price: 95 },
//             { id: 13, name: 'Women Sandals 5', image: './women_sandals_5.jpg', price: 100 },
//             { id: 14, name: 'Women Sandals 6', image: './women_sandals_6.jpg', price: 105 },
//             { id: 15, name: 'Women Sandals 7', image: './women_sandals_7.jpg', price: 110 },
//             { id: 16, name: 'Women Sandals 8', image: './women_sandals_8.jpg', price: 115 },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Kids',
//       collections: [
//         {
//           name: 'Sneakers',
//           description: 'Fun and colorful sneakers for active kids.',
//           products: [
//             { id: 17, name: 'Kids Sneakers 1', image: './kids_sneakers_1.jpg', price: 60 },
//             { id: 18, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 19, name: 'Kids Sneakers 3', image: './kids_sneakers_3.jpg', price: 65 },
//             { id: 20, name: 'Kids Sneakers 4', image: './kids_sneakers_4.jpg', price: 75 },
//             { id: 21, name: 'Kids Sneakers 5', image: './kids_sneakers_5.jpg', price: 80 },
//             { id: 22, name: 'Kids Sneakers 6', image: './kids_sneakers_6.jpg', price: 85 },
//             { id: 23, name: 'Kids Sneakers 7', image: './kids_sneakers_7.jpg', price: 90 },
//             { id: 24, name: 'Kids Sneakers 8', image: './kids_sneakers_8.jpg', price: 95 },
//           ],
//         },
//       ],
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const { addToCart } = useContext(CartContext);
//   const [showMessage, setShowMessage] = useState(false);

//   const handleCategoryChange = (e) => {
//     const categoryName = e.target.value;
//     setSelectedCategory(categoryName);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 2000); // Show message for 2 seconds
//   };

//   const handleBuyNow = (product) => {
//     addToCart(product);
//     // Handle the "Buy Now" functionality
//   };

//   return (
//     <div className="collections-page">
//       <h1>Footwear Collections</h1>
//       <div className="dropdown">
//         <select onChange={handleCategoryChange} defaultValue="">
//           <option value="" disabled>
//             Select Category
//           </option>
//           {categories.map((category, index) => (
//             <option key={index} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedCategory && (
//         <div className="category-section">
//           <h2>{selectedCategory}</h2>
//           {categories
//             .find((category) => category.name === selectedCategory)
//             .collections.map((collection, idx) => (
//               <div key={idx} className="collection">
//                 <h3>{collection.name}</h3>
//                 <p>{collection.description}</p>
//                 <div className="product-list">
//                   {collection.products.map((product, id) => (
//                     <div key={id} className="product-card">
//                       <img src={product.image} alt={product.name} className="product-image" />
//                       <p>{product.name}</p>
//                       <p>${product.price}</p>
//                       <button className="cart-button" onClick={() => handleAddToCart(product)}>
//                         <i className="fas fa-cart-plus"></i> Add to Cart
//                       </button>
//                       <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
//                         Buy Now
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//       {showMessage && <div className="cart-message">Added to cart!</div>}
//     </div>
//   );
// };

// export default Collections;

import React, { useContext, useState } from 'react';
import './Collections.css';
import { CartContext } from './CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Collections = () => {
  const categories = [
    {
      name: 'Men',
      collections: [
        {
          name: 'Sneakers',
          description: 'Comfortable and stylish sneakers for everyday wear.',
          products: [
            { id: 1, name: 'Men Sneakers 1', image: '/shoes/15.jpg', price: 100 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/1.jpg', price: 120 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/14.jpg', price: 130 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/3.jpg', price: 150 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/4.jpg', price: 160 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/5.jpg', price: 170 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/6.jpg', price: 170 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/12.jpg', price: 130 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/8.jpg', price: 170 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/9.jpg', price: 120 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/10.jpg', price: 150 },
            { id: 2, name: 'Men Sneakers 2', image: '/shoes/13.jpg', price: 170 },
            // Add more products here
          ],
        },
        {
          name: 'Formal Shoes',
          description: 'Elegant formal shoes for business and events.',
          products: [
            { id: 3, name: 'Men Formal 1', image: './men_formal_1.jpg', price: 150 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 110 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 140 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 130 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 180 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 140 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 160 },

            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 180 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
            { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 130 },
            // Add more products here
          ],
        },
        {
          name: 'Boots',
          description: 'Rugged boots for outdoor adventures.',
          products: [
            { id: 5, name: 'Men Boots 1', image: './men_boots_1.jpg', price: 170 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 180 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 120 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 180 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 130 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 130 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
            { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
            // Add more products here
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
            { id: 7, name: 'Women Sandals 1', image: './women_sandals_1.jpg', price: 80 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 90 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 70 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 90 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 40 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 10 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 50 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 60 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 80 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 80 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 40 },
            { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 60 },
            
            // Add more products here
          ],
        },
        {
          name: 'Heels',
          description: 'Stylish heels for special occasions.',
          products: [
            { id: 9, name: 'Women Heels 1', image: './women_heels_1.jpg', price: 120 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
            // Add more products here
          ],
        },
        {
          name: 'Flats',
          description: 'Comfortable and casual flats.',
          products: [
            { id: 11, name: 'Women Flats 1', image: './women_flats_1.jpg', price: 60 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
            // Add more products here
          ],
        },
      ],
    },
    {
      name: 'Kids',
      collections: [
        {
          name: 'Sleepers',
          description: 'Fun and colorful sneakers for active kids.',
          products: [
            { id: 13, name: 'Kids Sneakers 1', image: './kids_sneakers_1.jpg', price: 60 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
            { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },

            // Add more products here
          ],
        },
        {
          name: 'Shoes',
          description: 'Durable boots for playful kids.',
          products: [
            { id: 15, name: 'Kids Boots 1', image: './kids_boots_1.jpg', price: 80 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
            { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
          

            // Add more products here
          ],
        },
        {
          name: 'Sandals',
          description: 'Light and breezy sandals for summer.',
          products: [
            { id: 17, name: 'Kids Sandals 1', image: './kids_sandals_1.jpg', price: 40 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
            { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },

            // Add more products here
          ],
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Show message for 2 seconds
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    // Handle the "Buy Now" functionality
  };

  return (
    <div className="collections-page">
      <h1>Footwear Collections</h1>
      <div className="dropdown">
        <select onChange={handleCategoryChange} defaultValue="">
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
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
                      <p>${product.price}</p>
                      <button className="cart-button" onClick={() => handleAddToCart(product)}>
                        <i className="fas fa-cart-plus"></i> Add to Cart
                      </button>
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
      {showMessage && <div className="cart-message">Added to cart!</div>}
    </div>
  );
};

export default Collections;


