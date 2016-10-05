const _ = require('lodash');
const gamePassGenerator = {};
module.exports = gamePassGenerator;

gamePassGenerator.generate = function(game) {
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    _.times(4, function() {
        pass += options[_.random(0, 25)];
    })
    game.gamePass = pass;
}
