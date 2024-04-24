// components/MainContent.js
import React from 'react';
import ContentCard from './ContentCard';
import './MainContent.css';

function MainContent() {
  // Dummy data for content cards
  const contentCards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://via.placeholder.com/150',
    },
    // Add more cards as needed
  ];

  return (
    <div className="main-content">
      {contentCards.map((card, index) => (
        <ContentCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default MainContent;
