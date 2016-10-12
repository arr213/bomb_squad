// moduleGenerator.js
const _ = require('lodash');
const moduleGenerator = {};
module.exports = moduleGenerator;
const wireGenerator = require('../mod-1-wires/wireGenerator');
const symbolGenerator = require('../mod-2-symbols/symbolGenerator');

const modTypes = [
{
    type: 'wires',
    generate: wireGenerator.generate
}
,
{
    type: 'symbols',
    generate: symbolGenerator.generate
}
];

function objectifyMod(modType, game, stageNum) {
    const modObj = {
        type: modType.type,
        userAssigned: game.users[stageNum],
        stageDisplayed: stageNum,
        status: 'pending',
        timeStarted: 0,
        timeCompleted: 0
    };
    modObj.content = modType.generate(game);
    return modObj;
}

moduleGenerator.generate = function(game, stageNum) {
    return objectifyMod(_.sample(modTypes), game, stageNum);
}

// var testObj = {numModules: 4};
// var thisMod = moduleGenerator.generate(testObj);
// console.log(thisMod);
