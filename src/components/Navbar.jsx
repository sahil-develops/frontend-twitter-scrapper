import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './Modal/LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { ease: "easeInOut", duration: 0.3 }
    }
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <nav className="bg-gray-900 text-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">ListenUp!</span>
          </a>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" className="border-b-2 border-transparent hover:border-gray-600 text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Product
          </a>
          <a href="#" className="border-b-2 border-transparent hover:border-gray-600 text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Features
          </a>
          <a href="#" className="border-b-2 border-transparent hover:border-gray-600 text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
            Contact
          </a>
          {/* ... repeat for other nav items ... */}
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button onClick={handleLoginClick} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Log in
          </button>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ease-in">
            Get started
          </a>
        </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-gray-800 shadow-xl z-50 overflow-y-auto sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">ListenUp!</span>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="text-base font-medium text-white ">
                    Product
                  </a>
                  <a href="#" className="text-base font-medium text-white ">
                    Use cases
                  </a>
                  <a href="#" className="text-base font-medium text-white ">
                    Pricing
                  </a>
                  <a href="#" className="text-base font-medium text-white ">
                    Resources
                  </a>
                </nav>
              </div>
            </div>
            <div className="pt-5 pb-6 px-5 border-t border-gray-700">
              <a href="#" className="block w-full px-4 py-2 text-center text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                Log in
              </a>
              <a href="#" className="block w-full px-4 py-2 mt-4 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-150 ease-in">
                Get started
              </a>
            </div>
          </motion.div>
        )}
        {showLoginModal && (
          <>
          {/* <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Log in</h2>
                <button 
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <button 
                
                className="w-full bg-white text-gray-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
                Sign in with Google
              </button>
            </div>
          </motion.div> */}
          <LoginModal setShowLoginModal={setShowLoginModal} />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;