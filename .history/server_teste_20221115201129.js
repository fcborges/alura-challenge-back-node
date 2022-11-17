import { FireSQL } from 'firesql';
// import firebase from 'firebase/app';
import admin from "firebase-admin";
import 'firebase/firestore';
 
// firebase.initializeApp({ /* ... */ });

const credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

 
const fireSQL = new FireSQL(firebase.firestore());
 
const citiesPromise = fireSQL.query(`
  SELECT name AS city, country, population AS people
  FROM cities
  WHERE country = 'USA' AND population > 700000
  ORDER BY country, population DESC
  LIMIT 10
`);
 
citiesPromise.then(cities => {
  for (const city of cities) {
    console.log(
      `${city.city} in ${city.country} has ${city.people} people`
    );
  }
});