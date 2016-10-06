
const _ = require('lodash');
const moduleGenerator = {};
module.exports = moduleGenerator;
const wireGenerator = require('../mod-1-wires/wireGenerator');


const modTypes = [{
    type: 'wires',
    generate: wireGenerator.generate
}]

function objectifyMod(modType, game) {
    const modObj = {
        type: modType.type,
        userAssigned: 0,
        stageDisplayed: 0,
        status: 'pending',
        timeStarted: 0,
        timeCompleted: 0
    };
    modType.generate(game);
    return modObj;
}

moduleGenerator.generate = function(game) {
    const moduleTypes = _.times(game.numModules, () => _.sample(modTypes));
    const modArray = moduleTypes.map(function(modType) {
        return objectifyMod(modType, game)
    });
    game.modules = modArray;
}

// var testObj = {numModules: 4};
// moduleGenerator.generate(testObj);
// console.log(testObj);