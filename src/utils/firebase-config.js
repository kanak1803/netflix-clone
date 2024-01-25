
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCPdzWDhCrW1otTuZy_GiWKzFvjVD7UjBA",
  authDomain: "react-netflix-clone-ed8d3.firebaseapp.com",
  projectId: "react-netflix-clone-ed8d3",
  storageBucket: "react-netflix-clone-ed8d3.appspot.com",
  messagingSenderId: "53773698698",
  appId: "1:53773698698:web:f3f37c1d7fd08bb4608f73",
  measurementId: "G-3K5RYW7PVB"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
