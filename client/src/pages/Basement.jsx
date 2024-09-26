import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { GET_ROOMS, GET_USER } from '../utils/queries';
import { UPDATE_ROOM } from '../utils/mutations';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './css/Basement.css';

function Basement() {
  const room_id = localStorage.getItem("Basement_id")
  const [savings, setSavings] = useState('');
  const [updateRoom] = useMutation(UPDATE_ROOM);
  const { loading: loadingRooms, error: errorRooms, data: dataRooms } = useQuery(GET_ROOMS);
  const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(GET_USER);

  if (loadingRooms || loadingUser) return <p>Loading...</p>;
  if (errorRooms) return <p>Error loading rooms: {errorRooms.message}</p>;
  // if (errorUser) return <p>Error loading user: {errorUser.message}</p>;

  const { getRooms: rooms } = dataRooms;
  // const { getUser: user } = dataUser;

  const goldCoinVolume = 0.02;

  const roomsWithCoinData = rooms.map(room => {
    const coinsToFillRoom = room.volume / goldCoinVolume; 
    const coinsFromSavings = room.savings / goldCoinVolume;
    return {
      id: room.id,
      volume: room.volume,
      coinsToFillRoom: Math.floor(coinsToFillRoom), 
      coinsFromSavings: Math.floor(coinsFromSavings),
    };
  });
  const handleReturn = () => {
    try {
      window.location.assign('/my-basements');
    } catch (error) {
      console.error('Error in moving:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log(savings);
      console.log(room_id);

      const { data } = await updateRoom({
        variables: {
          id: room_id,
          savings: parseFloat(savings),
        },
      });
      
      console.log('Room updated:', data.updateRoom);
    } catch (error) {
      console.error('Error in moving:', error);
    }
  };

  const maxCoins = Math.max(...roomsWithCoinData.map(room => room.coinsToFillRoom));

  return (
    <div className="basement-container">
      {/* <h2>User: {user.username}</h2>
      <p>Email: {user.email}</p> */}

      <h3>Rooms:</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <p>Room ID: {room.id}</p>
            <p>Volume: {room.volume}</p>
            <p>Savings: ${room.savings.toLocaleString()}</p>
            <label htmlFor="savings">Current Savings:</label>
        <input
          type="number"
          id="savings"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
        <button className="create-button" onClick={handleUpdate}>Create Basement</button>
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
          <Bar dataKey="coinsToFillRoom" fill="#8884d8" name="Coins to Fill Room" />
          <Bar dataKey="coinsFromSavings" fill="#82ca9d" name="Coins Needed with Savings" />
        </BarChart>
      </ResponsiveContainer>
      <button className="return-button" onClick={handleReturn}>Return</button>
    </div>
  );
}

export default Basement;