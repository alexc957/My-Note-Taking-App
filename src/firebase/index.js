import Firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyByANENRmuhoWuy7FVU9fowXzb7jFjO6x8",
    authDomain: "everclone-project-85f59.firebaseapp.com",
    projectId: "everclone-project-85f59",
    storageBucket: "everclone-project-85f59.appspot.com",
    messagingSenderId: "563265034200",
    appId: "1:563265034200:web:010dbe07e1fb54794c84ad"
  };

  const firebase = Firebase.initializeApp(firebaseConfig)

  const {FieldValue} = Firebase.firestore;
  
  export {firebase,FieldValue}


