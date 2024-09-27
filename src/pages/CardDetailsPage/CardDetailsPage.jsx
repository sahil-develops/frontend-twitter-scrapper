import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const CardDetailsPage = ({cards}) => {
  const { id } = useParams();
  const card = cards.find(card => card.id === parseInt(id));

  if (!card) {
    return <div className="text-white">Card not found</div>;
  }

  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen  p-8">
<div className="max-w-7xl px-8 w-full mx-auto">
    <button className='bg-blue-700 text-white    px-6 rounded-md gap-x-2 flex items-center justify-between py-2' onClick={()=>navigate("/")}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
    Back</button>
</div>
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-white mb-4">{card.title}</h1>
          <div className="text-gray-300 mb-4">
            <span className="font-semibold">Author:</span> {card.author}
            {card.authorType && <span className="ml-2">• {card.authorType}</span>}
          </div>
          <div className="text-white text-xl mb-4">
            {card.oldPrice && <span className="line-through mr-2 text-gray-400">${card.oldPrice}</span>}
            <span className="font-bold">${card.price}</span>
          </div>
          <div className="text-gray-300 mb-6">
            <span className="font-semibold">Category:</span> {card.category}
          </div>
          <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Back to Featured Tabs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;