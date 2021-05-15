import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBa8EKqajaOmC2NL_HT-MN27OCZ1vz1Ltk",
  authDomain: "book-santa-477ec.firebaseapp.com",
  projectId: "book-santa-477ec",
  storageBucket: "book-santa-477ec.appspot.com",
  messagingSenderId: "454025301986",
  appId: "1:454025301986:web:a0feee54799c30ee6c33bb"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

