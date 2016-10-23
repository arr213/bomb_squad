'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
const User = require('./models/user');
const Bomb = require('./models/bomb');
const ModuleType = require('./models/ModuleType');
const PlayedModule = require('./models/playedModule');

const Squad = db.define('squad', {});

// if we had more models, we could associate them in this file
Bomb.belongsToMany(User, {through: Squad});
User.belongsToMany(Bomb, {through: Squad});

PlayedModule.belongsTo(Bomb);
Bomb.hasMany(PlayedModule)

PlayedModule.belongsTo(ModuleType);
ModuleType.hasMany(PlayedModule);

PlayedModule.belongsTo(User);
User.hasMany(PlayedModule);
