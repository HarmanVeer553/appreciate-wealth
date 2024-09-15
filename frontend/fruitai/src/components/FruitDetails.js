// src/components/FruitDetails.js
import React from 'react';
import '../styles/FruitDetails.css';

const FruitDetails = ({ fruit, onBack }) => {
  return (
    <div className="fruit-details">
      <button onClick={onBack} className="back-button">Back</button>
      <img src={fruit.image} alt={fruit.name} className="fruit-details-image" />
      <h2>{fruit.name}</h2>
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitDetails;
