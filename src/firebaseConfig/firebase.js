import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgiP0v0r1JfAmWIxmqI7jH_C1D3sF55AE",
  authDomain: "crud-fire-react-472ff.firebaseapp.com",
  projectId: "crud-fire-react-472ff",
  storageBucket: "crud-fire-react-472ff.appspot.com",
  messagingSenderId: "208147410423",
  appId: "1:208147410423:web:78bcaa5a778604828e12f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//conexion a la base de  datos
export const db = getFirestore(app);