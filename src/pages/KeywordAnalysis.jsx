import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/Modal/LoginModal";

const topics = [
  {
    title: "Hiring for Frontend Job",
    description: "Find potential candidates for frontend positions",
    keywords: ["frontend development", "job recruitment" , "UI/UX design"],
  },
  {
    title: "Leads for Marketing",
    description: "Discover potential marketing leads and trends",
    keywords: ["marketing strategies", "lead generation", "digital marketing"]
  },
  {
    title: "News on B2B",
    description: "Stay updated on the latest B2B news and trends",
    keywords: ["B2B trends", "business-to-business", "enterprise solutions"]
  },
  {
    title: "Crypto Market Trends",
    description: "Track the latest developments in the cryptocurrency market",
    keywords: ["cryptocurrency news", "blockchain technology", "crypto investments"]
  },
  {
    title: "AI in Healthcare",
    description: "Explore AI applications and breakthroughs in the healthcare industry",
    keywords: ["healthcare technology", "artificial intelligence", "medical AI applications"]
  },
  {
    title: "Sustainable Fashion",
    description: "Discover trends and innovations in sustainable fashion",
    keywords: ["eco-friendly fashion", "sustainable clothing", "green fashion trends"]
  },
  {
    title: "Remote Work Tools",
    description: "Find the latest tools and strategies for effective remote work",
    keywords: ["remote collaboration", "productivity tools", "work-from-home software"]
  },
  {
    title: "Electric Vehicle Market",
    description: "Stay informed about developments in the electric vehicle industry",
    keywords: ["electric cars", "EV industry", "sustainable transportation"]
  },
  {
    title: "Mental Health Awareness",
    description: "Explore discussions and resources related to mental health",
    keywords: ["mental well-being", "mental health support", "psychological health"]
  },
  {
    title: "Fintech Innovations",
    description: "Explore the latest trends and technologies in financial technology",
    keywords: ["financial technology", "digital payments", "fintech startups"]
  },
  {
    title: "Space Exploration News",
    description: "Stay updated on the latest developments in space exploration and technology",
    keywords: ["space missions", "space technology", "NASA updates"]
  },
  {
    title: "Green Energy Solutions",
    description: "Track advancements in renewable energy technologies and sustainable power solutions",
    keywords: ["renewable energy", "solar power", "green technology"]
  },
];
const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
  </div>
);

const ErrorModal = ({ error, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Error</h2>
        <p className="mb-6">{error}</p>
        <div className="flex justify-end">
          <button
            className="bg-white text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ setIsLoading, setError }) => {
  const [keywords, setKeywords] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!keywords) {
      setError("Please enter keywords.");
      return;
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }
    if (!results || isNaN(results) || results <= 0) {
      setError("Please enter a valid number of results.");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keywords,
          start_date: date,
          num_results: parseInt(results, 10),
          // email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      navigate("/results", { state: { results: data.results } });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mb-4">
      <input
        type="text"
        placeholder="Please Provide Three Keywords"
        className="flex-grow p-2 bg-zinc-800/50 text-white rounded"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <input
        type="date"
        className="p-2 bg-zinc-800/50 text-white rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Results"
        className="p-2 bg-zinc-800/50 text-white rounded"
        value={results}
        onChange={(e) => setResults(e.target.value)}
      />
      <input
        type="email"
        placeholder="Receiver's Email"
        className="p-2 bg-zinc-800/50 text-white rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="p-2 bg-blue-600 text-white px-8 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

const TopicCard = ({ title, description, keywords, onCardClick, isDisabled }) => {
  return (
    <div 
      className={`bg-zinc-800/50 p-4 rounded-lg relative ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
      onClick={() => !isDisabled && onCardClick(title, keywords)}
    >
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const KeywordAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = async (title, keywords) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      setShowLoginModal(true);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/run_campaign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
          },
          body: JSON.stringify({ campaignName: title, keywords }),
        }
      );

      if (!response.ok) {
        throw new Error("Server is busy. Please try again later.");
      }

      const data = await response.json();
      navigate("/results", { state: { results: data.results } });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 relative">
      <div className="max-w-7xl w-full mx-auto py-10 px-6">
        <SearchBar setIsLoading={setIsLoading} setError={setError} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              title={topic.title}
              description={topic.description}
              keywords={topic.keywords}
              onCardClick={handleCardClick}
              isDisabled={isLoading}
            />
          ))}
        </div>
      </div>
      {isLoading && <Loader />}
      {error && <ErrorModal error={error} onClose={() => setError(null)} />}
      {showLoginModal && (
        <LoginModal setShowLoginModal={setShowLoginModal} />
      )}
    </div>
  );
};

export default KeywordAnalysis;