import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBDn9eUpjJkFPxNMyJBBYtP-HUPJe_Q4XY",
  authDomain: "artifact-c95dc.firebaseapp.com",
  projectId: "artifact-c95dc",
  storageBucket: "artifact-c95dc.appspot.com",
  messagingSenderId: "836863732720",
  appId: "1:836863732720:web:cef90fc4888152961e8b35"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
export default app;