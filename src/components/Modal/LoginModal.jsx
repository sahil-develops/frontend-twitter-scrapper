import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react'; // Assuming you're using lucide-react for icons
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const LoginModal = ({ setShowLoginModal }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken(); // Extract the JWT token
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('jwtToken', token); // Store the JWT token
      console.log("User signed in:", user);
      setShowLoginModal(false);
    // Once the user is signed in, navigate to the home page
      navigate('/');
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <div className="bg-black p-8 rounded-lg shadow-xl max-w-sm w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Log in</h2>
          <button 
            onClick={() => setShowLoginModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <button 
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-gray-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>
      </div>
    </motion.div>
  );
};

export default LoginModal;