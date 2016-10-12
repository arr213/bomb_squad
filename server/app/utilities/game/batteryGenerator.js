const _ = require('lodash');
const batteryGenerator = {};
module.exports = batteryGenerator;

const batteryColors = ['yellow', 'green', 'blue']

batteryGenerator.generate = function(game) {
    const batteries = [];
    let numBatteries = _.random(2, game.users.length * 2);
    for (let i = 0; i < numBatteries; i++) {
        batteries.push({ userAssigned: game.users[i % game.users.length], color: _.sample(batteryColors) });
    }
    return batteries;
}

// var testObj = {};
// batteryGenerator.generate(testObj);
// console.log(testObj);
