import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOLrTBLibQeEo6v7q3WOxKQVtqD2sY9fk",
  authDomain: "ecommerce-db-1bb05.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1bb05.firebaseio.com",
  projectId: "ecommerce-db-1bb05",
  storageBucket: "ecommerce-db-1bb05.appspot.com",
  messagingSenderId: "1060192536803",
  appId: "1:1060192536803:web:9cb78cc0484187c88d1dd6",
  measurementId: "G-303NM9RR2T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
