import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import './css/MyBasements.css';

function MyBasements() {  
  const { loading, error, data } = useQuery(GET_ROOMS);
  localStorage.setItem("Basement_id", '');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlelogout = () => {
    try {
      window.location.assign('/');
    }catch (error) {  
        console.error('Error in moving:', error);
      }
  }
  const handleview = (e) => {
    try {
      console.log(e.currentTarget.id);
      localStorage.setItem("Basement_id", e.currentTarget.id);
      window.location.assign('/Basement');
    }catch (error) {  
        console.error('Error in moving:', error);
      }
  }
console.log(data.getRooms.length)
  return (
    <div className="my-basements">
      <h1>My Basements</h1>
      {data.getRooms?.length > 0 ? (
          <ol>
          
          {data.getRooms?.map((basement) => (
            <li key={basement.id}>
              {basement.id}
              <button onClick={handleview} id={basement.id} >View</button>
            </li>
          ))}
        </ol>
        ):(
          <h3>no basement</h3>
        )
      }

      <Link to="/create"><button>Add New Basement</button></Link>
      <br></br>
      <button className="logout-button" onClick={handlelogout}>logout</button>

    </div>
  );
}

export default MyBasements;
