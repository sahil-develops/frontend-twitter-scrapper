import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <input
        type="text"
        placeholder="Please Provide Three Keywords"
        className="flex-grow p-2 bg-gray-700 text-white rounded"
      />
      <input
        type="date"
        className="p-2 bg-gray-700 text-white rounded"
      />
      <input
        type="number"
        placeholder="Number of Results"
        className="p-2 bg-gray-700 text-white rounded"
      />
      <input
        type="email"
        placeholder="Receiver's Email"
        className="p-2 bg-gray-700 text-white rounded"
      />
      <button className="p-2 bg-blue-600 text-white px-8 rounded">Submit</button>
    </div>
  );
};

const TopicCard = ({ title, description }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 p-4 rounded-lg" onClick={()=>navigate("/details")}>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const topics = [
  { title: "Hiring for Frontend Job", description: "Find potential candidates for frontend positions" },
  { title: "Leads for Marketing", description: "Discover potential marketing leads and trends" },
  { title: "News on B2B", description: "Stay updated on the latest B2B news and trends" },
  { title: "Crypto Market Trends", description: "Track the latest developments in the cryptocurrency market" },
  { title: "AI in Healthcare", description: "Explore AI applications and breakthroughs in the healthcare industry" },
  { title: "Sustainable Fashion", description: "Discover trends and innovations in sustainable fashion" },
  { title: "Remote Work Tools", description: "Find the latest tools and strategies for effective remote work" },
  { title: "Electric Vehicle Market", description: "Stay informed about developments in the electric vehicle industry" },
  { title: "Mental Health Awareness", description: "Explore discussions and resources related to mental health" },
  { title: "Fintech Innovations", description: "Explore the latest trends and technologies in financial technology" },
  { title: "Space Exploration News", description: "Stay updated on the latest developments in space exploration and technology" },
  { title: "Green Energy Solutions", description: "Track advancements in renewable energy technologies and sustainable power solutions" },
];

function KeywordAnalysis() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
    <div className=' max-w-7xl w-full mx-auto py-10 px-6'>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <TopicCard key={index} title={topic.title} description={topic.description} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default KeywordAnalysis;