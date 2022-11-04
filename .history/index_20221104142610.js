const fs = require('firebase-admin');

const serviceAccount = require('./path/to/key.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});