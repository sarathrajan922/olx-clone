import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNeKI6xTffS4WD0QHict--BmqXqJ53Hrk",
    authDomain: "olx-clone-1de00.firebaseapp.com",
    projectId: "olx-clone-1de00",
    storageBucket: "olx-clone-1de00.appspot.com",
    messagingSenderId: "951382702140",
    appId: "1:951382702140:web:4c2c587ab25d3fc4fdab39",
    measurementId: "G-3JN15QGWMD"
  };

  export default firebase.initializeApp(firebaseConfig)