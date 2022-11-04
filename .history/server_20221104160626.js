// import app from './src/app.js'

// const port = process.env.PORT || 3008;


// app.listen(port, () => {
//   console.log(`Servidor escutando em http://localhost:${port}`)
// })

import express, { json, urlencoded } from "express";
const qpp = express();

import { initializeApp, credential as _credential, firestore } from "firebase-admin";
const credentials = requiser(".key.json");

initializeApp({
  credential: _credential.cert(credentials)
});

const db = firestore();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3009;

app.listen(PORT, () =>{
  console.log('Server is running on PORT ${PORT}.');
})