import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHPMfQ9VLcMKEAlDH8v8Re6jzON-iOU90",
  authDomain: "draft-football.firebaseapp.com",
  databaseURL: "https://draft-football.firebaseio.com",
  projectId: "draft-football",
  storageBucket: "draft-football.appspot.com",
  messagingSenderId: "8477449031",
  appId: "1:8477449031:web:1ddb03c8c607977b6c0a62",
  measurementId: "G-ML840KZGXH"
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();