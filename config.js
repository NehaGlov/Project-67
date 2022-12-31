import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyBu27X3We44EU2zTfLVHGp7QzMp3KteysA",
        authDomain: "team-voting-app-9734b.firebaseapp.com",
        databaseURL: "https://team-voting-app-9734b-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-9734b",
        storageBucket: "team-voting-app-9734b.appspot.com",
        messagingSenderId: "1080750649663",
        appId: "1:1080750649663:web:222697fc3d276b4c62a38a"
      
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();