import React, { useState } from 'react';

const tabs = ['Featured', 'Trending', 'Latest'];

const cards = [
  {
    id: 1,
    title: 'All-Access Pass',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'UI8',
    price: 200,
    category: 'Featured'
  },
  {
    id: 2,
    title: 'Agreefy - Landing Page AI Startup',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Saba Studio',
    authorType: 'Coded Templates',
    price: 25,
    category: 'Featured'
  },
  {
    id: 15,
    title: 'All-Access Pass',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'UI8',
    price: 200,
    category: 'Featured'
  },
  {
    id: 22,
    title: 'Agreefy - Landing Page AI Startup',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Saba Studio',
    authorType: 'Coded Templates',
    price: 25,
    category: 'Featured'
  },
  {
    id: 10,
    title: 'All-Access Pass',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'UI8',
    price: 200,
    category: 'Featured'
  },
  {
    id: 9,
    title: 'Agreefy - Landing Page AI Startup',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Saba Studio',
    authorType: 'Coded Templates',
    price: 25,
    category: 'Featured'
  },
  {
    id: 3,
    title: 'Bento Cards: Crypto',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'UI8',
    authorType: 'Coded Templates',
    price: 46,
    oldPrice: 58,
    category: 'Trending'
  },
  {
    id: 4,
    title: 'Dark—Labs / Futuristic Presentation',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Natural Twenty',
    authorType: 'Presentation',
    price: 16,
    category: 'Trending'
  },
  {
    id: 5,
    title: 'Dark—Labs / Futuristic Presentation',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Natural Twenty',
    authorType: 'Presentation',
    price: 16,
    category: 'Latest'
  },
  {
    id: 6,
    title: 'Dark—Labs / Futuristic Presentation',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    author: 'Natural Twenty',
    authorType: 'Presentation',
    price: 16,
    category: 'Latest'
  },
  // Add more cards for other categories as needed
];

const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md ${
      isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Card = ({ title, image, author, authorType, price, oldPrice }) => (
  <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="text-black">
          <span>{author}</span>
          {authorType && <span className="ml-2 text-sm">• {authorType}</span>}
        </div>
        <div className="text-black">
          {price !== null && (
            <>
              {oldPrice && <span className="line-through mr-2">${oldPrice}</span>}
              <span className="font-bold">${price}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

const FeaturedTabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  const filteredCards = cards.filter(card => card.category === activeTab);

  return (
    <div className="bg-gray-200 min-h-screen p-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTabsComponent;