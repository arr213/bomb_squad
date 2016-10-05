// game-generator.js
const _ = require('lodash');
const gameGenerator = {};
module.exports = gameGenerator;
const componentGenerator = require('./componentGenerator');
const moduleGenerator = require('./moduleGenerator');

gameGenerator.generate = function(numModules, time, mode, strikeLimit) {
    const game = {};
    game.strikes = 0;
    game.strikeLimit = strikeLimit || 3;
    game.mode = mode || 'standard';
    game.timeLimit = time || 300000;
    game.components = componentGenerator.generate();
    game.modules = moduleGenerator.generate(numModules);
    return game;
}
