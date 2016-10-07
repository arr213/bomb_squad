
const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
const manualOptions = require('./manualOptions');


manualGenerator.generate = function(game, stageNum) {
    const manual = manualOptions;
    let usersAssigned = _.cloneDeep(game.users);
    usersAssigned.splice(stageNum);
    manual.userAssigned = usersAssigned;
    return manual;
}




