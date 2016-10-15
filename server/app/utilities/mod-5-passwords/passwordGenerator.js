const _ = require('lodash');
const passwordGenerator = {};
module.exports = passwordGenerator;
const passwordOptions = require('./passwordOptions')


passwordGenerator.generate = function(game) {
    var password = _.cloneDeep(_.sample(passwordOptions.combinationList));
    password.combinations = password.combinations.map(function(arr){
      return { currentIndex: 0, letterOptions: _.shuffle(arr)}
    });
    return password;
};




