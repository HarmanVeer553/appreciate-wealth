// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import FruitCard from './FruitCard'; // Card for each fruit
import FruitDetails from './FruitDetails'; // Detailed view for each fruit
import '../styles/Chat.css'; // Styling for Chat page

const Chat = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  // Simulating API call to fetch fruits data
  useEffect(() => {
    const fetchFruits = async () => {
      const mockData = [
        { id: 1, name: 'Apple', description: 'A red juicy fruit.', image: '../frontend/apple.webp' },
        { id: 2, name: 'Banana', description: 'A long yellow fruit.', image: '../frontend/banana.webp' },
        { id: 3, name: 'Orange', description: 'A round orange citrus fruit.', image: '/orange.png' }
      ];
      setFruits(mockData);
    };

    fetchFruits();
  }, []);

  // Handle when a fruit card is clicked
  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="chat-container">
      {!selectedFruit ? (
        <div className="fruit-list">
          {fruits.map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} onClick={() => handleFruitClick(fruit)} />
          ))}
        </div>
      ) : (
        <FruitDetails fruit={selectedFruit} onBack={() => setSelectedFruit(null)} />
      )}
    </div>
  );
};

export default Chat;
