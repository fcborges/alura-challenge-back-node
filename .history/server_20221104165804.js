// import app from './src/app.js'

// const port = process.env.PORT || 3008;


// app.listen(port, () => {
//   console.log(`Servidor escutando em http://localhost:${port}`)
// })

const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

app.post('/create', async (req, res) => {
  try {
    console.log(req);
    const id = req.body.id;
    const filmeJson = {
      id: req.body.id,
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      url: req.body.url
    };
    const response = db.collection("filmes").doc(id).set(filmeJson);
    res.send(response);
  }catch (error) {
    console.error(error);
    res.send(error);
  }
})

const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
})