// const mysql = require('mysql')

// const conexao = mysql.createConnection({
//     host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     port: 3306,
//     user: 'pruwg1xmxu5oiazh',
//     password: 'wi8tvx0epq1948rb',
//     database: 'bghm1fgr0xbsqc3j'
// })

// module.exports = conexao

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB71tQYUcPpvWapV_FmjEplmlK_KGC9pnA",
    authDomain: "alura-challenge-be.firebaseapp.com",
    projectId: "alura-challenge-be",
    storageBucket: "alura-challenge-be.appspot.com",
    messagingSenderId: "542441898014",
    appId: "1:542441898014:web:e65b10fbb4b7860c866e0f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

module.exports = initializeApp(firebaseConfig);