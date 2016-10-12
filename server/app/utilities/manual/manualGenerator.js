const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
// const manualOptions = require('./manualOptions');
const manualOptions = ['intro', 'wires', 'symbols'];

manualGenerator.generate = function(game, userAssigned) {
    // console.log('Removing user: ', userAssigned);
    let manual = {};
    manual.chapters = _.cloneDeep(manualOptions);
    let usersAssigned = _.cloneDeep(game.users);
    usersAssigned.splice(usersAssigned.indexOf(userAssigned), 1);
    manual.usersAssigned = usersAssigned;
    return manual;
}
