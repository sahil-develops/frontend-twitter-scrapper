import React from 'react';
import { FaSearch, FaFlag, FaCity, FaGoogle, FaInfoCircle, FaRobot, FaCopy, FaDownload } from 'react-icons/fa';

const KeywordAnalysis = () => {
  const analysisCards = [
    {
      title: "SERP Parasite Score",
      score: "Medium",
      value: 77,
      paid: 7,
      free: 7,
      imageUrl: "https://images.pexels.com/photos/1624881/pexels-photo-1624881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Parasite Opportunity Score",
      score: "High",
      value: 79,
      paid: 10,
      free: 5,
      imageUrl: "https://images.pexels.com/photos/1624881/pexels-photo-1624881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Primary Category",
      score: "Astrology & Horoscopes",
      subtext: "Zodiac Signs, Horoscopes",
      imageUrl: "https://images.pexels.com/photos/1624881/pexels-photo-1624881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Search Form */}
      <div className="grid max-w-7xl px-8 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="lg:col-span-2">
          <label className="block mb-2">Keyword *</label>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="astrology signs" className="w-full bg-gray-800 rounded-md py-2 pl-10 pr-3" />
          </div>
        </div>
        <div>
          <label className="block mb-2">Search Engine *</label>
          <div className="relative">
            <FaGoogle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-gray-800 rounded-md py-2 pl-10 pr-3 appearance-none">
              <option>Google</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2">Country *</label>
          <div className="relative">
            <FaFlag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-gray-800 rounded-md py-2 pl-10 pr-3 appearance-none">
              <option>United States</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2">City</label>
          <div className="relative">
            <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select className="w-full bg-gray-800 rounded-md py-2 pl-10 pr-3 appearance-none">
              <option>Any City</option>
            </select>
          </div>
        </div>
      </div>
<div className='max-w-7xl px-8 w-full mx-auto'>

      {/* Analyze Button */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-8">
        <FaSearch className="inline-block mr-2" /> ANALYZE
      </button>

      {/* Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Keyword: astrology signs</h2>
        <p className="text-gray-400 mb-4">
          <FaFlag className="inline-block mr-2" /> US Search Volume: 210,000
        </p>
        <div className="flex space-x-4">
          <FaRobot className="text-gray-400" />
          <FaCopy className="text-gray-400" />
          <FaDownload className="text-gray-400" />
        </div>
      </div>
</div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 max-w-7xl px-8 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analysisCards.map((card, index) => (
          <AnalysisCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const AnalysisCard = ({ title, score, value, paid, free, subtext, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title} <FaInfoCircle className="inline-block text-gray-400" /></h3>
        <img src={imageUrl} alt="Random" className="w-16 h-16 rounded-full object-cover" />
      </div>
      <div className="text-3xl font-bold mb-4">{score}</div>
      {value && (
        <div className="text-xl mb-2">
          {value}<span className="text-sm text-gray-400">/100</span>
        </div>
      )}
      {paid && free && (
        <div>
          <span className="bg-purple-600 text-white px-2 py-1 rounded mr-2">Paid: {paid}</span>
          <span className="text-gray-400">Free: {free}</span>
        </div>
      )}
      {subtext && <p className="text-gray-400">{subtext}</p>}
    </div>
  );
};

export default KeywordAnalysis;