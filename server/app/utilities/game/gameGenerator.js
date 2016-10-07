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
        readyUp: 0,
        currentStage: 1
    };
    strikeGenerator.generate(game); // Add generated strikes to the game object.
    gamePassGenerator.generate(game); // Add generated gamepass to the game object.
    batteryGenerator.generate(game); // Add generated batteries to the game object.
    //stageGenerator.generate(game); // Add generated stages to the game object.
    return game;
}
