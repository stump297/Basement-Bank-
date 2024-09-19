import React from "react";
import './css/CreateBasement.css';

const CreateBasement = () => {
  return (
    <div className="create-basement">
      <h1>Create Basement</h1>
      <div>
        <label htmlFor="step-one">Step One:</label>
        <select id="step-one">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="step-two">Step Two:</label>
        <select id="step-two">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="step-three">Step Three:</label>
        <select id="step-three">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button className="create-button">Create Basement</button>
    </div>
  );
};

export default CreateBasement;