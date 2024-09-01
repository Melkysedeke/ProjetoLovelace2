import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKNUORteNbLoP2JoqDSe_EgXJELJft_AE",
  authDomain: "react-auth-b46de.firebaseapp.com",
  projectId: "react-auth-b46de",
  storageBucket: "react-auth-b46de.appspot.com",
  messagingSenderId: "737089199723",
  appId: "1:737089199723:web:5921dda948268fa64fdb2e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);