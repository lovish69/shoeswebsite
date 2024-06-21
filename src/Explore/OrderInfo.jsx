import React from 'react';
import { Container } from 'react-bootstrap';
import './OrderInfo.css'; 

const OrderInfo = () => {
    return (
        <Container>
            <div className="order-info">
                <h2>Order Information</h2>
                <p>This page contains order-related information.</p>
            </div>
        </Container>
    );
};

export default OrderInfo;
