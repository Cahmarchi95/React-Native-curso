import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyAkFcLZctfl8zDp9EAY5ld5c2O7SH1Rgq0",
  authDomain: "meuapp-30b1c.firebaseapp.com",
  databaseURL: "https://meuapp-30b1c-default-rtdb.firebaseio.com",
  projectId: "meuapp-30b1c",
  storageBucket: "meuapp-30b1c.appspot.com",
  messagingSenderId: "452776173523",
  appId: "1:452776173523:web:31043f4b3fc7b8aaed5926",
  measurementId: "G-NVE28NYDC7",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
