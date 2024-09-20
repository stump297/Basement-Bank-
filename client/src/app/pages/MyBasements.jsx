import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BASEMENTS } from './queries';
import './css/MyBasements.css';

function MyBasements() {
  const { loading, error, data } = useQuery(GET_BASEMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { basements } = data;

  return (
    <div className="my-basements">
      <h1>My Basements</h1>
      <ol>
        {basements.map((basement) => (
          <li key={basement.id}>
            {basement.name} <Link to={`/view-basement/${basement.id}`}><button>View</button></Link>
          </li>
        ))}
      </ol>
      <Link to="/create"><button>Add New Basement</button></Link>
    </div>
  );
}

export default MyBasements;
