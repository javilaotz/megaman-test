import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAchYEi2Ox_8riCua1C64onkiMDlrPZjjU",
  authDomain: "megaman-4aba9.firebaseapp.com",
  databaseURL: "https://megaman-4aba9.firebaseio.com",
  projectId: "megaman-4aba9",
  storageBucket: "megaman-4aba9.appspot.com",
  messagingSenderId: "499632076270",
  appId: "1:499632076270:web:a6bc73d999837e2cb20aff",
  measurementId: "G-4KDSR9ZYKH"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

export default firebase