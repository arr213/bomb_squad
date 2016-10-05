// game-generator.js
const _ = require('lodash');
const gameGenerator = {};
module.exports = gameGenerator;
const componentGenerator = require('./componentGenerator');
const wireGenerator = require('../mod-1-wires/wireGenerator');

gameGenerator.generate = function(numUsers, numModules, time) {
	const game = {};
	game.components = componentGenerator.generate();
	game.modules = 
}
