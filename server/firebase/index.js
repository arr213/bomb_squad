var firebase = require("firebase");
var firebaseConfig = require('../env/firebase.js');

firebase.initializeApp({
        serviceAccount: firebaseConfig,
        databaseURL: "https://bombsquad-74087.firebaseio.com"
    });

var myFirebase = firebase.database();

module.exports = myFirebase;