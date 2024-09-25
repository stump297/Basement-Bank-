import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ROOM } from '../utils/mutations'; // Assuming ADD_ROOM is for creating a new room
import { GET_USER } from '../utils/queries'; // Assuming this fetches user data
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
      const user = dataUser?.getUser; // Get the user from the query response

      if (!user) {
        throw new Error("User not found. Please log in.");
      }

      const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);

      const { data } = await addRoom({
        variables: {
          user, // Pass the user object to the mutation
          volume: volume, // Calculated volume based on the dimensions input
          description: description, // Room description
          savings: parseFloat(savings), // User-inputted savings
        }
      });

      console.log('Room added:', data.addRoom);

      // Reset form fields after successful room creation
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
      window.location.assign('/my-basements'); // Redirect to the user's basements page
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
