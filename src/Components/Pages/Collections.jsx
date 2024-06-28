


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
//             { id: 1, name: 'Men Sneakers 1', image: '/shoes/15.jpg', price: 100 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/1.jpg', price: 120 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/14.jpg', price: 130 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/3.jpg', price: 150 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/4.jpg', price: 160 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/5.jpg', price: 170 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/6.jpg', price: 170 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/12.jpg', price: 130 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/8.jpg', price: 170 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/9.jpg', price: 120 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/10.jpg', price: 150 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/13.jpg', price: 170 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Formal Shoes',
//           description: 'Elegant formal shoes for business and events.',
//           products: [
//             { id: 3, name: 'Men Formal 1', image: './men_formal_1.jpg', price: 150 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 110 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 140 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 130 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 180 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 140 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 160 },

//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 180 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 150 },
//             { id: 4, name: 'Men Formal 2', image: './men_formal_2.jpg', price: 130 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Boots',
//           description: 'Rugged boots for outdoor adventures.',
//           products: [
//             { id: 5, name: 'Men Boots 1', image: './men_boots_1.jpg', price: 170 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 180 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 120 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 180 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 130 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 130 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 170 },
//             { id: 6, name: 'Men Boots 2', image: './men_boots_2.jpg', price: 140 },
//             // Add more products here
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
//             { id: 7, name: 'Women Sandals 1', image: './women_sandals_1.jpg', price: 80 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 90 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 70 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 90 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 40 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 10 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 50 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 60 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 80 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 80 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 40 },
//             { id: 8, name: 'Women Sandals 2', image: './women_sandals_2.jpg', price: 60 },
            
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Heels',
//           description: 'Stylish heels for special occasions.',
//           products: [
//             { id: 9, name: 'Women Heels 1', image: './women_heels_1.jpg', price: 120 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             { id: 10, name: 'Women Heels 2', image: './women_heels_2.jpg', price: 130 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Flats',
//           description: 'Comfortable and casual flats.',
//           products: [
//             { id: 11, name: 'Women Flats 1', image: './women_flats_1.jpg', price: 60 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             { id: 12, name: 'Women Flats 2', image: './women_flats_2.jpg', price: 70 },
//             // Add more products here
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Kids',
//       collections: [
//         {
//           name: 'Sleepers',
//           description: 'Fun and colorful sneakers for active kids.',
//           products: [
//             { id: 13, name: 'Kids Sneakers 1', image: './kids_sneakers_1.jpg', price: 60 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },
//             { id: 14, name: 'Kids Sneakers 2', image: './kids_sneakers_2.jpg', price: 70 },

//             // Add more products here
//           ],
//         },
//         {
//           name: 'Shoes',
//           description: 'Durable boots for playful kids.',
//           products: [
//             { id: 15, name: 'Kids Boots 1', image: './kids_boots_1.jpg', price: 80 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
//             { id: 16, name: 'Kids Boots 2', image: './kids_boots_2.jpg', price: 90 },
          

//             // Add more products here
//           ],
//         },
//         {
//           name: 'Sandals',
//           description: 'Light and breezy sandals for summer.',
//           products: [
//             { id: 17, name: 'Kids Sandals 1', image: './kids_sandals_1.jpg', price: 40 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },
//             { id: 18, name: 'Kids Sandals 2', image: './kids_sandals_2.jpg', price: 50 },

//             // Add more products here
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
//                       <p>&#8377;{product.price}</p>
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


// import React, { useContext, useState } from 'react';
// import './Collections.css';
// import { CartContext } from './CartContext';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// const ProductDetailModal = ({ product, onClose }) => {
//   if (!product) return null;

//   return (
//     <div className="modal" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <img src={product.image} alt={product.name} className="modal-image" />
//         <h2>{product.name}</h2>
//         <p>Price: &#8377;{product.price}</p>
//         <p>Description: Detailed description of {product.name}</p>
//       </div>
//     </div>
//   );
// };

