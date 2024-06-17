// src/components/Home.jsx
import React from 'react';
import { Container, Navbar, Nav, Carousel, Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home.css';

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
                        src="./shoes.png"
                        alt="First slide"
                    />
                
                    <Carousel.Caption className='first-title'>
                        <h3>Welcome to Footwear Store</h3>
                        <p>Discover the best footwear collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./banner.png"
                        alt="Second slide"
                    />
                     <img
                        className="d-block shoes-img "
                        src="./shoes2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='first-title'>
                        <h3>Latest Trends</h3>
                        <p>Stay ahead with the latest styles</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./banner.png"
                        alt="Third slide"
                    />
                     <img
                        className="d-block shoes-img "
                        src="./shoes3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='first-title'>
                        <h3>Comfort and Style</h3>
                        <p>Find the perfect balance</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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
                </Row>
            </Container>

            <footer className="bg-dark text-white text-center py-4">
                <Container>
                    <p>&copy; 2024 Footwear Store. All Rights Reserved.</p>
                    
                        
                    
                </Container>
            </footer>
        </div>
    );
};

export default Home;
