import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './css/MyBasements.css';

function MyBasements() {
  const [basements, setBasements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch basements data
    const fetchBasements = async () => {
      try {
        const response = await fetch('/api/basements'); //just here until api is set up 
        const data = await response.json();
        setBasements(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBasements();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-basements">
      <h1>My Basements</h1>
      <ol>
        {basements.map((basement) => (
          <li key={basement.id}>
            {basement.name} <Link to={`/view-basement/${basement.id}`}><button>View</button></Link>
          </li>
        ))}
      </ol>
      <Link to="/create"><button>Add New Basement</button></Link>
    </div>
  );
}

export default MyBasements;


