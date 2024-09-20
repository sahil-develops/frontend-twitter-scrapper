import React from 'react';

const Hero = () => {
  return (
    <div className='relative'>
    <div className="bg-gradient-to-r  bg-white text-black relative overflow-hidden">
<img src='/dots.svg' className='absolute z-0' />
      <div className="container mx-auto z-50 px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center z-30">
          <h1 className="text-4xl md:text-5xl z-50 font-bold mb-6">
            Discover Top Leads for Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 z-30">
            Streamline your lead generation process with our powerful scraping tool.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 z-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;