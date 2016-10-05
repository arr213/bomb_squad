const router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
const _ = require('lodash');
const firebase = require('firebase');
const firebaseDB = require('../../../firebase');
const gameDB = firebaseDB.ref().child('game');
const gameGen = require('../../utilities/game/gameGenerator.js');

router.post('/addGame', function(req,res){
    console.log(req.user.id);
    let user = String(req.user.id) || 'user';
    let newGame = gameGen.generate();
    newGame.users = [user];
    console.log("hitting route!!!!!---------------");
    let gameKey = gameDB.push(newGame);
    gameKey.once('value', function(snap){
        res.send(snap.key);
    })
});

router.put('/joinGame', function(req,res){
    let user = String(req.user.id) || 'user';
    console.log(req.body);
    let gamePass = String(req.body.gamePass) || 'gamePass';
    console.log("hitting route!!!!!---------------");
    gameDB.orderByChild('gamePass').equalTo(gamePass).once("value",function(snap){
        if(!snap.val()){
            console.log("Not found");
            res.sendStatus(404);
        } else {
            let key = Object.keys(snap.val())[0];
            let game = snap.val()[key];
            let users = game.users;
            if(users.indexOf(user)!==-1 || users.length>3){
                res.sendStatus(401);
                return;
            }
            users.push(user);
            let joinGame = gameDB.child(key);
            joinGame.update({users: users})
            .then(function(updating){
                 res.send(key);
            }) //async so use then...
        }
    });
});