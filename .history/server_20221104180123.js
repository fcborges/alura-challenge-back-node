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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create', async (req, res) => {
  try {
    console.log(req.body.status);
    const id = req.body.id;
    const filmeJson = {
      id: req.body.id,
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      url: req.body.url
    };
    const response = await db.collection("filmes").add(filmeJson);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
})

app.get('/filmes/all', async (req, res) => {
  try {
    const filmesRef = db.collection("filmes");
    const response = await filmesRef.get();
    let responseArr = [];
    response.forEach(doc => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }

})

const db = admin.firestore();
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
})