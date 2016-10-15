const _ = require('lodash');
const passwordGenerator = {};
module.exports = passwordGenerator;
const passwordOptions = require('./passwordOptions')


passwordGenerator.generate = function(game) {
    var password = _.cloneDeep(_.sample(passwordOptions.combinationList));
    password.shuffledPassword = password.combinations.map(arr => _.shuffle(arr));

    return password;
};
