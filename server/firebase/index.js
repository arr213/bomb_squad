var firebase = require("firebase");
var express = require('express');
var app = express();
var firebaseConfig = app.get('env').FIREBASE;

firebase.initializeApp({
        serviceAccount: firebaseConfig,
        databaseURL: "https://bombsquad-74087.firebaseio.com"
    });

var myFirebase = firebase.database();

module.exports = myFirebase;