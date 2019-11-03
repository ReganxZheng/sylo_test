import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB8Z-jTl6ZuSH2-lckvGJ0QbuXx0BMjn1s',
  authDomain: 'gistexample.firebaseapp.com',
  databaseURL: 'https://gistexample.firebaseio.com',
  projectId: 'gistexample',
  storageBucket: 'gistexample.appspot.com',
  messagingSenderId: '868701942281',
  appId: '1:868701942281:web:7288be72e3cbb3499efed8',
  measurementId: 'G-MTPR7M678Q'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
