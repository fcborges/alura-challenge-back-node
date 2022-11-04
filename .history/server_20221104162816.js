// import app from './src/app.js'

// const port = process.env.PORT || 3008;


// app.listen(port, () => {
//   console.log(`Servidor escutando em http://localhost:${port}`)
// })

const express = require("express");
const qpp = express();

const admin = require("firebase-admin");
const credentials = require(".key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3009;

app.listen(PORT, () =>{
  console.log('Server is running on PORT ${PORT}.');
})