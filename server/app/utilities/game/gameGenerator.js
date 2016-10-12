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
        timePerMod: 45000,
        mode: 'standard',
        chatLog: [],
        readyUp: 0,
        gameStatus: 'initiated',
        modPerPerson: 2,
    };
    game.gamePass = gamePassGenerator.generate(); // Add generated gamepass to the game object.
    return game;
}

// console.log(gameGenerator.generate());

gameGenerator.update = function(gameObj) {
    const game = gameObj;
    if (game.mode === 'standard') {
        game.numModules = game.users.length * game.modPerPerson;
        game.timeLimit = 45000 * game.numModules;
        game.currentStage = 0;
    }
    game.batteries = batteryGenerator.generate(game); // Add generated batteries to the game object.
    game.strikes = strikeGenerator.generate(game); // Add generated strikes to the game object.
    game.stages = stageGenerator.generate(game); // Add generated stages to the game object.;

}
