import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_VALBuUZwXJdQcRnXfPGozLythd-rfAU",
  authDomain: "reactproject-3e494.firebaseapp.com",
  projectId: "reactproject-3e494",
  storageBucket: "reactproject-3e494.appspot.com",
  messagingSenderId: "537040321066",
  appId: "1:537040321066:web:dc2936d48a5f17178f2153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);


export default database;