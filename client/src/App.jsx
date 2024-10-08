import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MyBasements from './pages/MyBasements';
import Basement from './pages/Basement';
import CreateBasement from './pages/CreateBasement';
import UserForm from './pages/UserForm';
import './pages/css/UserForm.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/my-basements" element={<MyBasements />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/create" element={<CreateBasement />} />
        <Route path="/create-user" element={<UserForm />} />
      </Routes>
   </Router>
   </ApolloProvider>
  );
}

export default App;
