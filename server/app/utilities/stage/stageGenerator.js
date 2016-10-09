const stageGenerator = {};
module.exports = stageGenerator;
const moduleGenerator = require('../module/moduleGenerator');
const manualGenerator = require('../manual/manualGenerator');


stageGenerator.generate = function(game) {
    console.log('This is a pristine game before it gets fucked...');
    var stages = [];
    if (game.mode === 'standard') {
        for (var i = 0; i < game.numModules; i++) {
            stages[i] = {};
            stages[i].modules = [moduleGenerator.generate(game, i)];
        }
        for (var j = 0; j < stages.length; j++) {
            stages[j].manuals = [manualGenerator.generate(game, stages[j].modules[0].userAssigned)];
        }
    }

    // for(var i = 0; i<stages.length; i++){
    //     console.log('user assigned! ', stages[i].manuals[0].usersAssigned);
    // }

    return stages;
};
