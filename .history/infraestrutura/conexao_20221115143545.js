// const mysql = require('mysql')

// const conexao = mysql.createConnection({
//     host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     port: 3306,
//     user: 'pruwg1xmxu5oiazh',
//     password: 'wi8tvx0epq1948rb',
//     database: 'bghm1fgr0xbsqc3j'
// })

// module.exports = conexao

import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "auth-domain",
    databaseURL: "database-url",
    projectId: "project-id",
    storageBucket: "sotrage-bucket",
    messagingSenderId: "messaging-sender-id",
    appId: "app-id"
  };

  module.exports = firebase.initializeApp(firebaseConfig);