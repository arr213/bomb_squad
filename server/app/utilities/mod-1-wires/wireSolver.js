const _ = require('lodash');
const wireSolver = {};
module.exports = wireSolver;

wireSolver.solve = function(arr, serialNumber) {
    if (arr.length === 3) return threeWireSolver(arr);
    if (arr.length === 4) return fourWireSolver(arr, serialNumber);
    if (arr.length === 5) return fiveWireSolver(arr, serialNumber);
    if (arr.length === 6) return sixWireSolver(arr, serialNumber);
};

//defining rules of what wires to cut
function threeWireSolver(arr) {
    if (arr.indexOf('red') === -1) return 1;
    if (arr[2] === 'white') return 2;
    if (arr.filter(color => color === 'blue').length > 1) return arr.lastIndexOf('blue');
    return 2;
}

function fourWireSolver(arr, serialNumber) {
    if ((arr.filter(color => color === 'red').length > 1) && (serialNumber[5] % 2 !== 0)) return arr.lastIndexOf('red');
    if (arr[3] === 'yellow' && arr.indexOf('red') === -1) return 0;
    if (arr.filter(color => color === 'blue').length === 1) return 0;
    if (arr.filter(color => color === 'yellow').length > 1) return 3;
    return 1;
}

function fiveWireSolver(arr, serialNumber) {
    if (arr[4] === 'black' && serialNumber[5] % 2 !== 0) return 3;
    if (arr.filter(color => color === 'red').length === 1 && arr.filter(color => color === 'yellow').length > 1) return 0;
    if (arr.indexOf('black') === -1) return 1;
    return 0;
}

function sixWireSolver(arr, serialNumber) {
    if (arr.indexOf('yellow') === -1 && serialNumber[5] % 2 !== 0) return 2;
    if (arr.filter(color => color === 'yellow').length === 1 && arr.filter(color => color === 'white').length > 1) return 3;
    if (arr.indexOf('red') === -1) return 5;
    return 3;
}
