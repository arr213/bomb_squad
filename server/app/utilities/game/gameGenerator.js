const gameGenerator = {};
module.exports = gameGenerator;
const batteryGenerator = require('./batteryGenerator');
const stageGenerator = require('../stage/stageGenerator');
const strikeGenerator = require('./strikeGenerator');
const gamePassGenerator = require('./gamePassGenerator');

gameGenerator.generate = function(numModules, time, mode, strikeLimit) {
    const game = {
        users: [],
        chatLog: [],
        startTime: 0,
        numModules: numModules || 4,
        strikeLimit: strikeLimit || 3,
        mode: mode || 'standard',
        timeLimit: time || 300000,
        gameStarted: false,
        readyUp: 0
    };
    game.gamePass = gamePassGenerator.generate(); // Add generated gamepass to the game object.
    game.batteries = batteryGenerator.generate(); // Add generated batteries to the game object.
    game.strikes = strikeGenerator.generate(game); // Add generated strikes to the game object.
    game.stages = stageGenerator.generate(game); // Add generated stages to the game object.
    return game;
}


console.log(gameGenerator.generate());
