import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import './css/Basement.css';

function Basement() {
  const { loading: loadingRooms, error: errorRooms, data: dataRooms } = useQuery(GET_ROOMS);
  const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(GET_USER);

  if (loadingRooms || loadingUser) return <p>Loading...</p>;
  if (errorRooms) return <p>Error loading rooms: {errorRooms.message}</p>;
  if (errorUser) return <p>Error loading user: {errorUser.message}</p>;

  const { getRooms: rooms } = dataRooms;
  const { getUser: user } = dataUser;

  // Calculate total volume
  const totalVolume = rooms.reduce((acc, room) => acc + (room.length * room.width * room.height), 0);

  return (
    <div className="basement-container">
      <h2>User: {user.username}</h2>
      <p>Email: {user.email}</p>
      <h3>Rooms:</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <p>Room ID: {room.id}</p>
            <p>Length: {room.length}</p>
            <p>Width: {room.width}</p>
            <p>Height: {room.height}</p>
            <p>Savings: ${room.savings.toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <h3>Total Basement Volume: {totalVolume.toLocaleString()} cubic units</h3>
    </div>
  );
}

export default Basement;
