import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="bg-white  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">ListenUp!</span>
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Product
            </a>
            <a href="#" className="border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Use cases
            </a>
            <a href="#" className="border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Resources
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Log in
            </a>
            <a href="#" className="bg-black hover:scale-105 transition-all duration-150 ease-in text-white px-4 py-2 rounded-md text-sm font-medium">
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
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto sm:hidden"
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
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Product
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Use cases
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Resources
                  </a>
                </nav>
              </div>
            </div>
            <div className="pt-5 pb-6 px-5 border-t border-gray-200">
              <a href="#" className="block w-full px-4 py-2 text-center text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                Log in
              </a>
              <a href="#" className="block w-full px-4 py-2 mt-4 text-center text-base font-medium text-white bg-black hover:scale-105 transition-all duration-150 ease-in rounded-md">
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;