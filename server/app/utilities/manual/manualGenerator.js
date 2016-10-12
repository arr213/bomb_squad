const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
const manualOptions = require('./manualOptions');


manualGenerator.generate = function(game, userAssigned) {
    // console.log('Removing user: ', userAssigned);
    let manual = _.cloneDeep(manualOptions);
    let usersAssigned = _.cloneDeep(game.users);
    usersAssigned.splice(usersAssigned.indexOf(userAssigned), 1);
    manual.usersAssigned = usersAssigned;
    return manual;
}
