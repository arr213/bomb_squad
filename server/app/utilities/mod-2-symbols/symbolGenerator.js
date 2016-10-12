// symbolGenerator.js
const _ = require('lodash');
const symbolGenerator = {};
module.exports = symbolGenerator;
const symbolOptions = require('./symbolOptions')


symbolGenerator.generate = function(game) {
    var column = _.sample(symbolOptions.columns);
    const buttons = buttonGen(column);
    console.log(buttons);
    return buttons;
};


function buttonGen(column) {
    var thisCol = column;
    let i = 0;
    while(thisCol.length!==4){
        thisCol.splice(_.random(0, 6 - i), 1);
        i++;
    }
    for (let i = 0; i < thisCol.length; i++) {
        thisCol[i].pressOrder = i + 1;
        thisCol[i].pressed = false;
    }
    thisCol = _.shuffle(thisCol);
    return thisCol;
}

// // Test below:
// var testObj = {};
// var testButtons = symbolGenerator.generate(testObj);
// console.log(testButtons)
