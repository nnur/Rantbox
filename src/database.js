import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDHRykps-cLf7rpldpwJ_nyK7rfEdbY6cI',
  authDomain: 'rantbox-3150d.firebaseio.com',
  databaseURL: 'https://rantbox-3150d.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;