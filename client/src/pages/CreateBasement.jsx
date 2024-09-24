import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_ROOM, UPDATE_ROOM } from '../utils/mutations';
import './css/CreateBasement.css';

const CreateBasement = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [description, setDescription] = useState('');
  const [savings, setSavings] = useState('');

  const [addRoom] = useMutation(ADD_ROOM);
  const [updateRoom] = useMutation(UPDATE_ROOM);

  const handleCreate = async () => {
    try {
      const volume = length * width * height;
      console.log(volume);
      const { data } = await addRoom({
        variables: {
          volume: parseFloat(volume),
          description: parseFloat(description),
          savings: parseFloat(savings),
        }
      });
      console.log('Room added:', data.addRoom);
    } catch (error) {
      console.error('Error adding room:', error);
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
    </div>
  );
};

export default CreateBasement;
