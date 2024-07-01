
import React, { useContext, useState } from "react";
import "./Collections.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { WishlistContext } from "./WishlistContext";
import { CartContext } from "./CartContext";
import StarRating from "./StarRating"; // Import the StarRating component

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
      name: "Men",
      collections: [
        {
          name: "Sneakers",
          description: "Comfortable and stylish sneakers for everyday wear.",
          products: [
            {
              id: 1,
              name: "Men Sneakers 1",
              image: "",
              price: 100,
            },
            {
              id: 2,
              name: "Men Sneakers 2",
              image: "",
              price: 120,
            },
            {
              id: 3,
              name: "Men Sneakers 3",
              image: "",
              price: 120,
            },
            {
              id: 4,
              name: "Men Sneakers 4",
              image: "",
              price: 120,
            },
            {
              id: 5,
              name: "Men Sneakers 5",
              image: "",
              price: 120,
            },
            {
              id: 6,
              name: "Men Sneakers 6",
              image: "",
              price: 120,
            },
            // Add more products here
          ],
        },
        {
          name: "Formal Shoes",
          description: "Elegant formal shoes for business and events.",
          products: [
            {
              id: 3,
              name: "Men Formal 1",
              image: "/",
              price: 150,
            },
            {
              id: 3,
              name: "Men Formal 1",
              image: "",
              price: 150,
            },
            {
              id: 3,
              name: "Men Formal 1",
              image: "",
              price: 150,
            },
            {
              id: 3,
              name: "Men Formal 1",
              image: "",
              price: 150,
            },
            {
              id: 3,
              name: "Men Formal 1",
              image: "",
              price: 150,
            },
            {
              id: 3,
              name: "Men Formal 1",
              image: "",
              price: 150,
            },
            // Add more products here
          ],
        },
        {
          name: "Boots",
          description: "Rugged boots for outdoor adventures.",
          products: [
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            {
              id: 5,
              name: "Men Boots 1",
              image: "",
              price: 170,
            },
            
            // Add more products here
          ],
        },
      ],
    },
    {
      name: "Women",
      collections: [
        {
          name: "Sandals",
          description: "Cool and comfortable sandals for the summer.",
          products: [
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            {
              id: 7,
              name: "Women Sandals 1",
              image: "./women_sandals_1.jpg",
              price: 80,
            },
            // Add more products here
          ],
        },
        {
          name: "Heels",
          description: "Stylish heels for special occasions.",
          products: [
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            {
              id: 9,
              name: "Women Heels 1",
              image: "./women_heels_1.jpg",
              price: 120,
            },
            // Add more products here
          ],
        },
        {
          name: "Flats",
          description: "Comfortable and casual flats.",
          products: [
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            {
              id: 11,
              name: "Women Flats 1",
              image: "./women_flats_1.jpg",
              price: 60,
            },
            // Add more products here
          ],
        },
      ],
    },
    {
      name: "Kids",
      collections: [
        {
          name: "Sleepers",
          description: "Fun and colorful sneakers for active kids.",
          products: [
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            {
              id: 13,
              name: "Kids Sneakers 1",
              image: "./kids_sneakers_1.jpg",
              price: 60,
            },
            // Add more products here
          ],
        },
        {
          name: "Shoes",
          description: "Durable boots for playful kids.",
          products: [
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            {
              id: 15,
              name: "Kids Boots 1",
              image: "./kids_boots_1.jpg",
              price: 80,
            },
            // Add more products here
          ],
        },
        {
          name: "Sandals",
          description: "Light and breezy sandals for summer.",
          products: [
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
            {
              id: 17,
              name: "Kids Sandals 1",
              image: "./kids_sandals_1.jpg",
              price: 40,
            },
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
  const [ratings, setRatings] = useState({}); // State to hold ratings

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage("Item added to cart!");
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Show message for 2 seconds
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setShowMessage("Item added to wishlist!");
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Show message for 2 seconds
  };

  const handleRatingChange = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
  };

  return (
    <div className="collections-container">
      <div className="background-image">
        {/* You can set background image directly in inline style or use a CSS class */}
      </div>
      <div style={{ padding: "20px" }} className="collections">
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
                              style={{ width: "600px", aspectRatio: "16/9" }}
                              src={product.image}
                              alt={product.name}
                              onClick={() => setSelectedProduct(product)}
                            />
                            <h3>{product.name}</h3>
                            <p>&#8377;{product.price}</p>
                            <StarRating
                              rating={ratings[product.id] || 0}
                              onRatingChange={(rating) =>
                                handleRatingChange(product.id, rating)
                              }
                            />
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

        {showMessage && <div className="message">{showMessage}</div>}
      </div>
    </div>
  );
};

export default Collections;
