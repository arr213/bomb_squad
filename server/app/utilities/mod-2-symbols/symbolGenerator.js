// symbolGenerator.js
const _ = require('lodash');
const symbolGenerator = {};
module.exports = symbolGenerator;
const symbolOptions = require('./symbolOptions')


symbolGenerator.generate = function(game) {
    var column = _.sample(symbolOptions.columns);
    const buttons = buttonGen(column);
    game.content = buttons;
};


function buttonGen(column) {
    var thisCol = column;
    _.times(3, function() {
        thisCol.splice(_.random(0, thisCol.length), 1);
    })
    for (let i = 0; i < thisCol.length; i++) {
        thisCol[i].pressOrder = i + 1;
        thisCol[i].pressed = false;
    }
    return thisCol;
}
