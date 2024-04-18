/* eslint-disable no-unused-vars */
import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhzHDh5ptnjOE92h2f24eiAl7pDB3UtcA",
  authDomain: "netflix-clone-a974c.firebaseapp.com",
  projectId: "netflix-clone-a974c",
  storageBucket: "netflix-clone-a974c.appspot.com",
  messagingSenderId: "662467600600",
  appId: "1:662467600600:web:906285f9cbe9ae356177ad"
};

 export  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app);
  export const db = getFirestore(app)