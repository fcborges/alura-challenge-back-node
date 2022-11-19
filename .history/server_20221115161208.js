// import app from './src/app.js'
// const port = process.env.PORT || 3008;
// app.listen(port, () => {
//   console.log(`Servidor escutando em http://localhost:${port}`)
// })

// import { tabelas } from './infraestrutura/tabelas.js'
const express = require("express");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./key.json");
// const tabelas = require("./infraestrutura/tabelas");

// import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FireSQL = require("firesql");


firebase.initializeApp({ /* ... */ });

const fireSQL = new FireSQL(firebase.firestore());

const filmesPromise = fireSQL.query(`SELECT * FROM filmes`);

filmesPromise.then(filmes => {
    for (const filme of filmes) {
        console.log(
            `${filme.id} in ${filme.titulo} has ${filme.descricao} descricao`
        );
    }
});


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
    // const filmesRef = db.collection("filmes");
    // const response = await filmesRef.get();
    // let responseArr = [];
    // response.forEach(doc => {
    //   responseArr.push(doc.data());
    // });
    // res.send(responseArr);
    res.send(filmesPromise);
  } catch (error) {
    res.send(error);
  }

})

app.get('/read/:id', async (req, res) => {
  try {
    const filmeRef = db.collection("filmes").doc(req.params.id);
    const response = await filmeRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

app.post('/update', async (req, res) => {
  try {
    const id = req.body.id;
    const newTitulo = req.body.titulo;
    const newDescricao = req.body.descricao;
    const newUrl = req.body.url;
    const newCategoria = req.body.categoria;

    const filmesRef = db.collection("filmes").doc(id)
      .update({
        titulo: newTitulo,
        descricao: newDescricao,
        url: newUrl,
        categoria: newCategoria
      });
    console.log("Atualizado com sucesso");
    res.send(filmesRef);    
  } catch (error) {
    res.send(error);
  }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    const response = await db.collection("filmes").doc(req.params.id).delete(); 
    console.log("Deletado com sucesso");
    res.send(response);    
  } catch (error) {
    res.send(error);
  }
})

const db = admin.firestore();
const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
})