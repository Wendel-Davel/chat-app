
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZj_AtEht0rLPs0JB6xSgcYzOair1RWdY",
  authDomain: "app-chat-588f6.firebaseapp.com",
  projectId: "app-chat-588f6",
  storageBucket: "app-chat-588f6.appspot.com",
  messagingSenderId: "976370179392",
  appId: "1:976370179392:web:937004fb81717af48eaea5"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
