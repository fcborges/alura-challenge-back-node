const fs = require('firebase-admin');

const serviceAccount = require('./path/to/key.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const citiesRef = db.collection('filmes');
const snapshot = await citiesRef.where('capital', '==', true).get();
if (snapshot.empty) {
  console.log('No matching documents.');
  return;
}  

snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});