// symbolGenerator.js
const _ = require('lodash');
const symbolGenerator = {};
module.exports = symbolGenerator;
const symbolOptions = require('./symbolOptions')


symbolGenerator.generate = function(game) {
    var column = _.sample(symbolOptions.columns);
    const buttons = buttonGen(column);
    //console.log(buttons);
    return buttons;
};


function buttonGen(column) {
    var thisCol = _.cloneDeep(column);
    while (thisCol.length > 4) {
        thisCol.splice(_.random(0, thisCol.length), 1);
    }
    for (let j = 0; j < thisCol.length; j++) {
        thisCol[j].pressOrder = j + 1;
        thisCol[j].pressed = false;
    }
    thisCol = _.shuffle(thisCol);
    return thisCol;
}

// // Test below:
// var testObj = {};
// var testButtons = symbolGenerator.generate(testObj);
// console.log(testButtons)
