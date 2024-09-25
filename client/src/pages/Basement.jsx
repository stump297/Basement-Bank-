import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import './css/Basement.css';

function Basement() {
  const { loading: loadingRooms, error: errorRooms, data: dataRooms } = useQuery(GET_ROOMS);
  // const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(GET_USER);

  // if (loadingRooms || loadingUser) return <p>Loading...</p>;
  // if (errorRooms) return <p>Error loading rooms: {errorRooms.message}</p>;
  // if (errorUser) return <p>Error loading user: {errorUser.message}</p>;

  const { getRooms: rooms } = dataRooms;
  const { getUser: user } = dataUser;

  return (
    <div className="basement-container">
      <h2>User: {user.username}</h2>
      <p>Email: {user.email}</p>
      <h3>Rooms:</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <p>Room ID: {room.id}</p>
            <p>Volume: {room.volume}</p>
            <p>Savings: ${room.savings.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basement;

