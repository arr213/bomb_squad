// symbolGenerator.js
const _ = require('lodash');
const symbolGenerator = {};
module.exports = symbolGenerator;

//5 available colors
const wireColors = ['white', 'blue', 'yellow', 'black', 'red'];

symbolGenerator.generate = function(game) {
    const numWires = _.random(3, 6);
    const wireSeq = wireColorGen(numWires);
    const solution = wireSolver.solve(wireSeq, game.batteries);
    const objSeq = wireColorGen(numWires).map(objectifyWire);
    objSeq[solution].solution = true;
    return objSeq;
};

//Generates an array of colors indicating the order of wires by colors
function wireColorGen(num) {
    return _.times(num, () => _.sample(wireColors));
}

function objectifyWire(color) {
    return {
        color: color,
        wasCut: false,
        solution: false
    };
}
