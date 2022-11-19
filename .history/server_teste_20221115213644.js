import { FireSQL } from 'firesql';
// import firebase from 'firebase/app';
import admin from "firebase-admin";
import 'firebase/firestore';
 
// firebase.initializeApp({ /* ... */ });

import credentials from "./key.json" assert { type: 'json' };
import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const fireSQL = new FireSQL(admin.firestore());
 
const citiesPromise = fireSQL.query(`
  SELECT * FROM filmes 
  WHERE id = 4
`);
 
citiesPromise.then(filmes => {
  for (const filme of filmes) {
    console.log(
    `${filme.id} in ${filme.titulo} has ${filme.descricao} descricao`
    );
  }
})

