import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1>Welcome to Basement Bank</h1>
      <div className="greeting">Hello</div>
      <button id="login">Login</button>
      <button id="create-account">Create Account</button>
    </div>
  );
}

export default Login;
