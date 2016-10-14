const _ = require('lodash');
const morseGenerator = {};
module.exports = morseGenerator;
const wordOptions = require('./wordOptions')


morseGenerator.generate = function(game) {
    var word = _.cloneDeep(_.sample(wordOptions.wordList));

    return word;
};
