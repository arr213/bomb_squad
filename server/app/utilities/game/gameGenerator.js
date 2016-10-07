const gameGenerator = {};
module.exports = gameGenerator;
const batteryGenerator = require('./batteryGenerator');
const stageGenerator = require('../stage/stageGenerator');
const strikeGenerator = require('./strikeGenerator');
const gamePassGenerator = require('./gamePassGenerator');

gameGenerator.generate = function() {
    const game = {
        users: [],
        numModules: 4,
        strikeLimit: 3,
        timeLimit: 300000,
        mode: 'standard',
        chatLog: [],
        readyUp: 0
    };
    game.gamePass = gamePassGenerator.generate(); // Add generated gamepass to the game object.
    return game;
}

// console.log(gameGenerator.generate());

gameGenerator.update = function(gameObj) {
    const game = gameObj;
    if (game.mode === 'standard') {
        game.numModules = game.users.length;
        game.timeLimit = 75000 * game.users.length;
    }
    game.batteries = batteryGenerator.generate(game); // Add generated batteries to the game object.
    game.strikes = strikeGenerator.generate(game); // Add generated strikes to the game object.
    game.stages = stageGenerator.generate(game); // Add generated stages to the game object.;

}
