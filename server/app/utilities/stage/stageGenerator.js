const stageGenerator = {};
module.exports = stageGenerator;
const moduleGenerator = require('../module/moduleGenerator');
const manualGenerator = require('../manual/manualGenerator');


stageGenerator.generate = function(game) {
    console.log('This is a pristine game before it gets fucked...', game);
    var stages = [];
    if (game.mode === 'standard') {
        for (var i = 0; i < game.numModules; i++) {
            stages[i] = {};
            stages[i].modules = [moduleGenerator.generate(game, i)];
            console.log('-----------THIS IS BEFORE MANUAL GENERATION',stages[i].modules[0].userAssigned);
            var userAssigned = stages[i].modules[0].userAssigned;
            console.log('USERASSIGNED : ', userAssigned);
            var newManual = [manualGenerator.generate(game, userAssigned)];
            console.log('WE GENERATED THIS MANUAL~~~~~~~~~~~~~~~~~~',newManual);
            stages[i].manuals = newManual;
            console.log('-----------THIS IS AFTER MANUAL GENERATION',stages[i].manuals);
        }
        console.log('stagesssssssss', stages[1].manuals[0].usersAssigned, stages[0].manuals[0].usersAssigned);
        return stages;
    }
}
