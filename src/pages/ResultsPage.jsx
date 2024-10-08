import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ResultsPage = () => {
  const location = useLocation();
  const results = location.state?.results || []; // Ensure results is an array

  // Function to extract author name from tweet URL
  const getAuthorFromId = (id) => {
    const idParts = id.split("/");
    return idParts.length > 3 ? idParts[3] : "Unknown Author"; // Extract username from ID
  };

    // Function to truncate text to a specified length
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "..."; // Add ellipsis if truncated
      }
      return text;
    };

    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-7xl w-full mx-auto py-10 px-6">
          <h2 className="text-3xl font-bold mb-6">Search Results</h2>
  
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Keyword: {result.keyword}
                </h3>
  
                <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" /> {/* Twitter Icon */}
                  Tweets
                </h4>                  
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {result.tweets.length > 0 ? (
                      result.tweets.map((tweet, idx) => {
                        const author = tweet.author || getAuthorFromId(tweet.id); // Use author or extract from ID
                        return (
                          <div key={idx} className="bg-zinc-800/50 p-4 rounded-lg">
                            <h5 className="text-white font-bold">{author}</h5>
                            {/* Display title if available, otherwise display text */}
                            <h6 className="text-gray-300">
                              {tweet.title ? truncateText(tweet.title, 100) : null}
                            </h6>
                            {/* Only display text if title is not available */}
                            {!tweet.title && (
                              <p className="text-gray-300">{truncateText(tweet.text, 100)}</p>
                            )}
                            <a
                              href={tweet.url}
                              className="text-blue-400 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Tweet
                            </a>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-gray-400">No tweets found.</p>
                    )}
                  </div>
                </div>
  
                <div>
                <h4 className="text-lg font-bold mb-2">
                  <FontAwesomeIcon icon={faYoutube} className="mr-2" /> {/* YouTube Icon */}
                  Youtube Links
                </h4>                  
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {result.web.length > 0 ? (
                      result.web.map((web, idx) => (
                        <div key={idx} className="bg-zinc-800/50 p-4 rounded-lg">
                          <h5 className="text-white font-bold">
                            {web.author || "Unknown Author"}
                          </h5>
                          {/* Display title if available, otherwise display text */}
                          <h6 className="text-gray-300">
                            {web.title ? truncateText(web.title, 100) : null}
                          </h6>
                          {/* Only display text if title is not available */}
                          {!web.title && (
                            <p className="text-gray-300">{truncateText(web.text, 100)}</p>
                          )}
                          <a
                            href={web.url}
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View It On Youtube
                          </a>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400">No web links found.</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default ResultsPage;