const _ = require('lodash');
const wireSolver = {};
module.exports = wireSolver;

wireSolver.solve = function(arr, batteries) {
    if (arr.length === 3) return threeWireSolver(arr);
    if (arr.length === 4) return fourWireSolver(arr, batteries);
    if (arr.length === 5) return fiveWireSolver(arr, batteries);
    if (arr.length === 6) return sixWireSolver(arr, batteries);
};

//defining rules of what wires to cut
function threeWireSolver(arr, batteries) {
    if (_.filter(batteries, _.matches({ color: 'blue' }).length % 2 === 0) && _.filter(batteries, _.matches({ color: 'yellow' }).length % 2 !== 0)) return 0;
    if (arr.indexOf('red') === -1) return 1;
    if (arr[2] === 'white') return 2;
    if (arr[0] === 'black' && _.filter(batteries, _.matches({ color: 'blue' }).length % 2 === 0)) return 0;
    if (arr.filter(color => color === 'blue').length > 1) return arr.lastIndexOf('blue');
    return 2;
}

function fourWireSolver(arr, batteries) {
    if ((arr.filter(color => color === 'red').length > 1) && _.filter(batteries, _.matches({ color: 'green' }).length % 2 !== 0)) return arr.lastIndexOf('red');
    if (arr[3] === 'yellow' && arr.indexOf('red') === -1) return 0;
    if (arr.filter(color => color === 'blue').length === 1) return 0;
    if (arr.indexOf('red') === -1 && _.filter(batteries, _.matches({ color: 'blue' }).length % 2 !== 0)) return 2;
    if (arr.filter(color => color === 'yellow').length > 1) return 3;
    return 1;
}

function fiveWireSolver(arr, batteries) {
    if (arr[4] === 'black' && _.filter(batteries, _.matches({ color: 'yellow' }).length % 2 !== 0)) return 3;
    if (arr.filter(color => color === 'red').length === 1 && arr.filter(color => color === 'yellow').length > 1) return 0;
    if (arr.filter(color => color === 'white').length > 1 && _.filter(batteries, _.matches({ color: 'blue' }).length % 2 !== 0)) return 1;
    if (arr.indexOf('black') === -1)  return 1;
    return 0;
}

function sixWireSolver(arr, batteries) {
    if (arr.indexOf('yellow') === -1 && _.filter(batteries, _.matches({ color: 'blue' }).length % 2 !== 0)) return 2;
    if (_.filter(batteries, _.matches({ color: 'yellow' }).length % 2 !== 0) && _.filter(batteries, _.matches({ color: 'green' }).length % 2 !== 0)) return 0;
    if (arr.filter(color => color === 'yellow').length === 1 && arr.filter(color => color === 'white').length > 1) return 3;
    if (arr.filter(color => color === 'blue').length > 1 && _.filter(batteries, _.matches({ color: 'green' }).length % 2 === 0)) return 4;
    if (arr.indexOf('red') === -1) return 5;
    return 3;
}

// console.log(wireSolver.solve(['red','white','red']));