import firebase from "firebase/app";
import 'firebase/firestore'
let firebaseConfig = {
    apiKey: "AIzaSyCR7j76K_Gij6KPoJLDSVBviiDDq4TUdJU",
    authDomain: "db-test-82b6f.firebaseapp.com",
    databaseURL: "https://db-test-82b6f.firebaseio.com",
    projectId: "db-test-82b6f",
    storageBucket: "db-test-82b6f.appspot.com",
    messagingSenderId: "2294753285",
    appId: "1:2294753285:web:1c6f58005ec135d10bd46c"
};
firebase.initializeApp(firebaseConfig)
export default firebase