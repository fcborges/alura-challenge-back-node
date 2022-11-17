const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
//put here.
admin.initializeApp();

const db = admin.firestore();

const firebaseConfig = {
// config data

};

const firebase = require('firebase');

firebase.initializeApp(firebaseConfig);