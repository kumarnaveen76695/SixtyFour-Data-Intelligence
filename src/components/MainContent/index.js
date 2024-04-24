import React, { useState } from 'react';
import ContentCard from '../ContentCard';
import './index.css';

function MainContent() {
  const initialContentCards = [
    {
      title: 'Marketing',
      description: 'In todays digital age, traditional advertising methods are losing their effectiveness. Consumers are becoming increasingly savvy and are turning to the internet to research products and services before making a purchase decision.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCBTQBNyDUkMtvdajBHYVPoszizYtO2k1Go-5NRmn7g&s',
    },
    {
      title: 'CapEx Surage',
      description: 'Enhance your businesss infrastructure with our streamlined CapEx solutions, maximizing efficiency and minimizing costs. Our tailored strategies ensure optimal utilization of capital expenditures, empowering your organization for sustainable growth',
      image: 'https://images.moneycontrol.com/static-mcnews/2023/01/capex-surge-big.jpg',
    },
    {
      title: 'Direct Tax Solutions',
      description: 'Simplify your tax compliance process with our expert guidance and comprehensive services. Our tailored strategies ensure efficient management of direct tax obligations, maximizing savings and minimizing risks for your business.',
      image: 'https://d8it4huxumps7.cloudfront.net/uploads/images/655759a98174a_role_of_fiscal_policy_in_economy.jpg?d=2000x2000',
    },
    {
      title: 'Banking Monitor',
      description: 'Stay informed with real-time insights into your financial transactions, balances, and activities. Our intuitive platform provides comprehensive oversight, empowering you to make informed decisions and optimize your banking experience.',
      image: 'https://www.eginnovations.com/images/banking-IT-infrastructure.webp?676',
    },
    {
      title: 'Card 5',
      description: 'Description for Card 5',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 6',
      description: 'Description for Card 6',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [contentCards, setContentCards] = useState(initialContentCards);
  const [visibleCards, setVisibleCards] = useState(4); // Initial number of visible cards

  const loadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 2); // Increase the number of visible cards by 2
  };

  return (
    <div className="main-content">
      {contentCards.slice(0, visibleCards).map((card, index) => (
        <ContentCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
      {visibleCards < contentCards.length && (
         <div className="button">
        <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default MainContent;
