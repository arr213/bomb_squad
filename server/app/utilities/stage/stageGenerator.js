const stageGenerator = {};
module.exports = stageGenerator;
const moduleGenerator = require('../module/moduleGenerator');
const manualGenerator = require('../manual/manualGenerator');


stageGenerator.generate = function(game) {
    var stages = [];
    if (game.mode === 'standard') {
        for (var i = 0; i < game.numModules; i++) {
            stages[i] = {};
            stages[i].modules = [moduleGenerator.generate(game, i)];
            stages[i].manuals = manualGenerator.generate(game);
        }
    }
    return stages;
};
