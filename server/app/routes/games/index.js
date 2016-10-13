const router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
const _ = require('lodash');
const firebase = require('firebase');
const firebaseDB = require('../../../firebase');
const gameDB = firebaseDB.ref().child('game');
const gameGenerator = require('../../utilities/game/gameGenerator.js');

router.post('/createGame', function(req,res){

    let user = String(req.user.id) || 'user';
    let newGame = gameGenerator.generate();
    newGame.users = [user];
    newGame.squadname = req.body.squadname;
    newGame.modPerPerson = +req.body.modPerPerson;
    newGame.timePerMod = req.body.timePerMod;
    newGame.creatorId = user;
    let game = gameDB.push(newGame);
    game.once('value', function(snap){
        res.send(snap.key);
    })
});

router.post('/logGame', function(req, res){

    console.log(req.body);
    res.sendStatus(200);

});

router.put('/joinGame', function(req,res){
    let user = String(req.user.id) || 'user';
    let gamePass = String(req.body.gamePass) || 'gamePass';
    gameDB.orderByChild('gamePass').equalTo(gamePass).once("value",function(snap){
        if(!snap.val()){
            res.sendStatus(404);
        } else {
            let key = Object.keys(snap.val())[0];
            let game = snap.val()[key];
            let users = game.users;
            if(users.indexOf(user)!==-1){ // let users return to game
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

router.put('/startGame/:gameKey', function(req, res, next) {
    let gameKey = req.params.gameKey;
    gameDB.child(gameKey).once('value', function(snap) {
        let thisGame = snap.val();
        gameGenerator.update(thisGame);
        return gameDB.child(gameKey).set(thisGame);
    })
    .then(updatedGame => res.send(updatedGame))
    .catch(updatedGame => res.send(updatedGame));
});
