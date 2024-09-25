import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import './css/MyBasements.css';

function MyBasements() {
  const { loading, error, data } = useQuery(GET_ROOMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

console.log(data.getRooms.length)
  return (
    <div className="my-basements">
      <h1>My Basements</h1>
      {data.getRooms?.length > 0 ? (
          <ol>
          
          {data.getRooms?.map((basement) => (
            <li key={basement.id}>
              <Link to={`/view-basement/${basement.id}`}><button>View</button></Link>
            </li>
          ))}
        </ol>
        ):(
          <h3>no basement</h3>
        )
      }

      <Link to="/create"><button>Add New Basement</button></Link>
    </div>
  );
}

export default MyBasements;
