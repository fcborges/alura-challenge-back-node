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

app.get('/filmes', async (req, res) => {


    const citiesPromise = fireSQL.query(`
        SELECT * FROM filmes 
      `);


    if (error) {
        res.status(500).json(err);
    } else if (!filmes) {
        res.status(404).json();
    }

    citiesPromise.then(filmes => {
        for (const filme of filmes) {
            console.log(
                `${filme.id} in ${filme.titulo} has ${filme.descricao} descricao`
            );
            res.send(filmes);
            res.status(200).json(filmes);
        }
    })

})

const db = admin.firestore();
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`);
})