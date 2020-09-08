import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDd-3pQqBwU8rX2MILiDdbNkwywy9M--KA",
    authDomain: "twitter-clone-bd360.firebaseapp.com",
    databaseURL: "https://twitter-clone-bd360.firebaseio.com",
    projectId: "twitter-clone-bd360",
    storageBucket: "twitter-clone-bd360.appspot.com",
    messagingSenderId: "1016318029928",
    appId: "1:1016318029928:web:6448630548976ffbc50bdd",
    measurementId: "G-RSS51X9YDV"
  };
const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
export default db;

