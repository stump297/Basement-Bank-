import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './css/Login.css';

Modal.setAppElement('#root'); // Make sure to set the app element for accessibility

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    closeModal();
  };

  return (
    <div className="login-container">
      <h1>Welcome to Basement Bank</h1>
      <div className="greeting">Hello</div>
      <button id="login" onClick={openModal}>Login</button>
      <Link to="/create-user"><button id="create-user">Create User</button></Link>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Login;
