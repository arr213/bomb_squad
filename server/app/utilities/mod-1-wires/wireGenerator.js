const _ = require('lodash');
const wireSolver = require('./wireSolver')
const wireGenerator = {};
module.exports = wireGenerator;

//5 available colors
const wireColors = ['white', 'blue', 'yellow', 'black', 'red'];

wireGenerator.generate = function(game, modObj) {
    let numWires = _.random(3, 6);
    let wireSeq = _.cloneDeep(wireColorGen(numWires));
    let solution = _.cloneDeep(wireSolver.solve(wireSeq, game.batteries));
    let objSeq = _.cloneDeep(wireColorGen(numWires).map(objectifyWire));
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

// var testObj = {batteries: [{color: 'green'}, {color: 'red'}]};
// wireGenerator.generate(testObj);
// console.log(testObj)
