import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1>Welcome to Basement Bank</h1>
      <div className="greeting">Hello</div>
      <Link to="/my-basements"><button id="login">Login</button></Link>
      <Link to="/create"><button id="create-account">Create Account</button></Link>
    </div>
  );
}

export default Login;
