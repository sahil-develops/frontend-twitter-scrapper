import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1fl4EsCmv3Tmip_Po6iMgV_MQRwnrzbU",
  authDomain: "twittersearch-4f053.firebaseapp.com",
  projectId: "twittersearch-4f053",
  storageBucket: "twittersearch-4f053.appspot.com",
  messagingSenderId: "568470333440",
  appId: "1:568470333440:web:330b1dc75d2c4825bbd0e5",
  measurementId: "G-B9VPJWZH9X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };