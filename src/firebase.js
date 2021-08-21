  
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA1Rs4A4zKUsVvrZDoz5p0w6lIsqr01duM",
    authDomain: "ecommerce-f5c8f.firebaseapp.com",
    databaseURL: "https://ecommerce-f5c8f-default-rtdb.firebaseio.com",
    projectId: "ecommerce-f5c8f",
    storageBucket: "ecommerce-f5c8f.appspot.com",
    messagingSenderId: "527713271597",
    appId: "1:527713271597:web:e13df58ae2344251261da4",
    measurementId: "G-JP0RX152MZ"
  };

firebase.initializeApp(config);
export default firebase;