import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA7SLKcfVaMK-9FfykV4eUjstKK8yTkYdQ",
  authDomain: "catch-of-the-day-7c665.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-7c665.firebaseio.com",
  projectId: "catch-of-the-day-7c665",
  storageBucket: "catch-of-the-day-7c665.appspot.com",
  messagingSenderId: "565977514029"
})
const base = Rebase.createClass(app.database());

export default base;
