import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGJui8gTX4PtIhhD77SqBSW64HYyWPFHc",
    authDomain: "slack-project-5213a.firebaseapp.com",
    projectId: "slack-project-5213a",
    storageBucket: "slack-project-5213a.appspot.com",
    messagingSenderId: "56930219507",
    appId: "1:56930219507:web:67e3dac7ec64e1f9688e86",
    measurementId: "G-L62E0B1CHD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;