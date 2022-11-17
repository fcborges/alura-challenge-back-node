// const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

var serviceAccount = require("./key.json"); // for deploying you need to delete it

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "localhost"
});

const db = admin.firestore();