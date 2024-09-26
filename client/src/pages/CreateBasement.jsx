import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ROOM } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import './css/CreateBasement.css';

const CreateBasement = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [description, setDescription] = useState('');
  const [savings, setSavings] = useState('');

  const [addRoom] = useMutation(ADD_ROOM);
  const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(GET_USER);

  if (loadingUser) return <p>Loading user data...</p>;
  if (errorUser) return <p>Error loading user: {errorUser.message}</p>;

  const handleCreate = async () => {
    try {
      const user = dataUser?.getUser;

      if (!user) {
        throw new Error("User not found. Please log in.");
      }

      const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);

      const { data } = await addRoom({
        variables: {
          user,
          volume: volume,
          description: description,
          savings: parseFloat(savings),
        }
      });

      console.log('Room added:', data.addRoom);

      setHeight('');
      setLength('');
      setWidth('');
      setSavings('');
      setDescription('');
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  const handleReturn = () => {
    try {
      window.location.assign('/my-basements');
    } catch (error) {
      console.error('Error in moving:', error);
    }
  };

  return (
    <div className="create-basement">
      <h1>Create Basement</h1>
      <div>
        <label htmlFor="length">Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="string"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="savings">Initial Savings:</label>
        <input
          type="number"
          id="savings"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
      </div>
      <button className="create-button" onClick={handleCreate}>Create Basement</button>
      <br />
      <button className="return-button" onClick={handleReturn}>Return</button>
    </div>
  );
};

export default CreateBasement;
