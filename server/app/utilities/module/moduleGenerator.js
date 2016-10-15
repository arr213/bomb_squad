// moduleGenerator.js
const _ = require('lodash');
const moduleGenerator = {};
module.exports = moduleGenerator;
const wireGenerator = require('../mod-1-wires/wireGenerator');
const symbolGenerator = require('../mod-2-symbols/symbolGenerator');
const mazeGenerator = require('../mod-3-maze/mazeGenerator');
const morseGenerator = require('../mod-4-morse/morseGenerator');

const modTypes = [{
<<<<<<< HEAD
//     type: 'wires',
//     generate: wireGenerator.generate
// }, {
//     type: 'symbols',
//     generate: symbolGenerator.generate
// }, {
    type: 'maze',
    generate: mazeGenerator.generate
// }, {
//     type: 'morse',
//     generate: morseGenerator.generate
}];
=======
    type: 'wires',
    generate: wireGenerator.generate
}, {
    type: 'symbols',
    generate: symbolGenerator.generate
}, {
    type: 'maze',
    generate: mazeGenerator.generate
}, {
    type: 'morse',
    generate: morseGenerator.generate
}];

>>>>>>> 9bf6d7efb6389ea2966902a70c40e10060fe7857


function objectifyMod(modType, game, stageNum) {
    const modObj = {
        type: modType.type,
        userAssigned: game.users[stageNum % game.users.length],
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
