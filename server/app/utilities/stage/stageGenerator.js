const stageGenerator = {};
module.exports = stageGenerator;
const moduleGenerator = require('../module/moduleGenerator');
const manualGenerator = require('../manual/manualGenerator');


stageGenerator.generate = function(game) {
    var stages = [];
   // if (game.mode === 'standard') {
        for (let stageNum = 0; stageNum < game.numModules; stageNum++) {
            stages[stageNum] = {};
            stages[stageNum].modules = [moduleGenerator.generate(game, stageNum)];
            stages[stageNum].manuals = [manualGenerator.generate(game, stages[stageNum].modules[0].userAssigned)];
        }
    // }

    return stages;
};
