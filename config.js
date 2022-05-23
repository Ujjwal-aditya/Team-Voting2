import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyDh0Y33arq4ms9WG8anAOKCTpk1zU3PPDs",
        authDomain: "voting-app-proc-58.firebaseapp.com",
        databaseURL: "https://voting-app-proc-58-default-rtdb.firebaseio.com",
        projectId: "voting-app-proc-58",
        storageBucket: "voting-app-proc-58.appspot.com",
        messagingSenderId: "222486131067",
        appId: "1:222486131067:web:6edf4544a729cd6cf40dde"
      
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();