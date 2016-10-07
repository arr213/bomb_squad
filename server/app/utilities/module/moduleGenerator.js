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
        userAssigned: 0,
        stageDisplayed: 0,
        status: 'pending',
        timeStarted: 0,
        timeCompleted: 0
    };
    modObj.content = modType.generate(game, modObj);
    return modObj;
}

moduleGenerator.generate = function(game) {
    return objectifyMod(_.sample(modTypes), game);
}

// var testObj = {numModules: 4};
// moduleGenerator.generate(testObj);
// console.log(testObj)
