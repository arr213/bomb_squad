// moduleGenerator.js
const _ = require('lodash');
const moduleGenerator = {};
module.exports = moduleGenerator;
const wireGenerator = require('../mod-1-wires/wireGenerator');

const modTypes = [{
    type: 'wires',
    generate: wireGenerator.generate
}]

function objectifyMod(modType, game, stageNum) {
    const modObj = {
        type: modType.type,
        userAssigned: game.users[stageNum],
        stageDisplayed: stageNum,
        status: 'pending',
        timeStarted: 0,
        timeCompleted: 0
    };
    modObj.content = modType.generate(game, modObj);
    return modObj;
}

moduleGenerator.generate = function(game, stageNum) {
    return objectifyMod(_.sample(modTypes), game, stageNum);
}

// var testObj = {numModules: 4};
// moduleGenerator.generate(testObj);
// console.log(testObj)
