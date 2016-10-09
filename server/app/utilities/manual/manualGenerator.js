
const _ = require('lodash');
const manualGenerator = {};
module.exports = manualGenerator;
const manualOptions = require('./manualOptions');


manualGenerator.generate = function(game, userAssigned) {
    console.log('Removing user: ', userAssigned);
    let manual = _.cloneDeep(manualOptions);
    let usersAssigned = _.cloneDeep(game.users);
    usersAssigned.splice(usersAssigned.indexOf(userAssigned),1);
    //console.log('This is coming from manualGenerator======>',usersAssigned);
    // console.log(usersAssigned);
    // usersAssigned.splice(stageNum);
    manual.usersAssigned = usersAssigned;
    console.log('This should be the correct manual assignment', manual.usersAssigned);
    return manual;
}