// const Collections = () => {
//   const categories = [
//     {
//       name: 'Men',
//       collections: [
//         {
//           name: 'Sneakers',
//           description: 'Comfortable and stylish sneakers for everyday wear.',
//           products: [
//             { id: 1, name: 'Men Sneakers 1', image: '/shoes/15.jpg', price: 100 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/1.jpg', price: 120 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Formal Shoes',
//           description: 'Elegant formal shoes for business and events.',
//           products: [
//             { id: 3, name: 'Men Formal 1', image: './men_formal_1.jpg', price: 150 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Boots',
//           description: 'Rugged boots for outdoor adventures.',
//           products: [
//             { id: 5, name: 'Men Boots 1', image: './men_boots_1.jpg', price: 170 },
//             // Add more products here
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
//             { id: 7, name: 'Women Sandals 1', image: './women_sandals_1.jpg', price: 80 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Heels',
//           description: 'Stylish heels for special occasions.',
//           products: [
//             { id: 9, name: 'Women Heels 1', image: './women_heels_1.jpg', price: 120 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Flats',
//           description: 'Comfortable and casual flats.',
//           products: [
//             { id: 11, name: 'Women Flats 1', image: './women_flats_1.jpg', price: 60 },
//             // Add more products here
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Kids',
//       collections: [
//         {
//           name: 'Sleepers',
//           description: 'Fun and colorful sneakers for active kids.',
//           products: [
//             { id: 13, name: 'Kids Sneakers 1', image: './kids_sneakers_1.jpg', price: 60 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Shoes',
//           description: 'Durable boots for playful kids.',
//           products: [
//             { id: 15, name: 'Kids Boots 1', image: './kids_boots_1.jpg', price: 80 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Sandals',
//           description: 'Light and breezy sandals for summer.',
//           products: [
//             { id: 17, name: 'Kids Sandals 1', image: './kids_sandals_1.jpg', price: 40 },
//             // Add more products here
//           ],
//         },
//       ],
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
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

//   const handleViewDetails = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };

//   const handleAddToWishlist = (product) => {
//     setWishlist((prevWishlist) => [...prevWishlist, product]);
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
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                         onClick={() => handleViewDetails(product)}
//                       />
//                       <p>{product.name}</p>
//                       <p>&#8377;{product.price}</p>
//                       <button className="cart-button" onClick={() => handleAddToCart(product)}>
//                         <i className="fas fa-cart-plus"></i> Add to Cart
//                       </button>
//                       <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
//                         Buy Now
//                       </button>
//                       <button className="wishlist-button" onClick={() => handleAddToWishlist(product)}>
//                         <i className="fas fa-heart"></i>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//       {showMessage && <div className="cart-message">Added to cart!</div>}
//       {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />}
//       {wishlist.length > 0 && (
//         <div className="wishlist">
//           <h2>Wishlist</h2>
//           <div className="wishlist-list">
//             {wishlist.map((product, id) => (
//               <div key={id} className="wishlist-item">
//                 <img src={product.image} alt={product.name} className="wishlist-image" />
//                 <p>{product.name}</p>
//                 <p>&#8377;{product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;


// import React, { useContext, useState } from 'react';
// import './Collections.css';
// import { CartContext } from './CartContext';
// //import { WishlistContext } from './WishlistContext'; // Import WishlistContext
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
// import { WishlistContext } from './WishlistContext';

// const ProductDetailModal = ({ product, onClose }) => {
//   if (!product) return null;

//   return (
//     <div className="modal" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <img src={product.image} alt={product.name} className="modal-image" />
//         <h2>{product.name}</h2>
//         <p>Price: &#8377;{product.price}</p>
//         <p>Description: Detailed description of {product.name}</p>
//       </div>
//     </div>
//   );
// };

// const Collections = () => {
//   const categories = [
//     {
//       name: 'Men',
//       collections: [
//         {
//           name: 'Sneakers',
//           description: 'Comfortable and stylish sneakers for everyday wear.',
//           products: [
//             { id: 1, name: 'Men Sneakers 1', image: '/shoes/15.jpg', price: 100 },
//             { id: 2, name: 'Men Sneakers 2', image: '/shoes/1.jpg', price: 120 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Formal Shoes',
//           description: 'Elegant formal shoes for business and events.',
//           products: [
//             { id: 3, name: 'Men Formal 1', image: './men_formal_1.jpg', price: 150 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Boots',
//           description: 'Rugged boots for outdoor adventures.',
//           products: [
//             { id: 5, name: 'Men Boots 1', image: './men_boots_1.jpg', price: 170 },
//             // Add more products here
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
//             { id: 7, name: 'Women Sandals 1', image: './women_sandals_1.jpg', price: 80 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Heels',
//           description: 'Stylish heels for special occasions.',
//           products: [
//             { id: 9, name: 'Women Heels 1', image: './women_heels_1.jpg', price: 120 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Flats',
//           description: 'Comfortable and casual flats.',
//           products: [
//             { id: 11, name: 'Women Flats 1', image: './women_flats_1.jpg', price: 60 },
//             // Add more products here
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Kids',
//       collections: [
//         {
//           name: 'Sleepers',
//           description: 'Fun and colorful sneakers for active kids.',
//           products: [
//             { id: 13, name: 'Kids Sneakers 1', image: './kids_sneakers_1.jpg', price: 60 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Shoes',
//           description: 'Durable boots for playful kids.',
//           products: [
//             { id: 15, name: 'Kids Boots 1', image: './kids_boots_1.jpg', price: 80 },
//             // Add more products here
//           ],
//         },
//         {
//           name: 'Sandals',
//           description: 'Light and breezy sandals for summer.',
//           products: [
//             { id: 17, name: 'Kids Sandals 1', image: './kids_sandals_1.jpg', price: 40 },
//             // Add more products here
//           ],
//         },
//       ],
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { wishlist, addToWishlist } = useContext(WishlistContext); // Use WishlistContext
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

