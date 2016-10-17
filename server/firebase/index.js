var firebase = require("firebase");
var Config = require('../env/development.js');

firebase.initializeApp({
        serviceAccount: Config.FIREBASE,
        databaseURL: "https://bombsquad-74087.firebaseio.com"
    });

var myFirebase = firebase.database();

module.exports = myFirebase;