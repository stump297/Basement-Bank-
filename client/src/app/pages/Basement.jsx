import React, { useState } from 'react';
import './css/Basement.css';

function Basement1() {
  const [value, setValue] = useState(10000000);

  return (
    <div className="basement1">
      <h1>Basement 1</h1>
      <div>Current Value: ${value.toLocaleString()}</div>
      <button onClick={() => setValue(value + 5)}>Increase by $5</button>
      <button onClick={() => setValue(value - 5)}>Decrease by $5</button>
    </div>
  );
}

export default Basement1;
