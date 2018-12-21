import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBw9gK-wImbfL7zz4o8pqGN9xfrHJr44uQ",
    authDomain: "m-city-f9989.firebaseapp.com",
    databaseURL: "https://m-city-f9989.firebaseio.com",
    projectId: "m-city-f9989",
    storageBucket: "m-city-f9989.appspot.com",
    messagingSenderId: "437136729546"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');
export {
    firebaseDB,
    firebaseMatches
}