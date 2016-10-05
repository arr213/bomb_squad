const _ = require('lodash');
const wireSolver = require('./wireSolver')
const wireGen = {};
module.exports = wireGen;

//5 available colors
wireGen.wires = ['white', 'blue', 'yellow', 'black', 'red'];

wireGen.generate = function(serialNumber) {
    const numWires = _.random(3, 6);
    const wireSeq = wireColorGen(numWires);
    const solution = wireSolver.solve(wireSeq, serialNumber);
    const objSeq = wireColorGen(numWires).map(objectifyWire);
    objSeq[solution].solution = true;
    return objSeq;
};

//Generates an array of colors indicating the order of wires by colors
function wireColorGen(num) {
    return _.times(num, () => wireGen.wires[_.random(0, 4)]);
}

function objectifyWire(color) {
    return {
        color: color,
        wasCut: false,
        solution: false
    };
}

console.log(wireGen.generate('5'));
