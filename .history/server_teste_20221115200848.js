import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firebase/firestore';
 
firebase.initializeApp({ /* ... */ });
 
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