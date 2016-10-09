
const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
const manualOptions = require('./manualOptions');


manualGenerator.generate = function(game) {
    let manual = manualOptions;
    let usersAssigned = _.cloneDeep(game.users);
    manual.usersAssigned = usersAssigned;
    return manual;
}




