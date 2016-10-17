var firebase = require("firebase");
var firebaseConfig = app.getValue('env').FIREBASE;

firebase.initializeApp({
        serviceAccount: firebaseConfig,
        databaseURL: "https://bombsquad-74087.firebaseio.com"
    });

var myFirebase = firebase.database();

module.exports = myFirebase;