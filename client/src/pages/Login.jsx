import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { gql, useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './css/Login.css';

Modal.setAppElement('#root'); 

function Login(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate(); 

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = async () => {
    try {
      const { data } = await login({ variables: { email: username, password } });


      console.log('Login successful:', data);
      Auth.login(data.login.token);

      closeModal();
      navigate('/Mybasements');
    } catch (err) {
      console.error('Login error:', err); // Check for errors here
    }
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
          <button type="button" onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="error">Login failed. Please try again.</p>}
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Login;