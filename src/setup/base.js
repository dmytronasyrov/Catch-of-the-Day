import Rebase from 're-base';
import firebase from 'firebase';

//--------------------------------------------------------------------------------------------------

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
})

const base = Rebase.createClass(app.database());
export default base;
