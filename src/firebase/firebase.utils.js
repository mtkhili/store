import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyApMHbOtoW4r_5QoArq4rBvgBkCWdFHbc4",
    authDomain: "store-99edb.firebaseapp.com",
    databaseURL: "https://store-99edb.firebaseio.com",
    projectId: "store-99edb",
    storageBucket: "",
    messagingSenderId: "822154713138",
    appId: "1:822154713138:web:940aed375ea92cdb9c442b"

  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

