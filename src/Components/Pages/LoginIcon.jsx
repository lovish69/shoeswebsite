// LoginIcon.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginIcon.css';

const LoginIcon = () => {
  const navigate = useNavigate();

  return (
    <div className="login-icon" onClick={() => navigate('/login')}>
      <img src="./login.png" alt="Login" />
    </div>
  );
};

export default LoginIcon;
