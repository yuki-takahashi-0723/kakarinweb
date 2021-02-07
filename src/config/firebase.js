import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCSSfU57jQ43bFyvAFdzlX_crHKNuURZd4",
    authDomain: "humweb-d0f8f.firebaseapp.com",
    projectId: "humweb-d0f8f",
    storageBucket: "humweb-d0f8f.appspot.com",
    messagingSenderId: "16702607683",
    appId: "1:16702607683:web:73fd2844aac9c955e85ff6",
    measurementId: "G-K4B6J4S74H"
  };
firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()
  export const storege = firebase.storage()
  export const timestamp = firebase.firestore.Timestamp
  export const auth = firebase.auth()