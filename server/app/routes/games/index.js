var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
var _ = require('lodash');
var firebase = require('firebase');
var firebaseDB = require('../../../firebase');
var gameDB = firebaseDB.ref().child('game');

router.post('/addGame', function(req,res){
    var gameMod = {title: "cool2", gamePass: "Password2", users: ['OP']};
    console.log("hitting route!!!!!---------------");
    gameDB.push(gameMod);
    res.sendStatus(201);
});

router.get('/joinGame', function(req,res){
    var password = "Password2"
    console.log("hitting route!!!!!---------------");
    gameDB.orderByChild('gamePass').equalTo(password).once("value",function(snap){
        if(!snap.val()){
            console.log("Not found");
            res.sendStatus(404);
        } else {
            //gameDB.child()
            //snap.ref().push({'user': 'user'});
            console.log(snap.val());
            var key;
            for(var i in snap.val()){
                key = i;
            }
            var game = snap.val()[key];
            var users = game.users;
            console.log(users);
            users.push('user2');
            var joinGame = gameDB.child(key);
            joinGame.update({users: users});
            res.sendStatus(200);
        }
    });
});