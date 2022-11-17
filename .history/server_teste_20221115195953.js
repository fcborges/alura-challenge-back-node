// const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();
// const firebase = require('firebase');    

// service account file custom for serve    
var serviceAccount = require("./key.json"); // for deploying you need to delete it

// admin credential for localhost or emulator
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "database_url"
});

// Firebase SDK configuration        
const config ={
    //firebase config
};

// admin.initializeApp(config);
    
const db = admin.firestore();