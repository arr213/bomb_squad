// moduleGenerator.js
const _ = require('lodash');
const moduleGenerator = {};
module.exports = moduleGenerator;
const wireGenerator = require('../mod-1-wires/wireGenerator');

moduleGenerator.generate = function(numModules) {
    moduleTypes = _.times(numModules, () => _.random(1, 1));
    const modArray = moduleTypes.map(type => {
        switch (type) {
            case 1:
                return wireGenerator.generate();
            default:
                return wireGenerator.generate();
        }
    })
    return modArray
}

console.log(moduleGenerator.generate(2));
