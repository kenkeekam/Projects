import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAK0gdOVrA6ohZfyhbwUURcIb_A9sPtyNg",
    authDomain: "challenge-38ceb.firebaseapp.com",
    databaseURL: "https://challenge-38ceb.firebaseio.com",
    projectId: "challenge-38ceb",
    storageBucket: "challenge-38ceb.appspot.com",
    messagingSenderId: "853918127105",
    appId: "1:853918127105:web:949230e9fafb79a8af9c00",
    measurementId: "G-EGXTY4WQYR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };