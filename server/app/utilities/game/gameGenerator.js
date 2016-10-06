const gameGenerator = {};
module.exports = gameGenerator;
const batteryGenerator = require('./batteryGenerator');
const moduleGenerator = require('./moduleGenerator');
const strikeGenerator = require('./strikeGenerator');
const gamePassGenerator = require('./gamePassGenerator');

gameGenerator.generate = function(numModules, time, mode, strikeLimit) {
    const game = {
        users: [],
        chatLog: [],
        startTime: null,
        numModules: numModules || 4,
        strikeLimit: strikeLimit || 3,
        mode: mode || 'standard',
        timeLimit: time || 300000
    };
    strikeGenerator.generate(game); // Add generated strikes to the game object.
    gamePassGenerator.generate(game); // Add generated gamepass to the game object.
    batteryGenerator.generate(game); // Add generated battery to the game object.
    moduleGenerator.generate(game); // Add generated module to the game object.
    return game;
}
