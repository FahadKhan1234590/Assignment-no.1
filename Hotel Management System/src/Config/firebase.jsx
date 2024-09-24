import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA1ZK0xXCgZCitXz6V5gKRi5MnarVPx-eg",
    authDomain: "project2-e888f.firebaseapp.com",
    projectId: "project2-e888f",
    storageBucket: "project2-e888f.appspot.com",
    messagingSenderId: "147659336131",
    appId: "1:147659336131:web:cc894205a7ba679b617576"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);



// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(app);

export   {auth,database};
   