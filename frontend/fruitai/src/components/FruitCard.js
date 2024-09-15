// src/components/FruitCard.js
import React from 'react';
import '../styles/FruitCard.css'; // Styling for fruit cards

const FruitCard = ({ fruit, onClick }) => {
  return (
    <div className="fruit-card" onClick={onClick}>
      <img src={fruit.image} alt={fruit.name} className="fruit-image" />
      <h3>{fruit.name}</h3>
    </div>
  );
};

export default FruitCard;
