const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;

manualGenerator.generate = function(game, userAssigned) {
    let manual = {};
    let usersAssigned = _.cloneDeep(game.users);
    usersAssigned.splice(usersAssigned.indexOf(userAssigned), 1);
    manual.usersAssigned = usersAssigned;
    return manual;
}
