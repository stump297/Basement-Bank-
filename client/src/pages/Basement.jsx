import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './css/Basement.css';

function Basement() {
  const { data: dataRooms } = useQuery(GET_ROOMS);
  const { data: dataUser } = useQuery(GET_USER);

  if (!dataRooms || !dataUser) return <p>Loading...</p>;
  if (dataRooms.error) return <p>Error loading rooms: {dataRooms.error.message}</p>;
  if (dataUser.error) return <p>Error loading user: {dataUser.error.message}</p>;

  const { getRooms: rooms } = dataRooms;
  const { getUser: user } = dataUser;

  const goldCoinVolume = 0.02;

  const initialRoomsWithCoinData = rooms.map(room => {
    const coinsToFillRoom = room.volume / goldCoinVolume;
    const coinsFromSavings = room.savings / goldCoinVolume;

    return {
      id: room.id,
      volume: room.volume,
      savings: room.savings,
      coinsToFillRoom: Math.floor(coinsToFillRoom),
      coinsFromSavings: Math.floor(coinsFromSavings),
    };
  });

  const [roomsWithCoinData, setRoomsWithCoinData] = useState(initialRoomsWithCoinData);

  const handleAddCoins = (roomId) => {
    setRoomsWithCoinData(prevState =>
      prevState.map(room =>
        room.id === roomId
          ? {
              ...room,
              coinsFromSavings: room.coinsFromSavings + 5,
              savings: room.savings + 5 * goldCoinVolume,
            }
          : room
      )
    );
  };

  const handleSubtractCoins = (roomId) => {
    setRoomsWithCoinData(prevState =>
      prevState.map(room =>
        room.id === roomId
          ? {
              ...room,
              coinsFromSavings: room.coinsFromSavings - 5,
              savings: room.savings - 5 * goldCoinVolume, 
            }
          : room
      )
    );
  };

  const maxCoins = Math.max(...roomsWithCoinData.map(room => room.coinsToFillRoom));

  return (
    <div className="basement-container">
      <h2>User: {user.username}</h2>
      <p>Email: {user.email}</p>

      <h3>Rooms:</h3>
      <ul>
        {roomsWithCoinData.map(room => (
          <li key={room.id}>
            <p>Room ID: {room.id}</p>
            <p>Volume: {room.volume}</p>
            <p>Savings: ${room.savings.toFixed(2)}</p> 
            <p>Coins from Savings: {room.coinsFromSavings}</p>
            <button onClick={() => handleAddCoins(room.id)}>Add 5 Coins</button>
            <button onClick={() => handleSubtractCoins(room.id)}>Subtract 5 Coins</button>
          </li>
        ))}
      </ul>

      <h3>Coins to Fill Room vs Coins Needed with Savings</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={roomsWithCoinData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" label={{ value: 'Room ID', position: 'insideBottom', offset: -5 }} />
          <YAxis domain={[0, maxCoins]} label={{ value: 'Number of Coins', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="coinsToFillRoom" fill="#8884D8" name="Coins to Fill Room" />
          <Bar dataKey="coinsFromSavings" fill="#82CA9D" name="Coins Needed with Savings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Basement;
