import React, { useContext, useState } from 'react';
import { Container, Carousel, Card, Row, Col, Button, Modal, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home.css';
import Clock from '../../UI/Clock';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faInfoCircle, faShippingFast, faStoreAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext'; // Import CartContext

const Home = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { addToCart, getTotalAmount } = useContext(CartContext); // Get addToCart from CartContext

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setAlertMessage(`${product.title} (${product.price}) added to cart!`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    };

    const products = [
        { id: 1, title: "Product 1", description: "This is a brief description of Product 1.", price: "$100", image: "./6.jpg" },
        { id: 2, title: "Product 2", description: "This is a brief description of Product 2.", price: "$120", image: "./8.jpg" },
        { id: 3, title: "Product 3", description: "This is a brief description of Product 3.", price: "$150", image: "" },
        { id: 4, title: "Product 4", description: "This is a brief description of Product 4.", price: "$180", image: "./9.jpg" },
        { id: 5, title: "Product 5", description: "This is a brief description of Product 5.", price: "$200", image: "./10.jpg" },
        { id: 6, title: "Product 6", description: "This is a brief description of Product 6.", price: "$250", image: "./11.jpg" }
        // Add more products as needed
    ];

    return (
        <div>
            <Carousel className='head-contaner'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="./banner.png"
                        alt="First slide"
                    />
                    <img
                        className="d-block shoes-img "
                        src="./shoes2.png"
                        alt="First slide"
                    />
                    
                    <Carousel.Caption className='first-title'>
                        <h3>Welcome to Footwear Store</h3>
                        <p>Discover the best footwear collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Item as needed */}
            </Carousel>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg="6" md="12" className='count__down-col'>
                            <div className="clock__top-content">
                                <h4 className="text-black fs-3 mb-2">Limited offers Sneakers</h4>
                            </div>
                            <Clock />

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="buy__btn store__btn"
                            >
                                <Link to="/collections">Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg="2" md="3" className="text-end counter__img">
                            <img src={'./Image7.png'} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                {showAlert && (
                    <Alert variant="success" className="alert-center">
                        {alertMessage}
                    </Alert>
                )}
                <Row>
                    {products.map(product => (
                        <Col md={4} key={product.id}>
                            <Card>
                                <Card.Img variant="top" src={product.image} onClick={() => handleShow(product)} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text className="text-muted">{product.price}</Card.Text>
                                    <Button variant="primary" onClick={() => handleAddToCart(product)}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="logos-section">
                <h2 className="text-center mb-4">Explore More</h2>
                <Row className="justify-content-center">
                    <Col md={2} className="text-center">
                        <Link to="/contact-us">
                            <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: 'black' }}/>
                            <p>Contact Us </p>
                        </Link>
                    </Col>
                    <Col md={2} className="text-center">
                        <Link to="/order-info">
                            <FontAwesomeIcon icon={faInfoCircle} size="2x" style={{ color: 'black' }}/>
                            <p>Order Info</p>
                        </Link>
                    </Col>
                    <Col md={2} className="text-center">
                        <Link to="/shipping-info">
                            <FontAwesomeIcon icon={faShippingFast} size="2x" style={{ color: 'black' }} />
                            <p>Shipping Info</p>
                        </Link>
                    </Col>
                    <Col md={2} className="text-center">
                        <Link to="/store-pickup">
                            <FontAwesomeIcon icon={faStoreAlt} size="2x" style={{ color: 'black' }}/>
                            <p>Store Pickup</p>
                        </Link>
                    </Col>
                    <Col md={2} className="text-center">
                        <Link to="/return-exchange">
                            <FontAwesomeIcon icon={faExchangeAlt} size="2x" style={{ color: 'black' }}/>
                            <p>Return & Exchange</p>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedProduct?.image} alt={selectedProduct?.title} className="w-100" />
                    <p>{selectedProduct?.description}</p>
                    <p className="text-muted">{selectedProduct?.price}</p>
                    <Button variant="primary" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Home;
