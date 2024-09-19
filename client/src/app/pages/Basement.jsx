import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/Basement.css';




function Basement() {
  const { id } = useParams();
  const [basement, setBasement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch basement data based on the ID
    const fetchBasement = async () => {
      try {
        const response = await fetch(`/api/basement/${id}`); //just here until the actual route is figured out
        const data = await response.json();
        setBasement(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBasement();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="basement-container">
      <h2>{basement.name}</h2>
      <p>Current Value: ${basement.value.toLocaleString()}</p>
      <button onClick={() => setBasement({ ...basement, value: basement.value + 5 })}>
        Increase by $5
      </button>
      <button onClick={() => setBasement({ ...basement, value: basement.value - 5 })}>
        Decrease by $5
      </button>
    </div>
  );
}

export default Basement;

