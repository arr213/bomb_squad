const stageGenerator = {};
module.exports = stageGenerator;
const moduleGenerator = require('../module/moduleGenerator');
const manualGenerator = require('../manual/manualGenerator');


stageGenerator.generate = function(game) {

    const stages = [];
    if (game.mode === 'standard') {
        for (let i = 0; i < game.numModules; i++) {
            stages[i] = {};
            stages[i].modules = [moduleGenerator.generate(game)];
            stages[i].manuals = [manualGenerator.generate()];
        }
    }
    return stages;
}
