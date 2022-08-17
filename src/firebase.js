import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn9P91Yn0NoDSZvxF6f_lWZebTYS5lICI",
  authDomain: "petzey-8a424.firebaseapp.com",
  projectId: "petzey-8a424",
  storageBucket: "petzey-8a424.appspot.com",
  messagingSenderId: "507785676026",
  appId: "1:507785676026:web:82571e6a5ed4af5a9e7543",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
