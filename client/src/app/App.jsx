import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MyBasements from './pages/MyBasements';
import Basement from './pages/Basement';
import CreateBasement from './pages/CreateBasement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/my-basements" element={<MyBasements />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/create" element={<CreateBasement />} />
      </Routes>
    </Router>
  );
}

export default App;
