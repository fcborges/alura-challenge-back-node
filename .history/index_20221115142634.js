const fs = require('firebase-admin');
const serviceAccount = require('./path/to/key.json');
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});
const citiesRef = db.collection('videos');
const snapshot = await citiesRef.where('capital', '==', true).get();
if (snapshot.empty) {
  console.log('No matching documents.');
  return;
}  
snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});
// const customExpress = require('./config/customExpress')
// const conexao = require('./infraestrutura/conexao')
// const Tabelas = require('./infraestrutura/tabelas')

// conexao.connect(erro => {
//     if(erro) {
//         console.log(erro)
//     } else {
//         console.log('conectado com sucesso')
        
//         Tabelas.init(conexao)
        
//         const app = customExpress()

//         app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
//     }
// })
