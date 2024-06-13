// src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Lovish',
            role: 'CEO & Founder',
            imageUrl: 'https://via.placeholder.com/100',
            description: 'Lovish is the visionary behind our brand and leads the company with a focus on innovation and excellence.',
        },
        {
            id: 2,
            name: 'Mansi',
            role: 'Chief Designer',
            imageUrl: 'https://via.placeholder.com/100',
            description: 'Mansi is responsible for designing our unique footwear collections, blending style and comfort.',
        },
        {
            id: 3,
            name: 'Prachi',
            role: 'Marketing Director',
            imageUrl: 'https://via.placeholder.com/100',
            description: 'Prachi oversees our marketing strategies and campaigns, ensuring our brand reaches a wide audience.',
        },
        {
            id: 4,
            name: 'Noopur',
            role: 'Operations Manager',
            imageUrl: 'https://via.placeholder.com/100',
            description: 'Noopur manages the day-to-day operations, ensuring everything runs smoothly and efficiently.',
        },
    ];

    return (
        <div className="about-us-container">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-mission">
                At Footwear Store, our mission is to provide high-quality, stylish, and comfortable footwear for everyone.
                We believe that great shoes can enhance your life, whether you're running a marathon, hiking a trail, or simply going about your day.
            </p>
            <div className="team-section">
                <h2 className="team-title">Meet Our Team</h2>
                <div className="team-members">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.imageUrl} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Footwear Store. All Rights Reserved.</p>
                <p>
                    Follow us on 
                    <a href="#" className="text-white mx-1">Facebook</a> | 
                    <a href="#" className="text-white mx-1">Twitter</a> | 
                    <a href="#" className="text-white mx-1">Instagram</a>
                </p>
            </footer>
        </div>
    );
};

export default AboutUs;
