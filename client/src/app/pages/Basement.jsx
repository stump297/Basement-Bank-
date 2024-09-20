import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import './css/Basement.css';

const GET_BASEMENT = gql`
  query GetBasement($id: ID!) {
    basement(id: $id) {
      name
      value
    }
  }
`;

function Basement() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BASEMENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { basement } = data;

  return (
    <div className="basement-container">
      <h2>{basement.name}</h2>
      <p>Current Value: ${basement.value.toLocaleString()}</p>
      <button onClick={() => setBasement({ ...basement, value: basement.value + 5 })}>
        Increase by $5
      </button>
      <button onClick={() => setBasement({ ...basement, value: basement.value - 5 })}>
        Decrease by $5
      </button>
    </div>
  );
}

export default Basement;


