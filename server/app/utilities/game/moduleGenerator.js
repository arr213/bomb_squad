// moduleGenerator.js
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
        content: modType.generate(game),
        userAssigned: null,
        stageDisplayed: null,
        status: 'pending',
        timeStarted: null,
        timeCompleted: null
    }
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
// console.log(testObj)
