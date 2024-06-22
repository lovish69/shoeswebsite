


import React from 'react';
import { Container, Navbar, Nav, Carousel, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home.css';
import Clock from '../../UI/Clock';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faInfoCircle, faShippingFast, faStoreAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
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
                                {/* <h3 className="text-black fs-5 mb-3">SNEAKERS</h3> */}
                            </div>
                            <Clock />

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="buy__btn store__btn"
                            >
                                <Link to="/collections">Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg="2" md="8" className="text-end counter__img">
                            <img src={'./Image7.png'} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="./6.jpg" />
                            <Card.Body>
                                <Card.Title>Product 1</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 1.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="./8.jpg" />
                            <Card.Body>
                                <Card.Title>Product 2</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 2.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="2.jpg.jpg" />
                            <Card.Body>
                                <Card.Title>Product 3</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 3.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="9.jpg" />
                            <Card.Body>
                                <Card.Title>Product 4</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 3.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="10.jpg" />
                            <Card.Body>
                                <Card.Title>Product 5</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 3.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="11.jpg" />
                            <Card.Body>
                                <Card.Title>Product 6</Card.Title>
                                <Card.Text>
                                    This is a brief description of Product 3.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Add more Card components for other products */}
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
        </div>
    );
};

export default Home;
