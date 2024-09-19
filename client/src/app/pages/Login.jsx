import React from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1>Welcome to Basement Bank</h1>
      <div className="greeting">Hello</div>
      <Link to="/my-basements"><button id="login">Login</button></Link>
      <Link to="/create-user"><button id="create-user">Create User</button></Link>
    </div>
  );
}

export default Login;
