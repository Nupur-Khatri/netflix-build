import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2ETszuyLIhWIkQwJKJIYvd2SepoVykJc",
    authDomain: "netflix-cc5dd.firebaseapp.com",
    projectId: "netflix-cc5dd",
    storageBucket: "netflix-cc5dd.appspot.com",
    messagingSenderId: "509049287052",
    appId: "1:509049287052:web:575c3ef62e82fa353966a9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;