import { FireSQL } from 'firesql';
import admin from "firebase-admin";
import 'firebase/firestore';
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

    try {
        const citiesPromise = fireSQL.query(`
        SELECT * FROM filmes 
      `);

      citiesPromise.then(filmes => {
        for (const filme of filmes) {
            console.log(
                `${filme.id} in ${filme.titulo} has ${filme.descricao} descricao`
            );
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).json(filmes);
            res.send( filmes).json();
        }
    })

    } catch (error) {
        res.status(500).json(error);
        res.setHeader('Content-Type', 'text/plain');
        res.end('Cannot ' + req.method + ' ' + req.url);
        res.send(error);
    }

})

const db = admin.firestore();
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`);
})