import React, { useState } from 'react';
import {  useMutation } from '@apollo/client';
import { ADD_User } from '../../utils/mutations';
import './css/UserForm.css';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [createUser, { loading, error }] = useMutation(ADD_User, {
    onCompleted: () => {
      setMessage('User created successfully!');
      setName('');
      setEmail('');
      setPassword('');
    },
    onError: (err) => {
      setMessage(`Error: ${err.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage('All fields are required');
      return;
    }
    console.log('Creating user with:', { name, email, password });
    createUser({ variables: { name, email, password } });
  };

  return (
    <div className="user-form-container">
      <h2>Create a New User</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>Create User</button>
      </form>
      {error && <p className="error">Error: {error.message}</p>}
    </div>
  );
}

export default UserForm;
