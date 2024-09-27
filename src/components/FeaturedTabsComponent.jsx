import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {cards} from '../data/data'
const tabs = ['Featured', 'Trending', 'Latest'];


const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md ${
      isActive ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Card = ({ id,title, image, author, authorType, price, oldPrice }) => (
  <Link to={`/card/${id}`} className="">

  <div className="bg-gray-800 rounded-lg max-h-96 h-full overflow-hidden shadow-lg">
  <img src={image} alt={title} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="flex justify-between items-center">
      <div className="text-gray-300">
        <span>{author}</span>
        {authorType && <span className="ml-2 text-sm">• {authorType}</span>}
      </div>
      <div className="text-white">
        {price !== null && (
          <>
            {oldPrice && <span className="line-through mr-2 text-gray-400">${oldPrice}</span>}
            <span className="font-bold">${price}</span>
          </>
        )}
      </div>
    </div>
  </div>
</div>
  </Link>
);

const FeaturedTabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  const filteredCards = cards.filter(card => card.category === activeTab);

  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-8"> {/* Changed here */}
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map(tab => (
          <TabButton
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"> {/* Changed here */}
        {filteredCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default FeaturedTabsComponent;