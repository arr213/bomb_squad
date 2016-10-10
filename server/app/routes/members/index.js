'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
var _ = require('lodash');
var User = require('../../../db/models/user.js');

var ensureAuthenticated = function (req, res, next) {
    var err;
    if (req.isAuthenticated()) {
        next();
    } else {
        err = new Error('You must be logged in.');
        err.status = 401;
        next(err);
    }
};

router.post('/', function(req, res, next) {
    User.create(req.body)
    .then(function(user) {
        res.status(201).send(user);
    })
    .catch(next);
});

router.get('/name/:id', function(req,res,next){
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(function(findingUser){
        res.send(findingUser.email);
    });
});
