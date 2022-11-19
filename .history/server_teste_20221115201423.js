import { FireSQL } from 'firesql';
// import firebase from 'firebase/app';
import admin from "firebase-admin";
import 'firebase/firestore';
 
// firebase.initializeApp({ /* ... */ });

import credentials from "./key.json" assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

 
const fireSQL = new FireSQL(admin.firestore());
 
const citiesPromise = fireSQL.query(`
  SELECT * FROM filmes
`);
 
citiesPromise.then(cities => {
  for (const city of cities) {
    console.log(
      `${city.city} in ${city.country} has ${city.people} people`
    );
  }
});