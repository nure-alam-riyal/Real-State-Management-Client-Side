import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY, 
  authDomain:import.meta.env.VITE_AUTHDOMAIN, 
  projectId:import.meta.env.VITE_projectId, 
  storageBucket:import.meta.env.VITE_storageBucket, 
  messagingSenderId:import.meta.env.VITE_messagingSenderId, 
  appId:import.meta.env.VITE_appId, 
  // measurementId:import.meta.env.VITE_measurementId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// echo "# b10a12-client-side-nure-alam-riyal" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-nure-alam-riyal.git
// git push -u origin main