//   const handleViewDetails = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };

//   const handleAddToWishlist = (product) => {
//     addToWishlist(product);
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
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                         onClick={() => handleViewDetails(product)}
//                       />
//                       <p>{product.name}</p>
//                       <p>&#8377;{product.price}</p>
//                       <button className="cart-button" onClick={() => handleAddToCart(product)}>
//                         <i className="fas fa-cart-plus"></i> Add to Cart
//                       </button>
//                       <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
//                         Buy Now
//                       </button>
//                       <button className="wishlist-button" onClick={() => handleAddToWishlist(product)}>
//                         <i className="fas fa-heart"></i>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//       {showMessage && <div className="cart-message">Added to cart!</div>}
//       {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />}
//       {wishlist.length > 0 && (
//         <div className="wishlist">
//           <h2>Wishlist</h2>
//           <div className="wishlist-list">
//             {wishlist.map((product, id) => (
//               <div key={id} className="wishlist-item">
//                 <img src={product.image} alt={product.name} className="wishlist-image" />
//                 <p>{product.name}</p>
//                 <p>&#8377;{product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;


// src/Components/Pages/Collections.js
import React, { useContext, useState } from 'react';
import './Collections.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { WishlistContext } from './WishlistContext';
import { CartContext } from './CartContext';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p>Price: &#8377;{product.price}</p>
        <p>Description: Detailed description of {product.name}</p>
      </div>
    </div>
  );
};

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
            // Add more products here
          ],
        },
        {
          name: 'Formal Shoes',
          description: 'Elegant formal shoes for business and events.',
          products: [
            { id: 3, name: 'Men Formal 1', image: './men_formal_1.jpg', price: 150 },
            // Add more products here
          ],
        },
        {
          name: 'Boots',
          description: 'Rugged boots for outdoor adventures.',
          products: [
            { id: 5, name: 'Men Boots 1', image: './men_boots_1.jpg', price: 170 },
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
            // Add more products here
          ],
        },
        {
          name: 'Heels',
          description: 'Stylish heels for special occasions.',
          products: [
            { id: 9, name: 'Women Heels 1', image: './women_heels_1.jpg', price: 120 },
            // Add more products here
          ],
        },
        {
          name: 'Flats',
          description: 'Comfortable and casual flats.',
          products: [
            { id: 11, name: 'Women Flats 1', image: './women_flats_1.jpg', price: 60 },
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
            // Add more products here
          ],
        },
        {
          name: 'Shoes',
          description: 'Durable boots for playful kids.',
          products: [
            { id: 15, name: 'Kids Boots 1', image: './kids_boots_1.jpg', price: 80 },
            // Add more products here
          ],
        },
        {
          name: 'Sandals',
          description: 'Light and breezy sandals for summer.',
          products: [
            { id: 17, name: 'Kids Sandals 1', image: './kids_sandals_1.jpg', price: 40 },
            // Add more products here
          ],
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage('Item added to cart!');
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Show message for 2 seconds
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setShowMessage('Item added to wishlist!');
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Show message for 2 seconds
  };

  return (
    <div className="collections">
      <h1>Collections</h1>
      <div className="dropdown">
        <label htmlFor="category">Select Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <>
          {categories
            .filter((category) => category.name === selectedCategory)
            .map((category) => (
              <div key={category.name} className="category">
                {category.collections.map((collection) => (
                  <div key={collection.name} className="collection">
                    <h2>{collection.name}</h2>
                    <p>{collection.description}</p>
                    <div className="products">
                      {collection.products.map((product) => (
                        <div key={product.id} className="product">
                          <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => setSelectedProduct(product)}
                          />
                          <h3>{product.name}</h3>
                          <p>&#8377;{product.price}</p>
                          <button
                            className="add-to-cart"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </button>
                          <button
                            className="add-to-wishlist"
                            onClick={() => handleAddToWishlist(product)}
                          >
                            <i className="fas fa-heart"></i> Add to Wishlist
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </>
      )}

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {showMessage && (
        <div className="message">{showMessage}</div>
      )}
    </div>
  );
};

export default Collections;
