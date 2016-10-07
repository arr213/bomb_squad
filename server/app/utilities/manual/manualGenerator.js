
// const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
const manualOptions = require('./manualOptions');


manualGenerator.generate = function() {
    return manualOptions;
}


